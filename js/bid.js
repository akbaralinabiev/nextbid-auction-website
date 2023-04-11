
//*********************************place a bid*******************************//
function bid(cardElement) {
    const currentBidElement = cardElement.querySelector('.current-bid');
    const currentBid = parseFloat(currentBidElement.textContent.slice(1));
    const bidInputElement = cardElement.querySelector('.bid-input');
    const bidAmount = parseFloat(bidInputElement.value);
  
    if (isNaN(bidAmount) || bidAmount <= currentBid) {
      alert('Please enter a valid bid amount that is greater than the current bid.');
      return;
    }
  
    currentBidElement.textContent = `$${bidAmount.toFixed(2)}`;
    const lastBidElement = cardElement.querySelector('.last-bid');
    // lastBidElement.textContent = `$${bidAmount.toFixed(2)}`;
  
   bidInputElement.value = '';
}
