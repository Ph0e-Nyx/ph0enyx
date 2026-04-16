/* ═══════════════════════════════════
   MOBILE MENU — Ph0eNyx Portfolio
   ═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.querySelector('.btn-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const btnClose = document.querySelector('.btn-close-menu');

    if (!btnMenu || !overlay) return;

    btnMenu.addEventListener('click', function () {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (btnClose) btnClose.addEventListener('click', closeMenu);

    // Close on link click
    overlay.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    // Close on overlay background click
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeMenu;
    });
});
