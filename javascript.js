const hamburgerIcon = document.querySelector('#hamburger');
const navList = document.querySelector('.nav ul');
const mobileMenu = document.querySelector('.mobile-menu');
const navBar = document.querySelector('.nav');
const closeIcon = document.querySelector('.close');


function displayMenu(){
    navBar.classList.add('non-display');
    mobileMenu.classList.remove('non-display');
    navList.classList.remove('desktop');
    mobileMenu.appendChild(navList);  
}
hamburgerIcon.addEventListener('click', displayMenu);