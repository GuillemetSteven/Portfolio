const commands = [
  {
    command: './main -c "/bin/date" -o output.txt -i 3 -n 4',
    images: [
      'images_projets_3/1.JPG',
      'images_projets_3/1.2.JPG',
      'images_projets_3/1.3.JPG'
    ],
    description: 'Description for command 113'
  },
  {
    command: './main -c "/bin/ls -l" -i 2 -n 2 -o test.txt',
    images: [
      'images_projets_3/2.JPG',
      'images_projets_3/2.1.JPG',
      'images_projets_3/2.2.JPG'
    ],
    description: 'Description for command 2'
  },
  {
    // la taille change car commande trop longue, régler problème plus tard
    command: ' ./main -c "/bin/ls -l" -w /cygdrive/e/aA_Training_ground/dessins_oui -o output.txt',
    images: [
      'images_projets_3/3.JPG',
      'images_projets_3/3.1.JPG',
      'images_projets_3/3.2.JPG'
    ],
    description: 'Description for command 3'
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
  updateCarousel(); // On actualise ici
  updateCounter(); // & ici
}

setCommand(0);

