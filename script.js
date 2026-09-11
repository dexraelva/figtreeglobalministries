const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
const forms = document.querySelectorAll('form[data-message]');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.createElement('p');
    message.className = 'form-success';
    message.textContent = form.dataset.message;
    form.appendChild(message);
    form.reset();
  });
});
