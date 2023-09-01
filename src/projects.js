import { saveLocalProject, saveLocalTask, lookForLocalData } from "./localStorage";


class Project {
    constructor (name) {
        this.name = name;
        this.tasks = []
    }
    addTask(task) {
        this.tasks.push(task);
      }    
    }

    function createAddSection () {
        const blank = document.querySelector('.blank');
        const input = document.createElement('input');
        const accept = document.createElement('button');
        const decline = document.createElement('button');
        const buttonsDiv = document.createElement('div');

        blank.appendChild(input);
        blank.appendChild(buttonsDiv)
        buttonsDiv.appendChild(accept);
        buttonsDiv.appendChild(decline);

        accept.innerHTML = 'Add';
        decline.innerHTML = 'Cancel';

        input.placeholder = 'Enter Project Name';
        input.type = 'text';
        blank.id = 'show-add';
        accept.id = 'accept';
        decline.id = 'decline';
        buttonsDiv.id = 'buttons-div';

        accept.addEventListener('click', function () {
            if (input.value !== '') {
                const name = input.value;
                createProject(name);
            }
            else {
                console.log('Empty String');
            }
        });
        decline.addEventListener('click', hideCreateSection);
    }

    function hideCreateSection () {
        const blank = document.querySelector('.blank');
        blank.innerHTML = '';
        blank.removeAttribute('id');
    }

    function printDivProject () {

    }

    function renderProjects () {
        // render local storage each time I create or delete a new project //
}

    function createProject (name) {
        const project = new Project(name) 
        saveLocalProject(project);
    }

    export {createAddSection, createProject};
   
