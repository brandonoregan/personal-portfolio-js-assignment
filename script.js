"use strict";

const projectTiles = document.querySelectorAll(".projects--tile");
const heroButton = document.querySelector(".hero__button");
const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.getElementById("contactSection");
const navbar = document.querySelector(".navbar");

// Add a class that increase tile size
projectTiles.forEach(function (container) {
  container.addEventListener("click", function () {
    container.classList.toggle("chosen--tile");
  });
});

//EVENTS LISTENERS
//EVENTS LISTENERS
//EVENTS LISTENERS
// Button that smoothy scrolls to contact sections
heroButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// event listener for nav tabs to smooth scroll
navbar.addEventListener("click", function (e) {
  if (e.target.closest("li").innerHTML === "ABOUT") {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.closest("li").innerHTML === "PROJECTS") {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
  if (e.target.closest("li").innerHTML === "CONTACT") {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});

const tiles = document.querySelectorAll(".projects--tile");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
const projectsContainer = document.querySelector(".projects__container");

let currentTile = 0;
const maxTile = tiles.length;

btnRight.addEventListener("click", function () {
  currentTile = (currentTile + 1) % maxTile;
  const translation = -(currentTile * 100) + "%"; // Adjust the translation value based on your tile size
  tiles.forEach((tile, i) => {
    tile.style.transform = `translateX(${translation})`;
  });
});

btnLeft.addEventListener("click", function () {
  currentTile = (currentTile - 1 + maxTile) % maxTile;
  const translation = -(currentTile * 100) + "%"; // Adjust the translation value based on your tile size
  tiles.forEach((tile, i) => {
    tile.style.transform = `translateX(${translation})`;
  });
});
