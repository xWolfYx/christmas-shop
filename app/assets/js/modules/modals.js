export function showModal(data) {
  const card = document.querySelectorAll(".card");
  card.forEach((card, index) =>
    card.addEventListener("click", function () {
      const item = data[index];
      openModal(item);
    })
  );
}

const categoryImg = {
  "For Work": "./assets/images/gifts/gift-for-work.png",
  "For Health": "./assets/images/gifts/gift-for-health.png",
  "For Harmony": "./assets/images/gifts/gift-for-harmony.png",
};

function openModal(item) {
  const superpowers = Object.entries(item.superpowers);
  let superpowersHtml = "";
  const snowflakes = 0;
  console.log(snowflakes);
  superpowers.forEach(
    (item) =>
      (superpowersHtml += `
      <div class="superpower">
        <p class="paragraph">${item[0][0].toUpperCase() + item[0].slice(1)}</p>
        <p class="paragraph">${item[1]}</p>
      </div>`)
  );

  const modalHtml = `
  <div class="card modal">
  <div class="card-image modal">
  <img src="${categoryImg[item.category]}" alt="${item.category}">
</div>
<div class="card-text modal">
  <h4 class="header-4 ${item.category.toLowerCase().replace(" ", "-")}">${
    item.category
  }</h4>
  <h3 class="header-3">${item.name}</h3>
  <p class="paragraph">${item.description}</p>
  <h4 class="header-4">Adds Powers To:</h4>
  <div class="superpowers">
    ${superpowersHtml}
  </div>
  </div>
  </div>
  </div>`;

  // document.body.innerHTML = modalHtml;
  const modalDiv = document.createElement("div");
  modalDiv.classList = "modal-background";
  modalDiv.innerHTML = modalHtml;
  document.body.append(modalDiv);
  document.body.style.overflow = "hidden";
  modalDiv.addEventListener("click", function () {
    document.body.style.overflowY = "";
    modalDiv.remove();
  });
}
