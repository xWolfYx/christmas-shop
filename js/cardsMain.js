// gifts

function shuffleCards(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const categoryImg = {
  "For Work": "../images/gifts/gift-for-work.png",
  "For Health": "../images/gifts/gift-for-health.png",
  "For Harmony": "../images/gifts/gift-for-harmony.png",
};

const giftContainer = document.getElementById("gifts");

fetch("../js/gifts.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch: " + response.statusTest);
    }
    return response.json();
  })
  .then((data) => {
    shuffleCards(data);

    const fourCards = data.slice(0, 4);
    fourCards.forEach((item) => {
      giftContainer.innerHTML += `
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
      `;
    });
  });
