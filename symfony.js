const commands = [
  {
    command: 'Admin Page',
    images: [
      'images_projets_2/admin_page.png',
    ],
    description: 'The Admin Page is designed to provide complete control and management of the website. From this page, the admin can assign and revoke user rights, edit and delete articles, and even delete users. The page is intuitive and easy to use, allowing the admin to efficiently manage the website'
  },
  {
    command: 'Managing articles',
    images: [
      'images_projets_2/new_article.png',
      'images_projets_2/new_article_filled.png',
      'images_projets_2/new_article_result.png',
      'images_projets_2/edited_article.png'
    ],
    description: 'The Managing articles command shows how the admin can interact with the articles on the website. The admin can completely edit an article, including changing the title, content, and featured image. This command demonstrates the ease and flexibility of the article management system.'
  },
  {
    
    command: ' Profile PAGE',
    images: [
      'images_projets_2/profile_page.png',
      'images_projets_2/edited_profile.png',
    ],
    description: 'Profile page where users can customize their experience on our site. They can add photos, personal and professional information, and much more. We have designed this page to be easy to use and update.'
  },
  {
    
    command: ' Comments system',
    images: [
      'images_projets_2/comments.png',
      'images_projets_2/comments_replied.png',
      'images_projets_2/new_comment.png',
    ],
    description: 'Our comment system is designed to allow users to communicate easily and efficiently with each other. It includes features such as replying to comments and adding new comments.'
  },
  {
    
    command: ' Home Page & Search system',
    images: [
      'images_projets_2/home_page_article.png',
      'images_projets_2/search_system.png',
      'images_projets_2/search_system_when_nothing.png',
    ],
    description: 'The home page is the first thing users see when they access our site. Our search system allows users to search for specific articles and displays the results in a clear and organized manner.'
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