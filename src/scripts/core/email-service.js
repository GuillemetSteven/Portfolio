const sendEmail = (templateParams) => {
  const serviceID = window.config.EMAILJS_SERVICE_ID;
  const templateID = window.config.EMAILJS_TEMPLATE_ID;
  const userID = window.config.EMAILJS_USER_ID;

  emailjs.init(userID);

  emailjs.send(serviceID, templateID, templateParams)
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      Swal.fire({
        icon: 'success',
        title: 'Email envoyé avec succès !',
        showConfirmButton: false,
        timer: 2500
      });
      document.getElementById('contact-form').reset();
    }, error => {
      console.log('FAILED...', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur lors de l\'envoi de l\'email !',
        showConfirmButton: false,
        timer: 2500
      });
    });
};
