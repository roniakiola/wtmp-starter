"use strict";

import LunchMenu from "../assets/menu.json";

const coursesFi = [];
const coursesEn = [];

let arr = Object.entries(LunchMenu.courses);
console.log(arr);

for (let i = 1; i <= arr.length; i++) {
  coursesFi.push(LunchMenu.courses[i].title_fi);
  coursesEn.push(LunchMenu.courses[i].title_en);
}
const SodexoData = { coursesEn, coursesFi };
export default SodexoData;
