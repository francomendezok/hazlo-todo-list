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
    return sidebar;
}

function createMain () {
    const main = document.createElement('main');
    main.classList.add('main');
    return main;
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


export default loadHome;