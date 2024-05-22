const commands = [
  {
    command: 'Admin Page',
    images: [
      'images_projets_2/admin_page.png',
    ],
    description: 'Interface from an admin point of view'
  },
  {
    command: 'Managing articles',
    images: [
      'images_projets_2/new_article.png',
      'images_projets_2/new_article_filled.png',
      'images_projets_2/new_article_result.png',
      'images_projets_2/edited_article.png'
    ],
    description: 'how I managed the articles'
  },
  {
    
    command: ' Profile PAGE',
    images: [
      'images_projets_2/profile_page.png',
      'images_projets_2/edited_profile.png',
    ],
    description: 'Profile PAGE'
  },
  {
    
    command: ' Comments system',
    images: [
      'images_projets_2/comments.png',
      'images_projets_2/comments_replied.png',
      'images_projets_2/new_comment.png',
    ],
    description: 'Comments system'
  },
  {
    
    command: ' Home Page & Search system',
    images: [
      'images_projets_2/home_page_article.png',
      'images_projets_2/search_system.png',
      'images_projets_2/search_system_when_nothing.png',
    ],
    description: 'Home Page & Search system'
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