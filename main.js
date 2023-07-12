/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root {
    font-size: 16px;
    --headerBG : rgb(0, 0, 0);
    --headerColor: white;
    --sideBarBG : rgb(213, 213, 213);
    --sideBarColor : black;
    --btnBG : rgb(191, 191, 191);
    --activeBtnBG: rgb(167, 167, 167);
    --actibeBtnColor:white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    --taskDivBG: rgb(81, 81, 81);
}
.view {
    display: block;
}
.content {
    display: flex;
}
.menuIcon{
    width: 40px;
    height: 40px;
    fill: var(--headerColor);
    display: none;
    cursor: pointer;
}
.mainContent{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
header{
    background-color: var(--headerBG);
    color: var(--headerColor);
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sideBar {
    background-color: var(--sideBarBG);
    color: var(--sideBarColor);
    width: min-content;
    min-height: 100vh;
    height: auto;
    padding: 1rem;
    border: 2px solid black;
}
.localTasks{
    padding: 1rem;
    border-bottom: 2px dotted black;
    text-align: center;
}
.localTasksBtn{
    background:transparent;
    display: flex;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.5rem ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    border: 1px solid black;
    box-shadow: 1px 1px 1px rgb(121, 120, 120);
}
.localTasksBtn:hover {
    border-bottom: 2px solid black;
}

.activeProject{
    background-color: var(--headerBG);
    color: var(--headerColor);
}

.projects{
    margin-top: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.headingPROJECTS{
    text-align: left;
    font-size: 2.3rem;
    color: rgb(35, 109, 19);
    font-weight: 900;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.addProjectForm{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: right;
    margin-bottom: 20px;
}
.addProjectForm > input {
    font-size: 1rem;
    padding: 0.4rem;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid black;
    margin-right: 10px;
}
.addProjectForm>input:focus{
    outline: 2px solid blue;
}
.addProjectBtn{
    padding: 0.4rem;
    font-weight: 600;
    align-self: right;
    border-radius: 5px;
    box-shadow: 3px 3px 2px  black;
    cursor: pointer;
}

.closeBtn{
    padding: 5px;
    width: 30px;
    height: 30px;
    background-color: rgb(120, 4, 4);
    color: white;
    font-weight: 900;
    border: 1px solid white;
    outline: 1px solid rgb(120, 4, 4);
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
}
.closeBtn:hover {
    transform: scale(1.2);
}

.active{
    border-bottom: 2px solid black;
}

.projectDiv{
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
}
.projectDivHeading{
    font-size: 2rem;
    margin-bottom: 10px;
}
.addTaskForm{
    border: 2px solid black;
    background-color: var(--activeBtnBG);
    display: grid;
    grid-template-columns: repeat(2,1fr);
    padding: 1rem;
    width: 80%;
    gap: 10px;
    border-radius: 10px;
}
.taskInputElem{
    grid-column: 1/ span 2;
    padding: 10px;
    font-size: 1.3rem;
    border: 2px solid black;
    border-radius: 10px;
}
.taskInputElem:focus{
    outline: 4px solid rgb(76, 136, 255);
    border: none;
}
.taskDueDate{
    padding: 0.3rem;
    font-size: 1rem;
    width: fit-content;
    align-self: center;
    justify-items: center;
    margin: 0 auto;
}
.addTaskBtn{
    border-radius: 5px;
    font-size: 1.4rem;
    margin: 0 auto;
    padding: 0.4rem;
    width: max-content;
}
.projectNav{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.4rem;
}
.projectNav >h4 {
    cursor: pointer;
}
.viewTasksDiv{
    border-radius: 20px;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 900;
    color: rgb(23, 13, 13);
    display: grid;
    gap: 20px;padding: 10px;
}

.taskDiv{
    width: 100%;
    margin-bottom: 10px;
    padding: 0.4rem;
    position: relative;
    margin-top: 10px;
    border-radius: 10px;
    background-color: var(--sideBarBG);
    border: 1px solid black;
}
.taskText{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    padding: 0.4rem;
    margin-bottom: 10px;
}
.taskDueDate{
    margin-top: 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 900;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.taskBtn {
    padding: 0.3rem 1rem;
    font-size: 1rem;
    border: none;
    background-color: var(--btnBG);
    border-radius: 10px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    transition: all 0.1s;
}
.taskStatusBtn {
    border: 2px solid black;
}
.taskDeleteBtn {
    background-color: rgb(147, 4, 4);
    color: white;
    margin-left: 10px;
    border: 1px solid white;
}
.taskDeleteBtn:hover {
    outline: 2px solid whitesmoke;
}
.taskDeleteBtn:active {
    outline: none;
    transform: scale(0.6);
}

.taskDone{
    background-color: green;
    color: whitesmoke;
    
}
.taskComplete{
    text-decoration: line-through;
}

.hide {
    display: none;
}

.emptyText {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}


/*Responsive Design*/
@media only screen and (max-width: 770px){
    header{
        font-size: 1rem;
    }
    .menuIcon {
        display: block;
        margin-right: 1rem;
    }
    .content {
        display: flex;
        flex-direction: column;
    }
    .sideBar{
        width: 100%;
        height: min-content;
        min-height: min-content;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root {\r\n    font-size: 16px;\r\n    --headerBG : rgb(0, 0, 0);\r\n    --headerColor: white;\r\n    --sideBarBG : rgb(213, 213, 213);\r\n    --sideBarColor : black;\r\n    --btnBG : rgb(191, 191, 191);\r\n    --activeBtnBG: rgb(167, 167, 167);\r\n    --actibeBtnColor:white;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    --taskDivBG: rgb(81, 81, 81);\r\n}\r\n.view {\r\n    display: block;\r\n}\r\n.content {\r\n    display: flex;\r\n}\r\n.menuIcon{\r\n    width: 40px;\r\n    height: 40px;\r\n    fill: var(--headerColor);\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n.mainContent{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nheader{\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    font-size: 1.5rem;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sideBar {\r\n    background-color: var(--sideBarBG);\r\n    color: var(--sideBarColor);\r\n    width: min-content;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    padding: 1rem;\r\n    border: 2px solid black;\r\n}\r\n.localTasks{\r\n    padding: 1rem;\r\n    border-bottom: 2px dotted black;\r\n    text-align: center;\r\n}\r\n.localTasksBtn{\r\n    background:transparent;\r\n    display: flex;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    justify-content: space-between;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    padding: 0.5rem ;\r\n    border: none;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    margin-bottom: 20px;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 1px rgb(121, 120, 120);\r\n}\r\n.localTasksBtn:hover {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.activeProject{\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n}\r\n\r\n.projects{\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.headingPROJECTS{\r\n    text-align: left;\r\n    font-size: 2.3rem;\r\n    color: rgb(35, 109, 19);\r\n    font-weight: 900;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.addProjectForm{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 20px;\r\n    justify-content: right;\r\n    margin-bottom: 20px;\r\n}\r\n.addProjectForm > input {\r\n    font-size: 1rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n}\r\n.addProjectForm>input:focus{\r\n    outline: 2px solid blue;\r\n}\r\n.addProjectBtn{\r\n    padding: 0.4rem;\r\n    font-weight: 600;\r\n    align-self: right;\r\n    border-radius: 5px;\r\n    box-shadow: 3px 3px 2px  black;\r\n    cursor: pointer;\r\n}\r\n\r\n.closeBtn{\r\n    padding: 5px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: rgb(120, 4, 4);\r\n    color: white;\r\n    font-weight: 900;\r\n    border: 1px solid white;\r\n    outline: 1px solid rgb(120, 4, 4);\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n.closeBtn:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.active{\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.projectDiv{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 1rem;\r\n}\r\n.projectDivHeading{\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n}\r\n.addTaskForm{\r\n    border: 2px solid black;\r\n    background-color: var(--activeBtnBG);\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    padding: 1rem;\r\n    width: 80%;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem{\r\n    grid-column: 1/ span 2;\r\n    padding: 10px;\r\n    font-size: 1.3rem;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem:focus{\r\n    outline: 4px solid rgb(76, 136, 255);\r\n    border: none;\r\n}\r\n.taskDueDate{\r\n    padding: 0.3rem;\r\n    font-size: 1rem;\r\n    width: fit-content;\r\n    align-self: center;\r\n    justify-items: center;\r\n    margin: 0 auto;\r\n}\r\n.addTaskBtn{\r\n    border-radius: 5px;\r\n    font-size: 1.4rem;\r\n    margin: 0 auto;\r\n    padding: 0.4rem;\r\n    width: max-content;\r\n}\r\n.projectNav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    font-size: 1.4rem;\r\n}\r\n.projectNav >h4 {\r\n    cursor: pointer;\r\n}\r\n.viewTasksDiv{\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: rgb(23, 13, 13);\r\n    display: grid;\r\n    gap: 20px;padding: 10px;\r\n}\r\n\r\n.taskDiv{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    padding: 0.4rem;\r\n    position: relative;\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n    background-color: var(--sideBarBG);\r\n    border: 1px solid black;\r\n}\r\n.taskText{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.2rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n}\r\n.taskDueDate{\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n    font-size: 0.9rem;\r\n    font-weight: 900;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.taskBtn {\r\n    padding: 0.3rem 1rem;\r\n    font-size: 1rem;\r\n    border: none;\r\n    background-color: var(--btnBG);\r\n    border-radius: 10px;\r\n    font-weight: 700;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.1s;\r\n}\r\n.taskStatusBtn {\r\n    border: 2px solid black;\r\n}\r\n.taskDeleteBtn {\r\n    background-color: rgb(147, 4, 4);\r\n    color: white;\r\n    margin-left: 10px;\r\n    border: 1px solid white;\r\n}\r\n.taskDeleteBtn:hover {\r\n    outline: 2px solid whitesmoke;\r\n}\r\n.taskDeleteBtn:active {\r\n    outline: none;\r\n    transform: scale(0.6);\r\n}\r\n\r\n.taskDone{\r\n    background-color: green;\r\n    color: whitesmoke;\r\n    \r\n}\r\n.taskComplete{\r\n    text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.emptyText {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*Responsive Design*/\r\n@media only screen and (max-width: 770px){\r\n    header{\r\n        font-size: 1rem;\r\n    }\r\n    .menuIcon {\r\n        display: block;\r\n        margin-right: 1rem;\r\n    }\r\n    .content {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .sideBar{\r\n        width: 100%;\r\n        height: min-content;\r\n        min-height: min-content;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/NewProject.js":
/*!***************************!*\
  !*** ./src/NewProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NewProject {
  constructor(name,dueDate) {
    this.id = new Date().getTime();
    this.name = name;
    this.tasks = [];
    this.dueDate = dueDate;
    this.today = [];
    this.thisWeek = [];
    this.complete = false;
  }

  set addtask(value) {
    this.tasks.push(value);
    this.tasksThisWeek();
    this.tasksToday();
  }

  set deleteTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.tasksThisWeek();
    this.tasksToday();
  }

  set completeStatus(value) {
    if (typeof value === "boolean") {
      this.complete = value;
    } else {
      throw new Error(
        "Invalid value. Expected a boolean. At 'NewProject.complete'"
      );
    }
  }

  set setDueDate(dueDate) {
    if (this.dueDate === undefined || this.dueDate === "") {
      this.dueDate = "No Due Date";
    } else if (dueDate instanceof Date && !isNaN(dueDate.getTime())) {
      this.dueDate = dueDate;
    } else {
      throw new Error("Expected a date. At 'NewProject.duedate'");
    }
  }

  tasksThisWeek() {
    const a_week = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in one week
    const currentDate = new Date();
    this.thisWeek = this.tasks.filter((task) => {
      const givenDate = new Date(task.dueDate);
      const diffInMilliSec = givenDate.getTime() - currentDate.getTime();
      return diffInMilliSec >= 0 && diffInMilliSec < a_week;
    });
  }

  tasksToday() {
    const currentDate = new Date();
    this.today = this.tasks.filter((task) => {
      const givenDate = new Date(task.dueDate);
      return (
        givenDate.getFullYear() === currentDate.getFullYear() &&
        givenDate.getMonth() === currentDate.getMonth() &&
        givenDate.getDate() === currentDate.getDate()
      );
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProject);


/***/ }),

/***/ "./src/NewTask.js":
/*!************************!*\
  !*** ./src/NewTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NewTask {
    constructor(task,dueDate){
        this.id = new Date().getTime();
        this.task = task;
        this.dueDate = dueDate;
        this.dueDateTxt
        this.complete = false;
    }
    set setDueDate(dueDate) {
        if(this.dueDate === undefined || this.dueDate === ""){
            this.dueDateTxt = "No Due Date";
        }else if(dueDate instanceof Date && !isNaN(dueDate.getTime())) {
            this.dueDateTxt = `Due Date : ${dueDate.getDate()}-${dueDate.getMonth()}-${dueDate.getFullYear()}`;
        }else {
            throw new Error("Expected a date. At NewTask")
        }
    }

    isToday() {
        const currentDate = new Date();
        const taskDate = new Date(this.dueDate);
        return (
        taskDate.getDate() === currentDate.getDate() &&
        taskDate.getMonth() === currentDate.getMonth() &&
        taskDate.getFullYear() === currentDate.getFullYear()
        );
    }

    isThisWeek() {
        const currentDate = new Date();
        const taskDate = new Date(this.dueDate);
        const oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in one week
        const diffInMilliseconds = taskDate.getTime() - currentDate.getTime();
        return diffInMilliseconds >= 0 && diffInMilliseconds < oneWeekMilliseconds;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);

/***/ }),

/***/ "./src/Save_Load.js":
/*!**************************!*\
  !*** ./src/Save_Load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: () => (/* binding */ load),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProject */ "./src/NewProject.js");




function save(myTodos){
    const myTodoList = JSON.stringify(myTodos);
    localStorage.setItem('myTodos',myTodoList);
}
function load(){
    const data = localStorage.getItem("myTodos");
    if(data) {
        const todoLists =  JSON.parse(data);
        for(let i=0; i<todoLists.length ;i++){
            Object.setPrototypeOf(todoLists[i],_NewProject__WEBPACK_IMPORTED_MODULE_0__["default"].prototype)
        }
        return todoLists
    }else{
        return [];
    }
}

/***/ }),

/***/ "./src/createProjectDOM.js":
/*!*********************************!*\
  !*** ./src/createProjectDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectBtn: () => (/* binding */ createProjectBtn),
/* harmony export */   createProjectDOM: () => (/* binding */ createProjectDOM)
/* harmony export */ });
/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTask */ "./src/NewTask.js");
/* harmony import */ var _createTaskDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskDOM */ "./src/createTaskDOM.js");
/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Save_Load */ "./src/Save_Load.js");
/* harmony import */ var _emptyDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emptyDOM */ "./src/emptyDOM.js");







function createProjectDOM(projectObj,myTodos) {
    const project = projectObj;
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.setAttribute("data-project-id", project.id);

    const projectDivHeading = document.createElement("h2");
    projectDivHeading.classList.add("projectDivHeading");
    projectDivHeading.textContent = `Project : ${project.name}`;

    const addTaskForm = document.createElement("form");
    addTaskForm.classList.add("addTaskForm");

    const taskInputElem = document.createElement("input");
    taskInputElem.setAttribute("type","text");
    taskInputElem.classList.add("taskInputElem");
    taskInputElem.setAttribute("required","");
    taskInputElem.setAttribute("placeholder","Enter the task here");

    const taskDueDate = document.createElement("input");
    taskDueDate.setAttribute("type","date");
    taskDueDate.classList.add("taskDueDate");


    const addtaskBtn = document.createElement("button");
    addtaskBtn.setAttribute("type","submit");
    addtaskBtn.classList.add("addTaskBtn");
    addtaskBtn.textContent = " + New Task"

    addTaskForm.appendChild(taskInputElem);
    addTaskForm.appendChild(taskDueDate);
    addTaskForm.appendChild(addtaskBtn);

    const projectNav = document.createElement("div");
    projectNav.classList.add("projectNav");
    const allTasksLink = document.createElement("h4");
    allTasksLink.textContent = "All Tasks";
    allTasksLink.classList.add("projectNavLink");
    allTasksLink.classList.add("active");
    allTasksLink.setAttribute("id","allTasks");
    const todaysTasksLink = document.createElement("h4");
    todaysTasksLink.textContent = "Today";
    todaysTasksLink.classList.add("projectNavLink");
    todaysTasksLink.classList.remove("active");
    todaysTasksLink.setAttribute("id","todaysTasks");

    const thisWeeksTasksLink = document.createElement("h4");
    thisWeeksTasksLink.textContent = "This Week";
    thisWeeksTasksLink.classList.add("projectNavLink");
    thisWeeksTasksLink.classList.remove("active");
    thisWeeksTasksLink.setAttribute("id","thisWeeksTasks")

    projectNav.appendChild(allTasksLink);
    projectNav.appendChild(todaysTasksLink);
    projectNav.appendChild(thisWeeksTasksLink)

    const viewTasksDiv = document.createElement("div");
    viewTasksDiv.classList.add("viewTasksDiv");

    const allTasksDiv = document.createElement("div");
    allTasksDiv.classList.add("allTasksDiv");

    const thisWeeksTasksDiv = document.createElement("div")
    thisWeeksTasksDiv.classList.add("thisWeeksTasksDiv");
    thisWeeksTasksDiv.classList.add("hide");

    const todaysTasksDiv = document.createElement("div");
    todaysTasksDiv.classList.add("todaysTasksDiv");
    todaysTasksDiv.classList.add("hide");


    allTasksDiv.innerText= "All Tasks";
    todaysTasksDiv.innerText = "Tasks for Today";
    thisWeeksTasksDiv.innerText = "Tasks for this Week"
    viewTasksDiv.appendChild(allTasksDiv);
    viewTasksDiv.appendChild(thisWeeksTasksDiv);
    viewTasksDiv.appendChild(todaysTasksDiv);

    projectDiv.appendChild(projectDivHeading);
    projectDiv.appendChild(addTaskForm);
    projectDiv.appendChild(projectNav);
    projectDiv.appendChild(viewTasksDiv);

    //Event Listeners
    function showTab(tab) {//Switching tabs

        allTasksLink.classList.toggle("active", tab === "all");
        todaysTasksLink.classList.toggle("active", tab === "today");
        thisWeeksTasksLink.classList.toggle("active", tab === "thisWeek");

        allTasksDiv.classList.toggle("hide", tab !== "all");
        todaysTasksDiv.classList.toggle("hide", tab !== "today");
        thisWeeksTasksDiv.classList.toggle("hide", tab !== "thisWeek");
    }
    allTasksLink.addEventListener("click", () => {
        showTab("all")
    });
    todaysTasksLink.addEventListener("click",() => {
        showTab("today")
    });
    thisWeeksTasksLink.addEventListener("click",() => {
        showTab("thisWeek")

    });

    
    addTaskForm.addEventListener("submit",(e) =>{
        e.preventDefault();
        let task = new _NewTask__WEBPACK_IMPORTED_MODULE_0__["default"](taskInputElem.value,taskDueDate.value);
        task.setDueDate = new Date(taskDueDate.value);
        allTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(task,project,myTodos));
        for(let i = 0; i < myTodos.length; i++){
            if(myTodos[i].id === project.id){
                myTodos[i].addtask = task;
            }
        }
        if (task.isToday()) {
            todaysTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(task,project,myTodos));
        }

        if (task.isThisWeek()) {
            thisWeeksTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(task,project,myTodos));
        }
        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.save)(myTodos);
        myTodos = (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.load)()
        taskInputElem.value= "";
        taskDueDate.value="";
    });



    //Load all Existing tasks lists
    for(let i = 0; i < myTodos.length; i++){
            if(myTodos[i].id === project.id){
                for (let j = 0; j < myTodos[i].tasks.length; j++) {
                    const taskElement = (0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(myTodos[i].tasks[j], myTodos[i], myTodos);
                    allTasksDiv.appendChild(taskElement); // Append the task element to the container
                }
                for(let j = 0; j < myTodos[i].today.length; j++){
                    todaysTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(myTodos[i].today[j],myTodos[i],myTodos))
                }
                for(let j = 0; j < myTodos[i].thisWeek.length; j++){
                    thisWeeksTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__["default"])(myTodos[i].thisWeek[j],myTodos[i],myTodos))
                }
            }
    }
    return projectDiv;
}

function createProjectBtn(project,myTodos,newProjectDom){
    const projectBtn = document.createElement("div");
    projectBtn.classList.add("localTasksBtn");
    projectBtn.setAttribute("id","projectButton")
    projectBtn.setAttribute("data-project-id",project.id);
    const projectBtnText = document.createElement("p");

    projectBtnText.textContent = project.name;
    projectBtn.value = project.name;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("closeBtn");

    projectBtn.appendChild(projectBtnText);
    projectBtn.appendChild(closeBtn);
    closeBtn.addEventListener("click",(e) => {
        const mainContent = document.getElementById("mainContent");
        e.stopPropagation()
        for(let i=0;i<myTodos.length;i++){
            myTodos = myTodos.filter(t => t.id !== project.id);
            newProjectDom.remove();
            projectBtn.remove();
            (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.save)(myTodos);
        }
        mainContent.replaceChildren((0,_emptyDOM__WEBPACK_IMPORTED_MODULE_3__["default"])())
    })
    return projectBtn;
}

/***/ }),

