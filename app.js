function setActiveLink(event) {
  event.preventDefault(); 

  const navBarHeight = 200; // jouer avec ce nombre pour la hauteur 
  const targetId = event.target.getAttribute('href'); 
  const targetElement = document.querySelector(targetId); 
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; 

  window.scrollTo({ top: targetPosition - navBarHeight, behavior: 'smooth' }); 


}

//TODO SI L'ENVOIE EST FAIT ALORS ACTUALLISE PAGE ET DANS L'AVENIR CREER UNE NOTIFICATION EN BAS A droite comme quoi c bon

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi par défaut du formulaire

  let isValid = true;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Réinitialisation des erreurs
  document.querySelectorAll('.error-message').forEach(e => {
    e.textContent = '';
    e.classList.remove('visible');
  });
  document.querySelectorAll('input, textarea').forEach(e => e.classList.remove('error'));

  // Validation du nom
  if (nameInput.value.trim() === '') {
    isValid = false;
    const errorElement = document.getElementById('name-error');
    errorElement.textContent = 'Le nom est requis.';
    errorElement.classList.add('visible');
    nameInput.classList.add('error');
  }

  // Validation de l'email
  //Si le champ est de nouveau vide, alors retirer l'erreur  ! [JE DOIS LE CODER CA]
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    isValid = false;
    const errorElement = document.getElementById('email-error');
    errorElement.textContent = 'Veuillez entrer une adresse email valide.';
    errorElement.classList.add('visible');
    emailInput.classList.add('error');
  }

  // Validation du message
  if (messageInput.value.trim().length < 10) {
    isValid = false;
    const errorElement = document.getElementById('message-error');
    errorElement.textContent = 'Le message doit contenir au moins 10 caractères.';
    errorElement.classList.add('visible');
    messageInput.classList.add('error');
  }

  // Si tout est valide, envoyer l'email
  if (isValid) {
    sendEmail(nameInput.value, emailInput.value, messageInput.value);
  }
});


//TODO A UTILISER CRER COMPTE ETC !  
function sendEmail(name, email, message) {
  // Utilisation de EmailJS pour envoyer les emails
  emailjs.init('YOUR_USER_ID'); // Remplacez par votre user ID EmailJS

  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    name: name,
    email: email,
    message: message
  }).then((response) => {
    alert('Message envoyé avec succès !');
  }, (error) => {
    alert('Erreur lors de l\'envoi du message : ' + error);
  });
}
