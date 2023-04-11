
//*********************************pagination*******************************//

const cardsPerPage = 8;
let currentPage = 1;
const cards = document.querySelectorAll('.card');
const totalPages = Math.ceil(cards.length / cardsPerPage);
const pageNumContainer = document.querySelector('#page-numbers');
const prevButton = document.querySelector('#prev-page');
const nextButton = document.querySelector('#next-page');

function updatePagination() {
  pageNumContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const pageNum = document.createElement('button');
    pageNum.textContent = i;
    pageNum.onclick = () => {
      currentPage = i;
      displayCards();
    };
    if (i === currentPage) {
      pageNum.classList.add('active-page');
    }
    pageNumContainer.appendChild(pageNum);
  }

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

function displayCards() {
  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;

  for (let i = 0; i < cards.length; i++) {
    if (i >= start && i < end) {
      cards[i].style.display = 'block';
    } else {
      cards[i].style.display = 'none';
    }
  }
  updatePagination();
}

function changePage(direction) {
  currentPage += direction;
  displayCards();
}

displayCards();
