const burgerMenuIcon = document.getElementById("burger-menu-icon");
const burgerFirstLine = burgerMenuIcon.firstElementChild;
const burgerSecondLine = burgerMenuIcon.lastElementChild;
const topScrollButton = document.getElementById("top-btn");
const burgerMenu = document.getElementById("burger-menu");
let isBurgerMenuOpen = false;

burgerMenuIcon.addEventListener("click", toggleBurgerMenu);

window.addEventListener("scroll", toggleScrollButton);

topScrollButton.addEventListener("click", scrollUp);

function toggleBurgerMenu() {
  !isBurgerMenuOpen ? openBurgerMenu() : closeBurgerMenu();
  isBurgerMenuOpen = !isBurgerMenuOpen;
}

function closeBurgerMenu() {
  burgerFirstLine.classList.remove("close1");
  burgerSecondLine.classList.remove("close2");
  document.body.style.overflow = "visible";
  burgerMenu.style.width = "0";
}

function openBurgerMenu() {
  burgerFirstLine.classList.add("close1");
  burgerSecondLine.classList.add("close2");
  burgerMenu.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function toggleScrollButton() {
  document.documentElement.scrollTop > 300 ? showTopButton() : hideTopButton();
}

function showTopButton() {
  topScrollButton.style.visibility = "visible";
  topScrollButton.style.opacity = "1";
}

function hideTopButton() {
  topScrollButton.style.visibility = "hidden";
  topScrollButton.style.opacity = "0";
}

function scrollUp() {
  document.documentElement.scrollTop = 0;
}
