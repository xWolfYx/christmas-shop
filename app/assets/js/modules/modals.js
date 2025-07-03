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
  superpowers.forEach((item) => {
    const snowflakesCount = item[1] / 100;
    let snowflakesHtml = "";
    for (let i = 0; i < 5; i++) {
      snowflakesHtml += `<img src="../app/assets/images/icons/snowflake.svg" class="modal-snowflake" style="opacity: ${
        i < snowflakesCount ? 1 : 0.1
      }">`;
    }
    superpowersHtml += `<div class="superpower">
        <p class="paragraph">${item[0][0].toUpperCase() + item[0].slice(1)}</p>
        <p class="paragraph">${item[1]}</p>
        <div class="power-value">
        ${snowflakesHtml}
        </div>
      </div>`;
  });

  const modalHtml = `
<div class="card modal">
  <div class="modal-close-icon">
    <div class="line-top top-line-close"></div>
    <div class="line-bottom bottom-line-close"></div>
  </div>
  <div class="card-image modal">
    <img src="${categoryImg[item.category]}" alt="${item.category}">
  </div>
  <div class="card-text modal">
    <h4 class="header-4 ${item.category.toLowerCase().replace(" ", "-")}"></h4>
    <h3 class="header-3">${item.name}</h3>
    <p class="paragraph">${item.description}</p>
    <h4 class="header-4">Adds Powers To:</h4>
    <div class="superpowers">${superpowersHtml}</div>
  </div>
</div>
`;

  const modalDiv = document.createElement("div");
  modalDiv.className = "modal-background";
  modalDiv.innerHTML = modalHtml;
  document.body.append(modalDiv);
  document.body.style.overflow = "hidden";
  modalDiv.addEventListener("click", function (event) {
    if (event.target === modalDiv) {
      document.body.style.overflow = "";
      modalDiv.remove();
    }
  });

  const modalCloseIcon = document.querySelector(".modal-close-icon");
  modalCloseIcon.addEventListener("click", function (event) {
    if (modalCloseIcon.contains(event.target)) {
      document.body.style.overflow = "";
      modalDiv.remove();
    }
  });
}
