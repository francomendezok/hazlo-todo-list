import { createDivEditProject } from "./projects";

function saveLocalProject(project) {
  let projectCounter = parseInt(localStorage.getItem("projectCounter")) || 0;
  projectCounter = +1;

  project.id = projectCounter;

  const key = `project_${project.id}`;
  localStorage.setItem(key, JSON.stringify(project));
  localStorage.setItem("projectCounter", projectCounter.toString());
}

function getLocal() {
  const data = document.getElementById("h1-main");
  return data;
}

function createDivProject(data) {
  const container = document.querySelector(".my-projects");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const menu = document.createElement("img");
  const edit = document.createElement("img");
  const pContainer = document.createElement("div");

  menu.src = "./images/menu.png";
  edit.src = "./images/edit.png";

  menu.classList.add("icon-div");
  edit.classList.add("icon-div");
  edit.classList.add("edit-dots");
  div.classList.add("div-project");
  pContainer.classList.add("p-container");

  edit.addEventListener("click", createDivEditProject);
  edit.dataset.type = "project";

  div.dataset.id = data.id;
  div.dataset.name = data.name;
  div.dataset.local = `project_${data.id}`;
  pContainer.dataset.id = data.id;
  pContainer.dataset.name = data.name;
  pContainer.dataset.local = `project_${data.id}`;
  p.dataset.id = data.id;
  p.dataset.name = data.name;
  p.dataset.local = `project_${data.id}`;
  menu.dataset.id = data.id;
  menu.dataset.name = data.name;
  menu.dataset.local = `project_${data.id}`;
  edit.dataset.id = data.id;
  edit.dataset.name = data.name;
  edit.dataset.local = `project_${data.id}`;

  p.innerHTML = data.name;
  div.id = data.id;
  container.appendChild(div);
  div.appendChild(menu);
  div.appendChild(pContainer);
  pContainer.appendChild(p);
  div.appendChild(edit);
}

function lookForLocalData() {
  const projects = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("project") && !key.includes("projectCounter")) {
      const data = JSON.parse(localStorage.getItem(key));
      projects.push(data);
    }
  }
  projects.sort((a, b) => b.id - a.id);
  projects.forEach((project) => {
    createDivProject(project);
  });
  return projects;
}

function getAllLocalData() {
  const projects = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.includes("project") && !key.includes("projectCounter")) {
      const data = JSON.parse(localStorage.getItem(key));
      projects.push(data);
    }
  }
  return projects;
}

export {
  getAllLocalData,
  getLocal,
  createDivProject,
  saveLocalProject,
  lookForLocalData,
};
