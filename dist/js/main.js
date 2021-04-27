// DOM Items
const menu_button = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menu_nav = document.querySelector(".menu-nav");
// const menu_branding   = document.querySelector(".menu-branding");
const menu_items = document.querySelectorAll(".menu-item");

// Set initial state of menu
let showMenu = false;

menu_button.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menu_button.classList.add('close');
        menu.classList.add('show');
        menu_nav.classList.add('show');
        // menu_branding.classList.add('show');
        menu_items.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menu_button.classList.remove('close');
        menu.classList.remove('show');
        menu_nav.classList.remove('show');
        // menu_branding.classList.remove('show');
        menu_items.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}