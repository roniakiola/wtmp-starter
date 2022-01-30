"use strict";

import SodexoMenu from "../assets/menu.json";

const coursesFi = [];
const coursesEn = [];

const parseSodexoMenu = () => {
  let arr = Object.values(SodexoMenu.courses);

  for (let i = 1; i <= arr.length; i++) {
    coursesFi.push(SodexoMenu.courses[i].title_fi);
    coursesEn.push(SodexoMenu.courses[i].title_en);
  }
};
parseSodexoMenu();
const SodexoData = { coursesEn, coursesFi };
export default SodexoData;
