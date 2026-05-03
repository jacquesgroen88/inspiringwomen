document.addEventListener('DOMContentLoaded', () => {
    const moreArticlesContainer = document.querySelector('.more-articles');
    if (!moreArticlesContainer) return;

    let searchDataCache = null;
    let currentArticleIndex = 6;
    let isLoading = false;

    const loadMoreArticles = async () => {
        if (isLoading) return;
        isLoading = true;

        if (!searchDataCache) {
            try {
                const response = await fetch('search-data.json');
                searchDataCache = await response.json();
                searchDataCache.reverse();
            } catch (err) {
                console.error('Failed to load search data:', err);
                isLoading = false;
                return;
            }
        }

        const nextArticles = searchDataCache.slice(currentArticleIndex, currentArticleIndex + 3);
        if (nextArticles.length === 0) {
            window.removeEventListener('scroll', scrollHandler);
            return;
        }

        nextArticles.forEach(art => {
            const imgDiv = art.image
                ? `<div class="list-post-img" style="flex: 0 0 250px; height: 180px; background-image: url('assets/${art.image}'); background-size: cover; background-position: center; border-radius: 8px;"></div>`
                : '';
            const articleHTML = `
                <article class="list-post" style="opacity: 0; transition: opacity 0.5s ease; border-top: 4px solid var(--primary-color); padding-top: 20px; display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px;">
                    ${imgDiv}
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
                </article>
            `;
            moreArticlesContainer.insertAdjacentHTML('beforeend', articleHTML);
            setTimeout(() => {
                const added = moreArticlesContainer.lastElementChild;
                if (added) added.style.opacity = '1';
            }, 50);
        });

        currentArticleIndex += 3;
        isLoading = false;
    };

    const scrollHandler = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
            loadMoreArticles();
        }
    };

    window.addEventListener('scroll', scrollHandler);
});
