import { getProjectInfo } from "./projects";

function createMainContent (text) {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const main = document.querySelector('.main')
    main.innerHTML = '';
    div.classList.add('inner-text')
    h1.textContent = text;
    h1.id = 'h1-main';
    main.appendChild(div)
    div.appendChild(h1)
    return main;
}

function defaultMain () {
    const allDiv = document.querySelector('#default');
    allDiv.classList.add('clicked');
    createMainContent('All');
}

function colorSelected (event) {
    
}

function printMain (event) {
    const h1 = document.getElementById('h1-main');
    const h1Text = h1.textContent;
    const homeTexts = ['All', 'Today', 'Week', 'Important', 'Favourites', 'Completed'];
    const findWord = homeTexts.some(word => word === h1Text)
    const parent = event.target.closest('.time-period');

    if (event.target.classList[0] === 'time-period') {
        const name = event.target.dataset.name;
        createMainContent(name);
        const categories = document.querySelectorAll('.time-period');
        categories.forEach(cat => cat.classList.remove('clicked')); 
        event.target.classList.add('clicked')
        const container = document.getElementById('show-my-projects');
        const otherDivs = container.querySelectorAll('.div-project');
        otherDivs.forEach(otherDiv => otherDiv.classList.remove('clicked-project'));
    }
    else if (event.target.classList[0] === 'div-project') {
        const categories = document.querySelectorAll('.div-project');
        categories.forEach(cat => cat.classList.remove('clicked-project')); 
        event.target.classList.add('clicked-project')
        const container = document.getElementById('show-my-projects');
        const otherDivs = container.querySelectorAll('.div-project');
        otherDivs.forEach(otherDiv => otherDiv.classList.remove('clicked-project'));
    }

    else if (event.target.closest('.time-period')) {
        const name = event.target.dataset.name;
        createMainContent(name);
        const categories = document.querySelectorAll('.time-period');
        categories.forEach(cat => cat.classList.remove('clicked')); 
        parent.classList.add('clicked');
        const container = document.getElementById('show-my-projects');
        const otherDivs = container.querySelectorAll('.div-project');
        otherDivs.forEach(otherDiv => otherDiv.classList.remove('clicked-project'));
    }

    else if (!findWord && event.target.textContent !== "") {
        const categories = document.querySelectorAll('.time-period');
        categories.forEach(cat => cat.classList.remove('clicked')); 
    
        let myId = event.target.dataset.id;
        
        const div = document.getElementById(myId);
        const container = document.getElementById('show-my-projects');
        
        const otherDivs = container.querySelectorAll('.div-project');
    
        otherDivs.forEach(otherDiv => otherDiv.classList.remove('clicked-project'));
    
        div.classList.add('clicked-project');
    }
    
    
    
}


export {createMainContent, defaultMain, printMain};
