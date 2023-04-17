import './style.css';
const navBtn = document.querySelector('#menu');
const navItem = document.querySelector('[role="menubar"]');
navBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(navItem.getAttribute('aria-expanded'));
  navItem.setAttribute('aria-expanded', !isExpanded);
  navItem.classList.toggle('flex');
  navItem.classList.toggle('hidden');
  navBtn.classList.toggle('rotate');
});
