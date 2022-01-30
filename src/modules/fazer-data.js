'use strict';

import FazerMenuFi from '../assets/fazer-menu-fi.json';
import FazerMenuEn from '../assets/fazer-menu-en.json';

console.log(FazerMenuFi, FazerMenuEn);

const parseDayMenu = (menu, dayOfWeek) => {
  const dayMenu = menu[dayOfWeek].SetMenus.map((setMenu) => {
    const name = setMenu.Name;
    let meals = '';
    for (const meal of setMenu.Meals) {
      meals += meal.Name + ', ';
    }
    return name ? name + ': ' + meals : meals;
  });
  return dayMenu;
};
console.log(parseDayMenu(FazerMenuEn.LunchMenus, 0));

const coursesFi = parseDayMenu(FazerMenuFi.LunchMenus, 0);
const coursesEn = parseDayMenu(FazerMenuEn.LunchMenus, 0);

const FazerData = { coursesFi, coursesEn };
export default FazerData;
