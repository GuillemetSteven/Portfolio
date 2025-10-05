function setActiveLink(event) {
  event.preventDefault();
  const navBarHeight = 200;
  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: targetPosition - navBarHeight, behavior: 'smooth' });
}
