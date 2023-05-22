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

// tiles.forEach((tile, i) => (tile.style.transform = `translateX(${100 * i})%`));

btnRight.addEventListener("click", function () {
  console.log("hey");
  if (currentTile === maxTile - 1) {
    currentTile = 0;
  } else {
    currentTile++;
  }
  tiles.forEach(
    (tile, i) =>
      (tile.style.transform = `translateX(${300 * (i + currentTile)}px)`)
  );
});

btnLeft.addEventListener("click", function () {
  //   if (currentTile === 0) {
  //     currentTile = maxTile - 1;
  //   } else {
  //     currentTile--;
  //   }
  tiles.forEach(
    (tile, i) =>
      (tile.style.transform = `translateX(${-300 * (i + currentTile)}px)`)
  );
});
