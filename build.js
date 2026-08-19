const fs = require('fs');
const path = require('path');
const articles = require('./articles.js');

const templateHtml = fs.readFileSync('article_template.html', 'utf8');
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Scheduled drip: only publish articles whose publishDate (YYYY-MM-DD) has arrived.
// Articles with no publishDate are treated as already live (all legacy content).
const TODAY_STR = new Date().toISOString().slice(0, 10);
const isPublished = (a) => !a.publishDate || a.publishDate <= TODAY_STR;
const publishedArticles = articles.filter(isPublished);
console.log(`Publishing ${publishedArticles.length} of ${articles.length} articles (${articles.length - publishedArticles.length} scheduled for the future). Build date: ${TODAY_STR}`);

// Display labels for categories (breadcrumbs / schema)
const CATEGORY_LABELS = { beauty: 'Beauty', career: 'Career', health: 'Health', lifestyle: 'Home & Garden', recipes: 'Recipes', legal: 'Legal', finance: 'Finance', business: 'Business', community: 'Community' };

// Return YYYY-MM-DD for an article (prefers ISO publishDate, else parses the human date, else today)
function toISODate(a) {
    if (a.publishDate && /^\d{4}-\d{2}-\d{2}$/.test(a.publishDate)) return a.publishDate;
    const d = new Date(a.date);
    if (isNaN(d)) return TODAY_STR;
    // Normalise to the calendar date regardless of build-machine timezone (avoids off-by-one)
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

// Build FAQPage JSON-LD from the article's FAQ block (h3 question + following p answer)
function buildFaqSchema(content) {
    const idx = content.search(/<h2[^>]*>\s*Frequently Asked Questions\s*<\/h2>/i);
    if (idx === -1) return null;
    const section = content.slice(idx);
    const pairs = [];
    const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(section)) !== null) {
        const q = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        const a = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (q && a) pairs.push({ "@type": "Question", "name": q, "acceptedAnswer": { "@type": "Answer", "text": a } });
    }
    if (!pairs.length) return null;
    return { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": pairs };
}

// Directory for articles
const articlesDir = path.join(__dirname, 'articles');
if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir);
}

// Global Nav Links
const NAV_LINKS = [
    { name: 'BEAUTY', path: 'articles/beauty/index.html' },
    { name: 'CAREER', path: 'articles/career/index.html' },
    { name: 'HEALTH', path: 'articles/health/index.html' },
    { name: 'HOME & GARDEN', path: 'articles/lifestyle/index.html' },
    { name: 'RECIPES', path: 'articles/recipes/index.html' },
    { name: 'LEGAL', path: 'articles/legal/index.html' },
    { name: 'FINANCE', path: 'articles/finance/index.html' }
];

// The templates write the ampersand escaped ("HOME &amp; GARDEN"), so a literal
// match on the name above silently missed that one link and left it as href="#"
// on every generated page. Match both spellings.
function navLinkRegex(name) {
    const escaped = name
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/&/g, '&(?:amp;)?');
    return new RegExp(`<li><a href="[^"]*">${escaped}</a></li>`, 'g');
}

// Data for site search
const searchData = [];
// Group articles by category for category index pages
const categoryMap = {};

// Clean up: Remove any .html files in the root that are actually articles
const rootFiles = fs.readdirSync(__dirname);
rootFiles.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html' && file !== 'article_template.html') {
        const isArticle = articles.some(art => file.includes(art.slug));
        if (isArticle) {
            console.log(`Cleaning up misplaced root file: ${file}`);
            fs.unlinkSync(path.join(__dirname, file));
        }
    }
});

