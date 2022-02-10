'use strict';

import { fetchData } from './fetch-data';

let currentDate = new Date().toISOString().split('T')[0];

let coursesFi = [];
let coursesEn = [];

const fazerUrlFi = `https://www.foodandco.fi/api/restaurant/menu/week?language=fi&restaurantPageId=270540&weekDate=${currentDate}`;
const fazerUrlEn = `https://www.foodandco.fi/api/restaurant/menu/week?language=en&restaurantPageId=270540&weekDate=${currentDate}`;

const todayIndex = () => {
  const weekDay = new Date().getDay() - 1;
  return weekDay;
};

const parseMenu = async (menu, language) => {
  let response;
  if (language === 'fi') {
    response = await fetchData(fazerUrlFi, true);
  } else {
    response = await fetchData(fazerUrlEn, true);
  }
  const parsedResponse = JSON.parse(response.contents);
  menu = parsedResponse.LunchMenus[todayIndex()].SetMenus.map((SetMenu) =>
    SetMenu.Meals.map((Meal) => Meal.Name)
  ).map((Meal) => Meal.join(', '));

  return menu;
};

coursesFi = parseMenu(coursesFi, 'fi');
coursesEn = parseMenu(coursesFi, 'en');

const FazerData = { coursesFi, coursesEn };
export default FazerData;
