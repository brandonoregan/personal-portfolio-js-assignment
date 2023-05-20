"use strict";

const projectTiles = document.querySelectorAll(".project__container");

projectTiles.forEach(function (container) {
  container.addEventListener("click", function () {
    container.classList.toggle("project__tile--bigger");
  });
});