/***/ "./src/createTaskDOM.js":
/*!******************************!*\
  !*** ./src/createTaskDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save_Load */ "./src/Save_Load.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskDOM);


function createTaskDOM(NewTaskObj,NewProjectObj,myTodos){
    const task = NewTaskObj;
    const project = NewProjectObj;
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");
    taskDiv.setAttribute("data-task-id", task.id);

    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.textContent = NewTaskObj.task;
    taskDiv.appendChild(taskText);

    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("taskDueDate");
    taskDueDate.textContent = NewTaskObj.dueDateTxt;
    taskDiv.appendChild(taskDueDate);

    const taskStatusBtn = document.createElement("button");
    taskStatusBtn.setAttribute("type","button");
    taskStatusBtn.classList.add("taskStatusBtn");
    taskStatusBtn.classList.add("taskBtn")
    taskStatusBtn.textContent = NewTaskObj.complete ? "Done" : "Not Done";
    if(task.complete === true) {
        taskStatusBtn.classList.add("taskDone");
        taskStatusBtn.classList.remove("taskNotDone");
        taskText.classList.add("taskComplete");
    }else {
        taskStatusBtn.classList.add("taskNotDone");
        taskStatusBtn.classList.remove("taskDone");
        taskText.classList.remove("taskComplete");
    }

    taskDiv.appendChild(taskStatusBtn);
    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.setAttribute("type","button");
    taskDeleteBtn.classList.add("taskBtn")
    taskDeleteBtn.classList.add("taskDeleteBtn");
    taskDeleteBtn.textContent = "Delete";
    taskDiv.appendChild(taskDeleteBtn);

    //Event Listeners
    taskDeleteBtn.addEventListener("click", () => {
        for (let i = 0; i < myTodos.length; i++) {
            if(myTodos[i].id === project.id){
                for(let j=0;j<myTodos[i].tasks.length;j++){
                    if(myTodos[i].tasks[j].id === task.id){
                        myTodos[i].deleteTask = task.id;
                    }
                }
            }
        }
        // Remove the task element from the DOM
        const taskId = taskDiv.getAttribute("data-task-id");
        // Remove all taskDiv elements with the same task id
        const taskDivs = document.querySelectorAll(`[data-task-id="${taskId}"]`);
        taskDivs.forEach((div) => div.remove());
        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.save)(myTodos);
    });

    taskStatusBtn.addEventListener("click",() => {
        for (let i = 0; i < myTodos.length; i++) {
            if(myTodos[i].id === project.id){
                for(let j=0;j<myTodos[i].tasks.length;j++){
                    if(myTodos[i].tasks[j].id === task.id){
                        if(myTodos[i].tasks[j].complete === false){
                            myTodos[i].tasks[j].complete = true;
                            taskStatusBtn.textContent = "Done";
                            taskText.classList.add("taskComplete");
                            taskStatusBtn.classList.add("taskDone");
                            taskStatusBtn.classList.remove("taskNotDone");
                        }else if(myTodos[i].tasks[j].complete === true){
                            myTodos[i].tasks[j].complete = false;
                            taskStatusBtn.textContent = "Not Done";
                            taskStatusBtn.classList.add("taskNotDone");
                            taskText.classList.remove("taskComplete");
                            taskStatusBtn.classList.remove("taskDone");
                        }
                    }
                }
            }
        }
        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.save)(myTodos);
    })
    return taskDiv;
}

