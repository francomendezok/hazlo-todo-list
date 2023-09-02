/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/darkMode.js":
/*!*************************!*\
  !*** ./src/darkMode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction darkMode () {\r\n    console.log('Dark');\r\n    // Get All Elements From the DOM and change the class, an Individual dark class //\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (darkMode);\n\n//# sourceURL=webpack://hazlo-todo-list/./src/darkMode.js?");

/***/ }),

/***/ "./src/hideMenu.js":
/*!*************************!*\
  !*** ./src/hideMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hideMenu () {\r\n    const menu = document.getElementById('menu');\r\n    const sidebar = document.getElementById('sidebar');\r\n    sidebar.classList.remove('sidebar');\r\n    sidebar.classList.add('hide-sidebar');\r\n\r\n}\r\n\r\nfunction showMenu () {\r\n    const menu = document.getElementById('menu');\r\n    const sidebar = document.getElementById('sidebar');\r\n    sidebar.classList.add('sidebar');\r\n    sidebar.classList.remove('hide-sidebar');\r\n\r\n\r\n}\r\n\r\nfunction printSidebar () {\r\n    const sidebar = document.getElementById('sidebar');\r\n\r\n    if (sidebar.classList.contains('sidebar')) hideMenu();\r\n    else showMenu(); \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printSidebar);\n\n//# sourceURL=webpack://hazlo-todo-list/./src/hideMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideMenu */ \"./src/hideMenu.js\");\n/* harmony import */ var _printMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printMain */ \"./src/printMain.js\");\n/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkMode */ \"./src/darkMode.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst switcher = document.getElementById('switch');\r\nconst menu = document.getElementById('menu');\r\nconst categories = document.querySelectorAll('.time-period');\r\nconst addProject = document.getElementById('create-project');\r\n\r\ncategories.forEach(cat => cat.addEventListener('click', _printMain__WEBPACK_IMPORTED_MODULE_1__.printMain));\r\nmenu.addEventListener('click', _hideMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nswitcher.addEventListener('click', _darkMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\naddProject.addEventListener('click', _projects__WEBPACK_IMPORTED_MODULE_3__.createAddSection);\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_printMain__WEBPACK_IMPORTED_MODULE_1__.defaultMain)();\r\n    (0,_projects__WEBPACK_IMPORTED_MODULE_3__.renderProjects)();\r\n    const projects = document.querySelectorAll('.div-project');\r\n    eventProject(projects);\r\n});\r\n\r\nfunction eventProject (projects) {\r\n    projects.forEach(project => project.addEventListener('click', console.log('YES')));      \r\n}\r\n\r\n// FIX EVENT LISTENER PROJECTS //\r\n\r\n\r\n\r\n\r\n// TODO\r\n// 1. Add Project (Factorie Function or Classes)\r\n// 2. Create Tasks (Factorie Function or Classes, localStorage, date-fns library)\r\n// 3. Print Main\r\n//\r\n//\n\n//# sourceURL=webpack://hazlo-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDivProject: () => (/* binding */ createDivProject),\n/* harmony export */   editProject: () => (/* binding */ editProject),\n/* harmony export */   lookForLocalData: () => (/* binding */ lookForLocalData),\n/* harmony export */   saveLocalProject: () => (/* binding */ saveLocalProject)\n/* harmony export */ });\nfunction saveLocalTask () {\r\n\r\n}\r\n\r\nfunction saveLocalProject(project) {\r\n  let projectCounter = parseInt(localStorage.getItem(\"projectCounter\")) || 0;\r\n  projectCounter++;\r\n\r\n  project.id = projectCounter;\r\n\r\n  const key = `project_${project.id}`;\r\n  localStorage.setItem(key, JSON.stringify(project));\r\n\r\n  localStorage.setItem(\"projectCounter\", projectCounter.toString());\r\n}\r\n\r\nfunction getLocal(key) {\r\n  const item = localStorage.getItem(key);\r\n  return item;\r\n}\r\n\r\nfunction createDivProject(data) {\r\n  const container = document.querySelector('.my-projects');\r\n  const div = document.createElement('div');\r\n  const p = document.createElement('p');\r\n  const menu = document.createElement('img');\r\n  const edit = document.createElement('img');\r\n  const pContainer = document.createElement('div');\r\n\r\n  edit.addEventListener('click', editProject);\r\n  menu.src = \"./images/menu.png\";\r\n  edit.src = \"./images/edit.png\";\r\n\r\n  menu.classList.add('icon-div');\r\n  edit.classList.add('icon-div');\r\n  div.classList.add('div-project');\r\n  pContainer.classList.add('p-container');\r\n\r\n  p.innerHTML = data.name;\r\n  container.appendChild(div);\r\n  div.appendChild(menu);\r\n  div.appendChild(pContainer)\r\n  pContainer.appendChild(p);\r\n  div.appendChild(edit);\r\n}\r\n\r\nfunction lookForLocalData() {\r\n  const projects = [];\r\n  for (let i = 0; i < localStorage.length; i++) {\r\n    const key = localStorage.key(i);\r\n    if (key.includes('project') && !key.includes('projectCounter')) {\r\n      const data = JSON.parse(localStorage.getItem(key));\r\n      projects.push(data);\r\n    }\r\n  }\r\n\r\n  projects.sort((a, b) => b.id - a.id);\r\n\r\n  projects.forEach((project) => {\r\n    createDivProject(project);\r\n  });\r\n}\r\n\r\nfunction editProject () {\r\n  console.log('I Will edit this project');\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://hazlo-todo-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/printMain.js":
