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
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item8',
      mobileModalHeading:'Multi Post Stories',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Data Dashboard Healthcare',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item9',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Website Portfolio',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item10',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Project Art Printing Data',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item11',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Data Dashboard Healthcare',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item12',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  },
  {
      nameMobile: 'Project Art Printing Data',
      nameDesk: 'Website Portfolio',
      description: "PPA daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      technologies:['html','bootstrap','Ruby'],
      technologiesModal:['html','bootstrap','Ruby on rails'],
      DesktopItem: 'item13',
      mobileModalHeading:'Multi Post Stories',
      desktopModalHeading:'Keeping track of hundreds  of components website',
      modalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      live:'https://henry-dura.github.io/portfolio-mobile-first/',
      source:'https://github.com/henry-dura/portfolio-mobile-first',

  }
]

const container = document.querySelector('.grid-container');

// mobile cards
for(let i = 0; i< projects.length;i++){
    const div = document.createElement('div');
    div.classList.add('grid','mobile');
    container.appendChild(div);
}

let count = 0;

let arr = [...container.children];

for(let i = 2;i<arr.length;i++){
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
count++
}

for(let i = 0; i< projects.length;i++){
  const div = document.createElement('div');
  div. classList.add('grid','desktop', projects[i].DesktopItem )
  container.appendChild(div);
}

let count2 = 0;

let arr2 = [...container.children];

for(let i = 8;i<arr2.length;i++){
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
count2++

}

const seeProjectBtnMobile = document.querySelectorAll('.mobile .see-project');
const modalMobile = document.createElement('div');
modalMobile.classList.add('modal-mobile');
