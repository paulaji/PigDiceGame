'use strict';

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
