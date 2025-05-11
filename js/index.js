const burgerMenuIcon = document.getElementById("burger-menu-icon");
const burgerTopLine = burgerMenuIcon.firstElementChild;
const burgerBottomLine = burgerMenuIcon.lastElementChild;
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
  isBurgerMenuOpen = !isBurgerMenuOpen;

  if (isBurgerMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  burgerMenu.classList.toggle("burger-menu-open");
  burgerTopLine.classList.toggle("burger-icon-top-close");
  burgerBottomLine.classList.toggle("burger-icon-bottom-close");
}

function toggleScrollButton() {
  document.documentElement.scrollTop > 300
    ? topScrollButton.classList.add("top-btn-display")
    : topScrollButton.classList.remove("top-btn-display");
}

function scrollUp() {
  document.documentElement.scrollTop = 0;
}
