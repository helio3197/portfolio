const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menuIcon = document.getElementById('menu-icon');
const closeMenuIcon = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const mobileNav = document.getElementById('mobile-nav');
const menuElement = document.getElementsByClassName('menu-option');
const navbarLi = document.querySelectorAll('#navbar li');
const featuredProject = document.getElementsByClassName('featured-work')[0];
const cardsContainer = document.getElementsByClassName('cards-container')[0];

const data = [
  {
    id: 'bookLawyersApp',
    name: 'Book-A-Lawyer',
    technologies: ['Ruby', 'Ruby-on-Rails', 'PostgreSQL', 'JavaScript', 'React', 'Redux', 'Sass', 'Bootstrap', 'JWT-Auth', 'AWS-S3', 'Full-stack'],
    featuredImageCard: './img/book-lawyers-app.png',
    featuredImage: './img/book-lawyers-app.gif',
    descriptionCard: 'A Ruby-on-Rails|React/Redux full-stack app for booking lawyers.',
    description: 'Book-A-Lawyer is a full-stack app built with React, Redux, and Ruby on Rails that allows users to access legal services easily, users can create an account and get access to multiple professional lawyers, see their details, and book appointments with them. Users can edit or remove reservations on the My reservations page, and edit their personal information on the My Account page. Admin users can access the Lawyers dashboard and add a new lawyer or edit/remove an existing one. This app stands out by its high responsiveness, the app is optimized to look great on all devices.',
    linkLive: 'https://book-a-lawyer-app.herokuapp.com/',
    linkSource: 'https://github.com/helio3197/book-a-lawyer-app-frontend',
  },
  {
    id: 'budgetApp',
    name: 'Budget App',
    technologies: ['Ruby', 'Ruby-on-Rails', 'JavaScript', 'Turbo', 'Stimulus', 'PostgreSQL', 'Sass', 'Bootstrap', 'Full-stack'],
    featuredImageCard: './img/budget.png',
    featuredImage: './img/budget.png',
    description: '--In construction-- A Ruby on Rails app for managing personal budget and generating transactions with categories. Features: Create an account and upload your profile picture, create categories with customized icons, create transactions for a specific category, login to your account everywhere.',
    descriptionCard: 'A Rails app for managing personal budget in categories.',
    linkLive: 'https://budget-app-helio.herokuapp.com/',
    linkSource: 'https://github.com/helio3197/budget-app',
  },
  {
    id: 'covidMetrics',
    name: 'Global Covid Metrics',
    technologies: ['React', 'Redux', 'JavaScript', 'Sass', 'Bootstrap', 'REST-API'],
    featuredImageCard: './img/global-covid-metrics.png',
    featuredImage: './img/global-covid-metrics.gif',
    description: 'This is a web App built with React-Redux that allows users to: Visualize last 24h global covid statistics, Filter stats by continent, Filter stats by country, Filter stats by regions (if available), Search country stats by name. Features: Country shapes are available for most countries. Optimized for mobile devices.',
    descriptionCard: 'A React web app that renders global covid metrics with filter features.',
    linkLive: 'https://covid-metrics-helio.netlify.app/',
    linkSource: 'https://github.com/helio3197/covid-metrics',
  },
  {
    id: 'restaurantApp',
    name: 'El Pesquero Web App',
    technologies: ['JavaScript', 'REST-APIs', 'Webpack', 'Bootstrap', 'HTML/CSS'],
    featuredImageCard: './img/restaurant-app.png',
    featuredImage: './img/restaurant-app.gif',
    descriptionCard: 'A collaborative-built App that uses external APIs to show meals from around the world. Featuring Like and Comments interactions.',
    description: 'This website displays recipes meals using APIs to retrieve details from a DataBase and also implements features like adding a functional Like button for every item and a section for adding a new comment. All these through an external API to send and receive data.',
    linkLive: 'https://luissalas94.github.io/javascript-capstone-project/dist/',
    linkSource: 'https://github.com/LuisSalas94/javascript-capstone-project',
  },
  {
    id: 'magicPeru',
    name: 'Magic Peru',
    technologies: ['React', 'JavaScript', 'Sass', 'Bootstrap'],
    featuredImageCard: './img/magic-peru.png',
    featuredImage: './img/magic-peru.png',
    description: '--In Construction-- A react webapp for a tourism agency, that shows destinies from Peru, it stands out for its images gallery and clean layout. --TO DO: *Replace placeholder content, *Create English version, *Tune up styles',
    descriptionCard: 'A React webapp for a tourism agency',
    linkLive: 'https://magic-peru.netlify.app/',
    linkSource: 'https://github.com/helio3197/magic-peru',
  },
  {
    id: 'conferencePage',
    name: 'Conference Website',
    technologies: ['CSS', 'HTML', 'JavaScript', 'Bootstrap'],
    featuredImageCard: './img/conference-page.png',
    featuredImage: './img/conference-page.gif',
    description: 'A conference page for an important incoming event. This site contains all the information about the event and shows the user how to join the featured event. This app stands out for its responsiveness, clean layout, and professional design.',
    descriptionCard: 'A conference page for an important incoming event.',
    linkLive: 'https://helio3197.github.io/conference-page/',
    linkSource: 'https://github.com/helio3197/conference-page',
  },
  {
    id: 'bookstore',
    name: 'Bookstore',
    technologies: ['React', 'Redux', 'JavaScript', 'REST-API', 'CSS'],
    featuredImageCard: './img/bookstore.png',
    featuredImage: './img/bookstore.png',
    description: '--In Construction-- A React-Redux web app that renders a list of books from a database and allows the users to perform several actions like adding and removing books, as well as updating its progress. --TO DO: *Add account management system, *Add Edit feature',
    descriptionCard: 'A React-Redux web app that renders a list of books from a database and allows the users to perform several actions.',
    linkLive: 'https://bookstore-helio.herokuapp.com/',
    linkSource: 'https://github.com/helio3197/bookstore',
  },
];

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

