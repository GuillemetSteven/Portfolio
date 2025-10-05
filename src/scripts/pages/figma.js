const commands = [
  {
    command: "Home Interface",
    images: [
      "../../assets/images/projects/figma/Home_Register.png",
      "../../assets/images/projects/figma/Register.png",
      "../../assets/images/projects/figma/Login.png",
    ],
    description:
      "This home interface has been designed to provide an intuitive and enjoyable user experience. It includes a secure and easy-to-use registration and login system.",
  },
  {
    command: "Home Page ",
    images: [
      "../../assets/images/projects/figma/Home_Page_Black.png",
      "../../assets/images/projects/figma/Scroll_Droite_Black.png",
      "../../assets/images/projects/figma/Scroll_Gauche_Black.png",
    ],
    description:
      "The home page is the first thing users see when they access our site. We have therefore worked to create an attractive and informative home page that gives users an overview of our services and what we can do for them.",
  },
  {
    command: "Profile PAGE",
    images: [
      "../../assets/images/projects/figma/Profil_Page_Black.png",
      "../../assets/images/projects/figma/Henry_Profile.png",
      "../../assets/images/projects/figma/Cillian_Profile.png",
    ],
    description:
      "The profile page is where users can customize their experience on our site. They can add photos, personal and professional information. We have designed this page to be easy to use and update. Even though not everything is created yet, since it's prototype.",
  },
  {
    command: "Messages system",
    images: [
      "../../assets/images/projects/figma/Message_Cillian.png",
      "../../assets/images/projects/figma/Message_Henry.png",
      "../../assets/images/projects/figma/Message_Faker.png",
    ],
    description:
      "Our messaging system is designed to allow users to communicate easily and efficiently with each other. It includes features such as instant messaging, voice messaging, and video messaging to meet all communication needs.",
  },
  {
    command: "Private messages flow",
    images: [
      "../../assets/images/projects/figma/Private_Cillian.png",
      "../../assets/images/projects/figma/Private_Henry.png",
      "../../assets/images/projects/figma/Private_Faker.png",
    ],
    description:
      "The private messages flow is where users can have private and secure conversations with other users. We have designed this flow to be easy to use and navigate, with features such as message search and the ability to mark messages as important.",
  },
];

let currentCommandIndex = 0;
let currentItem = 0;

const commandElement = document.querySelector(".command");
const carouselInner = document.querySelector(".carousel-inner");
const commandDescription = document.querySelector(".command-description");
const imageCounter = document.querySelector(".image-counter");

function updateCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  items.forEach((item, index) => {
    item.classList.toggle("active", index === currentItem);
  });
}

function updateCounter() {
  const totalImages = commands[currentCommandIndex].images.length;
  imageCounter.textContent = `Image ${currentItem + 1} of ${totalImages}`;
}

document.getElementById("prev").addEventListener("click", () => {
  const items = document.querySelectorAll(".carousel-item");
  items[currentItem].classList.remove("active");
  currentItem =
    (currentItem - 1 + commands[currentCommandIndex].images.length) % commands[currentCommandIndex].images.length;
  items[currentItem].classList.add("active");
  updateCounter();
});

document.getElementById("next").addEventListener("click", () => {
  const items = document.querySelectorAll(".carousel-item");
  items[currentItem].classList.remove("active");
  currentItem = (currentItem + 1) % commands[currentCommandIndex].images.length;
  items[currentItem].classList.add("active");
  updateCounter();
});

document.getElementById("command1").addEventListener("click", () => setCommand(0));
document.getElementById("command2").addEventListener("click", () => setCommand(1));
document.getElementById("command3").addEventListener("click", () => setCommand(2));
document.getElementById("command4").addEventListener("click", () => setCommand(3));
document.getElementById("command5").addEventListener("click", () => setCommand(4));

function setCommand(index) {
  currentCommandIndex = index;
  currentItem = 0;
  commandElement.textContent = commands[index].command;
  commandDescription.textContent = commands[index].description;

  carouselInner.innerHTML = commands[index].images
    .map(
      (src, i) => `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
      <img src="${src}" alt="Screenshot ${i + 1}">
    </div>
  `
    )
    .join("");
  updateCarousel(); // On actualise ici
  updateCounter(); // & ici
}

setCommand(0);
