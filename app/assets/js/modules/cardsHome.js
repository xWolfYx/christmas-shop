let allCards = [];

const categoryImg = {
  "For Work": "./assets/images/gifts/gift-for-work.png",
  "For Health": "./assets/images/gifts/gift-for-health.png",
  "For Harmony": "./assets/images/gifts/gift-for-harmony.png",
};

const cards = document.getElementById("cards");

loadGifts();

function shuffleCards(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function loadGifts() {
  try {
    const response = await fetch("./assets/js/gifts.json");
    if (!response.ok) {
      throw new Error("Failed to fetch: " + response.statusText);
    }

    const data = await response.json();
    shuffleCards(data);
    allCards.push(data);
    renderCards(data);
  } catch (error) {
    console.log("Error Loading Gifts", error);
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
    .slice(0, 4)
    .join("");
  cards.innerHTML = cardsDom;
}
