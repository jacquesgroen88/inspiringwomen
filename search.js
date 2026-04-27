document.addEventListener('DOMContentLoaded', () => {
    // Inject search UI into the body
    const searchOverlayHTML = `
        <div id="search-overlay" class="search-overlay">
            <div class="search-container">
                <button id="close-search" class="close-search"><i class="fas fa-times"></i></button>
                <h2>Search Inspiring Women</h2>
                <input type="text" id="search-input" placeholder="What are you looking for?" autocomplete="off">
                <div id="search-results" class="search-results"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', searchOverlayHTML);

    const searchIcons = document.querySelectorAll('.search-icon');
    const searchOverlay = document.getElementById('search-overlay');
    const closeSearchBtn = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    let searchData = [];

    // Determine base path to root folder from current location
    // Since search.js will be loaded from root or from articles/cat/sub/, we need to know where we are.
    // A simple way is to use the BASE_PATH variable we inject into HTML, but since this is a separate JS file, 
    // we can determine it based on location.pathname or pass it as a global var.
    const basePath = window.APP_BASE_PATH || '';

    // Load search data
    fetch(basePath + 'search-data.json')
        .then(response => response.json())
        .then(data => {
            searchData = data;
        })
        .catch(err => console.error('Failed to load search index:', err));

    // Open search
    searchIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.classList.add('active');
            searchInput.focus();
        });
    });

    // Close search
    closeSearchBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const results = searchData.filter(article => 
            article.title.toLowerCase().includes(query) || 
            article.excerpt.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResults.innerHTML = '<p class="no-results">No articles found matching your search.</p>';
            return;
        }

        const html = results.map(article => `
            <a href="${basePath}${article.url}" class="search-result-item">
                <span class="search-category">${article.category} / ${article.subCategory}</span>
                <h4>${article.title}</h4>
                <p>${article.excerpt}</p>
            </a>
        `).join('');

        searchResults.innerHTML = html;
    });
});
