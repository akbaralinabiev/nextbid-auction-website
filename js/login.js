const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const resetPasswordForm = document.getElementById('forgot-password');

// Show login form and hide register form by default
loginForm.style.display = 'block';
registerForm.style.display = 'none';

// When clicking the "Register" button, hide the login form and show the register form with animation
registerBtn.addEventListener('click', () => {
  loginForm.style.opacity = 0;
  setTimeout(() => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    registerForm.style.opacity = 0;
    setTimeout(() => {
      registerForm.style.opacity = 1;
    }, 100);
  }, 100);
});

// When clicking the "Login" button, hide the register form and show the login form with animation
loginBtn.addEventListener('click', () => {
  registerForm.style.opacity = 0;
  setTimeout(() => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    loginForm.style.opacity = 0;
    setTimeout(() => {
      loginForm.style.opacity = 1;
    }, 100);
  }, 100);
});

document.getElementById('forgot-password-link').addEventListener('click', () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'none';
  resetPasswordForm.style.display = 'block';
});
document.getElementById('back-to-login-btn').addEventListener('click', () => {
  resetPasswordForm.style.display = 'none';
  loginForm.style.display = 'block';
});