/***/ }),

/***/ "./src/emptyDOM.js":
/*!*************************!*\
  !*** ./src/emptyDOM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyDOM);
function emptyDOM() {
    const emptyDOMElem = document.createElement("div");
    emptyDOMElem.classList.add("emptyText");
    const text1 = document.createElement("h2");
    text1.textContent = "No Project is Selected.";
    const text2 = document.createElement("h4");
    text2.textContent = "Please Select a project or Add a New One.";
    text2.setAttribute("style","font-style: italic;")

    emptyDOMElem.appendChild(text1);
    emptyDOMElem.appendChild(text2);
    return emptyDOMElem;
}

/***/ }),

/***/ "./src/projectDomClass.js":
/*!********************************!*\
  !*** ./src/projectDomClass.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProjectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectDOM */ "./src/createProjectDOM.js");


class ProjectDOM_BTN {
    constructor(newProjectObj,myTodos){
        this.id = newProjectObj.id;
        this.projectDOM = (0,_createProjectDOM__WEBPACK_IMPORTED_MODULE_0__.createProjectDOM)
        (newProjectObj,myTodos);
        this.projectBtn = (0,_createProjectDOM__WEBPACK_IMPORTED_MODULE_0__.createProjectBtn)(newProjectObj,myTodos,this.projectDOM);
        activeStatus(this.projectBtn)
        this.projectBtn.addEventListener("click",() => {
            const mainContent = document.getElementById("mainContent");
            mainContent.replaceChildren(this.projectDOM);
            activeStatus(this.projectBtn)
        })

        function activeStatus(projectBtn){
            const AllProjectBtns = document.querySelectorAll("#projectButton");
            const projectBtnDataId = Number(projectBtn.getAttribute("data-project-id"));
            AllProjectBtns.forEach((button) => {
                const buttonDataID = Number(button.getAttribute("data-project-id"));
                if(buttonDataID === projectBtnDataId){
                    button.classList.add("activeProject");
                }else {
                    button.classList.remove("activeProject");
                }
            })
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDOM_BTN);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myTodos: () => (/* binding */ myTodos)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewProject */ "./src/NewProject.js");
/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Save_Load */ "./src/Save_Load.js");
/* harmony import */ var _projectDomClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectDomClass */ "./src/projectDomClass.js");
/* harmony import */ var _emptyDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emptyDOM */ "./src/emptyDOM.js");








