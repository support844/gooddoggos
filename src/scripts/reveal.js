function initReveal() {
    // Guard against SSR or browsers without support
    if (typeof IntersectionObserver === 'undefined') return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('section');
    hiddenElements.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Support both standard load and Astro View Transitions
document.addEventListener('DOMContentLoaded', initReveal);
document.addEventListener('astro:page-load', initReveal);
