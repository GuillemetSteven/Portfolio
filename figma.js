const commands = [
  {
    command: 'Home Interface',
    images: [
      'images_projets_1/Home_Register.png',
      'images_projets_1/Register.png',
      'images_projets_1/Login.png',
    ],
    description: 'Register & Login system'
  },
  {
    command: 'Home Page ',
    images: [
      'images_projets_1/Home_Page_Black.png',
      'images_projets_1/Scroll_Droite_Black.png',
      'images_projets_1/Scroll_Gauche_Black.png',
    ],
    description: 'Landing page'
  },
  {
    
    command: 'Profile PAGE',
    images: [
      'images_projets_1/Profil_Page_Black.png',
      'images_projets_1/Henry_Profile.png',
      'images_projets_1/Cillian_Profile.png',
    ],
    description: 'Profile PAGE'
  },
  {
    
    command: 'Messages system',
    images: [
      'images_projets_1/Message_Cillian.png',
      'images_projets_1/Message_Henry.png',
      'images_projets_1/Message_Faker.png',
    ],
    description: 'Messages system'
  },
  {
    
    command: 'Private messages flow',
    images: [
      'images_projets_1/Private_Cillian.png',
      'images_projets_1/Private_Henry.png',
      'images_projets_1/Private_Faker.png',
    ],
    description: 'private messages flow'
  }
];

let currentCommandIndex = 0;
let currentItem = 0;

const commandElement = document.querySelector('.command');
const carouselInner = document.querySelector('.carousel-inner');
const commandDescription = document.querySelector('.command-description');
const imageCounter = document.querySelector('.image-counter');

function updateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentItem);
  });
}

function updateCounter() {
  const totalImages = commands[currentCommandIndex].images.length;
  imageCounter.textContent = `Image ${currentItem + 1} of ${totalImages}`;
}

document.getElementById('prev').addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  items[currentItem].classList.remove('active');
  currentItem = (currentItem - 1 + commands[currentCommandIndex].images.length) % commands[currentCommandIndex].images.length;
  items[currentItem].classList.add('active');
  updateCounter();
});

document.getElementById('next').addEventListener('click', () => {
  const items = document.querySelectorAll('.carousel-item');
  items[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % commands[currentCommandIndex].images.length;
  items[currentItem].classList.add('active');
  updateCounter();
});

document.getElementById('command1').addEventListener('click', () => setCommand(0));
document.getElementById('command2').addEventListener('click', () => setCommand(1));
document.getElementById('command3').addEventListener('click', () => setCommand(2));
document.getElementById('command4').addEventListener('click', () => setCommand(3));
document.getElementById('command5').addEventListener('click', () => setCommand(4));

function setCommand(index) {
  currentCommandIndex = index;
  currentItem = 0;
  commandElement.textContent = commands[index].command;
  commandDescription.textContent = commands[index].description;

  carouselInner.innerHTML = commands[index].images.map((src, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${src}" alt="Screenshot ${i + 1}">
    </div>
  `).join('');
  updateCarousel();// On actualise ici
  updateCounter();// & ici
}

setCommand(0);