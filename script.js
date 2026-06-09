'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  message.textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  number.textContent = '?';
  guessEl.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});