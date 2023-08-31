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

function defaultMain () {
    const allDiv = document.querySelector('#default');
    allDiv.classList.add('clicked');
    createMainContent('All');
}


function printMain (event) {
    const parent = event.target.closest('.time-period');

    if (event.target.classList[0] === 'time-period') {
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

}

export {defaultMain, printMain};
