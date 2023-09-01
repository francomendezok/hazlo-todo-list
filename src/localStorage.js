import createProject from "./projects";


function saveLocalProject (project) {
    const projectJSON = JSON.stringify(project);
    
    const key = `project_${Date.now()}`;
    console.log(key);
    localStorage.setItem(key, projectJSON);
    getLocal(key);
}

function getLocal (key) {
    console.log('Get Local Executed');
    const item = localStorage.getItem(key);
    console.log(item);
}

function saveLocalTask () {

}

function lookForLocalData() {
    // Iterar a través de todas las claves en localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Obtener la clave actual
      const data = localStorage.getItem(key); // Obtener el dato asociado a la clave
  
      // Imprimir la clave y el dato en la consola
      if (key.includes('project')) {
          console.log(`Clave: ${key}, Dato: ${data}`);
      }
    }
  }
  // PRINT DIVS BY DEFAULT // 
  // Llamar a la función para buscar y mostrar los datos en localStorage
  lookForLocalData();

export {saveLocalProject, saveLocalTask, lookForLocalData}