'use strict';

import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';

//Uncomment below and in webpack.common.js to enable ServiceWorker for distribution

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('./service-worker.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }

let order = 'desc';
let language = 'fi';

const restaurantContainer = document.querySelector('.restaurant-container');

const languageButton = document.getElementById('changeLang');
languageButton.textContent = 'Language: FIN';

const sortButton = document.getElementById('sortMenu');
sortButton.textContent = 'Sort menu';

const randomDishButton = document.getElementById('randomDish');
randomDishButton.textContent = 'Random dish';

const changeLanguage = async () => {
  if (language === 'fi') {
    language = 'en';
    renderMenu(FazerData.coursesEn, 'fazer');
    renderMenu(await SodexoData.coursesEn, 'sodexo');
    languageButton.textContent = 'Language: ENG';
  } else {
    language = 'fi';
    renderMenu(FazerData.coursesFi, 'fazer');
    renderMenu(await SodexoData.coursesFi, 'sodexo');
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

const renderMenu = (menu, targetId) => {
  const ulElement = document.getElementById(targetId);
  ulElement.innerHTML = '';
  for (const item of menu) {
    const liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
  }
};

const init = async () => {
  renderMenu(FazerData.coursesFi, 'fazer');
  renderMenu(await SodexoData.coursesFi, 'sodexo');

  languageButton.addEventListener('click', () => {
    changeLanguage();
  });

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
