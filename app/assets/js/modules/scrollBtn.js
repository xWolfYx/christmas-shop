const scrollThresholdEl = document.createElement("div");
scrollThresholdEl.setAttribute("class", "scroll-threshold");
document.body.prepend(scrollThresholdEl);
const topScrollButton = document.getElementById("top-btn");
const scrollButtonObserver = new IntersectionObserver(toggleScrollBtn, {
  root: null,
  threshold: 0,
});

scrollButtonObserver.observe(scrollThresholdEl);
topScrollButton.addEventListener("click", scrollUp);

function toggleScrollBtn(entries) {
  const [entry] = entries;
  entry.isIntersecting
    ? topScrollButton.classList.remove("top-btn-display")
    : topScrollButton.classList.add("top-btn-display");
}

function scrollUp() {
  window.scrollTo(pageXOffset, 0);
}
