(function () {
    // 1. CLEAN URL IN ADDRESS BAR
    function cleanURL() {
        try {
            const path = window.location.pathname;
            if (path.endsWith('.html')) {
                let cleanPath = path;
                if (path.endsWith('/index.html')) {
                    cleanPath = path.replace(/\/index\.html$/, '/');
                } else {
                    cleanPath = path.replace(/\.html$/, '');
                }
                window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
            }
        } catch (e) {
            console.warn('URL cleanup failed:', e);
        }
    }

    // Run cleaning immediately
    cleanURL();

    // 2. FIX LINKS FOR LOCAL BROWSING (file://)
    if (window.location.protocol === 'file:') {
        const updateLinks = () => {
            document.querySelectorAll('a').forEach(link => {
                const href = link.getAttribute('href');
                if (href && 
                    !href.startsWith('http') && 
                    !href.startsWith('https') && 
                    !href.startsWith('#') && 
                    !href.startsWith('mailto:') && 
                    !href.startsWith('javascript:') && 
                    !href.endsWith('.html')) {
                    
                    // Root or directory link
                    if (href === './' || href === '../' || href.endsWith('/')) {
                        link.href = href + 'index.html';
                    } else {
                        link.href = href + '.html';
                    }
                }
            });
        };

        updateLinks();
        // Also run when DOM is fully loaded in case of dynamic content (though Ph0enyx is mostly static)
        window.addEventListener('DOMContentLoaded', updateLinks);
    }
})();
