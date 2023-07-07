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

/***/ "./src/NewProject.js":
/*!***************************!*\
  !*** ./src/NewProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewProject {\r\n    constructor(name,dueDate) {\r\n        this.id = new Date().getTime();\r\n        this.name = name;\r\n        this.tasks = [];\r\n        this.dueDate = dueDate;\r\n        this.today = [];\r\n        this.thisWeek = [];\r\n        this.complete = false;\r\n    }\r\n\r\n    set addtask(value){\r\n        this.tasks.unshift(value);\r\n        this.tasksThisWeek();\r\n        this.tasksToday();\r\n    }\r\n\r\n    set deleteTask(id) {\r\n        const index = this.tasks.findIndex((task) => task.id === id);\r\n        if (index !== -1) {\r\n            this.tasks.splice(index, 1);\r\n        }\r\n        this.tasksThisWeek();\r\n        this.tasksToday();\r\n    }\r\n\r\n    set completeClass(value) {\r\n        if (typeof value === 'boolean') {\r\n            this.complete = value;\r\n        } else {\r\n            throw new Error(\"Invalid value. Expected a boolean. At 'NewProject.complete'\");\r\n        }\r\n    }\r\n    set setDueDate(dueDate) {\r\n        if(this.dueDate === undefined || this.dueDate === \"\"){\r\n            this.dueDate = \"No Due Date\";\r\n        }else if(dueDate instanceof Date && !isNaN(dueDate.getTime())) {\r\n            this.dueDate = dueDate;\r\n        }else {\r\n            throw new Error(\"Expected a date. At 'NewProject.duedate'\")\r\n        }\r\n    }\r\n    tasksThisWeek(){\r\n        const a_week = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in one week\r\n        const currentDate = new Date();\r\n        this.thisWeek = this.tasks.filter((task) => {\r\n            const givenDate = new Date(task.dueDate);\r\n            const diffInMilliSec = givenDate.getTime() - currentDate.getTime();\r\n            return diffInMilliSec >=0 && diffInMilliSec < a_week;\r\n        });\r\n    }\r\n    tasksToday() {\r\n        const currentDate = new Date();\r\n        this.today = this.tasks.filter((task) => {\r\n            const givenDate = new Date(task.dueDate);\r\n            return (\r\n                givenDate.getFullYear() === currentDate.getFullYear() &&\r\n                givenDate.getMonth() === currentDate.getMonth() &&\r\n                givenDate.getDate() === currentDate.getDate()\r\n            )\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProject);\n\n//# sourceURL=webpack://to-do-list-js/./src/NewProject.js?");

/***/ }),

/***/ "./src/NewTask.js":
/*!************************!*\
  !*** ./src/NewTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewTask {\r\n    constructor(task,dueDate,id){\r\n        this.id = /* new Date().getTime() */id;\r\n        this.task = task;\r\n        this.dueDate = dueDate;\r\n        this.complete = false;\r\n    }\r\n    set completeStatus(value){\r\n        if (typeof value === 'boolean') {\r\n            this.complete = value;\r\n        } else {\r\n            throw new Error(\"Invalid value. Expected a boolean. At 'NewTask'.complete\");\r\n        }\r\n    }\r\n    set setDueDate(dueDate) {\r\n        if(this.dueDate === undefined || this.dueDate === \"\"){\r\n            this.dueDate = \"No Due Date\";\r\n        }else if(dueDate instanceof Date && !isNaN(dueDate.getTime())) {\r\n            this.dueDate = dueDate;\r\n        }else {\r\n            throw new Error(\"Expected a date. At NewTask\")\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);\n\n//# sourceURL=webpack://to-do-list-js/./src/NewTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTask */ \"./src/NewTask.js\");\n/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProject */ \"./src/NewProject.js\");\n\r\n\r\n\r\nlet project1 = new _NewProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Project1\", new Date('1995-12-17T03:24:00'))\r\n\r\nlet a = new _NewTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"a\",new Date('2023-07-08T03:24:00'),1);\r\nlet b = new _NewTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"b\",new Date('2023-07-07T03:24:00'),2);\r\nlet c = new _NewTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"c\",new Date('2023-07-07T03:24:00'),3);\r\nlet d = new _NewTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"d\",new Date('2023-07-09T03:24:00'),4);\r\na.setDueDate = a.dueDate;\r\na.completeStatus = false;\r\nproject1.addtask = a;\r\nproject1.addtask = b;\r\nproject1.addtask = c;\r\nproject1.addtask = d;\r\nconsole.log(a);\r\nconsole.log(\"Project : \\n\",project1);\r\n\r\nconst localTasks = new _NewProject__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"LocalTasks\");\r\n\r\nlocalTasks.addtask = a;\r\nlocalTasks.addtask = b;\r\nlocalTasks.addtask = c;\r\nlocalTasks.addtask = d;\r\n\r\nproject1.deleteTask = a.id;\r\nconsole.log(\"Project 1 Modified\",project1)\r\nconsole.log(\"Local Tasks :\\n\",localTasks)\n\n//# sourceURL=webpack://to-do-list-js/./src/index.js?");

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