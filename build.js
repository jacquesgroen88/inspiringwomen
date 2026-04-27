const fs = require('fs');
const path = require('path');
const articles = require('./articles.js');

const templateHtml = fs.readFileSync('article_template.html', 'utf8');
let indexHtml = fs.readFileSync('index.html', 'utf8');

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

articles.forEach(article => {
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
    const basePath = '../../../'; // Go up from articles/category/subcategory/

    console.log(`Generating ${relativeUrlPath}`);

    // Create a plain text excerpt for search
    const textContent = article.content.replace(/<[^>]+>/g, '').trim();
    const excerpt = textContent.substring(0, 150) + '...';

    // Add to search index
    searchData.push({
        title: article.title,
        url: relativeUrlPath,
        category: article.category,
        subCategory: article.subCategory,
        excerpt: excerpt
    });
    
    // Generate Related Articles
    const related = (categoryMap[article.category] || [])
        .filter(a => a.slug !== article.slug)
        .slice(0, 3);
        
    let relatedHtml = '';
    if (related.length > 0) {
        relatedHtml = `
            <div class="related-articles-container" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <h3 style="font-size: 1.5rem; margin-bottom: 20px;"><span class="pink-dot"></span> RELATED ARTICLES</h3>
                <div class="related-articles-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        `;
        related.forEach(rel => {
            relatedHtml += `
                    <div class="related-article-card" style="background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
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

    // Replace all occurrences of placeholders
    let html = templateHtml
        .replace(/\{\{TITLE\}\}/g, article.title)
        .replace(/\{\{CATEGORY\}\}/g, article.category.toUpperCase())
        .replace(/\{\{AUTHOR\}\}/g, article.author)
        .replace(/\{\{DATE\}\}/g, article.date)
        .replace(/\{\{IMAGE\}\}/g, `${basePath}assets/${article.image}`)
        .replace(/\{\{BASE_PATH\}\}/g, basePath)
        .replace(/\{\{CONTENT\}\}/g, article.content.replace(/\{\{BASE_PATH\}\}/g, basePath))
        .replace(/\{\{RELATED_ARTICLES\}\}/g, relatedHtml);
    
    // Fix navigation in articles
    NAV_LINKS.forEach(nav => {
        const regex = new RegExp(`<li><a href="[^"]*">${nav.name}</a></li>`, 'g');
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

    // We inject this into the template by replacing the main article content
    let catHtml = templateHtml
        .replace(/<article class="single-article">[\s\S]*?<\/article>/, listHtml)
        .replace(/<title>\{\{TITLE\}\} \| Inspiring Women<\/title>/, `<title>${category.toUpperCase()} | Inspiring Women</title>`)
        .replace(/\{\{BASE_PATH\}\}/g, basePath);
        
    // Fix navigation for category pages
    NAV_LINKS.forEach(nav => {
        const regex = new RegExp(`<li><a href="[^"]*">${nav.name}</a></li>`, 'g');
        catHtml = catHtml.replace(regex, `<li><a href="${basePath}${nav.path}">${nav.name}</a></li>`);
    });

    fs.writeFileSync(categoryPath, catHtml);
    console.log(`Generated category index: articles/${category}/index.html`);
}

// Update root index.html navigation links
NAV_LINKS.forEach(nav => {
    const regex = new RegExp(`<li><a href="[^"]*">${nav.name}</a></li>`, 'g');
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

console.log('Site build complete!');