/*!**************************!*\
  !*** ./src/printMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultMain: () => (/* binding */ defaultMain),\n/* harmony export */   printMain: () => (/* binding */ printMain)\n/* harmony export */ });\nfunction createMainContent (text) {\r\n    console.log('hola');\r\n    const div = document.createElement('div')\r\n    const h1 = document.createElement('h1')\r\n    const main = document.querySelector('.main')\r\n    main.innerHTML = '';\r\n    div.classList.add('inner-text')\r\n    h1.textContent = text;\r\n    main.appendChild(div)\r\n    div.appendChild(h1)\r\n    return main;\r\n}\r\n\r\nfunction defaultMain () {\r\n    const allDiv = document.querySelector('#default');\r\n    allDiv.classList.add('clicked');\r\n    createMainContent('All');\r\n}\r\n\r\n\r\nfunction printMain (event) {\r\n    const parent = event.target.closest('.time-period');\r\n\r\n    if (event.target.classList[0] === 'time-period') {\r\n        const name = event.target.dataset.name;\r\n        createMainContent(name);\r\n        const categories = document.querySelectorAll('.time-period');\r\n        categories.forEach(cat => cat.classList.remove('clicked')); \r\n        event.target.classList.add('clicked')\r\n    }\r\n    else if (event.target.classList[0] === 'div-project') {\r\n        // const name = event.target.dataset.name;\r\n        // createMainContent(name);\r\n        console.log('Inside');\r\n        const categories = document.querySelectorAll('.div-project');\r\n        categories.forEach(cat => cat.classList.remove('clicked-project')); \r\n        event.target.classList.add('clicked-project')\r\n    }\r\n\r\n    else if (event.target.closest('.time-period')) {\r\n        const name = event.target.dataset.name;\r\n        createMainContent(name);\r\n        const categories = document.querySelectorAll('.time-period');\r\n        categories.forEach(cat => cat.classList.remove('clicked')); \r\n        parent.classList.add('clicked')\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://hazlo-todo-list/./src/printMain.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAddSection: () => (/* binding */ createAddSection),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\r\n\r\n\r\nclass Project {\r\n    constructor (name) {\r\n        this.name = name;\r\n        this.tasks = []\r\n    }\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n      }    \r\n    }\r\n\r\n    function createAddSection () {\r\n        const blank = document.querySelector('.blank');\r\n        const input = document.createElement('input');\r\n        const accept = document.createElement('button');\r\n        const decline = document.createElement('button');\r\n        const buttonsDiv = document.createElement('div');\r\n\r\n        blank.appendChild(input);\r\n        blank.appendChild(buttonsDiv)\r\n        buttonsDiv.appendChild(accept);\r\n        buttonsDiv.appendChild(decline);\r\n\r\n        accept.innerHTML = 'Add';\r\n        decline.innerHTML = 'Cancel';\r\n\r\n        input.placeholder = 'Enter Project Name';\r\n        input.type = 'text';\r\n        input.maxLength = 15;\r\n        blank.id = 'show-add';\r\n        accept.id = 'accept';\r\n        decline.id = 'decline';\r\n        buttonsDiv.id = 'buttons-div';\r\n\r\n\r\n        accept.addEventListener('click', function () {\r\n            const regex = /^[a-zA-Z0-9]*$/; // Solo letras y números permitidos\r\n\r\n            if (input.value !== '' && regex.test(input.value)) {\r\n                const name = input.value;\r\n                createProject(name);\r\n                hideCreateSection();\r\n                renderProjects();\r\n            }\r\n            else if (!regex.test(input.value)) {\r\n                alert(' Please type just Letters and Numbers')\r\n            }\r\n            else {\r\n                alert('Empty String');\r\n            }\r\n        });\r\n        decline.addEventListener('click', hideCreateSection);\r\n    }\r\n\r\n    function hideCreateSection () {\r\n        const blank = document.querySelector('.blank');\r\n        blank.innerHTML = '';\r\n        blank.removeAttribute('id');\r\n    }\r\n\r\n\r\n\r\n    function renderProjects () {\r\n        const container = document.querySelector('.my-projects');\r\n        container.innerHTML = '';\r\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.lookForLocalData)();\r\n        // render local storage each time I create or delete a new project //\r\n}\r\n\r\n    function createProject (name) {\r\n        const project = new Project(name)\r\n        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveLocalProject)(project);\r\n    }\r\n\r\n    \r\n   \r\n\n\n//# sourceURL=webpack://hazlo-todo-list/./src/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;