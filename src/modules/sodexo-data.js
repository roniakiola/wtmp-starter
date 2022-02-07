'use strict';

import { fetchData } from './fetch-data';

const coursesFi = [];
const coursesEn = [];

let currentDate = new Date().toISOString().split('T')[0];
const sodexoUrl = `https://www.sodexo.fi/ruokalistat/output/daily_json/152/${currentDate}`;

const fetchCoursesFi = async () => {
  const response = await fetchData(sodexoUrl);
  Object.values(response.courses).forEach((course) => {
    coursesFi.push(course.title_fi);
  });
  console.log(coursesFi);
};

const fetchCoursesEn = async () => {
  const response = await fetchData(sodexoUrl);
  Object.values(response.courses).forEach((course) => {
    coursesEn.push(course.title_en);
  });
  console.log(coursesEn);
};
fetchCoursesFi();
fetchCoursesEn();

const SodexoData = { coursesFi, coursesEn, currentDate };
export default SodexoData;
