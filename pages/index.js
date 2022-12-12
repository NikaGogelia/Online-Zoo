"use strict";

// Navbar Burger Menu Feature
const burgerMenu = document.querySelector(".burger-menu > img");
const burgerList = document.querySelector(".burger-list");
const darkBackground = document.querySelector(".dark-back");

burgerMenu.addEventListener("click", () => {
  burgerList.classList.toggle("open-burger-list");
  darkBackground.classList.toggle("active-back");

  burgerList.classList.contains("open-burger-list")
    ? (document.body.style = "overflow: hidden;")
    : (document.body.style = "overflow: auto;");
});

// Form Prevent Reload On Submit
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
