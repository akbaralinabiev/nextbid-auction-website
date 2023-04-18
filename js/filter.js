function filterCards() {
    const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
    const minPriceFilter = document.getElementById("minPriceFilter").value;
    const maxPriceFilter = document.getElementById("maxPriceFilter").value;
    const cards = document.getElementsByClassName("auction-card");
  
    for (const card of cards) {
      const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
      const lastBid = parseFloat(card.querySelector(".last-bid").textContent.replace("$", ""));
  
      const nameMatch = !nameFilter || cardTitle.includes(nameFilter);
      const minPriceMatch = !minPriceFilter || lastBid >= parseFloat(minPriceFilter);
      const maxPriceMatch = !maxPriceFilter || lastBid <= parseFloat(maxPriceFilter);
  
      if (nameMatch && minPriceMatch && maxPriceMatch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  }
  