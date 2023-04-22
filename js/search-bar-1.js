function searchProducts() {
  const searchInputs = document.querySelectorAll(".search__input-1");
  const auctionCards = document.querySelectorAll(".auction-card");
  const searchResults = document.querySelector(".search__results");
  const paginationSection = document.querySelector(".pagination-section");
  const filterSection = document.querySelector(".filter-filter");
  
  searchInputs.forEach(searchInput => {
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
      paginationSection.style.display = "none";
      filterSection.style.display = "none";
    } else {
      paginationSection.style.display = "block";
      filterSection.style.display = "block";
    }
  });
}

const searchInputs = document.querySelectorAll(".search__input-1");
searchInputs.forEach(searchInput => {
  searchInput.addEventListener("input", searchProducts);
});
