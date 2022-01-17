'use strict';

const coursesEn = ["Hamburger, cream sauce and poiled potates",
"Goan style fish curry and whole grain rice",
"Vegan Chili sin carne and whole grain rice",
"Broccoli puree soup, side salad with two napas",
"Lunch baguette with BBQ-turkey filling",
"Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
"Goalaista kalacurrya ja täysjyväriisiä",
"vegaani Chili sin carne ja täysjyväriisi",
"Parsakeittoa,lisäkesalaatti kahdella napaksella",
"Lunch baguette with BBQ-turkey filling",
"Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

const restaurantCard = document.createElement('div');
restaurantCard.classList.add('restaurant-card');

const restaurantName = document.createElement('h3');
restaurantName.textContent = 'Ravintola';

const menuContent = document.createElement('p');
menuContent.textContent = coursesFi;

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

const restaurantContainer = document.querySelector('.restaurant-container');
restaurantContainer.appendChild(restaurantCard);

sortButton.addEventListener('click', () => {
  if (menuContent.textContent == coursesFi){
  coursesFi.sort();
  menuContent.textContent = coursesFi;
  } else {
    coursesEn.sort();
    menuContent.textContent = coursesEn;
  }
});

languageButton.addEventListener('click', () => {
  if (menuContent.textContent == coursesFi){
    menuContent.textContent = coursesEn;
    languageButton.textContent = 'Language: ENG';
  } else {
    menuContent.textContent = coursesFi;
    languageButton.textContent = 'Language: FIN';
  }
});

randomDishButton.addEventListener('click', () => {
  if (menuContent.textContent == coursesFi){
    var dish = coursesFi[Math.floor(Math.random()*coursesFi.length)];
  } else {
    var dish = coursesEn[Math.floor(Math.random()*coursesEn.length)];
  }
  const randomDish = document.createElement('p');
  randomDish.textContent = dish;
  restaurantCard.appendChild(randomDish);
});