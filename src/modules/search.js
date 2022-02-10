'use strict';
//some kind of bad search function for input field to find menus
//logs results into console

const searchMenu = async (menus, e) => {
  //input field user input string
  let value = e.target.value;
  //results into array
  let results = [];
  //show results if input > 2 characters
  if (value.length > 2) {
    //remove whitespace and input to lower case
    value = value.trim().toLowerCase();
    //search if menus contain input value and pass to array if true
    for (const menu of Object.values(menus)) {
      const search = menu.filter((a) => a.toLowerCase().includes(value));
      if (search.length > 0) {
        search.map((a) => results.push(a));
        console.log(results);
      }
    }
  }
};
export default { searchMenu };
