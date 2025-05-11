const burgerMenuIcon = document.getElementById("burger-menu-icon");
const burgerFirstLine = burgerMenuIcon.firstElementChild;
const burgerSecondLine = burgerMenuIcon.lastElementChild;
const topScrollButton = document.getElementById("top-btn");
const burgerMenu = document.getElementById("burger-menu");
const burgerMenuListItems = document.querySelectorAll(".burger-menu-item");
let isBurgerMenuOpen = false;

burgerMenuIcon.addEventListener("click", toggleBurgerMenu);

burgerMenuListItems.forEach((item) =>
  item.addEventListener("click", toggleBurgerMenu)
);

window.addEventListener("scroll", toggleScrollButton);

topScrollButton.addEventListener("click", scrollUp);

function toggleBurgerMenu() {
  burgerMenu.classList.toggle("burger-menu-open");
  !isBurgerMenuOpen ? openBurgerMenu() : closeBurgerMenu();
  isBurgerMenuOpen = !isBurgerMenuOpen;
}

function closeBurgerMenu() {
  burgerFirstLine.classList.remove("close1");
  burgerSecondLine.classList.remove("close2");
  document.body.style.overflow = "visible";
}

function openBurgerMenu() {
  burgerFirstLine.classList.add("close1");
  burgerSecondLine.classList.add("close2");
  document.body.style.overflow = "hidden";
}

function toggleScrollButton() {
  document.documentElement.scrollTop > 300 ? showTopButton() : hideTopButton();
}

function showTopButton() {
  topScrollButton.classList.add("top-btn-display");
}

function hideTopButton() {
  topScrollButton.classList.remove("top-btn-display");
}

function scrollUp() {
  document.documentElement.scrollTop = 0;
}
