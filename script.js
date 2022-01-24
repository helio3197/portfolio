const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menu_icon = document.getElementById('menu-icon');
const close_menu = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const mail_icon = document.getElementById('mail-icon');
const mobile_nav = document.getElementById('mobile-nav');

function openMenu() {
  header.classList.add('mobile-menu');
  logo.style.display = "none";
  menu_icon.classList.replace("menu-icon", "menu-icon-close"); 
  close_menu.style.display = "block";
  navbar.classList.replace("navbar","navbar-open");
  mobile_nav.classList.add('mobile-menu-nav')
}

function closeMenu() {
  header.classList.remove('mobile-menu');
  logo.style.display = "block";
  menu_icon.classList.replace("menu-icon-close", "menu-icon");
  close_menu.style.display = "none";
  navbar.classList.replace("navbar-open", "navbar");
  mobile_nav.classList.remove('mobile-menu-nav') 

}

menu_icon.addEventListener('click', openMenu, true);
close_menu.addEventListener('click', closeMenu, true);