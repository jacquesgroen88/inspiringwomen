# Inspiring Women Website - Developer Documentation

This repository contains the codebase for the **Inspiring Women** website. It has been built using a custom, lightweight Static Site Generator (SSG) in Node.js. This approach ensures maximum performance, perfect SEO, and ease of maintenance without the overhead of heavy frameworks.

## 📁 Architecture & Folder Structure

To keep the project organized and SEO-friendly, articles are deeply nested into categories and sub-categories:

```
/
├── assets/                     # Images and media files
├── articles/                   # Auto-generated HTML article files
│   ├── beauty/                 # Category folder
│   │   ├── makeup/             # Sub-category folder
│   │   │   └── baking-vs-strobing.html
│   │   └── skincare/
│   ├── business/
│   ├── ...
├── articles.js                 # 🗄️ The database of all articles
├── article_template.html       # 📝 The HTML template for individual articles
├── build.js                    # ⚙️ The core build script
├── index.html                  # 🏠 The Homepage (auto-updated by build script)
├── search.js / search.css      # 🔍 Vanilla JS Search functionality
├── search-data.json            # 📄 Auto-generated search index
└── styles.css                  # 🎨 Global styling
```

## ✍️ How to Add a New Article

Adding content to the site is incredibly simple. You do not need to manually create HTML files.

1. Open `articles.js`.
2. Add a new object to the `articles` array following this structure:
   ```javascript
   {
     title: "Your Amazing Article Title",
     slug: "your-amazing-article-title", // This becomes the URL
     category: "business",               // Main category (lowercase, no spaces)
     subCategory: "startups",            // Sub category (lowercase, no spaces)
     author: "Your Name",
     date: "Month DD, YYYY",
     image: "your-image-in-assets-folder.png",
     content: `
       <h2>Write your HTML content here</h2>
       <p>Include your paragraphs, lists, and links.</p>
       <p>To link to another article, use the {{BASE_PATH}} variable: 
       <a href="{{BASE_PATH}}health/fitness/fat-freeze-laser-lipo.html">Link text</a></p>
     `
   }
   ```
3. Open your terminal in the project directory and run:
   ```bash
   node build.js
   ```
4. **Done!** The script will automatically:
   - Create the necessary category/sub-category folders.
   - Generate the standalone `slug.html` file using the `article_template.html`.
   - Update `index.html` if the article is featured on the homepage.
   - Regenerate the `search-data.json` so the new article is immediately searchable.

## 🔍 Site Search Functionality

The site features an instant, client-side search overlay. 
- When `build.js` is run, it extracts the title, category, and a plain-text excerpt of every article and compiles them into `search-data.json`.
- `search.js` fetches this lightweight JSON file.
- When a user clicks the magnifying glass icon and types, it instantly filters the JSON and displays results without reloading the page.

## 🎨 Design & Premium Feel

The website is designed to attract premium advertisers. It uses:
- **Typography:** 'Inter' for highly readable body text, and 'Playfair Display' for elegant, magazine-style headings.
- **Dynamic CSS:** Extensive use of CSS Grid for layouts, hover transitions for interactivity, and gradient overlays on images to ensure text readability.
- **No External Dependencies:** No heavy CSS frameworks like Bootstrap or Tailwind were used, keeping the codebase incredibly lean and fast to load.

## 🚀 Running the Site Locally

To preview the site, simply run a local server in the root directory:
```bash
npx serve ./
```
Then open `http://localhost:3000` in your browser.
