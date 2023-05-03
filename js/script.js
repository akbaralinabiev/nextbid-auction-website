
function getRandomClosingTime() {
    const now = new Date();
    const randomHours = Math.floor(Math.random() * 24) + 1;
    const randomClosingTime = new Date(now.getTime() + randomHours * 3600 * 1000);
    return randomClosingTime.toISOString();
  }
  
  function initializeCountdownTimer(cardElement) {
    const closingTimeElement = cardElement.querySelector('.closing-time');
    closingTimeElement.textContent = getRandomClosingTime();
    const countdownTimerElement = cardElement.querySelector('.countdown-timer');
    const closingTime = new Date(closingTimeElement.textContent);
  
    (function updateCountdownTimer() {
      const now = new Date();
      const timeRemainingInSeconds = Math.floor((closingTime - now) / 1000);
  
      if (timeRemainingInSeconds <= 0) {
        countdownTimerElement.textContent = 'Closed';
        countdownTimerElement.style.color = 'red';
        return;
      }
      
      
  
      const hoursRemaining = Math.floor(timeRemainingInSeconds / 3600);
      const minutesRemaining = Math.floor((timeRemainingInSeconds % 3600) / 60);
      const secondsRemaining = timeRemainingInSeconds % 60;
  
      const timeRemainingFormatted = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
      
      countdownTimerElement.textContent = timeRemainingFormatted;
      setTimeout(updateCountdownTimer, 1000);
    })();
  }
  
  const cardElements = document.querySelectorAll('.auction-card');
  cardElements.forEach(cardElement => {
    initializeCountdownTimer(cardElement);
  });













  





