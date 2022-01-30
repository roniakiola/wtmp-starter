'use strict';

import SodexoData from './modules/sodexo-data';

console.log(SodexoData);

let language = 'fi';
let currentMenu = SodexoData.coursesFi;

const restaurantContainer = document.querySelector('.restaurant-container');

const restaurantCard = document.createElement('div');
restaurantCard.classList.add('restaurant-card');

const restaurantName = document.createElement('h3');
restaurantName.textContent = 'Ravintola';

const menuContent = document.createElement('p');
menuContent.textContent = currentMenu;

const languageButton = document.createElement('button');
languageButton.textContent = 'Language: FIN';

const sortButton = document.createElement('button');
sortButton.textContent = 'Sort menu';

const randomDishButton = document.createElement('button');
randomDishButton.textContent = 'Random dish';

restaurantCard.appendChild(restaurantName);
restaurantCard.appendChild(menuContent);
restaurantCard.appendChild(languageButton);
restaurantCard.appendChild(sortButton);
restaurantCard.appendChild(randomDishButton);
restaurantContainer.appendChild(restaurantCard);

const changeLanguage = () => {
  if (language === 'fi') {
    language = 'en';
    currentMenu = SodexoData.coursesEn;
    languageButton.textContent = 'Language: ENG';
  } else {
    language = 'fi';
    currentMenu = SodexoData.coursesFi;
    languageButton.textContent = 'Language: FIN';
  }
};

const sortMenu = (menu, order) => {
  const sortedMenu = menu.sort();
  if (order === 'desc') {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

const renderMenu = () => {
  menuContent.textContent = currentMenu;
};

const init = () => {
  languageButton.addEventListener('click', () => {
    changeLanguage();
    renderMenu();
  });

  let order = 'desc';
  sortButton.addEventListener('click', () => {
    if (order === 'desc') {
      order = 'asc';
    } else {
      order = 'desc';
    }
    sortMenu(currentMenu, order);
    renderMenu();
  });

  randomDishButton.addEventListener('click', () => {
    var dish = currentMenu[Math.floor(Math.random() * currentMenu.length)];
    alert(dish);
  });
};
init();
