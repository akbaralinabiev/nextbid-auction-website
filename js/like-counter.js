const likeButtons = document.querySelectorAll('.like-button');
const numberOfLikesElements = document.querySelectorAll('.like-count');

for (let i = 0; i < likeButtons.length; i++) {
  const likeBtn = likeButtons[i];
  const numberOfLikesElement = numberOfLikesElements[i];

  let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
  let isLiked = false;

  const likeClick = () => {
    if (!isLiked) {
      likeBtn.classList.add('isLiked');
      numberOfLikes++;
      numberOfLikesElement.textContent = numberOfLikes;
      isLiked = !isLiked;
    } else {
      likeBtn.classList.remove('isLiked');
      numberOfLikes--;
      numberOfLikesElement.textContent = numberOfLikes;
      isLiked = !isLiked;
    }
  };

  likeBtn.addEventListener('click', likeClick);
}


