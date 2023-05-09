// Get the elements
const auctionCards = document.querySelectorAll(".auction-card");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup-img img");
const popupDescription = document.querySelector(".popup-description");
const popupTitle = document.querySelector(".popup-title");
const popupCloseBtn = document.querySelector(".popup-close-btn");

// Add click event listener to each auction card
auctionCards.forEach(card => {
  const cardImg = card.querySelector("img");

  cardImg.addEventListener("click", () => {
    // Get the card data
    const cardTitle = card.querySelector(".card-title").textContent;
    const cardImgSrc = cardImg.getAttribute("src");
    const cardDescription = card.querySelector(".current-price-p").cloneNode(true);

    // Set the popup data
    popupTitle.textContent = cardTitle;
    popupImg.setAttribute("src", cardImgSrc);
    popupDescription.innerHTML = "";
    popupDescription.appendChild(cardDescription);

    // Show the popup
    popup.classList.add("show-popup");
  });
});

// Add click event listener to the popup close button
popupCloseBtn.addEventListener("click", () => {
  // Hide the popup
  popup.classList.remove("show-popup");
});
