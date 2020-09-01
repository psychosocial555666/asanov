
const DEBOUNCE_INTERVAL = 500;
let lastTimeout = null;

const pageBody = document.querySelector('body');

const toogleButton = pageBody.querySelector('.side-bar__toogle');
const mainNavItems = pageBody.querySelectorAll('.main-nav__item');
const mainNavItemsDropdown = pageBody.querySelectorAll('.dropdown-true');
const sideBar = pageBody.querySelector('.side-bar');
const mainNav = sideBar.querySelector('.main-nav');
const catalog = pageBody.querySelector('.catalog');
const catalogItems = pageBody.querySelectorAll('.catalog__item');
const footerSectionTitles = pageBody.querySelectorAll('.footer-section__title');
const buyButtons = pageBody.querySelectorAll('.product__buy');
const searchForm = pageBody.querySelector('.user-menu__search');


pageBody.classList.remove('modal-open');
sideBar.classList.remove('overlay');
mainNav.classList.remove('main-nav--opened');

if (pageBody.offsetWidth <= 1279) {

  catalog.classList.remove('content-row');
  catalog.classList.add('carousel');
  catalog.setAttribute('data-flickity', '{ "freeScroll": true, "contain": true, "prevNextButtons": false, "pageDots": false }')
  catalogItems.forEach(item => {
    item.classList.remove('col-lg-3');
    item.classList.add('carousel-cell');
    item.classList.add('mobile-col');
  });
  
};


function openMainNavigation() {

  pageBody.classList.toggle('modal-open');
  sideBar.classList.toggle('overlay');
  mainNav.classList.toggle('main-nav--opened');

}


function onDropdownToogle(evt) {

  mainNavItemsDropdown.forEach(element => {
    if (element !== evt.currentTarget) {
      element.classList.remove('main-nav__item--opened');
    }
  });

  evt.currentTarget.classList
  .toggle('main-nav__item--opened');

}


function onBuyButtonPress(evt) {

  evt.target.parentElement.parentElement
  .querySelector('.button-pink').classList
  .add('button-pink--active');

  evt.target.parentElement.parentElement
  .querySelector('.quantity').classList
  .add('quantity--active');

}


function onFooterSectionPress(evt) {

  evt.target.parentElement.classList
  .toggle('footer-section--opened');

}


function debounce(callback) {

  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window
  .setTimeout(callback, DEBOUNCE_INTERVAL);

}


function onSearchDown(evt) {

  const searchValue = pageBody
  .querySelector('.search__input').value;

  if (evt.keyCode == 13 && searchValue) {
    debounce(() => {
      alert('Searching:' + searchValue)
    })
  }

}


searchForm.addEventListener('submit', (evt) => evt.preventDefault());
mainNavItems.forEach(element => {
  element.addEventListener('click', onDropdownToogle);
});
footerSectionTitles.forEach(element => {
  element.addEventListener('click', onFooterSectionPress);
});

buyButtons.forEach(element => {
  element.addEventListener('click', onBuyButtonPress);
});
document.addEventListener('keydown', onSearchDown);
toogleButton.addEventListener('click', openMainNavigation);