const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');
const yearElement = document.querySelector('#current-year');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
  navigationLinks.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const menuIsOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!menuIsOpen));
  menuButton.setAttribute('aria-label', menuIsOpen ? 'Open navigation menu' : 'Close navigation menu');
  navigationLinks.classList.toggle('is-open', !menuIsOpen);
});

navigationLinks.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    closeMenu();
  }
});

yearElement.textContent = new Date().getFullYear();