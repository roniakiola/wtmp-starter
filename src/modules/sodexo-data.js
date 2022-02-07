'use strict';

import { fetchData } from './fetch-data';

//current date YYYY-MM-DD
let currentDate = new Date().toISOString().split('T')[0];

const sodexoUrl = `https://www.sodexo.fi/ruokalistat/output/daily_json/152/${currentDate}`;

//fetch data and map new array
const coursesFi = async () => {
  const menu = await fetchData(sodexoUrl);
  return Object.values(menu.courses).map((a) => a.title_fi);
};

const coursesEn = async () => {
  const menu = await fetchData(sodexoUrl);
  return Object.values(menu.courses).map((a) => a.title_en);
};

const SodexoData = { coursesFi, coursesEn };
export default SodexoData;
