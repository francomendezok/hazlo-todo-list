    function hideMenu () {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('sidebar');
        sidebar.classList.add('hide-sidebar');
    }

    function showMenu () {
        const main = document.getElementById('full-main');
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.add('sidebar');
        sidebar.classList.remove('hide-sidebar');
        main.removeAttribute('id');
    }

    function printSidebar () {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('sidebar')) {
            hideMenu();
            setMainStyle();
        }
        else showMenu(); 
    }

    function setMainStyle () {
        const main = document.querySelector('.main');
        main.id = 'full-main';
    }

export default printSidebar;