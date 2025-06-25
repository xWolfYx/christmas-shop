let allCards = [];
const cards = document.getElementById("cards");
const allBtn = document.getElementById("all");
const forWorkBtn = document.getElementById("for-work");
const forHealthBtn = document.getElementById("for-health");
const forHarmonyBtn = document.getElementById("for-harmony");
const filterBtns = document.querySelectorAll(".tab");

const categoryImg = {
  "For Work": "./assets/images/gifts/gift-for-work.png",
  "For Health": "./assets/images/gifts/gift-for-health.png",
  "For Harmony": "./assets/images/gifts/gift-for-harmony.png",
};

allBtn.addEventListener("click", function () {
  filterCards(this);
});
forWorkBtn.addEventListener("click", function () {
  filterCards(this);
});
forHealthBtn.addEventListener("click", function () {
  filterCards(this);
});
forHarmonyBtn.addEventListener("click", function () {
  filterCards(this);
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((btn) => btn.classList.remove("active-filter-btn"));
    btn.classList.add("active-filter-btn");
  });
});

fetch("./assets/js/gifts.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch: " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    shuffleCards(data);
    allCards = data;
    renderCards(data);
  });

function shuffleCards(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function filterCards(category) {
  const value = category.textContent.trim();
  if (value === "All") {
    renderCards(allCards);
  } else {
    const filteredCards = allCards.filter((card) => card.category === value);
    renderCards(filteredCards);
  }
}

function renderCards(data) {
  const cardsDom = data
    .map(
      (item) => `
      <div class="card">
        <div class="card-image">
          <img src="${categoryImg[item.category]}" alt="${item.category}">
        </div>
        <div class="card-text">
          <h4 class="header-4 ${item.category
            .toLowerCase()
            .replace(" ", "-")}">${item.category}</h4>
          <h3 class="header-3">${item.name}</h3>
        </div>
      </div>
      `
    )
    .join("");
  cards.innerHTML = cardsDom;
}
