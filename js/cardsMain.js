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
      const card = document.createElement("div");
      card.className = "card";

      const cardImage = document.createElement("div");
      cardImage.className = "card-image";

      const img = document.createElement("img");
      img.src = categoryImg[item.category];
      img.alt = item.category;
      cardImage.appendChild(img);

      card.appendChild(cardImage);

      const cardText = document.createElement("div");
      cardText.className = "card-text";

      const header4 = document.createElement("h4");
      header4.className = `header-4 ${item.category
        .toLowerCase()
        .replace(" ", "-")}`;
      header4.textContent = item.category;
      cardText.appendChild(header4);

      const header3 = document.createElement("h3");
      header3.className = "header-3";
      header3.textContent = item.name;
      cardText.appendChild(header3);
      card.appendChild(cardText);

      giftContainer.appendChild(card);
    });
  });
