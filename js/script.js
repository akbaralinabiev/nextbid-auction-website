// // Get the closing time element and countdown timer element
// const closingTimeElement = document.querySelector('#closing-time');
// const countdownTimerElement = document.querySelector('#countdown-timer');

// // Calculate the time remaining until the auction closes
// const closingTime = new Date(closingTimeElement.textContent);
// const now = new Date();
// const timeRemainingInSeconds = Math.floor((closingTime - now) / 1000);

// // Define a function that updates the countdown timer
// function updateCountdownTimer() {
//   const now = new Date();
//   const timeRemainingInSeconds = Math.floor((closingTime - now) / 1000);
  
//   // Check if the auction has closed
//   if (timeRemainingInSeconds <= 0) {
//     countdownTimerElement.textContent = 'Auction Closed';
//     return;
//   }
  
//   // Calculate the hours, minutes, and seconds remaining
//   const hoursRemaining = Math.floor(timeRemainingInSeconds / 3600);
//   const minutesRemaining = Math.floor((timeRemainingInSeconds % 3600) / 60);
//   const secondsRemaining = timeRemainingInSeconds % 60;
  
//   // Format the time remaining as HH:MM:SS
//   const timeRemainingFormatted = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  
//   // Update the countdown timer element with the formatted time remaining
//   countdownTimerElement.textContent = timeRemainingFormatted;
// }

// // Call the updateCountdownTimer function initially to set the countdown timer
// updateCountdownTimer();

// // Set an interval to call the updateCountdownTimer function every second
// setInterval(updateCountdownTimer, 1000);

// // Define the bid function
// function bid() {
//   // Get the current bid amount and the user's bid amount
//   const currentBidElement = document.querySelector('#current-bid');
//   const currentBid = parseFloat(currentBidElement.textContent.slice(1));
//   const bidInputElement = document.querySelector('#bid-input');
//   const bidAmount = parseFloat(bidInputElement.value);
  
//   // Check if the user's bid is valid
//   if (isNaN(bidAmount) || bidAmount <= currentBid) {
//     alert('Please enter a valid bid amount that is greater than the current bid.');
//     return;
//   }
  
//   // Update the current bid amount and the last bid amount
//   currentBidElement.textContent = `$${bidAmount.toFixed(2)}`;
//   const lastBidElement = document.querySelector('#last-bid');

//   //If I delete this line of code the last bid amount will be shown 
//   lastBidElement.textContent = `$${bidAmount.toFixed(2)}`;
// }




function initializeCountdownTimer(cardElement) {
    const closingTimeElement = cardElement.querySelector('.closing-time');
    const countdownTimerElement = cardElement.querySelector('.countdown-timer');
    const closingTime = new Date(closingTimeElement.textContent);
    
    function updateCountdownTimer() {
      const now = new Date();
      const timeRemainingInSeconds = Math.floor((closingTime - now) / 1000);
  
      if (timeRemainingInSeconds <= 0) {
        countdownTimerElement.textContent = 'Auction Closed';
        return;
      }
  
      const hoursRemaining = Math.floor(timeRemainingInSeconds / 3600);
      const minutesRemaining = Math.floor((timeRemainingInSeconds % 3600) / 60);
      const secondsRemaining = timeRemainingInSeconds % 60;
  
      const timeRemainingFormatted = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  
      countdownTimerElement.textContent = timeRemainingFormatted;
    }
  
    updateCountdownTimer();
    setInterval(updateCountdownTimer, 1000);
  }
  
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
  }
  
  const cardElements = document.querySelectorAll('.auction-card');
  cardElements.forEach(cardElement => {
    initializeCountdownTimer(cardElement);
  });
  
  // You'll need to modify your HTML to pass the card element to the bid function, like this:
  // 
  