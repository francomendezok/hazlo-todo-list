function hideMenu () {
    const menu = document.getElementById('menu');
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('sidebar');
    sidebar.classList.add('hide-sidebar');

}

function showMenu () {
    const menu = document.getElementById('menu');
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('sidebar');
    sidebar.classList.remove('hide-sidebar');


}

function printSidebar () {
    const sidebar = document.getElementById('sidebar');

    if (sidebar.classList.contains('sidebar')) hideMenu();
    else showMenu(); 
}

export default printSidebar;