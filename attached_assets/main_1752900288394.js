
// ========== TOGGLE THEME ==========
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

// ========== NAV MENU TOGGLE ==========
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// ========== SCROLL UP ==========
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show');
  } else {
    scrollUp.classList.remove('show');
  }
});
