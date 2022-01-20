"use strict";

const highestNumber = 1000;
const lowestNumber = 1;
const maxGuessCount = 10;
let randomNumber = Math.floor(Math.random() * highestNumber) + lowestNumber;

const infoText = document.querySelector(".info-text");
infoText.textContent = `We have selected a random number between ${lowestNumber} and ${highestNumber}. See if you can guess it in ${maxGuessCount} turns or fewer. We will tell you if your guess was too high or too low.`;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

let timerStart = Date.now();

/**
 * Forms an array from 0 to declared highestNumber
 */
const numbersArray = [];
for (let i = 0; i <= highestNumber; i++) {
  numbersArray.push(i);
}
/**
 * findNumber goes through the array we formed above. First it splits the array in half and checks
 * if randomNumber is on the left (1-499) or right (501-1000) side of the array and then proceeds to search
 * the side using same logic over and over again until key value is found.
 */
const findNumber = () => {
  let start = 0;
  let end = numbersArray.length - 1;
  //set loop conditions
  while (start <= end && guessCount <= maxGuessCount) {
    //Middle value is a changing variable depeding on start and end values. Middle is used to determine points where we split the array.
    let middle = Math.ceil((start + end) / 2);

    if (randomNumber === numbersArray[middle]) {
      guessField.value = middle;
      checkGuess();
      return console.log(
        `!FOUND! => middle: ${middle}, randomNumber: ${randomNumber}`
      );
    }
    //search right side of the array
    if (randomNumber > numbersArray[middle]) {
      start = middle + 1;
      guessField.value = middle;
      checkGuess();
    }
    //search left side of the array
    if (randomNumber < numbersArray[middle]) {
      end = middle - 1;
      guessField.value = middle;
      checkGuess();
    }
  }
};
findNumber();

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === maxGuessCount) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);

  let timerEnd = (Date.now() - timerStart) / 1000;
  //simply using lowOrHi's empty field to fill it with game timer
  console.log(timerEnd);
  lowOrHi.textContent =
    "Time taken to finish the game: " +
    timerEnd +
    " seconds." +
    "Total guesses: " +
    guessCount;
}

function resetGame() {
  timerStart = Date.now();
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * highestNumber) + lowestNumber;
}
