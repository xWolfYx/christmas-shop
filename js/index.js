// burger menu activation script
const burgerMenu = document.getElementById("burger-menu-icon");
const burgerFirstLine = burgerMenu.firstElementChild;
const burgerSecondLine = burgerMenu.lastElementChild;
let active = false;

burgerMenu.addEventListener("click", toggleBurgerMenu);
function toggleBurgerMenu() {
  const burgerMenu = document.getElementById("burger-menu");
  if (!active) {
    burgerFirstLine.classList.add("close1");
    burgerSecondLine.classList.add("close2");
    burgerMenu.style.width = "100%";
    document.body.style.overflow = "hidden";
    active = true;
  } else {
    burgerFirstLine.classList.remove("close1");
    burgerSecondLine.classList.remove("close2");
    document.body.style.overflow = "visible";
    burgerMenu.style.width = "0";
    active = false;
  }
}

// the button to scroll up on tablets and mobile phones
window.onscroll = function () {
  showScrollButton();
};
const topScrollButton = document.getElementById("top-btn");
function showScrollButton() {
  if (document.documentElement.scrollTop > 300) {
    topScrollButton.style.visibility = "visible";
    topScrollButton.style.opacity = "1";
  } else {
    topScrollButton.style.visibility = "hidden";
    topScrollButton.style.opacity = "0";
  }
}
topScrollButton.onclick = function () {
  scrollUp();
};
function scrollUp() {
  document.documentElement.scrollTop = 0;
}
