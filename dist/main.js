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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root {\r\n    font-size: 16px;\r\n    --headerBG : rgb(0, 0, 0);\r\n    --headerColor: white;\r\n    --sideBarBG : rgb(213, 213, 213);\r\n    --sideBarColor : black;\r\n    --btnBG : rgb(191, 191, 191);\r\n    --activeBtnBG: rgb(167, 167, 167);\r\n    --actibeBtnColor:white;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    --taskDivBG: rgb(81, 81, 81);\r\n}\r\n.view {\r\n    display: block;\r\n}\r\n.content {\r\n    display: flex;\r\n}\r\n.menuIcon{\r\n    width: 40px;\r\n    height: 40px;\r\n    fill: var(--headerColor);\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n.mainContent{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nheader{\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    font-size: 1.5rem;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sideBar {\r\n    background-color: var(--sideBarBG);\r\n    color: var(--sideBarColor);\r\n    width: min-content;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    padding: 1rem;\r\n    border: 2px solid black;\r\n}\r\n.localTasks{\r\n    padding: 1rem;\r\n    border-bottom: 2px dotted black;\r\n    text-align: center;\r\n}\r\n.localTasksBtn{\r\n    background:transparent;\r\n    display: flex;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    justify-content: space-between;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    padding: 0.5rem ;\r\n    border: none;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    margin-bottom: 20px;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 1px rgb(121, 120, 120);\r\n}\r\n.localTasksBtn:hover {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.projects{\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.headingPROJECTS{\r\n    text-align: left;\r\n    font-size: 2.3rem;\r\n    color: rgb(35, 109, 19);\r\n    font-weight: 900;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.addProjectForm{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 20px;\r\n    justify-content: right;\r\n    margin-bottom: 20px;\r\n}\r\n.addProjectForm > input {\r\n    font-size: 1rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n}\r\n.addProjectForm>input:focus{\r\n    outline: 2px solid blue;\r\n}\r\n.addProjectBtn{\r\n    padding: 0.4rem;\r\n    font-weight: 600;\r\n    align-self: right;\r\n    border-radius: 5px;\r\n    box-shadow: 3px 3px 2px  black;\r\n    cursor: pointer;\r\n}\r\n\r\n.closeBtn{\r\n    padding: 5px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: rgb(120, 4, 4);\r\n    color: white;\r\n    font-weight: 900;\r\n    border: 1px solid white;\r\n    outline: 1px solid rgb(120, 4, 4);\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n.closeBtn:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.active{\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.projectDiv{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 1rem;\r\n}\r\n.projectDivHeading{\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n}\r\n.addTaskForm{\r\n    border: 2px solid black;\r\n    background-color: var(--activeBtnBG);\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    padding: 1rem;\r\n    width: 80%;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem{\r\n    grid-column: 1/ span 2;\r\n    padding: 10px;\r\n    font-size: 1.3rem;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem:focus{\r\n    outline: 4px solid rgb(76, 136, 255);\r\n    border: none;\r\n}\r\n.taskDueDate{\r\n    padding: 0.3rem;\r\n    font-size: 1rem;\r\n    width: fit-content;\r\n    align-self: center;\r\n    justify-items: center;\r\n    margin: 0 auto;\r\n}\r\n.addTaskBtn{\r\n    border-radius: 5px;\r\n    font-size: 1.4rem;\r\n    margin: 0 auto;\r\n    padding: 0.4rem;\r\n    width: max-content;\r\n}\r\n.projectNav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    font-size: 1.4rem;\r\n}\r\n.projectNav >h4 {\r\n    cursor: pointer;\r\n}\r\n.viewTasksDiv{\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: rgb(23, 13, 13);\r\n    display: grid;\r\n    gap: 20px;padding: 10px;\r\n}\r\n\r\n.taskDiv{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    padding: 0.4rem;\r\n    position: relative;\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n    background-color: var(--sideBarBG);\r\n    border: 1px solid black;\r\n}\r\n.taskText{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.2rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n}\r\n.taskDueDate{\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n    font-size: 0.9rem;\r\n    font-weight: 900;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.taskBtn {\r\n    padding: 0.3rem 1rem;\r\n    font-size: 1rem;\r\n    border: none;\r\n    background-color: var(--btnBG);\r\n    border-radius: 10px;\r\n    font-weight: 700;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.1s;\r\n}\r\n.taskStatusBtn {\r\n    border: 2px solid black;\r\n}\r\n.taskDeleteBtn {\r\n    background-color: rgb(147, 4, 4);\r\n    color: white;\r\n    margin-left: 10px;\r\n    border: 1px solid white;\r\n}\r\n.taskDeleteBtn:hover {\r\n    outline: 2px solid whitesmoke;\r\n}\r\n.taskDeleteBtn:active {\r\n    outline: none;\r\n    transform: scale(0.6);\r\n}\r\n\r\n.taskDone{\r\n    background-color: green;\r\n    color: whitesmoke;\r\n    \r\n}\r\n.taskComplete{\r\n    text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.emptyText {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*Responsive Design*/\r\n@media only screen and (max-width: 770px){\r\n    header{\r\n        font-size: 1rem;\r\n    }\r\n    .menuIcon {\r\n        display: block;\r\n        margin-right: 1rem;\r\n    }\r\n    .content {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .sideBar{\r\n        width: 100%;\r\n        height: min-content;\r\n        min-height: min-content;\r\n    }\r\n}"],"sourceRoot":""}]);
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
    this.tasks.unshift(value);
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
    projectDivHeading.textContent = project.name;

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
                console.log(myTodos[i].tasks);
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
            (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.save)(myTodos)
            myTodos = (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.load)()
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
                        console.log(myTodos[i]);
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
                            console.log(myTodos[i].tasks[j]);//Console
                            taskStatusBtn.textContent = "Done";
                            taskText.classList.add("taskComplete");
                            taskStatusBtn.classList.add("taskDone");
                            taskStatusBtn.classList.remove("taskNotDone");
                        }else if(myTodos[i].tasks[j].complete === true){
                            myTodos[i].tasks[j].complete = false;
                            console.log(myTodos[i].tasks[j]);//console
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myTodos: () => (/* binding */ myTodos)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewTask */ "./src/NewTask.js");
/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProject */ "./src/NewProject.js");
/* harmony import */ var _createProjectDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProjectDOM */ "./src/createProjectDOM.js");
/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save_Load */ "./src/Save_Load.js");
/* harmony import */ var _projectDomClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectDomClass */ "./src/projectDomClass.js");
/* harmony import */ var _emptyDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emptyDOM */ "./src/emptyDOM.js");










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
    const projectName = document.getElementById("addProjectText")
    const newProject = new _NewProject__WEBPACK_IMPORTED_MODULE_2__["default"](projectName.value,"");
    console.log(newProject);
    myTodos.push(newProject);
    const newProjectDom = new _projectDomClass__WEBPACK_IMPORTED_MODULE_5__["default"](newProject,myTodos);
    projectDiv.appendChild(newProjectDom.projectBtn);
    maincontent.replaceChildren(newProjectDom.projectDOM);
    (0,_Save_Load__WEBPACK_IMPORTED_MODULE_4__.save)(myTodos);
});

window.addEventListener("load",() => {
    myTodos = (0,_Save_Load__WEBPACK_IMPORTED_MODULE_4__.load)();
    adjustSideBar(screenSize);
    maincontent.replaceChildren((0,_emptyDOM__WEBPACK_IMPORTED_MODULE_6__["default"])())
    for(let i=0; i<myTodos.length;i++){
        const newProjectDom = new _projectDomClass__WEBPACK_IMPORTED_MODULE_5__["default"](myTodos[i],myTodos);
        projectDiv.appendChild(newProjectDom.projectBtn);
    }
})



function createNewProject() {
    const projectName = document.getElementById("addProjectText").value;
    const newProjectObj = new _NewProject__WEBPACK_IMPORTED_MODULE_2__["default"](projectName);
    return newProjectObj;
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createProjectDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjectDOM */ "./src/createProjectDOM.js");


class ProjectDOM_BTN {
    constructor(newProjectObj,myTodos){
        this.id = newProjectObj.id;
        this.projectDOM = (0,_createProjectDOM__WEBPACK_IMPORTED_MODULE_1__.createProjectDOM)
        (newProjectObj,myTodos);
        this.projectBtn = (0,_createProjectDOM__WEBPACK_IMPORTED_MODULE_1__.createProjectBtn)(newProjectObj,myTodos,this.projectDOM);
        this.projectBtn.addEventListener("click",() => {
            const mainContent = document.getElementById("mainContent");
            mainContent.replaceChildren(this.projectDOM);
        })
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFB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bURBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ2dCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEU0QjtBQUMyQztBQUN2RTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUVBQWdCO0FBQzFDO0FBQ0EsMEJBQTBCLG1FQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7O1VDZjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL05ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9OZXdUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvU2F2ZV9Mb2FkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvY3JlYXRlUHJvamVjdERPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL2NyZWF0ZVRhc2tET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9lbXB0eURPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvcHJvamVjdERvbUNsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG46cm9vdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLWhlYWRlckJHIDogcmdiKDAsIDAsIDApO1xyXG4gICAgLS1oZWFkZXJDb2xvcjogd2hpdGU7XHJcbiAgICAtLXNpZGVCYXJCRyA6IHJnYigyMTMsIDIxMywgMjEzKTtcclxuICAgIC0tc2lkZUJhckNvbG9yIDogYmxhY2s7XHJcbiAgICAtLWJ0bkJHIDogcmdiKDE5MSwgMTkxLCAxOTEpO1xyXG4gICAgLS1hY3RpdmVCdG5CRzogcmdiKDE2NywgMTY3LCAxNjcpO1xyXG4gICAgLS1hY3RpYmVCdG5Db2xvcjp3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXRhc2tEaXZCRzogcmdiKDgxLCA4MSwgODEpO1xyXG59XHJcbi52aWV3IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1lbnVJY29ue1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmaWxsOiB2YXIoLS1oZWFkZXJDb2xvcik7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYWluQ29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCRyk7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zaWRlQmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGVCYXJCRyk7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZUJhckNvbG9yKTtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5sb2NhbFRhc2tze1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvY2FsVGFza3NCdG57XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDEyMSwgMTIwLCAxMjApO1xyXG59XHJcbi5sb2NhbFRhc2tzQnRuOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnByb2plY3Rze1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5oZWFkaW5nUFJPSkVDVFN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICBjb2xvcjogcmdiKDM1LCAxMDksIDE5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmFkZFByb2plY3RGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYWRkUHJvamVjdEZvcm0gPiBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmFkZFByb2plY3RGb3JtPmlucHV0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XHJcbn1cclxuLmFkZFByb2plY3RCdG57XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYWxpZ24tc2VsZjogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAgYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZUJ0bntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyMCwgNCwgNCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDEyMCwgNCwgNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4uY2xvc2VCdG46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG4uYWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ucHJvamVjdERpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4ucHJvamVjdERpdkhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5hZGRUYXNrRm9ybXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlQnRuQkcpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGFza0lucHV0RWxlbXtcclxuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRhc2tJbnB1dEVsZW06Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiA0cHggc29saWQgcmdiKDc2LCAxMzYsIDI1NSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnRhc2tEdWVEYXRle1xyXG4gICAgcGFkZGluZzogMC4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmFkZFRhc2tCdG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcbi5wcm9qZWN0TmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG4ucHJvamVjdE5hdiA+aDQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi52aWV3VGFza3NEaXZ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogcmdiKDIzLCAxMywgMTMpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMjBweDtwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGFza0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZUJhckJHKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi50YXNrVGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRhc2tEdWVEYXRle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRhc2tCdG4ge1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG5CRyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxufVxyXG4udGFza1N0YXR1c0J0biB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4udGFza0RlbGV0ZUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCA0LCA0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLnRhc2tEZWxldGVCdG46aG92ZXIge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuLnRhc2tEZWxldGVCdG46YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbn1cclxuXHJcbi50YXNrRG9uZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBcclxufVxyXG4udGFza0NvbXBsZXRle1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5lbXB0eVRleHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKlJlc3BvbnNpdmUgRGVzaWduKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLm1lbnVJY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLnNpZGVCYXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLHNIQUFzSDtJQUN0SCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZFQUE2RTtJQUM3RSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsd0VBQXdFO0FBQzVFO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTLENBQUMsYUFBYTtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNIQUFzSDtBQUMxSDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAtLWhlYWRlckJHIDogcmdiKDAsIDAsIDApO1xcclxcbiAgICAtLWhlYWRlckNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLS1zaWRlQmFyQkcgOiByZ2IoMjEzLCAyMTMsIDIxMyk7XFxyXFxuICAgIC0tc2lkZUJhckNvbG9yIDogYmxhY2s7XFxyXFxuICAgIC0tYnRuQkcgOiByZ2IoMTkxLCAxOTEsIDE5MSk7XFxyXFxuICAgIC0tYWN0aXZlQnRuQkc6IHJnYigxNjcsIDE2NywgMTY3KTtcXHJcXG4gICAgLS1hY3RpYmVCdG5Db2xvcjp3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS10YXNrRGl2Qkc6IHJnYig4MSwgODEsIDgxKTtcXHJcXG59XFxyXFxuLnZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubWVudUljb257XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZpbGw6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubWFpbkNvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckJHKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlQmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZUJhckJHKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGVCYXJDb2xvcik7XFxyXFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5sb2NhbFRhc2tze1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggZG90dGVkIGJsYWNrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5sb2NhbFRhc2tzQnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMTIxLCAxMjAsIDEyMCk7XFxyXFxufVxcclxcbi5sb2NhbFRhc2tzQnRuOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHN7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkaW5nUFJPSkVDVFN7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDM1LCAxMDksIDE5KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtID4gaW5wdXQge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0+aW5wdXQ6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibHVlO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEJ0bntcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiByaWdodDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCAgYmxhY2s7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRue1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDQsIDQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDEyMCwgNCwgNCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG4uY2xvc2VCdG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmV7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3REaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuLnByb2plY3REaXZIZWFkaW5ne1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5hZGRUYXNrRm9ybXtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZUJ0bkJHKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrSW5wdXRFbGVte1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8gc3BhbiAyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrSW5wdXRFbGVtOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiA0cHggc29saWQgcmdiKDc2LCAxMzYsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnRhc2tEdWVEYXRle1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5hZGRUYXNrQnRue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcbi5wcm9qZWN0TmF2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdE5hdiA+aDQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi52aWV3VGFza3NEaXZ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogcmdiKDIzLCAxMywgMTMpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDIwcHg7cGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tEaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZUJhckJHKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi50YXNrVGV4dHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLnRhc2tEdWVEYXRle1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4udGFza0J0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuQkcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xcclxcbn1cXHJcXG4udGFza1N0YXR1c0J0biB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDQsIDQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnRhc2tEZWxldGVCdG46aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRhc2tEZWxldGVCdG46YWN0aXZlIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0RvbmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi50YXNrQ29tcGxldGV7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eVRleHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypSZXNwb25zaXZlIERlc2lnbiovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCl7XFxyXFxuICAgIGhlYWRlcntcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudUljb24ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLnNpZGVCYXJ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgTmV3UHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSxkdWVEYXRlKSB7XHJcbiAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMudG9kYXkgPSBbXTtcclxuICAgIHRoaXMudGhpc1dlZWsgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldCBhZGR0YXNrKHZhbHVlKSB7XHJcbiAgICB0aGlzLnRhc2tzLnVuc2hpZnQodmFsdWUpO1xyXG4gICAgdGhpcy50YXNrc1RoaXNXZWVrKCk7XHJcbiAgICB0aGlzLnRhc2tzVG9kYXkoKTtcclxuICB9XHJcblxyXG4gIHNldCBkZWxldGVUYXNrKGlkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHRoaXMudGFza3NUaGlzV2VlaygpO1xyXG4gICAgdGhpcy50YXNrc1RvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBzZXQgY29tcGxldGVTdGF0dXModmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgIHRoaXMuY29tcGxldGUgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBcIkludmFsaWQgdmFsdWUuIEV4cGVjdGVkIGEgYm9vbGVhbi4gQXQgJ05ld1Byb2plY3QuY29tcGxldGUnXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldCBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIGlmICh0aGlzLmR1ZURhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmR1ZURhdGUgPT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gXCJObyBEdWUgRGF0ZVwiO1xyXG4gICAgfSBlbHNlIGlmIChkdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oZHVlRGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIGRhdGUuIEF0ICdOZXdQcm9qZWN0LmR1ZWRhdGUnXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFza3NUaGlzV2VlaygpIHtcclxuICAgIGNvbnN0IGFfd2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwOyAvLyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIG9uZSB3ZWVrXHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLnRoaXNXZWVrID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcclxuICAgICAgY29uc3QgZ2l2ZW5EYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgY29uc3QgZGlmZkluTWlsbGlTZWMgPSBnaXZlbkRhdGUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpO1xyXG4gICAgICByZXR1cm4gZGlmZkluTWlsbGlTZWMgPj0gMCAmJiBkaWZmSW5NaWxsaVNlYyA8IGFfd2VlaztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdGFza3NUb2RheSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMudG9kYXkgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGdpdmVuRGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgZ2l2ZW5EYXRlLmdldE1vbnRoKCkgPT09IGN1cnJlbnREYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICBnaXZlbkRhdGUuZ2V0RGF0ZSgpID09PSBjdXJyZW50RGF0ZS5nZXREYXRlKClcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3UHJvamVjdDtcclxuIiwiY2xhc3MgTmV3VGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLGR1ZURhdGUpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlVHh0XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0IHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgICAgIGlmKHRoaXMuZHVlRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZHVlRGF0ZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZVR4dCA9IFwiTm8gRHVlIERhdGVcIjtcclxuICAgICAgICB9ZWxzZSBpZihkdWVEYXRlIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oZHVlRGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHVlRGF0ZVR4dCA9IGBEdWUgRGF0ZSA6ICR7ZHVlRGF0ZS5nZXREYXRlKCl9LSR7ZHVlRGF0ZS5nZXRNb250aCgpfS0ke2R1ZURhdGUuZ2V0RnVsbFllYXIoKX1gO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgYSBkYXRlLiBBdCBOZXdUYXNrXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVG9kYXkoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGhpcy5kdWVEYXRlKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIHRhc2tEYXRlLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgdGFza0RhdGUuZ2V0TW9udGgoKSA9PT0gY3VycmVudERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgIHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGhpc1dlZWsoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGhpcy5kdWVEYXRlKTtcclxuICAgICAgICBjb25zdCBvbmVXZWVrTWlsbGlzZWNvbmRzID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7IC8vIE51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIHdlZWtcclxuICAgICAgICBjb25zdCBkaWZmSW5NaWxsaXNlY29uZHMgPSB0YXNrRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgcmV0dXJuIGRpZmZJbk1pbGxpc2Vjb25kcyA+PSAwICYmIGRpZmZJbk1pbGxpc2Vjb25kcyA8IG9uZVdlZWtNaWxsaXNlY29uZHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2s7IiwiaW1wb3J0IE5ld1Byb2plY3QgZnJvbSBcIi4vTmV3UHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IHtzYXZlLGxvYWR9O1xyXG5cclxuZnVuY3Rpb24gc2F2ZShteVRvZG9zKXtcclxuICAgIGNvbnN0IG15VG9kb0xpc3QgPSBKU09OLnN0cmluZ2lmeShteVRvZG9zKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG9zJyxteVRvZG9MaXN0KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkKCl7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJteVRvZG9zXCIpO1xyXG4gICAgaWYoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0cyA9ICBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRvZG9MaXN0cy5sZW5ndGggO2krKyl7XHJcbiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0b2RvTGlzdHNbaV0sTmV3UHJvamVjdC5wcm90b3R5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2RvTGlzdHNcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufSIsImV4cG9ydCB7IGNyZWF0ZVByb2plY3RET00sIGNyZWF0ZVByb2plY3RCdG4gfTtcclxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vTmV3VGFza1wiO1xyXG5pbXBvcnQgY3JlYXRlVGFza0RPTSBmcm9tIFwiLi9jcmVhdGVUYXNrRE9NXCI7XHJcbmltcG9ydCB7IHNhdmUsbG9hZCB9IGZyb20gXCIuL1NhdmVfTG9hZFwiO1xyXG5pbXBvcnQgZW1wdHlET00gZnJvbSBcIi4vZW1wdHlET01cIjtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RE9NKHByb2plY3RPYmosbXlUb2Rvcykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RPYmo7XHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZcIik7XHJcbiAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLCBwcm9qZWN0LmlkKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0RGl2SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3REaXZIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2SGVhZGluZ1wiKTtcclxuICAgIHByb2plY3REaXZIZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICBhZGRUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0Zvcm1cIik7XHJcblxyXG4gICAgY29uc3QgdGFza0lucHV0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwidGV4dFwiKTtcclxuICAgIHRhc2tJbnB1dEVsZW0uY2xhc3NMaXN0LmFkZChcInRhc2tJbnB1dEVsZW1cIik7XHJcbiAgICB0YXNrSW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsXCJcIik7XHJcbiAgICB0YXNrSW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsXCJFbnRlciB0aGUgdGFzayBoZXJlXCIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiZGF0ZVwiKTtcclxuICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRHVlRGF0ZVwiKTtcclxuXHJcblxyXG4gICAgY29uc3QgYWRkdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGR0YXNrQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInN1Ym1pdFwiKTtcclxuICAgIGFkZHRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tCdG5cIik7XHJcbiAgICBhZGR0YXNrQnRuLnRleHRDb250ZW50ID0gXCIgKyBOZXcgVGFza1wiXHJcblxyXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0lucHV0RWxlbSk7XHJcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGR0YXNrQnRuKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZcIik7XHJcbiAgICBjb25zdCBhbGxUYXNrc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBhbGxUYXNrc0xpbmsudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiO1xyXG4gICAgYWxsVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2TGlua1wiKTtcclxuICAgIGFsbFRhc2tzTGluay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgYWxsVGFza3NMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhbGxUYXNrc1wiKTtcclxuICAgIGNvbnN0IHRvZGF5c1Rhc2tzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIHRvZGF5c1Rhc2tzTGluay50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICAgIHRvZGF5c1Rhc2tzTGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdkxpbmtcIik7XHJcbiAgICB0b2RheXNUYXNrc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHRvZGF5c1Rhc2tzTGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidG9kYXlzVGFza3NcIik7XHJcblxyXG4gICAgY29uc3QgdGhpc1dlZWtzVGFza3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcclxuICAgIHRoaXNXZWVrc1Rhc2tzTGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdkxpbmtcIik7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHRoaXNXZWVrc1Rhc2tzTGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGhpc1dlZWtzVGFza3NcIilcclxuXHJcbiAgICBwcm9qZWN0TmF2LmFwcGVuZENoaWxkKGFsbFRhc2tzTGluayk7XHJcbiAgICBwcm9qZWN0TmF2LmFwcGVuZENoaWxkKHRvZGF5c1Rhc2tzTGluayk7XHJcbiAgICBwcm9qZWN0TmF2LmFwcGVuZENoaWxkKHRoaXNXZWVrc1Rhc2tzTGluaylcclxuXHJcbiAgICBjb25zdCB2aWV3VGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdmlld1Rhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJ2aWV3VGFza3NEaXZcIik7XHJcblxyXG4gICAgY29uc3QgYWxsVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWxsVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcImFsbFRhc2tzRGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IHRoaXNXZWVrc1Rhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGhpc1dlZWtzVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInRoaXNXZWVrc1Rhc2tzRGl2XCIpO1xyXG4gICAgdGhpc1dlZWtzVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcblxyXG4gICAgY29uc3QgdG9kYXlzVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kYXlzVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInRvZGF5c1Rhc2tzRGl2XCIpO1xyXG4gICAgdG9kYXlzVGFza3NEaXYuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcblxyXG5cclxuICAgIGFsbFRhc2tzRGl2LmlubmVyVGV4dD0gXCJBbGwgVGFza3NcIjtcclxuICAgIHRvZGF5c1Rhc2tzRGl2LmlubmVyVGV4dCA9IFwiVGFza3MgZm9yIFRvZGF5XCI7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0Rpdi5pbm5lclRleHQgPSBcIlRhc2tzIGZvciB0aGlzIFdlZWtcIlxyXG4gICAgdmlld1Rhc2tzRGl2LmFwcGVuZENoaWxkKGFsbFRhc2tzRGl2KTtcclxuICAgIHZpZXdUYXNrc0Rpdi5hcHBlbmRDaGlsZCh0aGlzV2Vla3NUYXNrc0Rpdik7XHJcbiAgICB2aWV3VGFza3NEaXYuYXBwZW5kQ2hpbGQodG9kYXlzVGFza3NEaXYpO1xyXG5cclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkhlYWRpbmcpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYXYpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZCh2aWV3VGFza3NEaXYpO1xyXG5cclxuICAgIC8vRXZlbnQgTGlzdGVuZXJzXHJcbiAgICBmdW5jdGlvbiBzaG93VGFiKHRhYikgey8vU3dpdGNoaW5nIHRhYnNcclxuXHJcbiAgICAgICAgYWxsVGFza3NMaW5rLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgdGFiID09PSBcImFsbFwiKTtcclxuICAgICAgICB0b2RheXNUYXNrc0xpbmsuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCB0YWIgPT09IFwidG9kYXlcIik7XHJcbiAgICAgICAgdGhpc1dlZWtzVGFza3NMaW5rLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgdGFiID09PSBcInRoaXNXZWVrXCIpO1xyXG5cclxuICAgICAgICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCB0YWIgIT09IFwiYWxsXCIpO1xyXG4gICAgICAgIHRvZGF5c1Rhc2tzRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIHRhYiAhPT0gXCJ0b2RheVwiKTtcclxuICAgICAgICB0aGlzV2Vla3NUYXNrc0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCB0YWIgIT09IFwidGhpc1dlZWtcIik7XHJcbiAgICB9XHJcbiAgICBhbGxUYXNrc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzaG93VGFiKFwiYWxsXCIpXHJcbiAgICB9KTtcclxuICAgIHRvZGF5c1Rhc2tzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RhYihcInRvZGF5XCIpXHJcbiAgICB9KTtcclxuICAgIHRoaXNXZWVrc1Rhc2tzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RhYihcInRoaXNXZWVrXCIpXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGFzayA9IG5ldyBOZXdUYXNrKHRhc2tJbnB1dEVsZW0udmFsdWUsdGFza0R1ZURhdGUudmFsdWUpO1xyXG4gICAgICAgIHRhc2suc2V0RHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2tEdWVEYXRlLnZhbHVlKTtcclxuICAgICAgICBhbGxUYXNrc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRE9NKHRhc2sscHJvamVjdCxteVRvZG9zKSk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG15VG9kb3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZihteVRvZG9zW2ldLmlkID09PSBwcm9qZWN0LmlkKXtcclxuICAgICAgICAgICAgICAgIG15VG9kb3NbaV0uYWRkdGFzayA9IHRhc2s7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteVRvZG9zW2ldLnRhc2tzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFzay5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgICAgdG9kYXlzVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTSh0YXNrLHByb2plY3QsbXlUb2RvcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhc2suaXNUaGlzV2VlaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00odGFzayxwcm9qZWN0LG15VG9kb3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZShteVRvZG9zKTtcclxuICAgICAgICBteVRvZG9zID0gbG9hZCgpXHJcbiAgICAgICAgdGFza0lucHV0RWxlbS52YWx1ZT0gXCJcIjtcclxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZT1cIlwiO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL0xvYWQgYWxsIEV4aXN0aW5nIHRhc2tzIGxpc3RzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBteVRvZG9zW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRE9NKG15VG9kb3NbaV0udGFza3Nbal0sIG15VG9kb3NbaV0sIG15VG9kb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTsgLy8gQXBwZW5kIHRoZSB0YXNrIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udG9kYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZGF5c1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50b2RheVtqXSxteVRvZG9zW2ldLG15VG9kb3MpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udGhpc1dlZWsubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50aGlzV2Vla1tqXSxteVRvZG9zW2ldLG15VG9kb3MpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0LG15VG9kb3MsbmV3UHJvamVjdERvbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImxvY2FsVGFza3NCdG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLHByb2plY3QuaWQpO1xyXG4gICAgY29uc3QgcHJvamVjdEJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwcm9qZWN0QnRuVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIHByb2plY3RCdG4udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZUJ0blwiKTtcclxuXHJcbiAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKHByb2plY3RCdG5UZXh0KTtcclxuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8bXlUb2Rvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbXlUb2RvcyA9IG15VG9kb3MuZmlsdGVyKHQgPT4gdC5pZCAhPT0gcHJvamVjdC5pZCk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3REb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RCdG4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHNhdmUobXlUb2RvcylcclxuICAgICAgICAgICAgbXlUb2RvcyA9IGxvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4oZW1wdHlET00oKSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvamVjdEJ0bjtcclxufSIsImV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tET007XHJcbmltcG9ydCB7IHNhdmUsbG9hZCB9IGZyb20gXCIuL1NhdmVfTG9hZFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0RPTShOZXdUYXNrT2JqLE5ld1Byb2plY3RPYmosbXlUb2Rvcyl7XHJcbiAgICBjb25zdCB0YXNrID0gTmV3VGFza09iajtcclxuICAgIGNvbnN0IHByb2plY3QgPSBOZXdQcm9qZWN0T2JqO1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGl2XCIpO1xyXG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgdGFzay5pZCk7XHJcblxyXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGV4dFwiKTtcclxuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gTmV3VGFza09iai50YXNrO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XHJcblxyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlXCIpO1xyXG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBOZXdUYXNrT2JqLmR1ZURhdGVUeHQ7XHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrU3RhdHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRhc2tTdGF0dXNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xyXG4gICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza1N0YXR1c0J0blwiKTtcclxuICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tCdG5cIilcclxuICAgIHRhc2tTdGF0dXNCdG4udGV4dENvbnRlbnQgPSBOZXdUYXNrT2JqLmNvbXBsZXRlID8gXCJEb25lXCIgOiBcIk5vdCBEb25lXCI7XHJcbiAgICBpZih0YXNrLmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza0RvbmVcIik7XHJcbiAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwidGFza05vdERvbmVcIik7XHJcbiAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTm90RG9uZVwiKTtcclxuICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrRG9uZVwiKTtcclxuICAgICAgICB0YXNrVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0NvbXBsZXRlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1N0YXR1c0J0bik7XHJcbiAgICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHRhc2tEZWxldGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xyXG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza0J0blwiKVxyXG4gICAgdGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza0RlbGV0ZUJ0blwiKTtcclxuICAgIHRhc2tEZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcclxuXHJcbiAgICAvL0V2ZW50IExpc3RlbmVyc1xyXG4gICAgdGFza0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihteVRvZG9zW2ldLmlkID09PSBwcm9qZWN0LmlkKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bXlUb2Rvc1tpXS50YXNrcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihteVRvZG9zW2ldLnRhc2tzW2pdLmlkID09PSB0YXNrLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS5kZWxldGVUYXNrID0gdGFzay5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlUb2Rvc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdGFzayBlbGVtZW50IGZyb20gdGhlIERPTVxyXG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgdGFza0RpdiBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIHRhc2sgaWRcclxuICAgICAgICBjb25zdCB0YXNrRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2tJZH1cIl1gKTtcclxuICAgICAgICB0YXNrRGl2cy5mb3JFYWNoKChkaXYpID0+IGRpdi5yZW1vdmUoKSk7XHJcbiAgICAgICAgc2F2ZShteVRvZG9zKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhc2tTdGF0dXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihteVRvZG9zW2ldLmlkID09PSBwcm9qZWN0LmlkKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bXlUb2Rvc1tpXS50YXNrcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihteVRvZG9zW2ldLnRhc2tzW2pdLmlkID09PSB0YXNrLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteVRvZG9zW2ldLnRhc2tzW2pdKTsvL0NvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4udGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRG9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihteVRvZG9zW2ldLnRhc2tzW2pdLmNvbXBsZXRlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15VG9kb3NbaV0udGFza3Nbal0pOy8vY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi50ZXh0Q29udGVudCA9IFwiTm90IERvbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tEb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNhdmUobXlUb2Rvcyk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhc2tEaXY7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBlbXB0eURPTTtcclxuZnVuY3Rpb24gZW1wdHlET00oKSB7XHJcbiAgICBjb25zdCBlbXB0eURPTUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZW1wdHlET01FbGVtLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVRleHRcIik7XHJcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJObyBQcm9qZWN0IGlzIFNlbGVjdGVkLlwiO1xyXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIFNlbGVjdCBhIHByb2plY3Qgb3IgQWRkIGEgTmV3IE9uZS5cIjtcclxuICAgIHRleHQyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJmb250LXN0eWxlOiBpdGFsaWM7XCIpXHJcblxyXG4gICAgZW1wdHlET01FbGVtLmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgIGVtcHR5RE9NRWxlbS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICByZXR1cm4gZW1wdHlET01FbGVtO1xyXG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vTmV3VGFza1wiO1xyXG5pbXBvcnQgTmV3UHJvamVjdCBmcm9tIFwiLi9OZXdQcm9qZWN0XCI7XHJcbmltcG9ydCB7Y3JlYXRlUHJvamVjdEJ0biwgY3JlYXRlUHJvamVjdERPTX0gZnJvbSAnLi9jcmVhdGVQcm9qZWN0RE9NJztcclxuaW1wb3J0IHsgc2F2ZSxsb2FkIH0gZnJvbSAnLi9TYXZlX0xvYWQnO1xyXG5pbXBvcnQgUHJvamVjdERPTV9CVE4gZnJvbSAnLi9wcm9qZWN0RG9tQ2xhc3MnO1xyXG5pbXBvcnQgZW1wdHlET00gZnJvbSAnLi9lbXB0eURPTSc7XHJcblxyXG5cclxuXHJcbmxldCBteVRvZG9zID0gW107Ly9Mb2NhbCB2YXJpYWJsZXMgdG8gc3RvcmUgYWxsIFRvZG9zXHJcbmNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xyXG5jb25zdCBtYWluY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XHJcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJcIik7XHJcbmNvbnN0IHNjcmVlblNpemUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc3MHB4KVwiKTtcclxuZnVuY3Rpb24gYWRqdXN0U2lkZUJhcihzY3JlZW5TaXplKXtcclxuICAgIGlmKHNjcmVlblNpemUubWF0Y2hlcyl7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59XHJcbnNjcmVlblNpemUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLGFkanVzdFNpZGVCYXIpO1xyXG5cclxuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJY29uXCIpO1xyXG5cclxubWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcclxufSlcclxuXHJcblxyXG5hZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKGUpPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RUZXh0XCIpXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IE5ld1Byb2plY3QocHJvamVjdE5hbWUudmFsdWUsXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcclxuICAgIG15VG9kb3MucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3REb20gPSBuZXcgUHJvamVjdERPTV9CVE4obmV3UHJvamVjdCxteVRvZG9zKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERvbS5wcm9qZWN0QnRuKTtcclxuICAgIG1haW5jb250ZW50LnJlcGxhY2VDaGlsZHJlbihuZXdQcm9qZWN0RG9tLnByb2plY3RET00pO1xyXG4gICAgc2F2ZShteVRvZG9zKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoKSA9PiB7XHJcbiAgICBteVRvZG9zID0gbG9hZCgpO1xyXG4gICAgYWRqdXN0U2lkZUJhcihzY3JlZW5TaXplKTtcclxuICAgIG1haW5jb250ZW50LnJlcGxhY2VDaGlsZHJlbihlbXB0eURPTSgpKVxyXG4gICAgZm9yKGxldCBpPTA7IGk8bXlUb2Rvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RG9tID0gbmV3IFByb2plY3RET01fQlROKG15VG9kb3NbaV0sbXlUb2Rvcyk7XHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RG9tLnByb2plY3RCdG4pO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RUZXh0XCIpLnZhbHVlO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdE9iaiA9IG5ldyBOZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHJldHVybiBuZXdQcm9qZWN0T2JqO1xyXG59XHJcblxyXG5leHBvcnQge215VG9kb3N9XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgbXlUb2RvcyB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RET00sY3JlYXRlUHJvamVjdEJ0biB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RET01cIjtcclxuY2xhc3MgUHJvamVjdERPTV9CVE4ge1xyXG4gICAgY29uc3RydWN0b3IobmV3UHJvamVjdE9iaixteVRvZG9zKXtcclxuICAgICAgICB0aGlzLmlkID0gbmV3UHJvamVjdE9iai5pZDtcclxuICAgICAgICB0aGlzLnByb2plY3RET00gPSBjcmVhdGVQcm9qZWN0RE9NXHJcbiAgICAgICAgKG5ld1Byb2plY3RPYmosbXlUb2Rvcyk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bihuZXdQcm9qZWN0T2JqLG15VG9kb3MsdGhpcy5wcm9qZWN0RE9NKTtcclxuICAgICAgICB0aGlzLnByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgIG1haW5Db250ZW50LnJlcGxhY2VDaGlsZHJlbih0aGlzLnByb2plY3RET00pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RET01fQlROOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9