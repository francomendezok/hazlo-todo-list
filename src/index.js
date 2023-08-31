import printSidebar from "./hideMenu";
import { defaultMain, printMain } from "./printMain";
import darkMode from "./darkMode";

const switcher = document.getElementById('switch');
const menu = document.getElementById('menu');
const categories = document.querySelectorAll('.time-period');

categories.forEach(cat => cat.addEventListener('click', () => printMain(event)));
menu.addEventListener('click', printSidebar);
switcher.addEventListener('click', darkMode)

document.addEventListener('DOMContentLoaded', () => {
    defaultMain();
});



// TODO
// 1. Add Project (Factorie Function or Classes)
// 2. Create Tasks (Factorie Function or Classes, localStorage, date-fns library)
// 3. Print Main
//
//