'use strict';

const btnShowModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

btnShowModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
