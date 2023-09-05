import printSidebar from "./hideMenu";
import { defaultMain, printMain } from "./printMain";
import darkMode from "./darkMode";
import { renderProjects, createAddSection, createProject, getProjectInfo } from "./projects";
import { createDivProject, getLocal, saveLocalProject, saveLocalTask, lookForLocalData } from "./localStorage";

const switcher = document.getElementById('switch');
const menu = document.getElementById('menu');
const categories = document.querySelectorAll('.time-period');
const addProject = document.getElementById('create-project');

categories.forEach(cat => cat.addEventListener('click', printMain));
menu.addEventListener('click', printSidebar);
switcher.addEventListener('click', darkMode);
addProject.addEventListener('click', createAddSection);
document.addEventListener('DOMContentLoaded', () => {
    defaultMain();
    renderProjects(); 
});


