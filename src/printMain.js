import { lookForLocalData } from "./localStorage";
import { getProjectInfo } from "./projects";
import { formatDistance, subDays } from 'date-fns'


function createMainContent (text) {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const main = document.querySelector('.main')
    const blank = document.createElement('div');
    blank.id = 'no-show';

    main.innerHTML = '';
    div.classList.add('inner-text')
    h1.textContent = text;
    h1.id = 'h1-main';
    div.appendChild(h1)
    main.appendChild(div);
    main.appendChild(blank);
    main.appendChild(createMainDescription(text));
    return main;
}

function showTaskInput() {
    const container = document.getElementById('no-show') || document.getElementById('yes-show') ;
    container.id = 'yes-show';
    container.appendChild(createTaskForm())
    return container;
}

function createTaskForm() {
    // Crear el formulario
    const form = document.createElement('form');
    form.id = 'task-form';

    // Función para crear un div wrapper para una etiqueta, un input y una imagen
    function createInputWrapper(labelText, inputType, inputName, isRequired = false) {
        const wrapper = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = labelText;
        const input = document.createElement('input');
        
        input.type = inputType;
        input.name = inputName;
        
        if (isRequired) {
            input.required = true;
        }
        wrapper.appendChild(label);
        wrapper.appendChild(input);

        wrapper.classList.add('wrapper');
        return wrapper;
    }

    // Crear el div para "Title," "Description," y "Date" en un div con la clase "input-task"
    const inputTaskWrapper = document.createElement('div');
    inputTaskWrapper.classList.add('input-task');

    const titleWrapper = createInputWrapper('Title:', 'text', 'title', true);
    const descriptionWrapper = createInputWrapper('Description:', 'text', 'description', true);
    const dateWrapper = createInputWrapper('Date:', 'date', 'date', true);

    inputTaskWrapper.appendChild(titleWrapper);
    inputTaskWrapper.appendChild(descriptionWrapper);
    inputTaskWrapper.appendChild(dateWrapper);

    // Crear el div para "Favourite," "Important," y los dos botones en un div con la clase "priority-task"
    const priorityTaskWrapper = document.createElement('div');
    priorityTaskWrapper.classList.add('priority-task');

    const favouriteWrapper = createInputWrapper('Favourite:', 'checkbox', 'favourite', false);
    const importantWrapper = createInputWrapper('Important:', 'checkbox', 'important', false);

    priorityTaskWrapper.appendChild(favouriteWrapper);
    priorityTaskWrapper.appendChild(importantWrapper);

    // Crear el contenedor para los botones
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container-task';

    // Crear el botón "Add"
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.textContent = 'Add';
    addButton.classList.add('accept');

    // Crear el botón "Cancel"
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('decline');

    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    priorityTaskWrapper.appendChild(buttonContainer);

    // Agregar los divs de "input-task" y "priority-task" al formulario
    form.appendChild(inputTaskWrapper);
    form.appendChild(priorityTaskWrapper);

    return form;
}






 
function createMainDescription (text) {
    if (!findWord(text)) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const container = document.createElement('div');
        
        div.classList.add('div-create-task');
        container.classList.add('container-create-task');
        img.src = './images/plus.png';
        h3.textContent = 'Add Task';
        h3.style.marginLeft = '5%';
        container.appendChild(img);
        container.appendChild(h3)
        div.appendChild(container);
        container.addEventListener('click', showTaskInput);
        return div;
    }
    else {
        const h3 = document.createElement('h3');
        h3.textContent = 'No Tasks';
        h3.classList.add('description');
        return h3;
    }
}

function defaultMain () {
    const allDiv = document.querySelector('#default');
    allDiv.classList.add('clicked');
    createMainContent('All');
}

function colorSelected (event) {
    
}

function findWord(optionalParam) {
    const h1 = document.getElementById('h1-main');
    const h1Text = h1.textContent;
    const homeTexts = ['All', 'Today', 'Week', 'Important', 'Favourites', 'Completed'];

    if (optionalParam !== undefined) {
        const h1Text = optionalParam;
        return homeTexts.some(word => word === h1Text);
    }

    return homeTexts.some(word => word === h1Text);
}


function printMain (event) {
   
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

    else if (!findWord() && event.target.textContent !== "") {
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
