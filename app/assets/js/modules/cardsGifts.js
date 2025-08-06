import { showModal } from "./modals.js";

let allCards = [];
const cards = document.getElementById("cards");
const tabsElem = document.getElementById("tabs");

const categoryImg = {
  "For Work": "./assets/images/gifts/gift-for-work.png",
  "For Health": "./assets/images/gifts/gift-for-health.png",
  "For Harmony": "./assets/images/gifts/gift-for-harmony.png",
};

tabsElem.addEventListener("click", (e) => filterCards(e));

loadGifts();

async function loadGifts() {
  try {
    const response = await fetch("./assets/js/gifts.json");
    if (!response.ok) {
      throw new Error("Failed to fetch: " + response.statusText);
    }

    const data = await response.json();
    shuffleCards(data);
    allCards = data;
    renderCards(data);
  } catch (error) {
    console.log("Error Loading Gifts", error);
  }
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function filterCards(e) {
  if (!e.target.classList.contains("tab")) return;

  if (e.target.dataset.category === "All") {
    setActiveTab(e);
    renderCards(allCards);
  } else {
    const category = e.target.dataset.category;
    const filteredCards = allCards.filter((card) => card.category === category);
    renderCards(filteredCards);
    setActiveTab(e);
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
  showModal(data);
}

function setActiveTab(e) {
  [...e.target.parentElement.children].forEach((child) =>
    child.classList.remove("active-filter-btn")
  );
  e.target.classList.add("active-filter-btn");
}
