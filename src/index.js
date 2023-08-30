import printSidebar from "./hideMenu";

const menu = document.getElementById('menu');
const categories = document.querySelectorAll('.time-period');

categories.forEach(cat => cat.addEventListener('click', () => console.log('Hola')));

menu.addEventListener('click', printSidebar);
