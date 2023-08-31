import printSidebar from "./hideMenu";
import printMain from "./printMain";

const menu = document.getElementById('menu');
const categories = document.querySelectorAll('.time-period');

categories.forEach(cat => cat.addEventListener('click', () => printMain(event)));
menu.addEventListener('click', printSidebar);

printMain('all');
