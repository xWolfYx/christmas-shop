const burgerMenuIcon = document.getElementById("burger-menu-icon");
const burgerFirstLine = burgerMenuIcon.firstElementChild;
const burgerSecondLine = burgerMenuIcon.lastElementChild;
const topScrollButton = document.getElementById("top-btn");
const burgerMenu = document.getElementById("burger-menu");
let isBurgerMenuOpen = false;

burgerMenuIcon.addEventListener("click", toggleBurgerMenu);

window.addEventListener("scroll", showScrollButton);

topScrollButton.addEventListener("click", scrollUp);

function toggleBurgerMenu() {
  if (!isBurgerMenuOpen) {
    burgerFirstLine.classList.add("close1");
    burgerSecondLine.classList.add("close2");
    burgerMenu.style.width = "100%";
    document.body.style.overflow = "hidden";
    isBurgerMenuOpen = true;
  } else {
    burgerFirstLine.classList.remove("close1");
    burgerSecondLine.classList.remove("close2");
    document.body.style.overflow = "visible";
    burgerMenu.style.width = "0";
    isBurgerMenuOpen = false;
  }
}

function showScrollButton() {
  if (document.documentElement.scrollTop > 300) {
    topScrollButton.style.visibility = "visible";
    topScrollButton.style.opacity = "1";
  } else {
    topScrollButton.style.visibility = "hidden";
    topScrollButton.style.opacity = "0";
  }
}

function scrollUp() {
  document.documentElement.scrollTop = 0;
}
