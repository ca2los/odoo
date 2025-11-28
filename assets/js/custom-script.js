document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapse = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (!navbarCollapse || !navbarToggler) return;

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const togglerVisible = window.getComputedStyle(navbarToggler).display !== "none";
            if (!togglerVisible) return;
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {toggle: false});
            bsCollapse.hide();
        })
    })
});