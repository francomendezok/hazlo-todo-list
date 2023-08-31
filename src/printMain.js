function createHeader () {
    const header = document.createElement('header');
    const divMenu = document.createElement('div');
    const divLogo = document.createElement('div');
    const divDarkMode = document.createElement('div');
    let arr = [divMenu, divLogo, divDarkMode];
    let text = ['Menu Icon', 'App Logo', 'Dark Mode Checkbox']

    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.add('div-header');
        arr[i].textContent = text[i];
    }
    header.appendChild(divMenu);  
    header.appendChild(divLogo);  
    header.appendChild(divDarkMode);  

    
    header.classList.add('header');
    return header;
}
function createSidebar () {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const home = document.createElement('div');
    const projects = document.createElement('div');

    home.classList.add('sidebar-home');
    projects.classList.add('sidebar-projects');
    
    sidebar.appendChild(home);
    sidebar.appendChild(projects);

    return sidebar;
}
function createMainContainer () {
    const mainContainer = document.createElement('div'); 
    mainContainer.classList.add('main-container');
    mainContainer.appendChild(createSidebar())
    mainContainer.appendChild(createMain())
    return mainContainer;
}
function createHome () {
    const container = document.createElement('div');
    container.classList.add('container');

    document.body.appendChild(container);
    container.appendChild(createHeader())
    container.appendChild(createMainContainer())
    return container;
}
function loadHome () {
    const home = createHome();

    return home;
}

function createMainContent (text) {
    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const main = document.querySelector('.main')
    main.innerHTML = '';
    div.classList.add('inner-text')
    h1.textContent = text;
    main.appendChild(div)
    div.appendChild(h1)
    return main;
}


function printMain (event) {
    const parent = event.target.closest('.time-period');

    if (event.target.classList[0] === 'time-period') {
        console.log(event.target)
        const name = event.target.dataset.name;
        createMainContent(name);
        const categories = document.querySelectorAll('.time-period');
        categories.forEach(cat => cat.classList.remove('clicked')); 
        event.target.classList.add('clicked')
    }
    else if (event.target.closest('.time-period')) {
        const name = event.target.dataset.name;
        createMainContent(name);
        const categories = document.querySelectorAll('.time-period');
        categories.forEach(cat => cat.classList.remove('clicked')); 
        parent.classList.add('clicked')
    }

    // Else if check if the parent has time-period class and aplly class only to the parent //
}

export default printMain;
