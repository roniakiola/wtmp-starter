"use strict";

import LunchMenu from "./menu.json";

console.log(LunchMenu);

const menuArr = [
  { name: "Lingonberry jam", price: 4.0 },
  { name: "Mushroom and bean casserole", price: 5.5 },
  { name: "Chili-flavoured wheat", price: 3.0 },
  { name: "Vegetarian soup", price: 4.8 },
  { name: "Pureed root vegetable soup with smoked cheese", price: 8.0 },
];

const regex = new RegExp(/^[A-ZÖÄÅ]{1}[a-zöäå]{4,64}([-,\\\/()\w\d\s]+)$/);

const validateName = () => {
  let results = menuArr.map((dish) => dish.name);

  results.forEach((result) => {
    console.log("DISH: " + result + " REGEX: " + regex.test(result));
  });
};
validateName();

const sortByPrice = () => {
  const menuByPrice = menuArr.sort((a, b) => {
    return a.price - b.price;
  });
  console.log(menuByPrice);
};
sortByPrice();

const filterByPrice = () => {
  const maxPrice = 5;
  const filteredMenu = menuArr.filter((a) => a.price < maxPrice);
  console.log(filteredMenu);
};
filterByPrice();

const raisePrices = () => {
  let counter = 1.15;
  let priceArr = menuArr.map((dish) => (dish.price * counter).toFixed(2));
  console.log(priceArr);
};
raisePrices();

const menuCost = () => {
  let newArr = menuArr.reduce((a, b) => ({
    price: a.price + b.price,
  }));
  console.log(newArr);
};
menuCost();

const veganMeals = () => {
  const LunchMenus = LunchMenu.LunchMenus;
  let vegMeals = [];

  for (let i = 0; i < LunchMenus.length; i++) {
    vegMeals.push({
      SetMenus: [],
    });
    for (let j = 0; j < LunchMenus[i].SetMenus.length; j++) {
      vegMeals[i].SetMenus.push({
        Name: LunchMenus[i].SetMenus[j].Name,
        Meals: [],
      });
      for (let n = 0; n < LunchMenus[i].SetMenus[j].Meals.length; n++) {
        if (LunchMenus[i].SetMenus[j].Meals[n].Diets.includes("Veg"))
          vegMeals[i].SetMenus[j].Meals.push(
            LunchMenus[i].SetMenus[j].Meals[n]
          );
      }
    }
  }
  console.log(vegMeals);
};
veganMeals();
