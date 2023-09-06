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

    function createEditSection () {
        
    }

    function getLocalInfo () {

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
        // render local storage each time I create or delete a new project //
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




    export { Task, getProjectInfo, renderProjects, createAddSection, createProject};
   
