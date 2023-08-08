"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//function to not repeat closing or open code
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//taking all classes
for (let i = 0; i < btnShowModal.length; i++)
  //executions
  btnShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
//global
document.addEventListener("keydown", function (e) {
  if (e.key === 'Escape' || e.key === 'Shift'){
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
 