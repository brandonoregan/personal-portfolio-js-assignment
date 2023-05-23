"use strict";

const projectTiles = document.querySelectorAll(".projects--tile");
const projectsContainer = document.querySelector(".projects__container");
const heroButton = document.querySelector(".hero__button");
const navbar = document.querySelector(".navbar");
const tiles = document.querySelectorAll(".projects--tile");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
const contactForm = document.querySelector(".contact__form");
const submitButton = document.querySelector(".submit__button");
const textInput = document.querySelector(".text__input");
const emailInput = document.querySelector(".email__input");
const textAreaInput = document.querySelector(".textarea__input");
const header = document.querySelector(".header");
const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.getElementById("contactSection");

const messageArr = [];

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
header.addEventListener("click", function (e) {
  if (e.target.nodeName === "IMG") {
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

// Functions
// Functions
// Functions

let currentTile = 0;
const maxTile = 4;

const translateLeft = function () {
  currentTile = (currentTile + 1) % maxTile;
  tiles.forEach((tile) => {
    tile.style.transform = `translateX(-${currentTile * 100}%)`;
  });
};

const translateRight = function () {
  currentTile = (currentTile - 1 + maxTile) % maxTile;
  const translation = `-${currentTile * 100}%`;
  tiles.forEach((tile) => {
    tile.style.transform = `translateX(${translation})`;
  });
};

class Message {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  thankyouMessage() {
    console.log(`Hey, ${this.name} I'll be in contact with you soon. 😁`);
  }
}

const processForm = function (e) {
  e.preventDefault();
  const name = textInput.value;
  const email = emailInput.value;
  const message = textAreaInput.value;
  const newMessage = new Message(name, email, message);
  textInput.value = emailInput.value = textAreaInput.value = "";

  messageArr.push(newMessage);
  console.log(newMessage);
};

// Event handlers
// Event handlers
// Event handlers

btnRight.addEventListener("click", function () {
  translateLeft();
  console.log(currentTile);
});

btnLeft.addEventListener("click", function () {
  translateRight();
});

contactForm.addEventListener("submit", function (e) {
  processForm(e);

  //   modelPop();
});
