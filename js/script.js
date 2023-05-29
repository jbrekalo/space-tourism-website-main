"use strict";

const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".menu-close-icon");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.add("open-nav");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("open-nav");
});
