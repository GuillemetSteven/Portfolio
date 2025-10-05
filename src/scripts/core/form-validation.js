document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  document.querySelectorAll('.error-message').forEach(e => {
    e.textContent = '';
    e.classList.remove('visible');
  });
  document.querySelectorAll('input, textarea').forEach(e => e.classList.remove('error'));

  if (nameInput.value.trim() === '') {
    isValid = false;
    const errorElement = document.getElementById('name-error');
    errorElement.textContent = 'Le nom est requis.';
    errorElement.classList.add('visible');
    nameInput.classList.add('error');
  }

  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    isValid = false;
    const errorElement = document.getElementById('email-error');
    errorElement.textContent = 'Veuillez entrer une adresse email valide.';
    errorElement.classList.add('visible');
    emailInput.classList.add('error');
  }

  if (messageInput.value.trim().length < 10) {
    isValid = false;
    const errorElement = document.getElementById('message-error');
    errorElement.textContent = 'Le message doit contenir au moins 10 caractères.';
    errorElement.classList.add('visible');
    messageInput.classList.add('error');
  }

  if (isValid) {
    const templateParams = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      message: messageInput.value,
    };
    sendEmail(templateParams);
  }
});
