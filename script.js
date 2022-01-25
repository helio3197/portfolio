const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
const menuElement = document.getElementsByClassName('menu-option');
const navbarLi = document.querySelectorAll('#navbar li');

function openMenu() {
  header.classList.add('mobile-menu', 'mobile-menu-animation');
  logo.style.display = 'none';
  menuIcon.classList.replace('menu-icon', 'menu-icon-close');
  closeMenuIcon.style.display = 'block';
  navbar.classList.replace('navbar', 'navbar-open');
  mobileNav.classList.add('mobile-menu-nav');
  setTimeout(() => {
    for (let i = 0; i < 3; i += 1) {
      menuElement[i].classList.add('menu-animation');
      navbarLi[i].classList.add('navbar-animation');
    }
  }, 1);
}

function closeMenu() {
  for (let i = 0; i < 3; i += 1) {
    menuElement[i].classList.remove('menu-animation');
    navbarLi[i].classList.remove('navbar-animation');
  }
  header.classList.remove('mobile-menu-animation');
  closeMenuIcon.style.display = 'none';
  setTimeout(() => {
    logo.style.display = 'block';
    menuIcon.classList.replace('menu-icon-close', 'menu-icon');
    navbar.classList.replace('navbar-open', 'navbar');
    mobileNav.classList.remove('mobile-menu-nav');
    header.classList.remove('mobile-menu');
  }, 350);
}

menuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);
menuElement[0].addEventListener('click', closeMenu, true);
menuElement[1].addEventListener('click', closeMenu, true);
menuElement[2].addEventListener('click', closeMenu, true);