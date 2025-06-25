const slider = document.getElementById("slider-row");
const leftSliderBtn = document.getElementById("slider-left-arrow");
const rightSliderBtn = document.getElementById("slider-right-arrow");

leftSliderBtn.addEventListener("click", () => scrollSlider(-1));
rightSliderBtn.addEventListener("click", () => scrollSlider(1));

function scrollSlider(direction) {
  const totalScroll = slider.scrollWidth - slider.clientWidth;
  const steps = window.innerWidth >= 769 ? 3 : 6;
  const scrollStep = totalScroll / steps;

  slider.scrollLeft += direction * scrollStep;
}
