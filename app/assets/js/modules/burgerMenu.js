const burgerMenuIcon = document.getElementById("burger-menu-icon");
const burgerTopLine = burgerMenuIcon.firstElementChild;
const burgerBottomLine = burgerMenuIcon.lastElementChild;
const burgerMenu = document.getElementById("burger-menu");
const burgerMenuListItems = document.querySelectorAll(".burger-menu-item");
let isBurgerMenuOpen = false;

burgerMenuIcon.addEventListener("click", toggleBurgerMenu);

burgerMenuListItems.forEach((item) =>
  item.addEventListener("click", toggleBurgerMenu)
);

function toggleBurgerMenu() {
  isBurgerMenuOpen = !isBurgerMenuOpen;

  document.body.style.overflow = isBurgerMenuOpen ? "hidden" : "";

  burgerMenu.classList.toggle("burger-menu-open");
  burgerTopLine.classList.toggle("top-line-close");
  burgerBottomLine.classList.toggle("bottom-line-close");
}
