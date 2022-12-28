// mobile menu popup
const hamburgerIcon = document.querySelector('#hamburger');
const navList = document.querySelector('.nav ul');
const navBar = document.querySelector('.nav');
const item = document.querySelectorAll('.nav-item');

function displayMenu() {
  navList.classList.toggle('desktop');
  navBar.classList.toggle('mobile-menu');
  item.forEach((itemElement) => itemElement.classList.toggle('non-display'));
  navList.addEventListener('click', displayMenu);
}

hamburgerIcon.addEventListener('click', displayMenu);

// Project card objects
const projects = [
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Project Art Printing Data',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item8',
    mobileModalHeading: 'Multi Post Stories',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://henry-dura.github.io/portfolio-mobile-first/',
    source: 'https://github.com/henry-dura/portfolio-mobile-first',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Data Dashboard Healthcare',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item9',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://henry-dura.github.io/portfolio-mobile-first/',
    source: 'https://github.com/henry-dura/portfolio-mobile-first',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Website Portfolio',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item10',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://henry-dura.github.io/portfolio-mobile-first/',
    source: 'https://github.com/henry-dura/portfolio-mobile-first',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Project Art Printing Data',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item11',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://henry-dura.github.io/portfolio-mobile-first/',
    source: 'https://github.com/henry-dura/portfolio-mobile-first',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Data Dashboard Healthcare',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item12',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://henry-dura.github.io/portfolio-mobile-first/',
    source: 'https://github.com/henry-dura/portfolio-mobile-first',
  },
  {
    nameMobile: 'Project Art Printing Data',
    nameDesk: 'Website Portfolio',
    description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ['html', 'bootstrap', 'Ruby'],
    technologiesModal: ['html', 'bootstrap', 'Ruby on rails'],
    DesktopItem: 'item13',
    mobileModalHeading: 'Multi Post Stories',
    desktopModalHeading: 'Keeping track of hundreds  of components website',
    modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live: 'https://henry-dura.github.io/portfolio-mobile-first/',
    source: 'https://github.com/henry-dura/portfolio-mobile-first',
  },
];

// Project Cards Display
const container = document.querySelector('.grid-container');

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  container.appendChild(div);
  const h2 = document.createElement('h2');
  if (window.innerWidth <= 768) {
    div.classList.add('grid', 'mobile');
    h2.textContent = projects[i].nameMobile;
  } else {
    div.classList.add('grid', 'desktop', projects[i].DesktopItem);
    h2.textContent = projects[i].nameDesk;
  }
  div.appendChild(h2);
}

let count = 0;

const arr = [...container.children];

for (let i = 2; i < arr.length; i += 1) {
  const span = document.createElement('span');
  span.innerHTML = `
    <p>${projects[count].description}</p>
    <div class="lang">
    <ul>
      <li><button>${projects[count].technologies[0]}</button></li>
      <li><button>${projects[count].technologies[1]}</button></li>
      <li><button>${projects[count].technologies[2]}</button></li>
    </ul>

  </div>
  <button class="see-project btn">See Project</button>
`; arr[i].appendChild(span);
  count += 1;
}

// PROJECT POPUP MENU
const seeProjectBtn = document.querySelectorAll('.works .see-project');
const modalDisplay = document.createElement('div');
modalDisplay.classList.add('modal-display');
const allElement = document.querySelector('#all-element'); // for both desktop and mobile

// function called when see project button is clicked;
function modal() {
  document.body.appendChild(modalDisplay);
  allElement.classList.add('bluring');
  document.querySelector('#modal-close').addEventListener('click', () => {
    modalDisplay.remove();
    allElement.classList.remove('bluring');
  });
}

// modal display design
for (let i = 0; i < projects.length; i += 1) {
  modalDisplay.innerHTML = `<div class="modal-headings">
  <h2 class=" mobile modal-Heading">${projects[i].mobileModalHeading}</h2>
  <h2 class=" desktop modal-Heading">${projects[i].desktopModalHeading}</h2>
  <div><img src="images/Icon - Cancel.png" alt="close-icon" id="modal-close" /></div>
  </div>
  <div class="lang modal list">
  <ul>
    <li><button>${projects[i].technologiesModal[0]}</button></li>
    <li><button>${projects[i].technologiesModal[1]}</button></li>
    <li><button>${projects[i].technologiesModal[2]}</button></li>
  </ul>
  </div>

  <div class='In-flex'>
  <img src="images/modal-mobile.png" alt="close-icon" class=" mobile image" />
  <img src="images/Desktop-modal.png" alt="close-icon" class=" desktop image" />

  <div class="flex-right">
  <p>${projects[i].modalDescription}</p>
  <div class="live-btns">
  <a href="https://henry-dura.github.io/portfolio-mobile-first/" target="_blank"><button class="modal see-project">See Live <img src="images/Icon.png" alt="Github-icon" /></button></a>
  <a href="https://github.com/henry-dura/portfolio-mobile-first" target="_blank"><button class="modal see-project">See Source <img src="images/Icon -GitHub.png" alt="Github-icon" /></button></a>
  </div>
  </div>

  </div>
  `;
}

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', modal);
});

// contact form validation
if (window.screen.width <= 768) {
  document.querySelector('.optionM').required = false;
} else {
  document.querySelector('.optionD').required = false;
}

window.addEventListener('resize', () => this.location.reload());

const form = document.querySelector('#register');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message');
const fullName = document.querySelector('#Full-name');
const feedback = document.querySelector('#message');
const firstName = document.querySelector('#First-name');
const lastName = document.querySelector('#Last-name');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.visibility = 'visible';
    event.preventDefault();
  }
});

// storing data in local storage
function visitorData() {
  const visitor = {
    First: firstName.value,
    Last: lastName.value,
    Name: fullName.value,
    Email: email.value,
    Message: feedback.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}

[fullName, email, feedback, firstName, lastName].forEach((input) => input.addEventListener('focusout', visitorData));
// retrieve data from local storage
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  firstName.value = visitorDataExist.First;
  lastName.value = visitorDataExist.Last;
  fullName.value = visitorDataExist.Name;
  email.value = visitorDataExist.Email;
  feedback.value = visitorDataExist.Message;
}
