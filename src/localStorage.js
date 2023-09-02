function saveLocalTask () {

}

function saveLocalProject(project) {
  let projectCounter = parseInt(localStorage.getItem("projectCounter")) || 0;
  projectCounter++;

  project.id = projectCounter;

  const key = `project_${project.id}`;
  localStorage.setItem(key, JSON.stringify(project));

  localStorage.setItem("projectCounter", projectCounter.toString());
}

function getLocal(key) {
  const item = localStorage.getItem(key);
  return item;
}

function createDivProject(data) {
  const container = document.querySelector('.my-projects');
  const div = document.createElement('div');
  const p = document.createElement('p');
  const menu = document.createElement('img');
  const edit = document.createElement('img');
  const pContainer = document.createElement('div');

  edit.addEventListener('click', editProject);
  menu.src = "./images/menu.png";
  edit.src = "./images/edit.png";

  menu.classList.add('icon-div');
  edit.classList.add('icon-div');
  div.classList.add('div-project');
  pContainer.classList.add('p-container');

  p.innerHTML = data.name;
  container.appendChild(div);
  div.appendChild(menu);
  div.appendChild(pContainer)
  pContainer.appendChild(p);
  div.appendChild(edit);
}

function lookForLocalData() {
  const projects = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes('project') && !key.includes('projectCounter')) {
      const data = JSON.parse(localStorage.getItem(key));
      projects.push(data);
    }
  }

  projects.sort((a, b) => b.id - a.id);

  projects.forEach((project) => {
    createDivProject(project);
  });
}

function editProject () {
  console.log('I Will edit this project');
}


export { createDivProject, editProject, saveLocalProject, lookForLocalData}