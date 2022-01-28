'use strict';

//1:
// If user types same values as in cheatArray in exact order, will alert be shown on the page

let cheatArray = ['k', 'a', 'l', 'j', 'a', 'a'];
//users inputs saved in an array
let userInserts = [];
//counter for comparing array values
let count = 0;

window.addEventListener('keyup', (e) => {
  //comparing pressed key value to array value
  if (e.key === cheatArray[count]) {
    userInserts.push(e.key);
    count++;
  } else {
    userInserts = [];
  }
  if (userInserts.length === cheatArray.length) {
    alert('Perjantain olut avattu');
    userInserts = [];
    count = 0;
  }
});
//2:
//render cursor coodrinates on web page
const cursorCoordinates = (e) => {
  const Coords = document.querySelector('p');
  Coords.innerHTML = 'X:' + e.pageX + '<br>' + 'Y:' + e.pageY;
};
//double click triggers the function
window.addEventListener('dblclick', cursorCoordinates);

//3:
//Mouse over hover element
const target = document.querySelector('h1');

target.addEventListener('mouseover', (e) => {
  e.target.innerHTML = 'DONT TOUCH ME >:(';
});
target.addEventListener('mouseout', (e) => {
  e.target.innerHTML = 'Touch me :)';
});
//4 & 5:
//On DOM load: start two timers
window.addEventListener('DOMContentLoaded', () => {
  //Timeout works once, then stops
  setTimeout(() => {
    const timerText = document.querySelector('.timer-text');
    timerText.textContent = 'Hurry up!';
  }, 15000);

  let counter = 0;
  const idleTimer = document.querySelector('.idle-timer');
  //every 1 second (1000ms) the counter is ingremented by 1. If mouse movement or keyboard presses are not registered
  //in 15 seconds, text is then rendered on the page
  const noMovement = () => {
    if (counter === 15) {
      idleTimer.textContent = 'DO SOMETHING!!!';
      resetTimer();
    } else {
      console.log(counter);
      counter++;
    }
  };
  const resetTimer = () => {
    counter = 0;
  };

  setInterval(() => {
    noMovement();
  }, 1000);

  //clear textcontent and reset
  window.onmousemove = () => {
    idleTimer.textContent = ' ';
    resetTimer();
  };

  window.onkeyup = () => {
    idleTimer.textContent = ' ';
    resetTimer();
  };
});
