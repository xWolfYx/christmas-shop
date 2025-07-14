const topScrollButton = document.getElementById("top-btn");
const SCROLL_THRESHOLD = 300;

window.addEventListener("scroll", toggleScrollButton);

topScrollButton.addEventListener("click", scrollUp);

function toggleScrollButton() {
  topScrollButton.classList.toggle(
    "top-btn-display",
    window.scrollY > SCROLL_THRESHOLD
  );
}

function scrollUp() {
  window.scrollTo(pageXOffset, 0);
}
