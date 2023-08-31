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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hideMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hideMenu */ \"./src/hideMenu.js\");\n/* harmony import */ var _printMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printMain */ \"./src/printMain.js\");\n/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkMode */ \"./src/darkMode.js\");\n\r\n\r\n\r\n\r\nconst switcher = document.getElementById('switch');\r\nconst menu = document.getElementById('menu');\r\nconst categories = document.querySelectorAll('.time-period');\r\n\r\ncategories.forEach(cat => cat.addEventListener('click', () => (0,_printMain__WEBPACK_IMPORTED_MODULE_1__.printMain)(event)));\r\nmenu.addEventListener('click', _hideMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nswitcher.addEventListener('click', _darkMode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    ;(0,_printMain__WEBPACK_IMPORTED_MODULE_1__.defaultMain)();\r\n});\r\n\r\n\r\n\r\n// TODO\r\n// 1. Add Project (Factorie Function or Classes)\r\n// 2. Create Tasks (Factorie Function or Classes, localStorage, date-fns library)\r\n// 3. Print Main\r\n//\r\n//\n\n//# sourceURL=webpack://hazlo-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/printMain.js":
/*!**************************!*\
  !*** ./src/printMain.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultMain: () => (/* binding */ defaultMain),\n/* harmony export */   printMain: () => (/* binding */ printMain)\n/* harmony export */ });\nfunction createMainContent (text) {\r\n    const div = document.createElement('div')\r\n    const h1 = document.createElement('h1')\r\n    const main = document.querySelector('.main')\r\n    main.innerHTML = '';\r\n    div.classList.add('inner-text')\r\n    h1.textContent = text;\r\n    main.appendChild(div)\r\n    div.appendChild(h1)\r\n    return main;\r\n}\r\n\r\nfunction defaultMain () {\r\n    const allDiv = document.querySelector('#default');\r\n    allDiv.classList.add('clicked');\r\n    createMainContent('All');\r\n}\r\n\r\n\r\nfunction printMain (event) {\r\n    const parent = event.target.closest('.time-period');\r\n\r\n    if (event.target.classList[0] === 'time-period') {\r\n        const name = event.target.dataset.name;\r\n        createMainContent(name);\r\n        const categories = document.querySelectorAll('.time-period');\r\n        categories.forEach(cat => cat.classList.remove('clicked')); \r\n        event.target.classList.add('clicked')\r\n    }\r\n    else if (event.target.closest('.time-period')) {\r\n        const name = event.target.dataset.name;\r\n        createMainContent(name);\r\n        const categories = document.querySelectorAll('.time-period');\r\n        categories.forEach(cat => cat.classList.remove('clicked')); \r\n        parent.classList.add('clicked')\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://hazlo-todo-list/./src/printMain.js?");

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