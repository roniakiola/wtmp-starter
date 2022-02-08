'use strict';

import { fetchData } from './fetch-data';

//current date YYYY-MM-DD
let currentDate = new Date().toISOString().split('T')[0];

let coursesFi = [];
let coursesEn = [];

//Using current date in URL to fetch days lunch menu
const sodexoUrl = `https://www.sodexo.fi/ruokalistat/output/daily_json/152/${currentDate}`;

//fetching menu data and parsing every course name into array
let parseMenu = async (menu, language) => {
  const response = await fetchData(sodexoUrl);
  Object.values(response.courses).forEach((course) => {
    if (language === 'fi') {
      menu.push(course.title_fi);
    } else {
      menu.push(course.title_en);
    }
  });
  return menu;
};
coursesFi = parseMenu(coursesFi, 'fi');
coursesEn = parseMenu(coursesEn, 'en');

const SodexoData = { coursesFi, coursesEn };
export default SodexoData;
