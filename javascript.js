const hamburgerIcon = document.querySelector('#hamburger');
const navList = document.querySelector('.nav ul');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('.nav');
const closeIcon = document.querySelector('.close');

function displayMenu() {
  navBar.classList.add('non-display');
  mobileMenu.classList.remove('non-display');
  navList.classList.remove('desktop');
  mobileMenu.appendChild(navList);
}

function close() {
  navBar.classList.remove('non-display');
  mobileMenu.classList.add('non-display');
}

closeIcon.addEventListener('click', close);
navList.addEventListener('click', close);
hamburgerIcon.addEventListener('click', displayMenu);

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

const container = document.querySelector('.grid-container');

// mobile cards
for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  div.classList.add('grid', 'mobile');
  container.appendChild(div);
}

let count = 0;

const arr = [...container.children];

for (let i = 2; i < arr.length; i += 1) {
  arr[i].innerHTML = `
    <h2>${projects[count].nameMobile}</h2>
    <p>${projects[count].description}</p>
    <div class="lang">
    <ul>
      <li><button>${projects[count].technologies[0]}</button></li>
      <li><button>${projects[count].technologies[1]}</button></li>
      <li><button>${projects[count].technologies[2]}</button></li>
    </ul>

  </div>
  <button class="see-project btn">See Project</button>
`;
  count += 1;
}

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement('div');
  div.classList.add('grid', 'desktop', projects[i].DesktopItem);
  container.appendChild(div);
}

let count2 = 0;

const arr2 = [...container.children];

for (let i = 8; i < arr2.length; i += 1) {
  arr2[i].innerHTML = `
  <h2>${projects[count2].nameDesk}</h2>
  <p>${projects[count2].description}</p>
  <div class="lang">
  <ul>
    <li><button>${projects[count2].technologies[0]}</button></li>
    <li><button>${projects[count2].technologies[1]}</button></li>
    <li><button>${projects[count2].technologies[2]}</button></li>
  </ul>

</div>
<button class="see-project btn">See Project</button>
`;
  count2 += 1;
}

// PROJECT POPUP MENU
// for mobile
const seeProjectBtnMobile = document.querySelectorAll('.mobile .see-project');
const modalMobile = document.createElement('div');
modalMobile.classList.add('modal-mobile');
const allElement = document.querySelector('#all-element'); // for both desktop and mobile

// for desktop
const seeProjectBtnDesktop = document.querySelectorAll('.desktop .see-project');
const modalDesktop = document.createElement('div');
modalDesktop.classList.add('modal-desktop');

// function called when see project button is clicked in mobile;
function mobile() {
  document.body.appendChild(modalMobile);
  allElement.classList.add('bluring');
  document.querySelector('#modal-close').addEventListener('click', () => {
    modalMobile.remove();
    allElement.classList.remove('bluring');
  });
}
// function called when see project button is clicked in desktop;
function desk() {
  document.body.appendChild(modalDesktop);
  allElement.classList.add('bluring');
  document.querySelector('#modal-close').addEventListener('click', () => {
    modalDesktop.remove();
    allElement.classList.remove('bluring');
  });
}

// mobile modal design

for (let i = 0; i < projects.length; i += 1) {
  modalMobile.innerHTML = `<div class="modal-headings">
  <h2 class="mobile-Modal-Heading">${projects[i].mobileModalHeading}</h2>
  <div><img src="images/Icon - Cancel.png" alt="close-icon" id="modal-close" /></div>
  </div>
  <div class="lang list">
  <ul>
    <li><button>${projects[i].technologiesModal[0]}</button></li>
    <li><button>${projects[i].technologiesModal[1]}</button></li>
    <li><button>${projects[i].technologiesModal[2]}</button></li>
  </ul>
  </div>
  <img src="images/modal-mobile.png" alt="close-icon" class="image" />
  <p>${projects[i].modalDescription}</p>

  <div class="live-btns">
  <a href="https://henry-dura.github.io/portfolio-mobile-first/" target="_blank"><button class="modal see-project">See Live <img src="images/Icon.png" alt="Github-icon" /></button></a>
  <a href="https://github.com/henry-dura/portfolio-mobile-first" target="_blank"><button class="modal see-project">See Source <img src="images/Icon -GitHub.png" alt="Github-icon" /></button></a>
  </div>

  `;
}

seeProjectBtnMobile.forEach((btn) => {
  btn.addEventListener('click', mobile);
});

// Desktop modal design

for (let i = 0; i < projects.length; i += 1) {
  modalDesktop.innerHTML = `<div class="modal-headings">
  <h2 class="Desktop-Modal-Heading">${projects[i].desktopModalHeading}</h2>
  <div><img src="images/Icon - Cancel.png" alt="close-icon" id="modal-close" /></div>
  </div>
  <div class="lang modal list ">
  <ul>
    <li><button>${projects[i].technologiesModal[0]}</button></li>
    <li><button>${projects[i].technologiesModal[1]}</button></li>
    <li><button>${projects[i].technologiesModal[2]}</button></li>
  </ul>
  </div>

  <div class="In-flex">
  <img src="images/Desktop-modal.png" alt="close-icon" class="image" />

 <div class="flex-right">
 <p>${projects[i].modalDescription}</p>

 <div class="live-btns">
 <a href="https://henry-dura.github.io/portfolio-mobile-first/" target="_blank"><button class=" modal see-project">See Live <img src="images/Icon.png" alt="Github-icon" /></button></a>
 <a href="https://github.com/henry-dura/portfolio-mobile-first" target="_blank"><button class=" modal see-project">See Source <img src="images/Icon -GitHub.png" alt="Github-icon" /></button></a>
 </div>
 </div>

  </div>

  `;
}

seeProjectBtnDesktop.forEach((btn) => {
  btn.addEventListener('click', desk);
});

// first see-project button
const buttn = document.querySelector('.see-project');

if (window.screen.width <= 768) {
  buttn.addEventListener('click', mobile);
} else {
  buttn.addEventListener('click', desk);
}

window.addEventListener('resize', () => this.location.reload());


optionDesk = document.querySelector('optionD');
optionMobile = document.querySelector('optionM');

function widthCheck(){
  if(window.innerWidth <= 768){
    optionDesk.required = false;
  }else{
    optionMobile.required = false; 
  }
}

if(window.addEventListener){
  widthCheck();
  window.addEventListener('resize', widthCheck)
}

// contact form validation

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

fullName.addEventListener('focusout', visitorData);
email.addEventListener('focusout', visitorData);
feedback.addEventListener('focusout', visitorData);
firstName.addEventListener('focusout', visitorData);
lastName.addEventListener('focusout', visitorData);

const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  firstName.value = visitorDataExist.First;
  lastName.value = visitorDataExist.Last;
  fullName.value = visitorDataExist.Name;
  email.value = visitorDataExist.Email;
  feedback.value = visitorDataExist.Message;
}
