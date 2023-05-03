// function searchProducts() {
//   const searchInput = document.querySelector(".search__input");
//   const auctionCards = document.querySelectorAll(".auction-card");
//   const searchResults = document.querySelector(".search__results");
//   const searchTerm = searchInput.value.toLowerCase();
//   let matchFound = false;

//   auctionCards.forEach(card => {
//     const cardTitleElement = card.querySelector(".card-title");
//     const cardTitle = cardTitleElement.textContent.toLowerCase();

//     if (cardTitle.includes(searchTerm)) {
//       card.style.display = "block";
//       matchFound = true;
//     } else {
//       card.style.display = "none";
//     }
//   });

//   // Remove the "no results" message if it exists
//   const message = searchResults.querySelector(".no-results-message");
//   if (message) {
//     searchResults.removeChild(message);
//   }

//   // Check if any matching products were found
//   if (!matchFound && searchTerm !== "") {
//     const message = document.createElement("p");
//     message.textContent = "No matching products were found.";
//     message.classList.add("no-results-message");
//     searchResults.appendChild(message);
//     const paginationSection = document.querySelector(".pagination-section");
//     paginationSection.style.display = "none";
//   } else {
//     const paginationSection = document.querySelector(".pagination-section");
//     paginationSection.style.display = "block";
//   }
// }

// const searchInput = document.querySelector(".search__input");
// searchInput.addEventListener("input", searchProducts);




function searchProducts() {
  const searchInput = document.querySelector(".search__input, .search__input-1");
  const auctionCards = document.querySelectorAll(".auction-card");
  const searchResults = document.querySelector(".search__results");
  const searchTerm = searchInput.value.toLowerCase();
  let matchFound = false;

  auctionCards.forEach(card => {
    const cardTitleElement = card.querySelector(".card-title");
    const cardTitle = cardTitleElement.textContent.toLowerCase();

    if (cardTitle.includes(searchTerm)) {
      card.style.display = "block";
      matchFound = true;
    } else {
      card.style.display = "none";
    }
  });

  // Remove the "no results" message if it exists
  const message = searchResults.querySelector(".no-results-message");
  if (message) {
    searchResults.removeChild(message);
  }

  // Check if any matching products were found
  if (!matchFound && searchTerm !== "") {
    const message = document.createElement("p");
    message.textContent = "No matching products were found.";
    message.classList.add("no-results-message");
    searchResults.appendChild(message);
    const paginationSection = document.querySelector(".pagination-section");
    paginationSection.style.display = "none";
  } else {
    const paginationSection = document.querySelector(".pagination-section");
    paginationSection.style.display = "block";
  }
}

const searchInput = document.querySelector(".search__input, .search__input-1");
searchInput.addEventListener("input", searchProducts);