function openModalFunc(e) {
  const dataObj = data[+e.target.dataset.index];
  document.body.style.overflow = 'hidden';
  header.style.display = 'none';
  const div = document.createElement('div');
  div.className = 'popup-container';
  document.body.appendChild(div);
  const modalSection = document.getElementsByClassName('popup-container')[0];
  const mediaQueryDesktop = window.matchMedia('(min-width: 768px)');
  const technologiesList = dataObj.technologies.map((item) => `<li class="tags-elements">${item}</li>`).join('');

  function switchDesktopMobile(mediaQuery) {
    if (mediaQuery.matches) {
      modalSection.innerHTML = `
      <section id="modal-section" class="modal-section">
        <div class="headline-button-wrapper">
          <h1 class="title-modal">${dataObj.name}</h1>
          <button type="button" class="close-menu" id="close-modal"></button>
        </div>
        <ul class="tags tags-modal">
          ${technologiesList}
        </ul>
        <div class="img-paragraph-button-wrapper">
          <div class="featured-image-modal-wrapper">
            <img class="featured-image-modal" src=${dataObj.featuredImage} alt="featured image for the project">
          </div>
          <div class="paragraph-button-wrapper">
            <p class="description-modal">${dataObj.description}</p>
            <div class="buttons-modal">
              <a class="button" href=${dataObj.linkLive} target="_blank" rel="noreferrer noopener">See Live<i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
              <a class="button" href=${dataObj.linkSource} target="_blank" rel="noreferrer noopener">See Source<i class="fab fa-github" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </section>`;
    } else {
      modalSection.innerHTML = `
      <section id="modal-section" class="modal-section">
        <div class="headline-button-wrapper">
          <h1 class="title-modal">${dataObj.name}</h1>
          <button type="button" class="close-menu" id="close-modal"></button>
        </div>
        <ul class="tags tags-modal">
          ${technologiesList}
        </ul>
        <div class="image-paragraph-wrapper">
          <img class="featured-image-modal" src=${dataObj.featuredImage} alt="featured image for the project">
          <p class="description-modal">${dataObj.description}</p>
        </div>
        <div class="buttons-modal">
          <a class="button" href=${dataObj.linkLive} target="_blank" rel="noreferrer noopener">See Live<i class="fas fa-external-link-alt" aria-hidden="true"></i></a>
          <a class="button" href=${dataObj.linkSource} target="_blank" rel="noreferrer noopener">See Source<i class="fab fa-github" aria-hidden="true"></i></a>
        </div>
      </section>`;
    }
  }

  mediaQueryDesktop.addEventListener('change', switchDesktopMobile);
  switchDesktopMobile(mediaQueryDesktop);

  function closeModalFunc() {
    const popupContainer = document.getElementsByClassName('popup-container')[0];
    popupContainer.remove();
    header.style.display = 'flex';
    document.body.style.overflow = '';
  }

  function modalClick(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

  const closeModalButton = document.getElementById('close-modal');
  const noCloseClickInside = document.getElementById('modal-section');
  const closeClickOutside = document.getElementsByClassName('popup-container')[0];

  closeModalButton.addEventListener('click', closeModalFunc, true);
  noCloseClickInside.addEventListener('click', modalClick);
  closeClickOutside.addEventListener('click', closeModalFunc);
}

menuIcon.addEventListener('click', openMenu, true);
closeMenuIcon.addEventListener('click', closeMenu, true);
menuElement[0].addEventListener('click', closeMenu, true);
menuElement[1].addEventListener('click', closeMenu, true);
menuElement[2].addEventListener('click', closeMenu, true);

featuredProject.id = `${data[0].id}`;
featuredProject.innerHTML = `
<div class="featured-img-wrapper">
  <img class="featured-img" src=${data[0].featuredImageCard} alt="featured-project"/>
</div>
<section class="featured-work-right-container">
  <h2>${data[0].name}</h2>
  <p>${data[0].descriptionCard}</p>
  <ul class="tags">
    ${data[0].technologies.map((item) => `<li class="tags-elements">${item}</li>`).join('')}
  </ul>
  <button type="button" class="button open-modal" data-index="0">See Project</button>
</section>`;
const openModal = document.getElementsByClassName('open-modal')[0];
openModal.addEventListener('click', openModalFunc);

let cardBgStyle = '';
let cardBgStyleLg = '';

for (let i = 1; i < data.length; i += 1) {
  const section = document.createElement('section');
  section.className = `card-works cards-animation bg-${i}`;
  section.id = `card-${i}`;
  section.innerHTML = `
  <h2>${data[i].name}</h2>
  <p>${data[i].descriptionCard}</p>
  <ul class="tags">
  ${data[i].technologies.map((item) => `<li class="tags-elements">${item}</li>`).join('')}
  </ul>
  <button type="button" class="button open-modal" data-index="${i}">See Project</button>`;
  section.querySelector('button').addEventListener('click', openModalFunc);
  cardsContainer.appendChild(section);

  cardBgStyle += `.bg-${i}{background-image: linear-gradient( 180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 60% ), url("${data[i].featuredImageCard}");}`;

  cardBgStyleLg += `.bg-${i}{overflow: hidden;animation-name: slideBackgroundR${i};animation-duration: 0.4s;animation-fill-mode: forwards;animation-direction: reverse;}
  .bg-${i}:hover{animation-name:slideBackground${i};animation-duration:0.4s;animation-fill-mode:forwards;animation-direction:normal;}

  @keyframes slideBackground${i} {
    from {background-image: linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.9) 84.18%),url("${data[i].featuredImageCard}");}

    13% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.83) 84.18%),url("${data[i].featuredImageCard}");}

    25% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.75) 84.18%),url("${data[i].featuredImageCard}");}

    37% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.63) 84.18%),url("${data[i].featuredImageCard}");}

    50% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.5) 84.18%),url("${data[i].featuredImageCard}");}

    63% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.37) 84.18%),url("${data[i].featuredImageCard}");}

    75% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.25) 84.18%),url("${data[i].featuredImageCard}");}

    87% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.13) 84.18%),url("${data[i].featuredImageCard}");}

    to {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0) 84.18%),url("${data[i].featuredImageCard}");border: 2px solid #091e42;background-origin: border-box;}
  }

  @keyframes slideBackgroundR${i} {
    from {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.9) 84.18%),url("${data[i].featuredImageCard}");}

    13% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.83) 84.18%),url("${data[i].featuredImageCard}");}

    25% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.75) 84.18%),url("${data[i].featuredImageCard}");}

    37% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.63) 84.18%),url("${data[i].featuredImageCard}");}

    50% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.5) 84.18%),url("${data[i].featuredImageCard}");}

    63% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.37) 84.18%),url("${data[i].featuredImageCard}");}

    75% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.25) 84.18%),url("${data[i].featuredImageCard}");}

    87% {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0.13) 84.18%),url("${data[i].featuredImageCard}");}

    to {background-image:linear-gradient(180.45deg,rgba(38, 38, 38, 0) 0.75%,rgba(38, 38, 38, 0) 84.18%),url("${data[i].featuredImageCard}");border: 2px solid #091e42;background-origin: border-box;}
  }
  `;
}

const bgStyleEl = document.createElement('style');
bgStyleEl.innerHTML = `${cardBgStyle}@media(min-width: 992px){${cardBgStyleLg}}`;

document.head.appendChild(bgStyleEl);

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