
const toggleBtn = document.querySelector('.toggle-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const toggleIcon = document.querySelector('.toggle-btn i');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  dropdownMenu.classList.toggle('open');
  toggleIcon.classList.toggle('fa-bars');
  toggleIcon.classList.toggle('fa-xmark');
});