publishedArticles.forEach(article => {
    // Determine path based on category and subCategory
    const categoryPath = path.join(articlesDir, article.category);
    if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath);
    }
    
    if (!categoryMap[article.category]) {
        categoryMap[article.category] = [];
    }
    categoryMap[article.category].push(article);

    const subCategoryPath = path.join(categoryPath, article.subCategory);
    if (!fs.existsSync(subCategoryPath)) {
        fs.mkdirSync(subCategoryPath);
    }

    const filePath = path.join(subCategoryPath, `${article.slug}.html`);
    const relativeUrlPath = `articles/${article.category}/${article.subCategory}/${article.slug}.html`;
    // Netlify's Pretty URLs post-processing rewrites internal links to the extension-less form
    // at deploy time, so the extension-less URL is the one Google actually crawls and indexes.
    // Canonicals, schema and the sitemap must all point at that same form, otherwise we are
    // advertising URLs Google has never seen (which is exactly what left 86 pages uncrawled).
    const publicUrlPath = `articles/${article.category}/${article.subCategory}/${article.slug}`;
    const basePath = '../../../'; // Go up from articles/category/subcategory/
    const siteBase = 'https://inspiringwomen.co.za';
    const canonicalUrl = `${siteBase}/${publicUrlPath}`;
    const fullImageUrl = `${siteBase}/assets/${article.image}`;

    console.log(`Generating ${relativeUrlPath}`);

    // Create a plain text excerpt for search and meta description
    const textContent = article.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const excerpt = textContent.substring(0, 150) + '...';

    // Meta description: use the custom field if provided, else auto (first ~155 chars, trimmed to a whole word)
    const rawMetaDesc = textContent.substring(0, 155).replace(/\s+\S*$/, '');
    const autoMetaDescription = (rawMetaDesc.length > 50 ? rawMetaDesc : textContent.substring(0, 155)) + '...';
    const metaDescription = article.metaDescription ? article.metaDescription : autoMetaDescription;

    // Add to search index
    searchData.push({
        title: article.title,
        url: relativeUrlPath,
        category: article.category,
        subCategory: article.subCategory,
        excerpt: excerpt,
        image: article.image
    });
    
    // Generate Related Articles
    let related = (categoryMap[article.category] || [])
        .filter(a => a.slug !== article.slug);
        
    if (related.length < 6) {
        const otherArticles = publishedArticles.filter(a => a.slug !== article.slug && a.category !== article.category);
        related = related.concat(otherArticles.slice(0, 6 - related.length));
    }
    
    related = related.slice(0, 6);
        
    let relatedHtml = '';
    if (related.length > 0) {
        relatedHtml = `
            <div class="related-articles-container" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <h3 style="font-size: 1.5rem; margin-bottom: 20px;"><span class="pink-dot"></span> RELATED ARTICLES</h3>
                <div class="related-articles-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        `;
        related.forEach(rel => {
            relatedHtml += `
                    <div class="related-article-card" style="background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #ff4785;">
                        <a href="${basePath}articles/${rel.category}/${rel.subCategory}/${rel.slug}.html" style="text-decoration: none; color: inherit;">
                            <div class="related-article-img" style="height: 150px; background-image: url('${basePath}assets/${rel.image}'); background-size: cover; background-position: center;"></div>
                            <div class="related-article-info" style="padding: 15px;">
                                <span style="font-size: 0.75rem; font-weight: 700; color: #ff3366; letter-spacing: 1px; display: block; margin-bottom: 5px;">${rel.subCategory.toUpperCase()}</span>
                                <h4 style="font-size: 1.1rem; line-height: 1.4; margin: 0;">${rel.title}</h4>
                            </div>
                        </a>
                    </div>
            `;
        });
        relatedHtml += `
                </div>
            </div>
        `;
    }

    // Breadcrumbs (UX + SERP display + site-wide internal linking to Home and Category)
    const catLabel = CATEGORY_LABELS[article.category] || article.category;
    const categoryUrl = `${basePath}articles/${article.category}/index.html`;
    const breadcrumbsHtml = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${basePath}index.html">Home</a> <span aria-hidden="true">&rsaquo;</span> <a href="${categoryUrl}">${catLabel}</a> <span aria-hidden="true">&rsaquo;</span> <span class="breadcrumb-current">${article.title}</span></nav>`;

    // JSON-LD: Article + BreadcrumbList + FAQPage (when the article has an FAQ block)
    const isoDate = toISODate(article);
    const modifiedDate = (article.updated && /^\d{4}-\d{2}-\d{2}$/.test(article.updated)) ? article.updated : isoDate;
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": metaDescription,
        "image": fullImageUrl,
        "author": { "@type": "Person", "name": article.author },
        "publisher": { "@type": "Organization", "name": "Inspiring Women", "logo": { "@type": "ImageObject", "url": `${siteBase}/assets/logo.png` } },
        "datePublished": isoDate,
        "dateModified": modifiedDate,
        "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteBase}/` },
            { "@type": "ListItem", "position": 2, "name": catLabel, "item": `${siteBase}/articles/${article.category}/` },
            { "@type": "ListItem", "position": 3, "name": article.title, "item": canonicalUrl }
        ]
    };
    const faqSchema = buildFaqSchema(article.content);
    const schemaBlocks = faqSchema ? [articleSchema, breadcrumbSchema, faqSchema] : [articleSchema, breadcrumbSchema];
    const structuredData = JSON.stringify(schemaBlocks, null, 2);

    // Replace all occurrences of placeholders
    let html = templateHtml
        .replace(/\{\{TITLE\}\}/g, article.title)
        .replace(/\{\{META_DESCRIPTION\}\}/g, metaDescription.replace(/"/g, '&quot;'))
        .replace(/\{\{CANONICAL_URL\}\}/g, canonicalUrl)
        .replace(/\{\{FULL_IMAGE_URL\}\}/g, fullImageUrl)
        .replace(/\{\{STRUCTURED_DATA\}\}/g, structuredData)
        .replace(/\{\{CATEGORY\}\}/g, article.category.toUpperCase())
        .replace(/\{\{AUTHOR\}\}/g, article.author)
        .replace(/\{\{DATE\}\}/g, article.date)
        .replace(/\{\{IMAGE\}\}/g, `${basePath}assets/${article.image}`)
        .replace(/\{\{IMAGE_ALT\}\}/g, (article.imageAlt || article.title).replace(/"/g, '&quot;'))
        .replace(/\{\{BREADCRUMBS\}\}/g, breadcrumbsHtml)
        .replace(/\{\{BASE_PATH\}\}/g, basePath)
        .replace(/\{\{CONTENT\}\}/g, article.content.replace(/\{\{BASE_PATH\}\}/g, basePath))
        .replace(/\{\{RELATED_ARTICLES\}\}/g, relatedHtml);
    
    // Fix navigation in articles
    NAV_LINKS.forEach(nav => {
        const regex = navLinkRegex(nav.name);
        html = html.replace(regex, `<li><a href="${basePath}${nav.path}">${nav.name}</a></li>`);
    });

    fs.writeFileSync(filePath, html);

    // Update index.html links to point to the new deep links
    const linkRegex = new RegExp(`href="[^"]*${article.slug}\\.html"`, 'g');
    indexHtml = indexHtml.replace(linkRegex, `href="${relativeUrlPath}"`);
});

// Generate Category Pages
for (const [category, catArticles] of Object.entries(categoryMap)) {
    const categoryPath = path.join(articlesDir, category, 'index.html');
    const basePath = '../../'; // from articles/category/
    
    let listHtml = `<div class="category-section"><div class="section-header"><h3><span class="pink-dot"></span> ${category.toUpperCase()}</h3></div><div class="article-list">`;
    
    catArticles.forEach(art => {
        listHtml += `
            <article class="list-post">
                <div class="post-header">
                    <span class="category">${art.subCategory.toUpperCase()}</span>
                    <h3><a href="${basePath}articles/${art.category}/${art.subCategory}/${art.slug}.html">${art.title}</a></h3>
                    <span class="author">By ${art.author}</span>
                </div>
                <div class="post-body">
                    <p>${art.content.replace(/<[^>]+>/g, '').substring(0, 150)}...</p>
                    <a href="${basePath}articles/${art.category}/${art.subCategory}/${art.slug}.html" class="read-more-button">Read More</a>
                </div>
            </article>
        `;
    });
    listHtml += `</div></div>`;

    // Category-page head metadata (fixes the previously-unreplaced {{...}} placeholders on category pages)
    const catLabel = CATEGORY_LABELS[category] || category;
    const catCanonical = `https://inspiringwomen.co.za/articles/${category}/`;
    const catDesc = `Browse the latest ${catLabel} articles, tips and guides for South African women on Inspiring Women.`;
    const catSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `${catLabel} | Inspiring Women`,
        "description": catDesc,
        "url": catCanonical
    }, null, 2);

    // We inject this into the template by replacing the main article content
    let catHtml = templateHtml
        .replace(/<article class="single-article">[\s\S]*?<\/article>/, listHtml)
        .replace(/<title>\{\{TITLE\}\} \| Inspiring Women<\/title>/, `<title>${catLabel} | Inspiring Women</title>`)
        .replace(/\{\{META_DESCRIPTION\}\}/g, catDesc.replace(/"/g, '&quot;'))
        .replace(/\{\{CANONICAL_URL\}\}/g, catCanonical)
        .replace(/\{\{FULL_IMAGE_URL\}\}/g, 'https://inspiringwomen.co.za/assets/logo.png')
        .replace(/\{\{STRUCTURED_DATA\}\}/g, catSchema)
        .replace(/\{\{TITLE\}\}/g, catLabel)
        .replace(/\{\{BREADCRUMBS\}\}/g, '')
        .replace(/\{\{IMAGE_ALT\}\}/g, catLabel)
        .replace(/\{\{BASE_PATH\}\}/g, basePath);
        
    // Fix navigation for category pages
    NAV_LINKS.forEach(nav => {
        const regex = navLinkRegex(nav.name);
        catHtml = catHtml.replace(regex, `<li><a href="${basePath}${nav.path}">${nav.name}</a></li>`);
    });

    fs.writeFileSync(categoryPath, catHtml);
    console.log(`Generated category index: articles/${category}/index.html`);
}

// Update root index.html navigation links
NAV_LINKS.forEach(nav => {
    const regex = navLinkRegex(nav.name);
    indexHtml = indexHtml.replace(regex, `<li><a href="${nav.path}">${nav.name}</a></li>`);
});

// Update root index.html replacing {{BASE_PATH}} with ''
indexHtml = indexHtml.replace(/\{\{BASE_PATH\}\}/g, '');

// Write updated index.html
fs.writeFileSync('index.html', indexHtml);

// Write search index
fs.writeFileSync('search-data.json', JSON.stringify(searchData, null, 2));

// --- ARTICLE INVENTORY GENERATION ---
const getRating = (wordCount) => {
    if (wordCount > 1000) return 'Premium (A+)';
    if (wordCount > 800) return 'High Quality (A)';
    if (wordCount > 500) return 'Good (B)';
    return 'Short (C)';
};

let inventoryMd = '# Inspiring Women - Article Inventory & SEO Audit\n\n';
inventoryMd += '| Article Title | Category | Word Count | SEO Quality Rating |\n';
inventoryMd += '| :--- | :--- | :--- | :--- |\n';

articles.forEach(art => {
    const wordCount = art.content.split(/\s+/).length;
    const rating = getRating(wordCount);
    inventoryMd += `| ${art.title} | ${art.category} | ${wordCount} | ${rating} |\n`;
});

fs.writeFileSync('article_inventory.md', inventoryMd);
console.log('Article inventory generated!');

// Generate sitemap.xml
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://inspiringwomen.co.za/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>`;

// Hand-built landing pages that live outside articles.js and are therefore
// never picked up by the article loop below. Add new ones here.
const STATIC_PAGES = [
    { loc: 'https://inspiringwomen.co.za/beauty-career-quiz/', changefreq: 'monthly', priority: '0.9' }
];

STATIC_PAGES.forEach(page => {
    sitemapXml += `
    <url>
        <loc>${page.loc}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`;
});

publishedArticles.forEach(article => {
    const dateObj = new Date(article.date);
    // A few legacy articles carry a future `date`, which would emit a future lastmod.
    // Google distrusts those, so clamp anything ahead of today back to today.
    const today = new Date().toISOString().split('T')[0];
    const rawLastmod = isNaN(dateObj) ? today : dateObj.toISOString().split('T')[0];
    const lastmod = rawLastmod > today ? today : rawLastmod;
    sitemapXml += `
    <url>
        <loc>https://inspiringwomen.co.za/articles/${article.category}/${article.subCategory}/${article.slug}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
});

for (const category of Object.keys(categoryMap)) {
    sitemapXml += `
    <url>
        <loc>https://inspiringwomen.co.za/articles/${category}/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`;
}

sitemapXml += `\n</urlset>`;
fs.writeFileSync('sitemap.xml', sitemapXml);

// Generate the .html -> extension-less 301s in _redirects.
//
// Netlify serves BOTH /path.html and /path with a 200, which is duplicate content, and Google
// had already picked the extension-less form for everything it indexed. These 301s make that
// choice explicit and collapse the pair. The `!` force flag is required because Netlify
// skips any redirect whose source matches a real file, and every source here is one.
// Everything above the marker is hand-maintained
// (the legacy WordPress mappings) and is preserved verbatim on every build.
const REDIRECT_MARKER = '# >>> GENERATED BY build.js - DO NOT EDIT BELOW THIS LINE <<<';
const redirectsPath = '_redirects';
const existingRedirects = fs.existsSync(redirectsPath) ? fs.readFileSync(redirectsPath, 'utf-8') : '';
const manualRedirects = existingRedirects.split(REDIRECT_MARKER)[0].trimEnd();

const padFrom = (from) => from.padEnd(72, ' ');
const generated = [
    REDIRECT_MARKER,
    '# Canonical URL form is extension-less. Regenerated by `node build.js`.',
    '',
    `${padFrom('/index.html')}/   301!`
];
publishedArticles.forEach(article => {
    const slugPath = `/articles/${article.category}/${article.subCategory}/${article.slug}`;
    generated.push(`${padFrom(`${slugPath}.html`)}${slugPath}   301!`);
});
for (const category of Object.keys(categoryMap)) {
    generated.push(`${padFrom(`/articles/${category}/index.html`)}/articles/${category}/   301!`);
}

fs.writeFileSync(redirectsPath, manualRedirects + '\n\n' + generated.join('\n') + '\n');
console.log(`_redirects: ${generated.length - 4} canonical 301s generated`);

console.log('Site build complete!');
