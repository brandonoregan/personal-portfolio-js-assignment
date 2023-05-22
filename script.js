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

// Button that smoothy scrolls to contact sections
heroButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

// event listener for nav tabs to smooth scroll
navbar.addEventListener("click", function (e) {
  if (e.target.closest("li").innerHTML === "HOME") {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
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
