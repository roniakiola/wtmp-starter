'use strict';

import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';
import searchMenu from './modules/search';

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

let menus = {};

const searchBar = document.querySelector('#search');

let order = 'desc';
let language = 'fi';

const languageButton = document.getElementById('changeLang');
languageButton.textContent = 'Language: FIN';

const sortButton = document.getElementById('sortMenu');
sortButton.textContent = 'Sort menu';

const randomDishButton = document.getElementById('randomDish');
randomDishButton.textContent = 'Random dish';

const changeLanguage = async () => {
  if (language === 'fi') {
    language = 'en';
    renderMenu(menus.FazerMenuEn, 'fazer');
    renderMenu(menus.SodexoMenuEn, 'sodexo');
    languageButton.textContent = 'Language: ENG';
  } else {
    language = 'fi';
    renderMenu(menus.FazerMenuFi, 'fazer');
    renderMenu(menus.SodexoMenuFi, 'sodexo');
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
  //Init menus into variables and insert to menus object
  const SodexoMenuFi = await SodexoData.coursesFi;
  const SodexoMenuEn = await SodexoData.coursesEn;
  const FazerMenuFi = await FazerData.coursesFi;
  const FazerMenuEn = await FazerData.coursesEn;

  menus = {
    SodexoMenuFi,
    SodexoMenuEn,
    FazerMenuFi,
    FazerMenuEn,
  };

  renderMenu(FazerMenuFi, 'fazer');
  renderMenu(SodexoMenuFi, 'sodexo');

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

  searchBar.addEventListener('input', (e) => {
    searchMenu.searchMenu(menus, e);
  });
};
init();
