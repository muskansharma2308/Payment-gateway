const toggle = document.getElementById("nav__toggle");
const menu = document.getElementById("nav__menu");
const close = document.getElementById("nav__close");

if (toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.add('show-nav-menu');
    });
}

if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('show-nav-menu');
    });
}