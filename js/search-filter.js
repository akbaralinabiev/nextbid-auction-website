console.log("Search input changed");


function searchProducts() {
    const searchInput = document.querySelector(".search__input");
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
  
    if (!matchFound) {
      if (searchTerm !== "") {
        const message = document.createElement("p");
        message.textContent = "No matching products were found.";
        searchResults.appendChild(message);
      }
    } else {
      // Remove the "no results" message if it exists
      const message = searchResults.querySelector("p");
      if (message) {
        searchResults.removeChild(message);
      }
    }
  }
  
  const searchInput = document.querySelector(".search__input");
  searchInput.addEventListener("input", searchProducts);
  