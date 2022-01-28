"use strict";

import SodexoLunchMenu from "../assets/menu.json";

const coursesFi = [];
const coursesEn = [];

const parseSodexoLunchMenu = () => {
  let arr = Object.values(SodexoLunchMenu.courses);

  for (let i = 1; i <= arr.length; i++) {
    coursesFi.push(SodexoLunchMenu.courses[i].title_fi);
    coursesEn.push(SodexoLunchMenu.courses[i].title_en);
  }
};
parseSodexoLunchMenu();
const SodexoData = { coursesEn, coursesFi };
export default SodexoData;
