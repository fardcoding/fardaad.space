AOS.init();

// Loader
window.addEventListener('load', () => {
  document.getElementById('loader').style.display = 'none';
});

// Theme Toggle
const toggle = document.getElementById('toggle-theme');
const body = document.body;
const theme = localStorage.getItem('theme');

if (theme === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggle.textContent = '🌙';
  }
});

