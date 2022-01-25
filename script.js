const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
const menuElement = document.getElementsByClassName('menu-option');
const navbarLi = document.querySelectorAll('#navbar li');
const openModal = document.getElementsByClassName('open-modal');
const modal = {
  name: '<h1 id="name">Multi Post Stories</h1>',
  buttonClose: '<button type="button" class="close-menu" id="close-modal"></button>',
  technologies: '<li class="tags-elements">css</li><li class="tags-elements">html</li><li class="tags-elements">bootstrap</li><li class="tags-elements">Ruby</li>',
  featuredImage: document.createElement('img'),
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  linkLive: '<a class="button" href="#">See Live <iclass="fas fa-external-link-alt"></i></a>',
  linkSource: '<a class="button" href="#">See Source <iclass="fab fa-github"></i></a>'
};


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

function openModalFunc() {
  const div = document.createElement('div');
  div.className = 'popup-container';
  div.innerHTML = '<section id="modal-section" class="modal-section"></section>';
  document.body.appendChild(div);
  const modalSection = document.getElementById('modal-section');
  const headlineButton = document.createElement('div');
  headlineButton.className = 'headline-button-wrapper';
  headlineButton.innerHTML = modal.name.concat(modal.buttonClose);
  modalSection.appendChild(headlineButton);
  const technologies = document.createElement('ul');
  technologies.id = 'technologies';
  technologies.className = 'tags';
  technologies.innerHTML = modal.technologies;
  modalSection.appendChild(technologies);
  modal.featuredImage.src = './img/img-modal.png';
  modalSection.appendChild(modal.featuredImage);
  const description = document.createElement('p');
  description.id = 'description';
  description.innerHTML = modal.description;
  modalSection.appendChild(description);
  const popupButtons = document.createElement('div');
  popupButtons.className = 'popup-buttons';
  popupButtons.innerHTML = modal.linkLive.concat(modal.linkSource)
  modalSection.appendChild(popupButtons);
  const closeModalButton = document.getElementById('close-modal');
  closeModalButton.addEventListener('click', closeModalFunc, true);
}

function closeModalFunc() {
  const popupContainer = document.getElementsByClassName('popup-container')[0];
  popupContainer.remove();
}

menuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);
menuElement[0].addEventListener('click', closeMenu, true);
menuElement[1].addEventListener('click', closeMenu, true);
menuElement[2].addEventListener('click', closeMenu, true);
//closeModalButton.addEventListener('click', closeModalFunc, true);
for(let i = 0; i < openModal.length; i+=1) {
  openModal[i].addEventListener('click', openModalFunc, true);
}