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
const maxTile = 2;

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

const returnTo = function () {
  setTimeout(function () {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }, 1);
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
    returnTo();
  } else return true;
};

const letterWrap = function () {
  const firstNameTitle = document.querySelectorAll(".hero--name");

  const str = firstNameTitle[0];
  const strOne = firstNameTitle[1];

  const strText = str.textContent;
  const strTextOne = strOne.textContent;

  const splitText = strText.split("");
  const splitTextOne = strTextOne.split("");
  str.textContent = "";
  strOne.textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    str.innerHTML += "<span>" + splitText[i] + "</span>";
    strOne.innerHTML += "<span>" + splitTextOne[i] + "</span>";
  }
};

letterWrap();

//EVENTS HANDLERS
//EVENTS HANDLERS
//EVENTS HANDLERS

// Button that smoothy scrolls to contact sections
heroButton.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
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

const spans = document.querySelectorAll("span");

spans.forEach(function (el) {
  el.addEventListener("mouseenter", function () {
    el.classList.add("fade");
  });
  el.addEventListener("mouseleave", function () {
    el.classList.remove("fade");
  });
});

const firstName = btnRight.addEventListener("click", function () {
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
    returnTo();
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

gsap.from(".svg--img", { duration: 3, x: 500, ease: "bounce" });

/* ---- COPIED PARTICLE BG CODE---- */
/* ---- COPIED PARTICLE BG CODE---- */
/* ---- COPIED PARTICLE BG CODE---- */

particlesJS("homeSection", {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 0,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/* ---- Particles background code COPIED---- */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 380,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
