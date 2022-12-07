"use strict";

const burgerMenu = document.querySelector(".burger-menu > img");
const burgerList = document.querySelector(".burger-list");

burgerMenu.addEventListener("click", () => {
  burgerList.classList.toggle("open-burger-list");
});
