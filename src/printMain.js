import { getAllLocalData, lookForLocalData, getLocal } from "./localStorage";
import { setCompleted, editOneTaskFeature, setFavourite, setImportant, edit, saveChangedTask, createDivEditTask, Task, getProjectInfo } from "./projects";
import { formatDistance, subDays } from 'date-fns'
import { All, Today, Week, Important, Favourite, Completed } from './timePeriod'; 

let lastExecutionData;
let lastPencil;


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

function showTaskInput(data) {
    const container = document.getElementById('no-show') || document.getElementById('yes-show') ;
    container.id = 'yes-show';
    
    if (data) {
        lastExecutionData = data;
        if (!container.innerHTML) {
            container.appendChild(createTaskForm(data));
        }
    }
   
    else {
        container.appendChild(createTaskForm())
    }
    return container;
}

function createTaskForm(data) {

    const form = document.createElement('form');
    form.id = 'task-form';

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

        if (input.type === 'text') {
            input.maxLength = 20;
        }
        wrapper.appendChild(label);
        wrapper.appendChild(input);

        wrapper.classList.add('wrapper');

        return wrapper;
    }

    const inputTaskWrapper = document.createElement('div');
    inputTaskWrapper.classList.add('input-task');

    const titleWrapper = createInputWrapper('Title:', 'text', 'title', true);
    const descriptionWrapper = createInputWrapper('Description:', 'text', 'description', true);
    const dateWrapper = createInputWrapper('Date:', 'date', 'date', true);

    inputTaskWrapper.appendChild(titleWrapper);
    inputTaskWrapper.appendChild(descriptionWrapper);
    inputTaskWrapper.appendChild(dateWrapper);

    const priorityTaskWrapper = document.createElement('div');
    priorityTaskWrapper.classList.add('priority-task');

    const favouriteWrapper = createInputWrapper('Favourite:', 'checkbox', 'favourite', false);
    const importantWrapper = createInputWrapper('Important:', 'checkbox', 'important', false);

    inputTaskWrapper.appendChild(favouriteWrapper);
    inputTaskWrapper.appendChild(importantWrapper);

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container-task';

    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'Add';
    addButton.classList.add('accept');

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('decline');

    const hideButton = document.createElement('button');
    hideButton.type = 'button';
    hideButton.textContent = 'Cancel';
    hideButton.classList.add('hide');

    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    priorityTaskWrapper.appendChild(buttonContainer);

    form.appendChild(inputTaskWrapper);
    form.appendChild(priorityTaskWrapper);


    addButton.addEventListener('click', addTask);
    cancelButton.addEventListener('click', hideTaskSection)
    
    if (data.project && data.title) {
       addButton.textContent = 'Save';
       cancelButton.textContent = 'Delete';
       hideButton.textContent = 'Cancel';
       hideButton.style.backgroundColor = 'orange';
       buttonContainer.appendChild(hideButton);
       form.addEventListener('submit', event => event.preventDefault());
       addButton.removeEventListener('click', addTask);
       cancelButton.removeEventListener('click', hideTaskSection);
        addButton.addEventListener('click', () => edit(data, 'Task', 'Modify'));
        cancelButton.addEventListener('click', () => edit(data, 'Task', 'Delete'));
        hideButton.addEventListener('click', hideTaskSection);
    }
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

    const title = inputTitle.value;
    const description = inputDescription.value;
    const date = inputDate.value;
    const favourite = inputFavourite.checked;
    const important = inputImportant.checked;
    const completed = false;

    const savedProject = localStorage.getItem(local);
    const saved = JSON.parse(savedProject);

    if (title && description && date) {
        const newTask = new Task(project, title, description, date, favourite, important, completed, local);
    
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
    if (container) {
        container.innerHTML = '';
        container.id = 'no-show';
    }
}

function createDivTask (task) {
    const div = document.createElement('div');
    const leftContainer = document.createElement('div');
    const check = document.createElement('input');
    const checkBox = document.createElement('div');
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
    check.type = "checkbox";
    check.classList.add('check');
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
    if (task.completed) {
        check.checked = true;
        title.style.textDecoration = 'line-through';
        description.style.textDecoration = 'line-through';
    }
    else {
        check.checked = false;
        title.style.textDecoration = '';
        description.style.textDecoration = '';
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
    checkBox.classList.add('check-box');
    title.classList.add('task-title');
    description.classList.add('task-description');
    date.classList.add('task-date');

    for (const key in task) {
        if (task.hasOwnProperty(key)) {
            edit.setAttribute(`data-${key}`, task[key]);
            check.setAttribute(`data-${key}`, task[key]);
        }
    }
    favourite.addEventListener('click', function () {
        const reference = favourite.src;
        setFavourite(task, reference);
    });
    important.addEventListener('click', function () {
        const reference = important.src;
        setImportant(task, reference);
    });
    check.addEventListener('click', () => setCompleted(task));

    edit.addEventListener('click', () => {
        hideTaskSection();
        createDivEditTask(task);
        createTaskForm(task);
    });



    edit.dataset.type = 'task';

    textBox.appendChild(title);
    textBox.appendChild(description);
    checkBox.appendChild(check)

    leftContainer.appendChild(checkBox)
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
        const h1Text = document.getElementById('h1-main'); 
        
        if (!findWord(h1Text.textContent)) {
            div.classList.add('div-create-task');
            container.classList.add('container-create-task');
            img.src = './images/plus.png';
            h3.textContent = 'Add Task';
            h3.style.marginLeft = '5%';
            container.appendChild(img);
            container.appendChild(h3)
            div.appendChild(container);
            container.addEventListener('click', showTaskInput);
        }

        return div;
}

function getProjectfromLocal (local) {
    const jsonString = localStorage.getItem(local);
    const project = JSON.parse(jsonString);
    return project.tasks;
}
 
function createMainDescription (text) {
    // if (text.textContent) text = text.textContent;
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
        else {
            const h3 = document.createElement('h3');
            h3.textContent = 'No Tasks';
            h3.classList.add('description');
            return h3;
        }
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


export { getTimePeriod, findWord, hideTaskSection, showTaskInput, createMainDescription, renderTasks, createMainContent, defaultMain, printMain};