let myTodos = [];//Local variables to store all Todos
const projectDiv = document.getElementById("projects");
const maincontent = document.getElementById("mainContent");
const addProjectForm = document.getElementById("addProjectForm");

const sideBar = document.getElementById("sideBar");
const screenSize = window.matchMedia("(max-width: 770px)");
function adjustSideBar(screenSize){
    if(screenSize.matches){
        sideBar.classList.add("hide");
    }else {
        sideBar.classList.remove("hide");
    }
}
screenSize.addEventListener("change",adjustSideBar);

const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click",() => {
    sideBar.classList.toggle("hide");
})


addProjectForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    const newProject = createNewProject();
    myTodos.push(newProject);
    const newProjectDom = new _projectDomClass__WEBPACK_IMPORTED_MODULE_3__["default"](newProject,myTodos);
    projectDiv.appendChild(newProjectDom.projectBtn);
    const newProjectBtn = newProjectDom.projectBtn;
    console.log(newProjectBtn);
    newProjectBtn.classList.add("activeProject")
    maincontent.replaceChildren(newProjectDom.projectDOM);
    (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.save)(myTodos);
});

window.addEventListener("load",() => {
    myTodos = (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.load)();
    adjustSideBar(screenSize);
    for(let i=0; i<myTodos.length;i++){
        const newProjectDom = new _projectDomClass__WEBPACK_IMPORTED_MODULE_3__["default"](myTodos[i],myTodos);
        projectDiv.appendChild(newProjectDom.projectBtn);
    }
    if(myTodos[0]!==undefined) {
        let a = myTodos[0]
        let projectDiv = new _projectDomClass__WEBPACK_IMPORTED_MODULE_3__["default"](a,myTodos);
        maincontent.replaceChildren(projectDiv.projectDOM);
    }else {
        maincontent.replaceChildren((0,_emptyDOM__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }
})



function createNewProject() {
    const projectNameInput = document.getElementById("addProjectText");
    const projectName = projectNameInput.value;
    const newProjectObj = new _NewProject__WEBPACK_IMPORTED_MODULE_1__["default"](projectName);
    projectNameInput.value = "";
    return newProjectObj;
}








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFB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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDa0I7QUFDRTtBQUNPO0FBQ2I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdEQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFJO0FBQ1IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxjQUFjLGdEQUFJO0FBQ2xCO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQyxrQ0FBa0Msd0RBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQWM7QUFDM0M7QUFDQSxLQUFLO0FBQ0wsb0NBQW9DLHFEQUFRO0FBQzVDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL05ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9OZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvU2F2ZV9Mb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvY3JlYXRlUHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL2NyZWF0ZVRhc2tET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9lbXB0eURPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL3Byb2plY3REb21DbGFzcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbjpyb290IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIC0taGVhZGVyQkcgOiByZ2IoMCwgMCwgMCk7XHJcbiAgICAtLWhlYWRlckNvbG9yOiB3aGl0ZTtcclxuICAgIC0tc2lkZUJhckJHIDogcmdiKDIxMywgMjEzLCAyMTMpO1xyXG4gICAgLS1zaWRlQmFyQ29sb3IgOiBibGFjaztcclxuICAgIC0tYnRuQkcgOiByZ2IoMTkxLCAxOTEsIDE5MSk7XHJcbiAgICAtLWFjdGl2ZUJ0bkJHOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XHJcbiAgICAtLWFjdGliZUJ0bkNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIC0tdGFza0RpdkJHOiByZ2IoODEsIDgxLCA4MSk7XHJcbn1cclxuLnZpZXcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubWVudUljb257XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZpbGw6IHZhcigtLWhlYWRlckNvbG9yKTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1haW5Db250ZW50e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckJHKTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNpZGVCYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZUJhckJHKTtcclxuICAgIGNvbG9yOiB2YXIoLS1zaWRlQmFyQ29sb3IpO1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmxvY2FsVGFza3N7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9jYWxUYXNrc0J0bntcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMTIxLCAxMjAsIDEyMCk7XHJcbn1cclxuLmxvY2FsVGFza3NCdG46aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYWN0aXZlUHJvamVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckJHKTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XHJcbn1cclxuXHJcbi5wcm9qZWN0c3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZ1BST0pFQ1RTe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgY29sb3I6IHJnYigzNSwgMTA5LCAxOSk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hZGRQcm9qZWN0Rm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmFkZFByb2plY3RGb3JtID4gaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5hZGRQcm9qZWN0Rm9ybT5pbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibHVlO1xyXG59XHJcbi5hZGRQcm9qZWN0QnRue1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggIGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xvc2VCdG57XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDQsIDQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigxMjAsIDQsIDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLmNsb3NlQnRuOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnByb2plY3REaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuLnByb2plY3REaXZIZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYWRkVGFza0Zvcm17XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZUJ0bkJHKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRhc2tJbnB1dEVsZW17XHJcbiAgICBncmlkLWNvbHVtbjogMS8gc3BhbiAyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50YXNrSW5wdXRFbGVtOmZvY3Vze1xyXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHJnYig3NiwgMTM2LCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi50YXNrRHVlRGF0ZXtcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5hZGRUYXNrQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG4ucHJvamVjdE5hdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuLnByb2plY3ROYXYgPmg0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udmlld1Rhc2tzRGl2e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHJnYigyMywgMTMsIDEzKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDIwcHg7cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRhc2tEaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGVCYXJCRyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4udGFza1RleHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi50YXNrRHVlRGF0ZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50YXNrQnRuIHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuQkcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbn1cclxuLnRhc2tTdGF0dXNCdG4ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLnRhc2tEZWxldGVCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgNCwgNCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi50YXNrRGVsZXRlQnRuOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcbi50YXNrRGVsZXRlQnRuOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG59XHJcblxyXG4udGFza0RvbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgXHJcbn1cclxuLnRhc2tDb21wbGV0ZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZW1wdHlUZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLypSZXNwb25zaXZlIERlc2lnbiovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5tZW51SWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5zaWRlQmFye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixzSEFBc0g7SUFDdEgsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2RUFBNkU7SUFDN0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFB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QixhQUFhO0lBQ2IsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIC0taGVhZGVyQkcgOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIC0taGVhZGVyQ29sb3I6IHdoaXRlO1xcclxcbiAgICAtLXNpZGVCYXJCRyA6IHJnYigyMTMsIDIxMywgMjEzKTtcXHJcXG4gICAgLS1zaWRlQmFyQ29sb3IgOiBibGFjaztcXHJcXG4gICAgLS1idG5CRyA6IHJnYigxOTEsIDE5MSwgMTkxKTtcXHJcXG4gICAgLS1hY3RpdmVCdG5CRzogcmdiKDE2NywgMTY3LCAxNjcpO1xcclxcbiAgICAtLWFjdGliZUJ0bkNvbG9yOndoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXRhc2tEaXZCRzogcmdiKDgxLCA4MSwgODEpO1xcclxcbn1cXHJcXG4udmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5tZW51SWNvbntcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZmlsbDogdmFyKC0taGVhZGVyQ29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5tYWluQ29udGVudHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQkcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGVCYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlQmFyQkcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2lkZUJhckNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmxvY2FsVGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxvY2FsVGFza3NCdG57XFxyXFxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigxMjEsIDEyMCwgMTIwKTtcXHJcXG59XFxyXFxuLmxvY2FsVGFza3NCdG46aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmVQcm9qZWN0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCRyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c3tcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRpbmdQUk9KRUNUU3tcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoMzUsIDEwOSwgMTkpO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0gPiBpbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybT5pbnB1dDpmb2N1c3tcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0QnRue1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMnB4ICBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG57XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNCwgNCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMTIwLCA0LCA0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcbi5jbG9zZUJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZXtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdERpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdERpdkhlYWRpbmd7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmFkZFRhc2tGb3Jte1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlQnRuQkcpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2tJbnB1dEVsZW17XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2tJbnB1dEVsZW06Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCByZ2IoNzYsIDEzNiwgMjU1KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4udGFza0R1ZURhdGV7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuLmFkZFRhc2tCdG57XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuLnByb2plY3ROYXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0TmF2ID5oNCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnZpZXdUYXNrc0RpdntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjMsIDEzLCAxMyk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMjBweDtwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0RpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlQmFyQkcpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLnRhc2tUZXh0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4udGFza0R1ZURhdGV7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi50YXNrQnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5CRyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcbi50YXNrU3RhdHVzQnRuIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi50YXNrRGVsZXRlQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgNCwgNCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ0bjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ0bjphY3RpdmUge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxyXFxufVxcclxcblxcclxcbi50YXNrRG9uZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLnRhc2tDb21wbGV0ZXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5VGV4dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlJlc3BvbnNpdmUgRGVzaWduKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51SWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuc2lkZUJhcntcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBOZXdQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUpIHtcclxuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy50b2RheSA9IFtdO1xyXG4gICAgdGhpcy50aGlzV2VlayA9IFtdO1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFkZHRhc2sodmFsdWUpIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh2YWx1ZSk7XHJcbiAgICB0aGlzLnRhc2tzVGhpc1dlZWsoKTtcclxuICAgIHRoaXMudGFza3NUb2RheSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlbGV0ZVRhc2soaWQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YXNrc1RoaXNXZWVrKCk7XHJcbiAgICB0aGlzLnRhc2tzVG9kYXkoKTtcclxuICB9XHJcblxyXG4gIHNldCBjb21wbGV0ZVN0YXR1cyh2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiSW52YWxpZCB2YWx1ZS4gRXhwZWN0ZWQgYSBib29sZWFuLiBBdCAnTmV3UHJvamVjdC5jb21wbGV0ZSdcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuZHVlRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZHVlRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBcIk5vIER1ZSBEYXRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKGR1ZURhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkdWVEYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGEgZGF0ZS4gQXQgJ05ld1Byb2plY3QuZHVlZGF0ZSdcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YXNrc1RoaXNXZWVrKCkge1xyXG4gICAgY29uc3QgYV93ZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7IC8vIE51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIHdlZWtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMudGhpc1dlZWsgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICBjb25zdCBkaWZmSW5NaWxsaVNlYyA9IGdpdmVuRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgIHJldHVybiBkaWZmSW5NaWxsaVNlYyA+PSAwICYmIGRpZmZJbk1pbGxpU2VjIDwgYV93ZWVrO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0YXNrc1RvZGF5KCkge1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy50b2RheSA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZ2l2ZW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICBnaXZlbkRhdGUuZ2V0TW9udGgoKSA9PT0gY3VycmVudERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgIGdpdmVuRGF0ZS5nZXREYXRlKCkgPT09IGN1cnJlbnREYXRlLmdldERhdGUoKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQcm9qZWN0O1xyXG4iLCJjbGFzcyBOZXdUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhc2ssZHVlRGF0ZSl7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmR1ZURhdGVUeHRcclxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgaWYodGhpcy5kdWVEYXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5kdWVEYXRlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlVHh0ID0gXCJObyBEdWUgRGF0ZVwiO1xyXG4gICAgICAgIH1lbHNlIGlmKGR1ZURhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkdWVEYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlVHh0ID0gYER1ZSBEYXRlIDogJHtkdWVEYXRlLmdldERhdGUoKX0tJHtkdWVEYXRlLmdldE1vbnRoKCl9LSR7ZHVlRGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIGRhdGUuIEF0IE5ld1Rhc2tcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUb2RheSgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdGFza0RhdGUuZ2V0RGF0ZSgpID09PSBjdXJyZW50RGF0ZS5nZXREYXRlKCkgJiZcclxuICAgICAgICB0YXNrRGF0ZS5nZXRNb250aCgpID09PSBjdXJyZW50RGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgdGFza0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUaGlzV2VlaygpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IG9uZVdlZWtNaWxsaXNlY29uZHMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDsgLy8gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgd2Vla1xyXG4gICAgICAgIGNvbnN0IGRpZmZJbk1pbGxpc2Vjb25kcyA9IHRhc2tEYXRlLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKTtcclxuICAgICAgICByZXR1cm4gZGlmZkluTWlsbGlzZWNvbmRzID49IDAgJiYgZGlmZkluTWlsbGlzZWNvbmRzIDwgb25lV2Vla01pbGxpc2Vjb25kcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJpbXBvcnQgTmV3UHJvamVjdCBmcm9tIFwiLi9OZXdQcm9qZWN0XCI7XHJcblxyXG5leHBvcnQge3NhdmUsbG9hZH07XHJcblxyXG5mdW5jdGlvbiBzYXZlKG15VG9kb3Mpe1xyXG4gICAgY29uc3QgbXlUb2RvTGlzdCA9IEpTT04uc3RyaW5naWZ5KG15VG9kb3MpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb3MnLG15VG9kb0xpc3QpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWQoKXtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VG9kb3NcIik7XHJcbiAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dG9kb0xpc3RzLmxlbmd0aCA7aSsrKXtcclxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRvZG9MaXN0c1tpXSxOZXdQcm9qZWN0LnByb3RvdHlwZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0c1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgY3JlYXRlUHJvamVjdERPTSwgY3JlYXRlUHJvamVjdEJ0biB9O1xyXG5pbXBvcnQgTmV3VGFzayBmcm9tIFwiLi9OZXdUYXNrXCI7XHJcbmltcG9ydCBjcmVhdGVUYXNrRE9NIGZyb20gXCIuL2NyZWF0ZVRhc2tET01cIjtcclxuaW1wb3J0IHsgc2F2ZSxsb2FkIH0gZnJvbSBcIi4vU2F2ZV9Mb2FkXCI7XHJcbmltcG9ydCBlbXB0eURPTSBmcm9tIFwiLi9lbXB0eURPTVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RET00ocHJvamVjdE9iaixteVRvZG9zKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE9iajtcclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKTtcclxuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuaWQpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REaXZIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgcHJvamVjdERpdkhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZIZWFkaW5nXCIpO1xyXG4gICAgcHJvamVjdERpdkhlYWRpbmcudGV4dENvbnRlbnQgPSBgUHJvamVjdCA6ICR7cHJvamVjdC5uYW1lfWA7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrRm9ybVwiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrSW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0lucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xyXG4gICAgdGFza0lucHV0RWxlbS5jbGFzc0xpc3QuYWRkKFwidGFza0lucHV0RWxlbVwiKTtcclxuICAgIHRhc2tJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIixcIlwiKTtcclxuICAgIHRhc2tJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIkVudGVyIHRoZSB0YXNrIGhlcmVcIik7XHJcblxyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xyXG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhZGR0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZHRhc2tCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xyXG4gICAgYWRkdGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0J0blwiKTtcclxuICAgIGFkZHRhc2tCdG4udGV4dENvbnRlbnQgPSBcIiArIE5ldyBUYXNrXCJcclxuXHJcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRFbGVtKTtcclxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZHRhc2tCdG4pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdE5hdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdlwiKTtcclxuICAgIGNvbnN0IGFsbFRhc2tzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGFsbFRhc2tzTGluay50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XHJcbiAgICBhbGxUYXNrc0xpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZMaW5rXCIpO1xyXG4gICAgYWxsVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBhbGxUYXNrc0xpbmsuc2V0QXR0cmlidXRlKFwiaWRcIixcImFsbFRhc2tzXCIpO1xyXG4gICAgY29uc3QgdG9kYXlzVGFza3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2TGlua1wiKTtcclxuICAgIHRvZGF5c1Rhc2tzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b2RheXNUYXNrc1wiKTtcclxuXHJcbiAgICBjb25zdCB0aGlzV2Vla3NUYXNrc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0xpbmsudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2TGlua1wiKTtcclxuICAgIHRoaXNXZWVrc1Rhc2tzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0aGlzV2Vla3NUYXNrc1wiKVxyXG5cclxuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NMaW5rKTtcclxuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQodG9kYXlzVGFza3NMaW5rKTtcclxuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQodGhpc1dlZWtzVGFza3NMaW5rKVxyXG5cclxuICAgIGNvbnN0IHZpZXdUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2aWV3VGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInZpZXdUYXNrc0RpdlwiKTtcclxuXHJcbiAgICBjb25zdCBhbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWxsVGFza3NEaXZcIik7XHJcblxyXG4gICAgY29uc3QgdGhpc1dlZWtzVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0aGlzV2Vla3NUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGhpc1dlZWtzVGFza3NEaXZcIik7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHJcbiAgICBjb25zdCB0b2RheXNUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RheXNUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kYXlzVGFza3NEaXZcIik7XHJcbiAgICB0b2RheXNUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHJcblxyXG4gICAgYWxsVGFza3NEaXYuaW5uZXJUZXh0PSBcIkFsbCBUYXNrc1wiO1xyXG4gICAgdG9kYXlzVGFza3NEaXYuaW5uZXJUZXh0ID0gXCJUYXNrcyBmb3IgVG9kYXlcIjtcclxuICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmlubmVyVGV4dCA9IFwiVGFza3MgZm9yIHRoaXMgV2Vla1wiXHJcbiAgICB2aWV3VGFza3NEaXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NEaXYpO1xyXG4gICAgdmlld1Rhc2tzRGl2LmFwcGVuZENoaWxkKHRoaXNXZWVrc1Rhc2tzRGl2KTtcclxuICAgIHZpZXdUYXNrc0Rpdi5hcHBlbmRDaGlsZCh0b2RheXNUYXNrc0Rpdik7XHJcblxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2SGVhZGluZyk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hdik7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHZpZXdUYXNrc0Rpdik7XHJcblxyXG4gICAgLy9FdmVudCBMaXN0ZW5lcnNcclxuICAgIGZ1bmN0aW9uIHNob3dUYWIodGFiKSB7Ly9Td2l0Y2hpbmcgdGFic1xyXG5cclxuICAgICAgICBhbGxUYXNrc0xpbmsuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCB0YWIgPT09IFwiYWxsXCIpO1xyXG4gICAgICAgIHRvZGF5c1Rhc2tzTGluay5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIHRhYiA9PT0gXCJ0b2RheVwiKTtcclxuICAgICAgICB0aGlzV2Vla3NUYXNrc0xpbmsuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCB0YWIgPT09IFwidGhpc1dlZWtcIik7XHJcblxyXG4gICAgICAgIGFsbFRhc2tzRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIHRhYiAhPT0gXCJhbGxcIik7XHJcbiAgICAgICAgdG9kYXlzVGFza3NEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgdGFiICE9PSBcInRvZGF5XCIpO1xyXG4gICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIHRhYiAhPT0gXCJ0aGlzV2Vla1wiKTtcclxuICAgIH1cclxuICAgIGFsbFRhc2tzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCJhbGxcIilcclxuICAgIH0pO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBzaG93VGFiKFwidG9kYXlcIilcclxuICAgIH0pO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBzaG93VGFiKFwidGhpc1dlZWtcIilcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXNrID0gbmV3IE5ld1Rhc2sodGFza0lucHV0RWxlbS52YWx1ZSx0YXNrRHVlRGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgdGFzay5zZXREdWVEYXRlID0gbmV3IERhdGUodGFza0R1ZURhdGUudmFsdWUpO1xyXG4gICAgICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00odGFzayxwcm9qZWN0LG15VG9kb3MpKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS5hZGR0YXNrID0gdGFzaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFzay5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgICAgdG9kYXlzVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTSh0YXNrLHByb2plY3QsbXlUb2RvcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhc2suaXNUaGlzV2VlaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00odGFzayxwcm9qZWN0LG15VG9kb3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZShteVRvZG9zKTtcclxuICAgICAgICBteVRvZG9zID0gbG9hZCgpXHJcbiAgICAgICAgdGFza0lucHV0RWxlbS52YWx1ZT0gXCJcIjtcclxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZT1cIlwiO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL0xvYWQgYWxsIEV4aXN0aW5nIHRhc2tzIGxpc3RzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBteVRvZG9zW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRE9NKG15VG9kb3NbaV0udGFza3Nbal0sIG15VG9kb3NbaV0sIG15VG9kb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTsgLy8gQXBwZW5kIHRoZSB0YXNrIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udG9kYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZGF5c1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50b2RheVtqXSxteVRvZG9zW2ldLG15VG9kb3MpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udGhpc1dlZWsubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50aGlzV2Vla1tqXSxteVRvZG9zW2ldLG15VG9kb3MpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0LG15VG9kb3MsbmV3UHJvamVjdERvbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImxvY2FsVGFza3NCdG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0QnV0dG9uXCIpXHJcbiAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLHByb2plY3QuaWQpO1xyXG4gICAgY29uc3QgcHJvamVjdEJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwcm9qZWN0QnRuVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIHByb2plY3RCdG4udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZUJ0blwiKTtcclxuXHJcbiAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKHByb2plY3RCdG5UZXh0KTtcclxuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bXlUb2Rvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbXlUb2RvcyA9IG15VG9kb3MuZmlsdGVyKHQgPT4gdC5pZCAhPT0gcHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3REb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RCdG4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHNhdmUobXlUb2Rvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW5Db250ZW50LnJlcGxhY2VDaGlsZHJlbihlbXB0eURPTSgpKVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9qZWN0QnRuO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza0RPTTtcclxuaW1wb3J0IHsgc2F2ZSxsb2FkIH0gZnJvbSBcIi4vU2F2ZV9Mb2FkXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRE9NKE5ld1Rhc2tPYmosTmV3UHJvamVjdE9iaixteVRvZG9zKXtcclxuICAgIGNvbnN0IHRhc2sgPSBOZXdUYXNrT2JqO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IE5ld1Byb2plY3RPYmo7XHJcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tEaXZcIik7XHJcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiLCB0YXNrLmlkKTtcclxuXHJcbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2tUZXh0XCIpO1xyXG4gICAgdGFza1RleHQudGV4dENvbnRlbnQgPSBOZXdUYXNrT2JqLnRhc2s7XHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tUZXh0KTtcclxuXHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0R1ZURhdGVcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IE5ld1Rhc2tPYmouZHVlRGF0ZVR4dDtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tTdGF0dXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdGFza1N0YXR1c0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XHJcbiAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrU3RhdHVzQnRuXCIpO1xyXG4gICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza0J0blwiKVxyXG4gICAgdGFza1N0YXR1c0J0bi50ZXh0Q29udGVudCA9IE5ld1Rhc2tPYmouY29tcGxldGUgPyBcIkRvbmVcIiA6IFwiTm90IERvbmVcIjtcclxuICAgIGlmKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRG9uZVwiKTtcclxuICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrTm90RG9uZVwiKTtcclxuICAgICAgICB0YXNrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlXCIpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tEb25lXCIpO1xyXG4gICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ29tcGxldGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzQnRuKTtcclxuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdGFza0RlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XHJcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuXCIpXHJcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVsZXRlQnRuXCIpO1xyXG4gICAgdGFza0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xyXG5cclxuICAgIC8vRXZlbnQgTGlzdGVuZXJzXHJcbiAgICB0YXNrRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxteVRvZG9zW2ldLnRhc2tzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG15VG9kb3NbaV0udGFza3Nbal0uaWQgPT09IHRhc2suaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVRvZG9zW2ldLmRlbGV0ZVRhc2sgPSB0YXNrLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHRhc2sgZWxlbWVudCBmcm9tIHRoZSBET01cclxuICAgICAgICBjb25zdCB0YXNrSWQgPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKTtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIHRhc2tEaXYgZWxlbWVudHMgd2l0aCB0aGUgc2FtZSB0YXNrIGlkXHJcbiAgICAgICAgY29uc3QgdGFza0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrSWR9XCJdYCk7XHJcbiAgICAgICAgdGFza0RpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlKCkpO1xyXG4gICAgICAgIHNhdmUobXlUb2Rvcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXNrU3RhdHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS5pZCA9PT0gcHJvamVjdC5pZCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPG15VG9kb3NbaV0udGFza3MubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS50YXNrc1tqXS5pZCA9PT0gdGFzay5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tEb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwidGFza05vdERvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi50ZXh0Q29udGVudCA9IFwiTm90IERvbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tEb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmUobXlUb2Rvcyk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhc2tEaXY7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBlbXB0eURPTTtcclxuZnVuY3Rpb24gZW1wdHlET00oKSB7XHJcbiAgICBjb25zdCBlbXB0eURPTUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZW1wdHlET01FbGVtLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVRleHRcIik7XHJcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJObyBQcm9qZWN0IGlzIFNlbGVjdGVkLlwiO1xyXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIFNlbGVjdCBhIHByb2plY3Qgb3IgQWRkIGEgTmV3IE9uZS5cIjtcclxuICAgIHRleHQyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJmb250LXN0eWxlOiBpdGFsaWM7XCIpXHJcblxyXG4gICAgZW1wdHlET01FbGVtLmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgIGVtcHR5RE9NRWxlbS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICByZXR1cm4gZW1wdHlET01FbGVtO1xyXG59IiwiXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RET00sY3JlYXRlUHJvamVjdEJ0biB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RET01cIjtcclxuY2xhc3MgUHJvamVjdERPTV9CVE4ge1xyXG4gICAgY29uc3RydWN0b3IobmV3UHJvamVjdE9iaixteVRvZG9zKXtcclxuICAgICAgICB0aGlzLmlkID0gbmV3UHJvamVjdE9iai5pZDtcclxuICAgICAgICB0aGlzLnByb2plY3RET00gPSBjcmVhdGVQcm9qZWN0RE9NXHJcbiAgICAgICAgKG5ld1Byb2plY3RPYmosbXlUb2Rvcyk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bihuZXdQcm9qZWN0T2JqLG15VG9kb3MsdGhpcy5wcm9qZWN0RE9NKTtcclxuICAgICAgICBhY3RpdmVTdGF0dXModGhpcy5wcm9qZWN0QnRuKVxyXG4gICAgICAgIHRoaXMucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKHRoaXMucHJvamVjdERPTSk7XHJcbiAgICAgICAgICAgIGFjdGl2ZVN0YXR1cyh0aGlzLnByb2plY3RCdG4pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZlU3RhdHVzKHByb2plY3RCdG4pe1xyXG4gICAgICAgICAgICBjb25zdCBBbGxQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdEJ1dHRvblwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0bkRhdGFJZCA9IE51bWJlcihwcm9qZWN0QnRuLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSk7XHJcbiAgICAgICAgICAgIEFsbFByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uRGF0YUlEID0gTnVtYmVyKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uRGF0YUlEID09PSBwcm9qZWN0QnRuRGF0YUlkKXtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERPTV9CVE47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IE5ld1Byb2plY3QgZnJvbSBcIi4vTmV3UHJvamVjdFwiO1xyXG5pbXBvcnQgeyBzYXZlLGxvYWQgfSBmcm9tICcuL1NhdmVfTG9hZCc7XHJcbmltcG9ydCBQcm9qZWN0RE9NX0JUTiBmcm9tICcuL3Byb2plY3REb21DbGFzcyc7XHJcbmltcG9ydCBlbXB0eURPTSBmcm9tICcuL2VtcHR5RE9NJztcclxuXHJcblxyXG5cclxubGV0IG15VG9kb3MgPSBbXTsvL0xvY2FsIHZhcmlhYmxlcyB0byBzdG9yZSBhbGwgVG9kb3NcclxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XHJcbmNvbnN0IG1haW5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcclxuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RGb3JtXCIpO1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJhclwiKTtcclxuY29uc3Qgc2NyZWVuU2l6ZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzcwcHgpXCIpO1xyXG5mdW5jdGlvbiBhZGp1c3RTaWRlQmFyKHNjcmVlblNpemUpe1xyXG4gICAgaWYoc2NyZWVuU2l6ZS5tYXRjaGVzKXtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuc2NyZWVuU2l6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsYWRqdXN0U2lkZUJhcik7XHJcblxyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUljb25cIik7XHJcblxyXG5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xyXG59KVxyXG5cclxuXHJcbmFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZSk9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgbXlUb2Rvcy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdERvbSA9IG5ldyBQcm9qZWN0RE9NX0JUTihuZXdQcm9qZWN0LG15VG9kb3MpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RG9tLnByb2plY3RCdG4pO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IG5ld1Byb2plY3REb20ucHJvamVjdEJ0bjtcclxuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3RCdG4pO1xyXG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdFwiKVxyXG4gICAgbWFpbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKG5ld1Byb2plY3REb20ucHJvamVjdERPTSk7XHJcbiAgICBzYXZlKG15VG9kb3MpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpID0+IHtcclxuICAgIG15VG9kb3MgPSBsb2FkKCk7XHJcbiAgICBhZGp1c3RTaWRlQmFyKHNjcmVlblNpemUpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8bXlUb2Rvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RG9tID0gbmV3IFByb2plY3RET01fQlROKG15VG9kb3NbaV0sbXlUb2Rvcyk7XHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RG9tLnByb2plY3RCdG4pO1xyXG4gICAgfVxyXG4gICAgaWYobXlUb2Rvc1swXSE9PXVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxldCBhID0gbXlUb2Rvc1swXVxyXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gbmV3IFByb2plY3RET01fQlROKGEsbXlUb2Rvcyk7XHJcbiAgICAgICAgbWFpbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKHByb2plY3REaXYucHJvamVjdERPTSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgbWFpbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKGVtcHR5RE9NKCkpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFRleHRcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0T2JqID0gbmV3IE5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICByZXR1cm4gbmV3UHJvamVjdE9iajtcclxufVxyXG5cclxuZXhwb3J0IHtteVRvZG9zfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==