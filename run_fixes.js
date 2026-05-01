const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf-8');
const searchData = JSON.parse(fs.readFileSync('search-data.json', 'utf-8'));
const firstBatch = searchData.slice(0, 6);

let articlesHtml = '';
firstBatch.forEach(art => {
    let imgHtml = '';
    if (art.image) {
        imgHtml = `<div class="list-post-img" style="flex: 0 0 250px; height: 180px; background-image: url('assets/${art.image}'); background-size: cover; background-position: center; border-radius: 8px;"></div>`;
    }
    
    articlesHtml += `
        <article class="list-post" style="border-top: 4px solid var(--primary-color); padding-top: 20px; display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px;">
            ${imgHtml}
            <div class="list-post-content" style="flex: 1;">
                <div class="post-header">
                    <span class="category" style="color: var(--primary-color); font-weight: bold; font-size: 0.8rem; letter-spacing: 1px;">${(art.subCategory || art.category).toUpperCase()}</span>
                    <h3 style="margin: 10px 0 15px; font-family: var(--font-serif); font-size: 1.5rem;"><a href="${art.url}" style="color: var(--text-dark); text-decoration: none;">${art.title}</a></h3>
                </div>
                <div class="post-body">
                    <p style="color: var(--text-muted); line-height: 1.6; margin-bottom: 15px;">${art.excerpt || ''}</p>
                    <a href="${art.url}" class="read-more-button pink" style="color: var(--primary-color); font-weight: bold; text-decoration: none;">Read More &rarr;</a>
                </div>
            </div>
        </article>`;
});

let updatedHtml = indexHtml.replace(
    /<div class="article-list">[\s\S]*?<\/div>\s*<\/section>/,
    `<div class="article-list">\n${articlesHtml}\n</div>\n</section>`
);

// Remove ad from top
updatedHtml = updatedHtml.replace(
    /<div class="ad-banner-horizontal"[\s\S]*?<\/div>\s*<div class="content-layout">/,
    '<div class="content-layout">'
);

// Add ad to bottom (before footer)
updatedHtml = updatedHtml.replace(
    /<\/aside>\s*<\/div>\s*<\/div>\s*<\/main>/,
    `</aside>\n            </div>\n            <div class="ad-banner-horizontal" style="text-align: center; margin: 40px 0 20px;">\n                <img src="assets/ad_728x90.png" alt="Advertise with us" style="width: 100%; max-width: 728px; height: auto; border-radius: 8px; box-shadow: var(--shadow-sm); display: block; margin: 0 auto;">\n            </div>\n        </div>\n    </main>`
);

// Favicon
updatedHtml = updatedHtml.replace(
    /<link rel="icon" type="image\/png" href="assets\/favicon.png">/,
    '<link rel="icon" type="image/png" href="Logo/iwlogohd.png">'
);

// Index & infinite scroll
updatedHtml = updatedHtml.replace(
    /let currentArticleIndex = 0;/,
    'let currentArticleIndex = 6;'
);
updatedHtml = updatedHtml.replace(
    /\/\/ Load first batch immediately[\s\S]*?loadMoreArticles\(\);\s*\n\s*}\);/,
    '});'
);

fs.writeFileSync('index.html', updatedHtml);

// Update article template
let templateHtml = fs.readFileSync('article_template.html', 'utf-8');
templateHtml = templateHtml.replace(
    /<div class="ad-banner-horizontal"[\s\S]*?<\/div>\s*<div class="content-layout">/,
    '<div class="content-layout">'
);
templateHtml = templateHtml.replace(
    /<\/aside>\s*<\/div>\s*<\/div>\s*<\/main>/,
    `</aside>\n            </div>\n            <div class="ad-banner-horizontal" style="text-align: center; margin: 40px 0 20px;">\n                <img src="{{BASE_PATH}}assets/ad_728x90.png" alt="Advertise with us" style="width: 100%; max-width: 728px; height: auto; border-radius: 8px; box-shadow: var(--shadow-sm); display: block; margin: 0 auto;">\n            </div>\n        </div>\n    </main>`
);
templateHtml = templateHtml.replace(
    /<link rel="icon" type="image\/png" href="\{\{BASE_PATH\}\}assets\/favicon.png">/,
    '<link rel="icon" type="image/png" href="{{BASE_PATH}}Logo/iwlogohd.png">'
);
fs.writeFileSync('article_template.html', templateHtml);

console.log("Success");
