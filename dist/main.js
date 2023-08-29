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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader () {\r\n    const header = document.createElement('header');\r\n    const divMenu = document.createElement('div');\r\n    const divLogo = document.createElement('div');\r\n    const divDarkMode = document.createElement('div');\r\n    let arr = [divMenu, divLogo, divDarkMode];\r\n    let text = ['Menu Icon', 'App Logo', 'Dark Mode Checkbox']\r\n\r\n    for (let i = 0; i < arr.length; i++) {\r\n        arr[i].classList.add('div-header');\r\n        arr[i].textContent = text[i];\r\n    }\r\n    header.appendChild(divMenu);  \r\n    header.appendChild(divLogo);  \r\n    header.appendChild(divDarkMode);  \r\n\r\n    \r\n    header.classList.add('header');\r\n    return header;\r\n}\r\n\r\nfunction createSidebar () {\r\n    const sidebar = document.createElement('div');\r\n    sidebar.classList.add('sidebar');\r\n\r\n    const home = document.createElement('div');\r\n    const projects = document.createElement('div');\r\n\r\n    home.classList.add('sidebar-home');\r\n    projects.classList.add('sidebar-projects');\r\n    \r\n    sidebar.appendChild(home);\r\n    sidebar.appendChild(projects);\r\n\r\n    return sidebar;\r\n}\r\n\r\nfunction createMain () {\r\n    const main = document.createElement('main');\r\n    main.classList.add('main');\r\n    return main;\r\n}\r\n\r\nfunction createMainContainer () {\r\n    const mainContainer = document.createElement('div'); \r\n    mainContainer.classList.add('main-container');\r\n    mainContainer.appendChild(createSidebar())\r\n    mainContainer.appendChild(createMain())\r\n    return mainContainer;\r\n}\r\n\r\n\r\nfunction createHome () {\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    document.body.appendChild(container);\r\n    container.appendChild(createHeader())\r\n    container.appendChild(createMainContainer())\r\n    return container;\r\n}\r\n\r\nfunction loadHome () {\r\n    const home = createHome();\r\n\r\n    return home;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://hazlo-todo-list/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://hazlo-todo-list/./src/index.js?");

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