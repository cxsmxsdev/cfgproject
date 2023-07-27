const form = document.querySelector('form');
const thankYouMessage = document.createElement('div');
thankYouMessage.textContent = 'Thank you for your message!';
thankYouMessage.classList.add('thank-you-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.appendChild(thankYouMessage);
});