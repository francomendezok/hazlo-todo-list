import { saveLocalProject, saveLocalTask, lookForLocalData, sortContainer, getAllLocalData } from "./localStorage";
import { getTimePeriod, findWord, hideTaskSection, showTaskInput, defaultMain, createMainDescription, createMainContent, printMain, renderTasks } from "./printMain";

class Project {
    constructor (name) {
        this.name = name;
        this.tasks = []
    }
    addNewTask(task) {
        this.tasks.push(task);
      }
 
}
class Task {
    constructor(project, title, description, date, favourite, important, completed, local) {
            this.project = project;
            this.title = title;
            this.description = description;
            this.date = date;
            this.favourite = favourite;
            this.important = important;
            this.completed = completed;
            this.local = local;
    }
    
    modifyTask(project, title, description, date, favourite, important, completed) {
            this.project = project;
            this.title = title;
            this.description = description;
            this.date = date;
            this.favourite = favourite;
            this.important = important;
            this.completed = completed;
    }
}

    function createAddSection () {
        const blank = document.querySelector('.blank');
        const input = document.createElement('input');
        const accept = document.createElement('button');
        const decline = document.createElement('button');
        const buttonsDiv = document.createElement('div');

        if (blank.innerHTML !== '') return;
        blank.appendChild(input);
        blank.appendChild(buttonsDiv)
        buttonsDiv.appendChild(accept);
        buttonsDiv.appendChild(decline);

        accept.innerHTML = 'Add';
        decline.innerHTML = 'Cancel';

        input.placeholder = 'Enter Project Name';
        input.type = 'text';
        input.maxLength = 15;
        input.id = 'input';
        blank.id = 'show-add-section';
        accept.id = 'accept';
        decline.id = 'decline';
        buttonsDiv.id = 'buttons-div';


        accept.addEventListener('click', function () {
            const regex = /^[a-zA-Z0-9]*$/;

            if (input.value !== '' && regex.test(input.value)) {
                const name = input.value;
                createProject(name);
                hideCreateSection();
                renderProjects();
            }
            else if (!regex.test(input.value)) {
                alert(' Please type just Letters and Numbers')
            }
            else {
                alert('Empty String');
            }
        });
        decline.addEventListener('click', hideCreateSection);
    }

    function createDivEditProject (event) {
        const data = event.target;
        const div = document.createElement('div');
        const renameProject = document.createElement('p');
        const deleteProject = document.createElement('p');
        const blank = document.getElementById('blank-edit-project') || document.getElementById('show-edit-project') ;

        if (blank.id === 'show-edit-project') blank.id = 'blank-edit-project';
        else blank.id = 'show-edit-project';
        blank.innerHTML = '';
        renameProject.textContent = 'Rename';
        deleteProject.textContent = 'Delete';
        renameProject.id = 'rename-project';
        deleteProject.id = 'delete-project';
        renameProject.dataset.action = 'rename';
        deleteProject.dataset.action = 'delete';
        
        renameProject.classList.add('p-edit-project');
        deleteProject.classList.add('p-edit-project');
        div.classList.add('div-edit-project');
        blank.appendChild(div);
        div.appendChild(renameProject);
        div.appendChild(deleteProject);

        renameProject.addEventListener('click', () => {
            edit(data, 'Project', 'Modify');
        });
        deleteProject.addEventListener('click', () => {
            edit(data, 'Project', 'Delete');
        });
    }

    function createDivEditTask (data) {
        showTaskInput(data);
        editForm(data);
    }

    function edit (data, type, action) {
        const h1Main = document.getElementById('h1-main');
        const text = h1Main.textContent;
        const toClick =  document.querySelector(`[data-name="${text}"]`);

        if (type === 'Project') {
            if (action === "Delete") {
                removeData(data, 'Project');
                renderProjects();
                defaultMain();
            }
            if (action === "Modify") {
                const dataId = data.dataset.id;
                const div = document.querySelector(`div div.p-container[data-id="${dataId}"]`);
                const input = document.createElement("input");
                const save = document.createElement("img");
                const cancel = document.createElement("img");
                const rightContainer = document.createElement('div');


                input.type = 'text';
                input.placeholder = 'Change Name';
                div.classList.add('edit-with-buttons');
                div.innerHTML = '';
                save.src = "./images/save.png";
                cancel.src = "./images/cancel.png";
                save.id = 'save';
                cancel.id = 'cancel';
                rightContainer.id = 'right-container-edit-projects';
                input.dataset.name = data.dataset.name;
                input.dataset.id = data.dataset.id;
                input.dataset.local = data.dataset.local;

                rightContainer.dataset.name = data.dataset.name;
                rightContainer.dataset.id = data.dataset.id;
                rightContainer.dataset.local = data.dataset.local;

                save.dataset.name = data.dataset.name;
                save.dataset.id = data.dataset.id;
                save.dataset.local = data.dataset.local;

                cancel.dataset.name = data.dataset.name;
                cancel.dataset.id = data.dataset.id;
                cancel.dataset.local = data.dataset.local;

                
                div.appendChild(input);
                rightContainer.appendChild(save);
                rightContainer.appendChild(cancel);
                div.appendChild(rightContainer);
            
                save.addEventListener('click', () => {
                    if (input.value !== '') {
                        save.dataset.name = input.value;
                        data.dataset.name = input.value;
                        projectEditLocalData(data, input.value);
                        createMainContent(data);
                        renderProjects();
                    }
                })

                cancel.addEventListener('click', () => {
                    renderProjects();
                })
            }
        }

        if (type === 'Task') {
            if (!findWord(text)) {
                if (action === "Delete") {
                    removeData(data, 'Task');
                    const h1Main = document.getElementById('h1-main');
                    createMainContent(h1Main);
                    hideTaskSection();
                }
    
                if (action === "Modify") {
                    taskEditLocalData(data);
                    const h1Main = document.getElementById('h1-main');
                    createMainContent(h1Main);
                    hideTaskSection();
                }
            }

            if (findWord(text)) {
                if (action === "Delete") {
                    console.log('Delete now');
                    removeData(data, 'Task');
                    hideTaskSection();
                    toClick.click();
                }
    
                if (action === "Modify") {
                    taskEditLocalData(data);
                    hideTaskSection();
                    toClick.click();
                }
        }
    }
}

    function editForm (data) {
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const date = document.getElementById('date');
        const important = document.getElementById('important');
        const favourite = document.getElementById('favourite');
        
        title.value = data.title;
        description.value = data.description;
        date.value = data.date;
        important.checked = data.important; 
        favourite.checked = data.favourite;    
    }

    function getLocalProject (local) {
        const localProject = JSON.parse(localStorage.getItem(local));
        return localProject;
    }


    function removeData (data, type) {
        if (type === "Project") {
            const deletedProject = data.dataset.local;
            localStorage.removeItem(deletedProject);    
            const blank = document.getElementById('show-edit-project');
            blank.id = 'blank-edit-project';
        }

        if (type === "Task") {
            const project = JSON.parse(localStorage.getItem(data.local));
            const tasks = project.tasks;
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].title === data.title) {
                    const taskKey = `task_${tasks[i].title}`; 
                    localStorage.removeItem(taskKey);    
                    tasks.splice(i, 1); 
                }
            }
            localStorage.setItem(data.local, JSON.stringify(project)); 
        }
        
    }

    function projectEditLocalData (name, newName) {
        const local = name.dataset.local;
        const itemEnLocalStorage = JSON.parse(localStorage.getItem(local));
        itemEnLocalStorage.name = newName;
        const tasks = itemEnLocalStorage.tasks;
        tasks.forEach(task => task.project = newName);
        localStorage.setItem(local, JSON.stringify(itemEnLocalStorage));
    }

    function taskEditLocalData(data) {
        const title = document.getElementById('title');
        const description = document.getElementById('description');
        const date = document.getElementById('date');
        const important = document.getElementById('important');
        const favourite = document.getElementById('favourite');
        const local = data.local;
        const project = JSON.parse(localStorage.getItem(local));
        const tasks = project.tasks;
        
            for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].title === data.title) {
                    tasks[i].title = title.value;
                    tasks[i].description = description.value;
                    tasks[i].date = date.value;
                    tasks[i].important = important.checked;
                    tasks[i].favourite = favourite.checked;
                    break;
                }
            }
            localStorage.setItem(local, JSON.stringify(project));
        }
    


    function hideCreateSection () {
        const blank = document.querySelector('.blank');
        blank.innerHTML = '';
        blank.removeAttribute('id');
    }

    function renderProjects () {
        const container = document.querySelector('.my-projects');
        container.innerHTML = '';
        lookForLocalData();
        const projects = document.querySelectorAll('.div-project');
        projects.forEach(project => project.addEventListener('click', getProjectInfo)); 
}

    function createProject (name) {
        const project = new Project(name)
        saveLocalProject(project);
    }

    function getProjectInfo (event) {
        const info = event.target;
        createMainContent(info);
        printMain(event); 
}

    function setFavourite (data, reference) {
        const h1Main = document.getElementById('h1-main');
        const text = h1Main.textContent;
        const toClick =  document.querySelector(`[data-name="${text}"]`);

        if (findWord(text)) {
            if (reference.includes('empty-star')) {
                data.favourite = true;
                editOneTaskFeature(data);
                toClick.click();
            }
            else {
                data.favourite = false;
                editOneTaskFeature(data);
                toClick.click();
            }
        }

        if (reference.includes('empty-star') && !findWord(text)) {
            data.favourite = true;
            editOneTaskFeature(data);
            createMainContent(h1Main);
        }

        else if (!reference.includes('empty-star') && !findWord(text)) {
            data.favourite = false;
            editOneTaskFeature(data);
            createMainContent(h1Main);
        }        
    }

    function setImportant (data, reference) {
        const h1Main = document.getElementById('h1-main');
        const text = h1Main.textContent;
        const toClick =  document.querySelector(`[data-name="${text}"]`);

        if (findWord(text)) {
            if (reference.includes('black-important')) {
                data.important = true;
                editOneTaskFeature(data);
                toClick.click();
            }
            else {
                data.important = false;
                editOneTaskFeature(data);
                toClick.click();
            }
        }

        if (reference.includes('black-important') && !findWord(text)) {
            data.important = true;
            editOneTaskFeature(data);
            createMainContent(h1Main);
        }

        else if (!reference.includes('black-important') && !findWord(text)) {
            data.important = false;
            editOneTaskFeature(data);
            createMainContent(h1Main);
        }        
    }

    function setCompleted (data) {
        const h1Main = document.getElementById('h1-main');
        const text = h1Main.textContent;
        const toClick =  document.querySelector(`[data-name="${text}"]`);

        if (findWord(text)) {
            if (!data.completed) {
                data.completed = true;
                editOneTaskFeature(data);
                toClick.click();
            }
            else {
                data.completed = false;
                editOneTaskFeature(data);
                toClick.click();
            }
        }

        if (!data.completed && !findWord(text)) {
            data.completed = true;
            editOneTaskFeature(data);
            createMainContent(h1Main);
        }

        else if (data.completed && !findWord(text)) {
            data.completed = false;
            editOneTaskFeature(data);
            createMainContent(h1Main);
        }
    }

    function editOneTaskFeature (task) {
        const local = task.local;
        const project = JSON.parse(localStorage.getItem(local));
        const tasks = project.tasks;
        const title = task.title;
        
        for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].title === title) {
                    tasks[i].favourite = task.favourite;
                    tasks[i].important = task.important;
                    tasks[i].completed = task.completed;
            }
        }
        localStorage.setItem(local, JSON.stringify(project));
    }




    export { setCompleted, editOneTaskFeature, setFavourite, setImportant, edit, createDivEditTask, createDivEditProject, Task, getProjectInfo, renderProjects, createAddSection, createProject};
   
