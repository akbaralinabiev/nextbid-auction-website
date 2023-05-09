let likeCounts = document.querySelectorAll('.like-count');
let likeButtons = document.querySelectorAll('.like-button');

for (let i = 0; i < likeButtons.length; i++) {
  let likeCount = parseInt(likeCounts[i].textContent);
  let hasLiked = false;
  let regularHeart = likeButtons[i].querySelector('.fa-regular');
  let solidHeart = likeButtons[i].querySelector('.fa-solid');

  solidHeart.style.display = 'none';

  likeButtons[i].addEventListener('click', function() {
    if (!hasLiked) {
      likeCount++;
      likeCounts[i].textContent = likeCount;
      regularHeart.style.display = 'none';
      solidHeart.style.display = 'inline-block';
      likeButtons[i].style.color = '#f92a2a';
      hasLiked = true;
    } else {
      likeCount--;
      likeCounts[i].textContent = likeCount;
      regularHeart.style.display = 'inline-block';
      solidHeart.style.display = 'none';
      likeButtons[i].style.color = '#000000';
      hasLiked = false;
    }
  });
}

