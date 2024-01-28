'use strict';

//DOM MANIPULATION---------------
//making javascript interact with a webpage is called DOM manipulation
//DOM = Document Object Model.
//It allows for the structured representation/manipulation of HTML documents
/*
//for selecting a class, you use . for selecting an id, you use #
//.textContent grabs the text within the class
console.log(document.querySelector('.message').textContent);

//this changes the content in the class.
document.querySelector('.message').textContent = '😎 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//math.random is a random number between 0 - 1.
//multiplying math.random by a number gives you a value between that number and 0
//trunc takes away the decimals, but cuts off the last number, so add 1.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//This is an event listener and handler that checks for a button click
document.querySelector('.check').addEventListener('click', function () {
  //need to convert the value from string to number here.
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if no value, or 0 is the input
  if (!guess) {
    displayMessage('Guess a number between 1 - 20');

    //win condition
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#70c770';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose.');
      document.querySelector('.score').textContent = 0;
    }
  }

  //guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose.';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
});
