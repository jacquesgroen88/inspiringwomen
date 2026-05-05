/**
 * Mobile Navigation — Burger Menu Toggle
 */
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger-btn');
    const nav    = document.querySelector('.main-nav');
    const header = document.querySelector('.site-header');

    if (!burger || !nav) return;

    burger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = nav.classList.toggle('nav-open');
        burger.classList.toggle('is-active', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('nav-is-open', isOpen);
    });

    // Close when a nav link is tapped
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeNav);
    });

    // Close when tapping outside the header
    document.addEventListener('click', function (e) {
        if (nav.classList.contains('nav-open') && !header.contains(e.target)) {
            closeNav();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeNav();
    });

    function closeNav() {
        nav.classList.remove('nav-open');
        burger.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-is-open');
    }
});
