import printSidebar from "./hideMenu";
import darkMode from "./darkMode";
import { defaultMain, printMain } from "./printMain";
import { renderProjects, createAddSection } from "./projects";

const menu = document.getElementById("menu");
const categories = document.querySelectorAll(".time-period");
const addProject = document.getElementById("create-project");

categories.forEach((cat) => cat.addEventListener("click", printMain));
menu.addEventListener("click", printSidebar);
addProject.addEventListener("click", createAddSection);
window.addEventListener("click", (event) => {
  const projectEditSection = document.getElementById("show-edit-project");
  if (event.target.classList.contains("edit-dots")) return;
  else if (projectEditSection) {
    projectEditSection.id = "blank-edit-project";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  defaultMain();
  renderProjects();
  darkMode();
  const switcher = document.querySelector(".darkmode-toggle");
  const plusImages = document.querySelectorAll('img[src="./images/plus.png"]');

  switcher.addEventListener("click", () => {
    if (document.body.classList[0] === "darkmode--activated") {
      menu.src = "./images/white-menu.png";
      plusImages.forEach((img) => (img.src = "./images/plus-white.png"));
    } else {
      menu.src = "./images/menu.png";
      plusImages.forEach((img) => (img.src = "./images/plus.png"));
    }
  });
  if (document.body.classList[0] === "darkmode--activated") {
    menu.src = "./images/white-menu.png";
    plusImages.forEach((img) => (img.src = "./images/plus-white.png"));
  } else {
    menu.src = "./images/menu.png";
    plusImages.forEach((img) => (img.src = "./images/plus.png"));
  }
});
