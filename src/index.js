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
  let maxCost = 5;
  let priceArr = menuArr.map((dish) => dish.price);
  let filteredArr = priceArr.filter((price) => price < maxCost);
  console.log(filteredArr);
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
    for (let b = 0; b < LunchMenus[i].SetMenus.length; b++) {
      vegMeals[i].SetMenus.push({
        Name: LunchMenus[i].SetMenus[b].Name,
        Meals: [],
      });
      for (let c = 0; c < LunchMenus[i].SetMenus[b].Meals.length; c++) {
        if (LunchMenus[i].SetMenus[b].Meals[c].Diets.includes("Veg"))
          vegMeals[i].SetMenus[b].Meals.push(
            LunchMenus[i].SetMenus[b].Meals[c]
          );
      }
    }
  }
  console.log(vegMeals);
};
veganMeals();
