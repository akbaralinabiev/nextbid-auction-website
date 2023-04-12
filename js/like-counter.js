const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach((button) => {
  const likeCount = button.nextElementSibling;
  let count = 0;
  
  button.addEventListener('click', () => {
    count++;
    likeCount.innerText = count;
  });
});



// const likeButton = document.querySelector('.like-button');
//   const likeIcons = likeButton.querySelectorAll('img');
//   const likeCount = document.querySelector('.like-count');

//   likeButton.addEventListener('click', function() {
//     if (likeButton.classList.contains('liked')) {
//       // User unlikes the product
//       likeCount.innerText = parseInt(likeCount.innerText) - 1;
//       likeIcons[0].classList.remove('hidden');
//       likeIcons[1].classList.add('hidden');
//       likeButton.classList.remove('liked');
//       localStorage.removeItem('likedProduct');
//     } else {
//       // User likes the product
//       likeCount.innerText = parseInt(likeCount.innerText) + 1;
//       likeIcons[0].classList.add('hidden');
//       likeIcons[1].classList.remove('hidden');
//       likeButton.classList.add('liked');
//       localStorage.setItem('likedProduct', true);
//     }
//   });

//   // Check if the user has already liked the product
//   if (localStorage.getItem('likedProduct') === 'true') {
//     likeIcons[0].classList.add('hidden');
//     likeIcons[1].classList.remove('hidden');
//     likeButton.classList.add('liked');
//     likeCount.innerText = '1';
//   }


