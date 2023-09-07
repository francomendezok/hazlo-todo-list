import { saveLocalProject, saveLocalTask, lookForLocalData, sortContainer } from "./localStorage";
import { createMainContent, printMain } from "./printMain";

class Project {
    constructor (name) {
        this.name = name;
        this.tasks = []
    }
    addNewTask(task) {
        this.tasks.push(task);
      }

    modifyTask(task, title, description, date, favourite, important) {

    }   
}
class Task {
    constructor(project, title, description, date, favourite, important, completed) {
            this.project = project;
            this.title = title;
            this.description = description;
            this.date = date;
            this.favourite = favourite;
            this.important = important;
            this.completed = completed;
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
        blank.id = 'show-add';
        accept.id = 'accept';
        decline.id = 'decline';
        buttonsDiv.id = 'buttons-div';


        accept.addEventListener('click', function () {
            const regex = /^[a-zA-Z0-9]*$/; // Solo letras y números permitidos

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
        const blank = document.getElementById('blank-edit-project');

        blank.id = 'show-edit-project';
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

    function createDivEditTask () {
        console.log('edit task');

    }

    function edit (data, type, action) {
        if (type === 'Project') {
            if (action === "Delete") {
                removeData(data, 'Project');
                renderProjects();
            }
            if (action === "Modify") {
                const dataId = data.dataset.id;
                const p = document.querySelector(`p[data-id="${dataId}"]`);
                // Prompt the user for the new name[Input, Button Save, Button Cancel]
                // Set datasets
                // CreateMain() so it prints H1
                projectEditLocalData(data, input);
                renderProjects();
            }
        }

        if (type === 'Task') {
            if (action === "Delete") {

            }
            if (action === "Modify") {
                console.log('Modify');
                console.log(data);
            }
        }

    }

    function removeData (data, type) {
        if (type === "Project") {
            const deletedProject = data.dataset.local;
            localStorage.removeItem(deletedProject);    
            const blank = document.getElementById('show-edit-project');
            blank.id = 'blank-edit-project';
        }

        if (type === "Task") {

        }
    }

    function projectEditLocalData (name, newName) {
        const local = name.dataset.local;
    const itemEnLocalStorage = JSON.parse(localStorage.getItem(local));

    itemEnLocalStorage.name = newName;

  
    localStorage.setItem(local, JSON.stringify(itemEnLocalStorage));


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




    export { createDivEditTask, createDivEditProject, Task, getProjectInfo, renderProjects, createAddSection, createProject};
   
