// Open-close burger-menu
const mobileMenu = document.querySelector(".burger-menu__list");
const burgerIcon = document.querySelector(".burger-menu__icon");
const body = document.querySelector("body");
burgerIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
    mobileMenu.classList.toggle("burger-active");
    burgerIcon.classList.toggle("burger-menu__icon-close");
}
body.addEventListener("click", closeMenu);
function closeMenu(e) {
    if (mobileMenu.classList.contains("burger-active")&&!e.target.classList.contains("burger-menu__list")&&!e.target.classList.contains("burger-menu")&&!e.target.classList.contains("burger-menu__icon")) {
        mobileMenu.classList.remove("burger-active");
        burgerIcon.classList.remove("burger-menu__icon-close");
    }
}