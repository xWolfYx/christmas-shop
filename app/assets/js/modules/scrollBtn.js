const topScrollButton = document.getElementById("top-btn");

window.addEventListener("scroll", toggleScrollButton);

topScrollButton.addEventListener("click", scrollUp);

function toggleScrollButton() {
  document.documentElement.scrollTop > 300
    ? topScrollButton.classList.add("top-btn-display")
    : topScrollButton.classList.remove("top-btn-display");
}

function scrollUp() {
  document.documentElement.scrollTop = 0;
}
