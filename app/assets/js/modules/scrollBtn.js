const topScrollButton = document.getElementById("top-btn");

window.addEventListener("scroll", toggleScrollButton);

topScrollButton.addEventListener("click", scrollUp);

function toggleScrollButton() {
  window.scrollY > 300
    ? topScrollButton.classList.add("top-btn-display")
    : topScrollButton.classList.remove("top-btn-display");
}

function scrollUp() {
  window.scrollTo(0, 0);
}
