'use strict';

// overlay and instruction

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

modal.classList.remove('hidden');
overlay.classList.remove('hidden');

document.addEventListener('keydown', function (event) {
  if (event.key == 'Enter' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// game code
// storing different buttons and necessary elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('btn--hold');

// firstly dice ine hide cheyyanam and setting scores to 0
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

// dice roll
btnRoll.addEventListener('click', function () {
  // first thanne random dice roll generate cheyyanam
  const dice = Math.trunc(Math.random() * 6) + 1;
  // +1 cheythille it will be 0 to 5
  console.log(dice);

  // display the corresponding dice image
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check if 1 or not, true, change to other player
});
