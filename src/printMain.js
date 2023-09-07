import { getAllLocalData, lookForLocalData, getLocal } from "./localStorage";
import { createDivEditTask, Task, getProjectInfo } from "./projects";
import { formatDistance, subDays } from 'date-fns'
import { All, Today, Week, Important, Favourite, Completed } from './timePeriod'; 


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
    if (!findWord(text)) {
            h1.dataset.name = text.dataset.name;
            h1.dataset.id = text.dataset.id;
            h1.dataset.local = text.dataset.local;
            h1.textContent = text.dataset.name;
    };
    return main;
}

function showTaskInput() {
    const container = document.getElementById('no-show') || document.getElementById('yes-show') ;
    container.id = 'yes-show';
    container.appendChild(createTaskForm())
    return container;
}

function createTaskForm() {
    const myForm = document.getElementById('task-form');
    const h1Main = document.getElementById('h1-main');
    if (myForm) return;
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
        input.id = inputName;
        
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
    addButton.type = 'submit';
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

    addButton.addEventListener('click', addTask)
    cancelButton.addEventListener('click', hideTaskSection)
    
    return form;
}

function addTask (event) {
    event.preventDefault();
    let data = getLocal();
    const inputTitle = document.getElementById('title');
    const inputDescription = document.getElementById('description');
    const inputDate = document.getElementById('date');
    const inputFavourite = document.getElementById('favourite');
    const inputImportant = document.getElementById('important');
    const project = data.dataset.name;
    const local = data.dataset.local;
    const nameTask = `${project} ${local}`;

    const title = inputTitle.value;
    const description = inputDescription.value;
    const date = inputDate.value;
    const favourite = inputFavourite.checked;
    const important = inputImportant.checked;
    const completed = false;

    const savedProject = localStorage.getItem(local);
    const saved = JSON.parse(savedProject);

    if (title && description && date) {
        const newTask = new Task(project, title, description, date, favourite, important, completed);
    
        // Obtener las tareas existentes del Local Storage (si las hay)
        const myProject = JSON.parse(localStorage.getItem(local));
        // Agregar la nueva tarea al arreglo
        myProject.tasks.push(newTask);
    
        // Modifico la info, Guardar las tareas actualizadas en el Local Storage
        localStorage.setItem(local, JSON.stringify(myProject));
        hideTaskSection();
        createMainContent(data)
    }
    else if (title && description && !date) alert('Select date');
    else if (title && !description && date) alert('Add Description');
    else if (!title && description && date) alert('Create a title');
    else alert('Please Complete Title, Description and Date');


}

function hideTaskSection() {
    const container = document.getElementById('yes-show');
    container.innerHTML = '';
    container.id = 'no-show';
}

function createDivTask (task) {
    const div = document.createElement('div');
    const leftContainer = document.createElement('div');
    const radio = document.createElement('input');
    const radioBox = document.createElement('div');
    const textBox = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const rightContainer = document.createElement('div');
    const date = document.createElement('p');
    const favourite = document.createElement('img'); 
    const important = document.createElement('img'); 
    const edit = document.createElement('img');
    
    title.textContent = task.title;
    description.textContent = task.description;
    radio.type = "radio";
    date.textContent = task.date;
    if (task.favourite) {
        favourite.src = './images/favorites.png';
    }
    else {
        favourite.src = './images/empty-star.png';
    }
    if (task.important) {
        important.src = './images/important.png';
    }
    else {
        important.src = './images/black-important.png';
    }
    edit.src = './images/edit-pencil.png';
    
    favourite.classList.add('task-img');
    important.classList.add('task-img');
    edit.classList.add('task-img');
    edit.classList.add('pencils');
    div.classList.add('div-has-task'); 
    leftContainer.classList.add('left-container');
    rightContainer.classList.add('right-container');
    textBox.classList.add('text-box');
    radioBox.classList.add('radio-box');
    title.classList.add('task-title');
    description.classList.add('task-description');
    date.classList.add('task-date');

    edit.addEventListener('click', createDivEditTask);
    edit.dataset.type = 'task';

    textBox.appendChild(title);
    textBox.appendChild(description);
    radioBox.appendChild(radio)

    leftContainer.appendChild(radioBox)
    leftContainer.appendChild(textBox);

    rightContainer.appendChild(date);
    rightContainer.appendChild(favourite);
    rightContainer.appendChild(important);
    rightContainer.appendChild(edit);

    div.appendChild(leftContainer);
    div.appendChild(rightContainer);
    return div;
}

function renderTasks (tasks) {
    const container = document.createElement('div');
    const main = document.querySelector('.main');
    container.id = 'tasks-container';
    
    for (let i = 0; i < tasks.length; i++) {
        const divTask = createDivTask(tasks[i]);
        container.appendChild(divTask);
    }
    main.appendChild(container);
    return main;
}

function renderAddTaskSection () {
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

function getProjectfromLocal (local) {
    const jsonString = localStorage.getItem(local);
    const project = JSON.parse(jsonString);
    return project.tasks;
}
 
function createMainDescription (text) {
    if (!findWord(text)) {
        const info = text.dataset.local;
        const div = renderAddTaskSection();
        const tasks = getProjectfromLocal(info);
        if (tasks.length) {
            renderTasks(tasks);
            return div;
        }
         return div;
    }

    if (findWord(text)) {
        const div = renderAddTaskSection();
        const tasks = getTimePeriod(text);
        if (tasks.length) {
            renderTasks(tasks);
            return div;
        }
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

function getTimePeriod (name) {
    let data = getAllLocalData ();
    const classMap = {
        'All': All,
        'Today': Today,
        'Week': Week,
        'Important': Important,
        'Favourites': Favourite,
        'Completed': Completed
      };
    const section = new (classMap[name])();
    const selectedTasks = section.printTimePeriodFromLocal(data);

    // if (selectedTasks.length) {
    //     //
    // }
        
    return selectedTasks;  
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

    else if (!findWord()) {
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


export {renderTasks, createMainContent, defaultMain, printMain};
