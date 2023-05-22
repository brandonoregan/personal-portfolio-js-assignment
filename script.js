"use strict";

const projectTiles = document.querySelectorAll(".projects--tile");

projectTiles.forEach(function (container) {
  container.addEventListener("click", function () {
    container.classList.toggle("chosen--tile");
  });
});
