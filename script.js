const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
const menuElement = document.getElementsByClassName('menu-option');
const navbarLi = document.querySelectorAll('#navbar li');
const openModal = document.getElementsByClassName('open-modal');
const blurBg = [document.getElementById('headline'), document.getElementById('portfolio'), document.getElementById('about'), document.getElementById('contact'), document.getElementById('footer')];

const modalData = {
  projectOne: {
    name: 'Multi Post Stories',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    featuredImage: './img/img-modal.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: '#',
    linkSource: '#',
  },
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
  header.style.display = 'none';
  const div = document.createElement('div');
  div.className = 'popup-container';
  div.innerHTML = '<section id="modal-section" class="modal-section"></section>';
  document.body.appendChild(div);
  const modalSection = document.getElementById('modal-section');
  const headlineButton = document.createElement('div');
  headlineButton.className = 'headline-button-wrapper';
  headlineButton.innerHTML = `<h1 class="title-modal">${modalData.projectOne.name}</h1><button type="button" class="close-menu" id="close-modal"></button>`;
  modalSection.appendChild(headlineButton);
  const technologies = document.createElement('ul');
  technologies.className = 'tags tags-modal';
  let technologiesElements = '';
  for (let i = 0; i < modalData.projectOne.technologies.length; i += 1) {
    technologiesElements = technologiesElements.concat(`<li class="tags-elements">${modalData.projectOne.technologies[i]}</li>`);
  }
  technologies.innerHTML = technologiesElements;
  modalSection.appendChild(technologies);

  const featuredImage = document.createElement('img');
  featuredImage.className = 'featured-image-modal';
  featuredImage.src = modalData.projectOne.featuredImage;
  featuredImage.alt = 'featured image for the project';
  const description = document.createElement('p');
  description.className = 'description-modal';
  description.innerHTML = modalData.projectOne.description;
  const modalButtons = document.createElement('div');
  modalButtons.className = 'buttons-modal';
  modalButtons.innerHTML = `<a class="button" href="${modalData.projectOne.linkLive}">See Live<i class="fas fa-external-link-alt"></i></a><a class="button" href="${modalData.projectOne.linkSource}">See Source<i class="fab fa-github"></i></a>`;

  const mediaQueryDesktop = window.matchMedia('(min-width: 768px)');

  function switchDesktopMobile(mediaQuery) {
    if (mediaQuery.matches) {
      const imgParButnWrap = document.createElement('div');
      imgParButnWrap.className = 'img-paragraph-button-wrapper';
      imgParButnWrap.appendChild(featuredImage);
      const parButnWrap = document.createElement('div');
      parButnWrap.className = 'paragraph-button-wrapper';
      parButnWrap.appendChild(description);
      parButnWrap.appendChild(modalButtons);
      imgParButnWrap.appendChild(parButnWrap);
      modalSection.appendChild(imgParButnWrap);
      const mobileModal = document.getElementsByClassName('image-paragraph-wrapper')[0];
      if (!!mobileModal === true) {
        mobileModal.remove();
      }
    } else {
      const imgParWrap = document.createElement('div');
      imgParWrap.className = 'image-paragraph-wrapper';
      imgParWrap.appendChild(featuredImage);
      imgParWrap.appendChild(description);
      modalSection.appendChild(imgParWrap);
      modalSection.appendChild(modalButtons);
      const desktopModal = document.getElementsByClassName('img-paragraph-button-wrapper')[0];
      if (!!desktopModal === true) {
        desktopModal.remove();
      }
    }
  }

  mediaQueryDesktop.addEventListener('change', switchDesktopMobile);
  switchDesktopMobile(mediaQueryDesktop);

  function closeModalFunc() {
    const popupContainer = document.getElementsByClassName('popup-container')[0];
    popupContainer.remove();
    header.style.display = 'flex';
    blurBg.forEach((element) => element.classList.remove('blur'));
  }

  const closeModalButton = document.getElementById('close-modal');
  closeModalButton.addEventListener('click', closeModalFunc, true);

  blurBg.forEach((element) => element.classList.add('blur'));
}

menuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);
menuElement[0].addEventListener('click', closeMenu, true);
menuElement[1].addEventListener('click', closeMenu, true);
menuElement[2].addEventListener('click', closeMenu, true);
for (let i = 0; i < openModal.length; i += 1) {
  openModal[i].addEventListener('click', openModalFunc, true);
}

const form = document.getElementById('contact-form');
const {
  username,
  email,
  message,
} = form.elements;
const errorElmnt = document.getElementById('submit-error-message');
const errorMsg = 'Please enter a valid email address format';
const regEx = /^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/gm;

function showError(msg) {
  errorElmnt.textContent = msg;
  if (errorElmnt.className !== 'submit-error-message') errorElmnt.classList.toggle('submit-error-message');
  email.style.border = '1px solid red';
  email.style.padding = '14px 15px';
}

function emptyForm() {
  username.value = '';
  email.value = '';
  message.value = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!regEx.test(email.value.trim())) {
    showError(errorMsg);
  } else {
    form.submit();
    localStorage.removeItem('form');
    emptyForm();
  }
});

function fillStorage() {
  const formObj = {
    username: username.value,
    email: email.value,
    message: message.value,
  };
  const formJSON = JSON.stringify(formObj);
  localStorage.setItem('form', formJSON);
}

function fillForm() {
  const formObj = JSON.parse(localStorage.getItem('form'));

  try {
    username.value = formObj.username;
    email.value = formObj.email;
    message.value = formObj.message;
  } catch {
    username.value = '';
    email.value = '';
    message.value = '';
  }
}

fillForm();

username.addEventListener('change', fillStorage);
email.addEventListener('change', fillStorage);
message.addEventListener('change', fillStorage);