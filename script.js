"use strict";

const projectTiles = document.querySelectorAll(".projects--tile");
const projectsContainer = document.querySelector(".projects__container");
const heroButton = document.querySelector(".hero__button");
const navbar = document.querySelector(".navbar");
const tiles = document.querySelectorAll(".projects--tile");
const btnRight = document.querySelector(".right--arrow");
const btnLeft = document.querySelector(".left--arrow");
const contactForm = document.querySelector(".contact__form");
const submitButton = document.querySelector(".submit__button");
const textInput = document.querySelector(".text__input");
const emailInput = document.querySelector(".email__input");
const textAreaInput = document.querySelector(".textarea__input");
const header = document.querySelector(".header");
const modalButton = document.querySelector(".modal__button--close");
const modalText = document.querySelector(".modal--text");
const modalOverlay = document.querySelector(".modal--overlay");
const homeSection = document.getElementById("homeSection");
const aboutSection = document.getElementById("aboutSection");
const projectsSection = document.getElementById("projectsSection");
const contactSection = document.getElementById("contactSection");
const modal = document.querySelector(".modal");

const messageArr = [];

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

const displayModal = function () {
  const person = messageArr.slice(-1);
  const firstName = person[0].name.trim().split(" ");
  console.log(messageArr);
  //   console.log(firstName);
  console.log(person);
  modal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
  modalText.innerHTML = `
  Hey ${firstName[0]}, Thanks for the message.<br />I'll be in contact with you
          shortly!
  `;
};

const checkInput = function () {
  if (
    textInput.value === "" ||
    emailInput.value === "" ||
    textAreaInput.value === "" ||
    textInput.value === null ||
    emailInput.value === null ||
    textAreaInput.value === null
  ) {
    alert("Please fill in all inputs before submitting the form.");
    setTimeout(function () {
      contactSection.scrollIntoView({ behavior: "instant" });
    }, 1);
  } else return true;
};

//EVENTS HANDLERS
//EVENTS HANDLERS
//EVENTS HANDLERS

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

// const navLi = document.querySelectorAll(".nav__li");
// const aboutLi = document.querySelector(".about__li");

// aboutLi.addEventListener("mouseenter", function () {
//   gsap.from(".about__li", { duration: 1.5, y: 200, ease: "bounce" });
// });

// navLi.forEach(function (item) {
//   item.addEventListener("mouseenter", function (e) {
//     const yoza = e.target;
//     gsap.from("yoza", { duration: 1.5, y: 200, ease: "bounce" });
//   });
// });

btnRight.addEventListener("click", function () {
  translateLeft();
  console.log(currentTile);
});

btnLeft.addEventListener("click", function () {
  translateRight();
});

contactForm.addEventListener("submit", function (e) {
  if (checkInput()) {
    processForm(e);
    displayModal();
  }
});

window.addEventListener("click", function () {
  if (!modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
  }
});

// GSAP
// GSAP
// GSAP
heroButton.addEventListener("mouseleave", () => {});
gsap.from(".hero__button", { duration: 1.5, y: 200, ease: "bounce" });

// gsap.from(".firstName", { duration: 1.5, x: 500, ease: "none" });
gsap.from(".svg--img", { duration: 3, x: 500, ease: "bounce" });
