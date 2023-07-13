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
    --badyBG : rgb(57, 55, 55);
    --bodyColor:rgb(241, 241, 241);
    --headerBG : rgb(42, 39, 39);
    --headerColor: white;
    --sideBarBG : rgb(70, 70, 70);
    --sideBarColor : rgb(255, 255, 255);
    --projectbtnBG : rgb(46, 46, 46);
    --projectbtnColor:rgb(186, 183, 183);
    --projectbtnBGActive:rgb(41, 1, 59);
    --projectbtnColorActive: rgb(248, 248, 248);
    --taskBG:rgb(42, 39, 39);
    --taskColor:white;

    --ProjectDIVBG:rgb(244, 238, 238);
    --ProjectDivColor:black;

    --taskNavcolorActive:rgb(41, 1, 59);
    --taskNavcolor:rgb(108, 6, 6);

    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    --taskDivBG: rgb(81, 81, 81);
}
body{
    background-color: rgb(198, 198, 198);
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
}
.localTasks{
    padding: 1rem;
    border-bottom: 2px dotted black;
    text-align: center;
}
.projectBtn{
    display: flex;
    width: 100%;
    max-width: 250px;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem ;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    background: var(--projectbtnBG);
    color: var(--projectbtnColor);
    transition: all 0.4s;
}
.projectBtn:hover {
    background-color: var(--projectbtnBGActive);
    color: var(--projectbtnColorActive);
    box-shadow: none;
}
.activeProject {
    background-color: var(--projectbtnBGActive);
    color: var(--projectbtnColorActive);
    box-shadow: none;
}
.closeBtn {
    padding: 5px;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    color: rgb(255, 8, 8);
    font-weight: 100;
    font-size: 1rem;
    border: 1px solid rgb(255, 3, 3);
    width: fit-content;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.closeBtn:hover {
    outline: 1px solid whitesmoke;
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
    color: rgb(153, 255, 0);
    font-weight: 100;
    font-style: italic;
    
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
    transform: scale3d(1.1,1.1,1.1);
    outline: 2px solid rgb(99, 233, 38);
}
.addProjectBtn{
    background-color: rgb(47, 9, 76);
    color: white;
    padding: 0.4rem;
    font-weight: 600;
    font-size: 1.2rem;
    align-self: right;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid black;
}
.addProjectBtn:hover{
    outline: 1px solid white;
}



.projectDiv{
    width: 100%;
    height: 100vh;
    background-color: var(--ProjectDIVBG);
    color: var(--ProjectDivColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
}
.projectDivHeading{
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--ProjectDivColor);
}
.addTaskForm{
    background-color: var(--taskDivBG);
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
    border: 1px solid var(--headerColor);
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--headerColor);
    border-radius: 10px;
}
.taskInputElem:focus{
    outline: 4px solid rgb(76, 136, 255);
    border: none;
}
.taskDueDate{
    padding: 0.4rem;
    font-size: 1rem;
    width: fit-content;
    align-self: center;
    justify-items: center;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    color: rgb(57, 56, 56);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.addTaskBtn{
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 1px black;
    font-size: 1.4rem;
    margin: 0 auto;
    padding: 0.8rem;
    width: max-content;
    background: rgb(33, 54, 1);
    color: white;
    font-weight: 700;
    transition: all 0.4s;
    cursor: pointer;
}
.addTaskBtn:hover{
    outline: 1px solid white;
}
.addTaskBtn:active{
    transform: scale3d(0.6,0.6,0.6);
}

.projectNav{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.1rem;
    color: var(--taskNavcolor);
}
.projectNav >h4 {
    cursor: pointer;
}
.active {
    border-bottom: 2px solid var(--taskNavcolorActive);
    color: var(--taskNavcolorActive);
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 0.3s;
}
.viewTasksDiv{
    border-radius: 20px;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--taskDivBG);
    display: grid;
    gap: 20px;
    padding: 10px;
}
.allTasksDiv,.todaysTasksDiv, .thisWeeksTasksDiv{
    color:var(--ProjectDivColor);
}

.active {
    border-bottom: 2px solid rgb(59, 0, 153);
    color: rgb(59, 0, 153);
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 0.3s;
}

.taskDiv{
    width: 100%;
    margin-bottom: 10px;
    padding: 0.4rem;
    margin-top: 10px;
    border-radius: 10px;
    background-color: var(--taskBG);
    color: var(--taskColor);
}
.taskText{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    padding: 0.4rem;
    margin-bottom: 10px;
}
.taskDueDateText{
    color: white;
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 900;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.taskBtn {
    padding: 0.3rem 1rem;
    font-size: 0.8rem;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    outline: none;
    cursor: pointer;
    transition: all 0.1s;
}
.taskStatusBtn {
    background-color: bisque;
    color: black;
}
.taskStatusBtn:hover {
   outline: 2px solid white;
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
    color: rgba(255, 255, 255, 0.4);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root {\r\n    font-size: 16px;\r\n    --badyBG : rgb(57, 55, 55);\r\n    --bodyColor:rgb(241, 241, 241);\r\n    --headerBG : rgb(42, 39, 39);\r\n    --headerColor: white;\r\n    --sideBarBG : rgb(70, 70, 70);\r\n    --sideBarColor : rgb(255, 255, 255);\r\n    --projectbtnBG : rgb(46, 46, 46);\r\n    --projectbtnColor:rgb(186, 183, 183);\r\n    --projectbtnBGActive:rgb(41, 1, 59);\r\n    --projectbtnColorActive: rgb(248, 248, 248);\r\n    --taskBG:rgb(42, 39, 39);\r\n    --taskColor:white;\r\n\r\n    --ProjectDIVBG:rgb(244, 238, 238);\r\n    --ProjectDivColor:black;\r\n\r\n    --taskNavcolorActive:rgb(41, 1, 59);\r\n    --taskNavcolor:rgb(108, 6, 6);\r\n\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    --taskDivBG: rgb(81, 81, 81);\r\n}\r\nbody{\r\n    background-color: rgb(198, 198, 198);\r\n}\r\n.view {\r\n    display: block;\r\n}\r\n.content {\r\n    display: flex;\r\n}\r\n.menuIcon{\r\n    width: 40px;\r\n    height: 40px;\r\n    fill: var(--headerColor);\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n.mainContent{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nheader{\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    font-size: 1.5rem;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sideBar {\r\n    background-color: var(--sideBarBG);\r\n    color: var(--sideBarColor);\r\n    width: min-content;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    padding: 1rem;\r\n}\r\n.localTasks{\r\n    padding: 1rem;\r\n    border-bottom: 2px dotted black;\r\n    text-align: center;\r\n}\r\n.projectBtn{\r\n    display: flex;\r\n    width: 100%;\r\n    max-width: 250px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    padding: 0.5rem ;\r\n    border: none;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    margin-bottom: 20px;\r\n    background: var(--projectbtnBG);\r\n    color: var(--projectbtnColor);\r\n    transition: all 0.4s;\r\n}\r\n.projectBtn:hover {\r\n    background-color: var(--projectbtnBGActive);\r\n    color: var(--projectbtnColorActive);\r\n    box-shadow: none;\r\n}\r\n.activeProject {\r\n    background-color: var(--projectbtnBGActive);\r\n    color: var(--projectbtnColorActive);\r\n    box-shadow: none;\r\n}\r\n.closeBtn {\r\n    padding: 5px;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-color: transparent;\r\n    color: rgb(255, 8, 8);\r\n    font-weight: 100;\r\n    font-size: 1rem;\r\n    border: 1px solid rgb(255, 3, 3);\r\n    width: fit-content;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.closeBtn:hover {\r\n    outline: 1px solid whitesmoke;\r\n}\r\n\r\n\r\n\r\n\r\n.projects{\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.headingPROJECTS{\r\n    text-align: left;\r\n    font-size: 2.3rem;\r\n    color: rgb(153, 255, 0);\r\n    font-weight: 100;\r\n    font-style: italic;\r\n    \r\n}\r\n.addProjectForm{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 20px;\r\n    justify-content: right;\r\n    margin-bottom: 20px;\r\n}\r\n.addProjectForm > input {\r\n    font-size: 1rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n}\r\n.addProjectForm>input:focus{\r\n    transform: scale3d(1.1,1.1,1.1);\r\n    outline: 2px solid rgb(99, 233, 38);\r\n}\r\n.addProjectBtn{\r\n    background-color: rgb(47, 9, 76);\r\n    color: white;\r\n    padding: 0.4rem;\r\n    font-weight: 600;\r\n    font-size: 1.2rem;\r\n    align-self: right;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    border: 2px solid black;\r\n}\r\n.addProjectBtn:hover{\r\n    outline: 1px solid white;\r\n}\r\n\r\n\r\n\r\n.projectDiv{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: var(--ProjectDIVBG);\r\n    color: var(--ProjectDivColor);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 1rem;\r\n}\r\n.projectDivHeading{\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n    color: var(--ProjectDivColor);\r\n}\r\n.addTaskForm{\r\n    background-color: var(--taskDivBG);\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    padding: 1rem;\r\n    width: 80%;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem{\r\n    grid-column: 1/ span 2;\r\n    padding: 10px;\r\n    font-size: 1.3rem;\r\n    border: 1px solid var(--headerColor);\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: var(--headerColor);\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem:focus{\r\n    outline: 4px solid rgb(76, 136, 255);\r\n    border: none;\r\n}\r\n.taskDueDate{\r\n    padding: 0.4rem;\r\n    font-size: 1rem;\r\n    width: fit-content;\r\n    align-self: center;\r\n    justify-items: center;\r\n    margin: 0 auto;\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(57, 56, 56);\r\n    border-radius: 10px;\r\n    border: none;\r\n    cursor: pointer;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.addTaskBtn{\r\n    border-radius: 10px;\r\n    border: none;\r\n    box-shadow: 1px 1px 1px black;\r\n    font-size: 1.4rem;\r\n    margin: 0 auto;\r\n    padding: 0.8rem;\r\n    width: max-content;\r\n    background: rgb(33, 54, 1);\r\n    color: white;\r\n    font-weight: 700;\r\n    transition: all 0.4s;\r\n    cursor: pointer;\r\n}\r\n.addTaskBtn:hover{\r\n    outline: 1px solid white;\r\n}\r\n.addTaskBtn:active{\r\n    transform: scale3d(0.6,0.6,0.6);\r\n}\r\n\r\n.projectNav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    font-size: 1.1rem;\r\n    color: var(--taskNavcolor);\r\n}\r\n.projectNav >h4 {\r\n    cursor: pointer;\r\n}\r\n.active {\r\n    border-bottom: 2px solid var(--taskNavcolorActive);\r\n    color: var(--taskNavcolorActive);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n    transition: all 0.3s;\r\n}\r\n.viewTasksDiv{\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: var(--taskDivBG);\r\n    display: grid;\r\n    gap: 20px;\r\n    padding: 10px;\r\n}\r\n.allTasksDiv,.todaysTasksDiv, .thisWeeksTasksDiv{\r\n    color:var(--ProjectDivColor);\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid rgb(59, 0, 153);\r\n    color: rgb(59, 0, 153);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n    transition: all 0.3s;\r\n}\r\n\r\n.taskDiv{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    padding: 0.4rem;\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n    background-color: var(--taskBG);\r\n    color: var(--taskColor);\r\n}\r\n.taskText{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.3rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n}\r\n.taskDueDateText{\r\n    color: white;\r\n    text-align: right;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n    font-size: 0.9rem;\r\n    font-weight: 900;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.taskBtn {\r\n    padding: 0.3rem 1rem;\r\n    font-size: 0.8rem;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-weight: 700;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.1s;\r\n}\r\n.taskStatusBtn {\r\n    background-color: bisque;\r\n    color: black;\r\n}\r\n.taskStatusBtn:hover {\r\n   outline: 2px solid white;\r\n}\r\n.taskDeleteBtn {\r\n    background-color: rgb(147, 4, 4);\r\n    color: white;\r\n    margin-left: 10px;\r\n    border: 1px solid white;\r\n}\r\n.taskDeleteBtn:hover {\r\n    outline: 2px solid whitesmoke;\r\n}\r\n.taskDeleteBtn:active {\r\n    outline: none;\r\n    transform: scale(0.6);\r\n}\r\n\r\n.taskDone{\r\n    background-color: green;\r\n    color: whitesmoke;\r\n}\r\n.taskComplete{\r\n    text-decoration: line-through;\r\n    color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.emptyText {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*Responsive Design*/\r\n@media only screen and (max-width: 770px){\r\n    header{\r\n        font-size: 1rem;\r\n    }\r\n    .menuIcon {\r\n        display: block;\r\n        margin-right: 1rem;\r\n    }\r\n    .content {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .sideBar{\r\n        width: 100%;\r\n        height: min-content;\r\n        min-height: min-content;\r\n    }\r\n}"],"sourceRoot":""}]);
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
    projectBtn.classList.add("projectBtn");
    projectBtn.setAttribute("id","projectButton")
    projectBtn.setAttribute("data-project-id",project.id);
    const projectBtnText = document.createElement("p");

    projectBtnText.textContent = project.name;
    projectBtn.value = project.name;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Delete";
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
        mainContent.replaceChildren((0,_emptyDOM__WEBPACK_IMPORTED_MODULE_3__["default"])());
        const projectButtons = document.querySelectorAll("#projectButton");
        projectButtons.forEach((button) => {
            button.classList.remove("activeProject");
        });
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
    taskDueDate.classList.add("taskDueDateText");
    taskDueDate.textContent = NewTaskObj.dueDateTxt;
    taskDiv.appendChild(taskDueDate);

    const taskStatusBtn = document.createElement("button");
    taskStatusBtn.setAttribute("type","button");
    taskStatusBtn.setAttribute("id","taskStatusBtn")
    taskStatusBtn.classList.add("taskStatusBtn");
    taskStatusBtn.classList.add("taskBtn")
    taskStatusBtn.textContent = task.complete ? "Done" : "Not Done";
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

    taskStatusBtn.addEventListener("click",(e) => {
        e.stopPropagation()
        for (let i = 0; i < myTodos.length; i++) {
            if(myTodos[i].id === project.id){
                for(let j=0;j<myTodos[i].tasks.length;j++){
                    if(myTodos[i].tasks[j].id === task.id){
                        if(myTodos[i].tasks[j].complete === false){
                            myTodos[i].tasks[j].complete = true;
                            taskStatusBtnChange(myTodos[i].tasks[j]);
                            myTodos[i].tasksThisWeek();
                            myTodos[i].tasksToday();
                        }else if(myTodos[i].tasks[j].complete === true){
                            myTodos[i].tasks[j].complete = false;
                            taskStatusBtnChange(myTodos[i].tasks[j]);
                            myTodos[i].tasksThisWeek();
                            myTodos[i].tasksToday();
                        }
                    }
                }
            }
        }
        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.save)(myTodos);
        myTodos = (0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.load)();
        
        function taskStatusBtnChange(project) {
            const taskID = taskDiv.getAttribute("data-task-id")
            const taskDivs = document.querySelectorAll(`[data-task-id="${taskID}"]`);
            taskDivs.forEach((div) => {
                const taskStatusBtn = div.querySelector(".taskStatusBtn");
                const taskText = div.querySelector(".taskText")

                if(project.complete === true){
                    taskStatusBtn.textContent = "Done";
                    taskStatusBtn.classList.add("taskDone");
                    taskStatusBtn.classList.remove("taskNotDone");
                    taskText.classList.add("taskComplete");
                }else {
                    taskStatusBtn.textContent = "Not Done";
                    taskStatusBtn.classList.add("taskNotDone");
                    taskStatusBtn.classList.remove("taskDone");
                    taskText.classList.remove("taskComplete");
                }
            })
            ;(0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.save)(myTodos)
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFB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bEMsa0NBQWtDLHdEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFjO0FBQzNDO0FBQ0EsS0FBSztBQUNMLG9DQUFvQyxxREFBUTtBQUM1QztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQVU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9OZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvTmV3VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL1NhdmVfTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL2NyZWF0ZVByb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9jcmVhdGVUYXNrRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvZW1wdHlET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9wcm9qZWN0RG9tQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG46cm9vdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAtLWJhZHlCRyA6IHJnYig1NywgNTUsIDU1KTtcclxuICAgIC0tYm9keUNvbG9yOnJnYigyNDEsIDI0MSwgMjQxKTtcclxuICAgIC0taGVhZGVyQkcgOiByZ2IoNDIsIDM5LCAzOSk7XHJcbiAgICAtLWhlYWRlckNvbG9yOiB3aGl0ZTtcclxuICAgIC0tc2lkZUJhckJHIDogcmdiKDcwLCA3MCwgNzApO1xyXG4gICAgLS1zaWRlQmFyQ29sb3IgOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAtLXByb2plY3RidG5CRyA6IHJnYig0NiwgNDYsIDQ2KTtcclxuICAgIC0tcHJvamVjdGJ0bkNvbG9yOnJnYigxODYsIDE4MywgMTgzKTtcclxuICAgIC0tcHJvamVjdGJ0bkJHQWN0aXZlOnJnYig0MSwgMSwgNTkpO1xyXG4gICAgLS1wcm9qZWN0YnRuQ29sb3JBY3RpdmU6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIC0tdGFza0JHOnJnYig0MiwgMzksIDM5KTtcclxuICAgIC0tdGFza0NvbG9yOndoaXRlO1xyXG5cclxuICAgIC0tUHJvamVjdERJVkJHOnJnYigyNDQsIDIzOCwgMjM4KTtcclxuICAgIC0tUHJvamVjdERpdkNvbG9yOmJsYWNrO1xyXG5cclxuICAgIC0tdGFza05hdmNvbG9yQWN0aXZlOnJnYig0MSwgMSwgNTkpO1xyXG4gICAgLS10YXNrTmF2Y29sb3I6cmdiKDEwOCwgNiwgNik7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIC0tdGFza0RpdkJHOiByZ2IoODEsIDgxLCA4MSk7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE5OCwgMTk4KTtcclxufVxyXG4udmlldyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tZW51SWNvbntcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmlsbDogdmFyKC0taGVhZGVyQ29sb3IpO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFpbkNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQkcpO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2lkZUJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlQmFyQkcpO1xyXG4gICAgY29sb3I6IHZhcigtLXNpZGVCYXJDb2xvcik7XHJcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmxvY2FsVGFza3N7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJvamVjdEJ0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2plY3RidG5CRyk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdGJ0bkNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcbi5wcm9qZWN0QnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3RidG5CR0FjdGl2ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdGJ0bkNvbG9yQWN0aXZlKTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmFjdGl2ZVByb2plY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdGJ0bkJHQWN0aXZlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQ29sb3JBY3RpdmUpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uY2xvc2VCdG4ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA4LCA4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAzLCAzKTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2VCdG46aG92ZXIge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5wcm9qZWN0c3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZ1BST0pFQ1RTe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgY29sb3I6IHJnYigxNTMsIDI1NSwgMCk7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgXHJcbn1cclxuLmFkZFByb2plY3RGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYWRkUHJvamVjdEZvcm0gPiBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmFkZFByb2plY3RGb3JtPmlucHV0OmZvY3Vze1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwxLjEsMS4xKTtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoOTksIDIzMywgMzgpO1xyXG59XHJcbi5hZGRQcm9qZWN0QnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA5LCA3Nik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBhbGlnbi1zZWxmOiByaWdodDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5hZGRQcm9qZWN0QnRuOmhvdmVye1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi5wcm9qZWN0RGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUHJvamVjdERJVkJHKTtcclxuICAgIGNvbG9yOiB2YXIoLS1Qcm9qZWN0RGl2Q29sb3IpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuLnByb2plY3REaXZIZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1Qcm9qZWN0RGl2Q29sb3IpO1xyXG59XHJcbi5hZGRUYXNrRm9ybXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tEaXZCRyk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50YXNrSW5wdXRFbGVte1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvIHNwYW4gMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50YXNrSW5wdXRFbGVtOmZvY3Vze1xyXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHJnYig3NiwgMTM2LCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi50YXNrRHVlRGF0ZXtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYig1NywgNTYsIDU2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hZGRUYXNrQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigzMywgNTQsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGRUYXNrQnRuOmhvdmVye1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5hZGRUYXNrQnRuOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjYsMC42LDAuNik7XHJcbn1cclxuXHJcbi5wcm9qZWN0TmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10YXNrTmF2Y29sb3IpO1xyXG59XHJcbi5wcm9qZWN0TmF2ID5oNCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGFza05hdmNvbG9yQWN0aXZlKTtcclxuICAgIGNvbG9yOiB2YXIoLS10YXNrTmF2Y29sb3JBY3RpdmUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnZpZXdUYXNrc0RpdntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiB2YXIoLS10YXNrRGl2QkcpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmFsbFRhc2tzRGl2LC50b2RheXNUYXNrc0RpdiwgLnRoaXNXZWVrc1Rhc2tzRGl2e1xyXG4gICAgY29sb3I6dmFyKC0tUHJvamVjdERpdkNvbG9yKTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDU5LCAwLCAxNTMpO1xyXG4gICAgY29sb3I6IHJnYig1OSwgMCwgMTUzKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4udGFza0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza0JHKTtcclxuICAgIGNvbG9yOiB2YXIoLS10YXNrQ29sb3IpO1xyXG59XHJcbi50YXNrVGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRhc2tEdWVEYXRlVGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRhc2tCdG4ge1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcbi50YXNrU3RhdHVzQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4udGFza1N0YXR1c0J0bjpob3ZlciB7XHJcbiAgIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4udGFza0RlbGV0ZUJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ3LCA0LCA0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLnRhc2tEZWxldGVCdG46aG92ZXIge1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuLnRhc2tEZWxldGVCdG46YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbn1cclxuXHJcbi50YXNrRG9uZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLnRhc2tDb21wbGV0ZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmVtcHR5VGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qUmVzcG9uc2l2ZSBEZXNpZ24qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAubWVudUljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuc2lkZUJhcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3Nz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Q3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7QUFHQSxvQkFBb0I7QUFDcEI7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIC0tYmFkeUJHIDogcmdiKDU3LCA1NSwgNTUpO1xcclxcbiAgICAtLWJvZHlDb2xvcjpyZ2IoMjQxLCAyNDEsIDI0MSk7XFxyXFxuICAgIC0taGVhZGVyQkcgOiByZ2IoNDIsIDM5LCAzOSk7XFxyXFxuICAgIC0taGVhZGVyQ29sb3I6IHdoaXRlO1xcclxcbiAgICAtLXNpZGVCYXJCRyA6IHJnYig3MCwgNzAsIDcwKTtcXHJcXG4gICAgLS1zaWRlQmFyQ29sb3IgOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIC0tcHJvamVjdGJ0bkJHIDogcmdiKDQ2LCA0NiwgNDYpO1xcclxcbiAgICAtLXByb2plY3RidG5Db2xvcjpyZ2IoMTg2LCAxODMsIDE4Myk7XFxyXFxuICAgIC0tcHJvamVjdGJ0bkJHQWN0aXZlOnJnYig0MSwgMSwgNTkpO1xcclxcbiAgICAtLXByb2plY3RidG5Db2xvckFjdGl2ZTogcmdiKDI0OCwgMjQ4LCAyNDgpO1xcclxcbiAgICAtLXRhc2tCRzpyZ2IoNDIsIDM5LCAzOSk7XFxyXFxuICAgIC0tdGFza0NvbG9yOndoaXRlO1xcclxcblxcclxcbiAgICAtLVByb2plY3RESVZCRzpyZ2IoMjQ0LCAyMzgsIDIzOCk7XFxyXFxuICAgIC0tUHJvamVjdERpdkNvbG9yOmJsYWNrO1xcclxcblxcclxcbiAgICAtLXRhc2tOYXZjb2xvckFjdGl2ZTpyZ2IoNDEsIDEsIDU5KTtcXHJcXG4gICAgLS10YXNrTmF2Y29sb3I6cmdiKDEwOCwgNiwgNik7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tdGFza0RpdkJHOiByZ2IoODEsIDgxLCA4MSk7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDE5OCwgMTk4KTtcXHJcXG59XFxyXFxuLnZpZXcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubWVudUljb257XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGZpbGw6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubWFpbkNvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckJHKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlQmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZUJhckJHKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNpZGVCYXJDb2xvcik7XFxyXFxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuLmxvY2FsVGFza3N7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3RCdG57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2plY3RidG5CRyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQ29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG59XFxyXFxuLnByb2plY3RCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQkdBY3RpdmUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdGJ0bkNvbG9yQWN0aXZlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuLmFjdGl2ZVByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQkdBY3RpdmUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdGJ0bkNvbG9yQWN0aXZlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuLmNsb3NlQnRuIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29sb3I6IHJnYigyNTUsIDgsIDgpO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDMsIDMpO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuOmhvdmVyIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlc21va2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi5wcm9qZWN0c3tcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRpbmdQUk9KRUNUU3tcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAyLjNyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoMTUzLCAyNTUsIDApO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3JtID4gaW5wdXQge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEZvcm0+aW5wdXQ6Zm9jdXN7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsMS4xLDEuMSk7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2IoOTksIDIzMywgMzgpO1xcclxcbn1cXHJcXG4uYWRkUHJvamVjdEJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCA5LCA3Nik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogcmlnaHQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmFkZFByb2plY3RCdG46aG92ZXJ7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3REaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Qcm9qZWN0RElWQkcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tUHJvamVjdERpdkNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0RGl2SGVhZGluZ3tcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tUHJvamVjdERpdkNvbG9yKTtcXHJcXG59XFxyXFxuLmFkZFRhc2tGb3Jte1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrRGl2QkcpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2tJbnB1dEVsZW17XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLyBzcGFuIDI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRhc2tJbnB1dEVsZW06Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IDRweCBzb2xpZCByZ2IoNzYsIDEzNiwgMjU1KTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4udGFza0R1ZURhdGV7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBjb2xvcjogcmdiKDU3LCA1NiwgNTYpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmFkZFRhc2tCdG57XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMC44cmVtO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigzMywgNTQsIDEpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hZGRUYXNrQnRuOmhvdmVye1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi5hZGRUYXNrQnRuOmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuNiwwLjYsMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3ROYXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10YXNrTmF2Y29sb3IpO1xcclxcbn1cXHJcXG4ucHJvamVjdE5hdiA+aDQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGFza05hdmNvbG9yQWN0aXZlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRhc2tOYXZjb2xvckFjdGl2ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcbi52aWV3VGFza3NEaXZ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGFza0RpdkJHKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4uYWxsVGFza3NEaXYsLnRvZGF5c1Rhc2tzRGl2LCAudGhpc1dlZWtzVGFza3NEaXZ7XFxyXFxuICAgIGNvbG9yOnZhcigtLVByb2plY3REaXZDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDU5LCAwLCAxNTMpO1xcclxcbiAgICBjb2xvcjogcmdiKDU5LCAwLCAxNTMpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0RpdntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza0JHKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRhc2tDb2xvcik7XFxyXFxufVxcclxcbi50YXNrVGV4dHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLnRhc2tEdWVEYXRlVGV4dHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4udGFza0J0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xcclxcbn1cXHJcXG4udGFza1N0YXR1c0J0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG4udGFza1N0YXR1c0J0bjpob3ZlciB7XFxyXFxuICAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDcsIDQsIDQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuLnRhc2tEZWxldGVCdG46aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQgd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRhc2tEZWxldGVCdG46YWN0aXZlIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0RvbmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuLnRhc2tDb21wbGV0ZXtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVtcHR5VGV4dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlJlc3BvbnNpdmUgRGVzaWduKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KXtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51SWNvbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICAuc2lkZUJhcntcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICAgICAgIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBOZXdQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUpIHtcclxuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy50b2RheSA9IFtdO1xyXG4gICAgdGhpcy50aGlzV2VlayA9IFtdO1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFkZHRhc2sodmFsdWUpIHtcclxuICAgIHRoaXMudGFza3MucHVzaCh2YWx1ZSk7XHJcbiAgICB0aGlzLnRhc2tzVGhpc1dlZWsoKTtcclxuICAgIHRoaXMudGFza3NUb2RheSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlbGV0ZVRhc2soaWQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YXNrc1RoaXNXZWVrKCk7XHJcbiAgICB0aGlzLnRhc2tzVG9kYXkoKTtcclxuICB9XHJcblxyXG4gIHNldCBjb21wbGV0ZVN0YXR1cyh2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcclxuICAgICAgdGhpcy5jb21wbGV0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiSW52YWxpZCB2YWx1ZS4gRXhwZWN0ZWQgYSBib29sZWFuLiBBdCAnTmV3UHJvamVjdC5jb21wbGV0ZSdcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuZHVlRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuZHVlRGF0ZSA9PT0gXCJcIikge1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBcIk5vIER1ZSBEYXRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKGR1ZURhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkdWVEYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGEgZGF0ZS4gQXQgJ05ld1Byb2plY3QuZHVlZGF0ZSdcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YXNrc1RoaXNXZWVrKCkge1xyXG4gICAgY29uc3QgYV93ZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7IC8vIE51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gb25lIHdlZWtcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMudGhpc1dlZWsgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xyXG4gICAgICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICBjb25zdCBkaWZmSW5NaWxsaVNlYyA9IGdpdmVuRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCk7XHJcbiAgICAgIHJldHVybiBkaWZmSW5NaWxsaVNlYyA+PSAwICYmIGRpZmZJbk1pbGxpU2VjIDwgYV93ZWVrO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0YXNrc1RvZGF5KCkge1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy50b2RheSA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZ2l2ZW5EYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICBnaXZlbkRhdGUuZ2V0TW9udGgoKSA9PT0gY3VycmVudERhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgIGdpdmVuRGF0ZS5nZXREYXRlKCkgPT09IGN1cnJlbnREYXRlLmdldERhdGUoKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQcm9qZWN0O1xyXG4iLCJjbGFzcyBOZXdUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhc2ssZHVlRGF0ZSl7XHJcbiAgICAgICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLmR1ZURhdGVUeHRcclxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICAgICAgaWYodGhpcy5kdWVEYXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5kdWVEYXRlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlVHh0ID0gXCJObyBEdWUgRGF0ZVwiO1xyXG4gICAgICAgIH1lbHNlIGlmKGR1ZURhdGUgaW5zdGFuY2VvZiBEYXRlICYmICFpc05hTihkdWVEYXRlLmdldFRpbWUoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5kdWVEYXRlVHh0ID0gYER1ZSBEYXRlIDogJHtkdWVEYXRlLmdldERhdGUoKX0tJHtkdWVEYXRlLmdldE1vbnRoKCl9LSR7ZHVlRGF0ZS5nZXRGdWxsWWVhcigpfWA7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBhIGRhdGUuIEF0IE5ld1Rhc2tcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUb2RheSgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdGFza0RhdGUuZ2V0RGF0ZSgpID09PSBjdXJyZW50RGF0ZS5nZXREYXRlKCkgJiZcclxuICAgICAgICB0YXNrRGF0ZS5nZXRNb250aCgpID09PSBjdXJyZW50RGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgdGFza0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUaGlzV2VlaygpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IG9uZVdlZWtNaWxsaXNlY29uZHMgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDsgLy8gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgd2Vla1xyXG4gICAgICAgIGNvbnN0IGRpZmZJbk1pbGxpc2Vjb25kcyA9IHRhc2tEYXRlLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKTtcclxuICAgICAgICByZXR1cm4gZGlmZkluTWlsbGlzZWNvbmRzID49IDAgJiYgZGlmZkluTWlsbGlzZWNvbmRzIDwgb25lV2Vla01pbGxpc2Vjb25kcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJpbXBvcnQgTmV3UHJvamVjdCBmcm9tIFwiLi9OZXdQcm9qZWN0XCI7XHJcblxyXG5leHBvcnQge3NhdmUsbG9hZH07XHJcblxyXG5mdW5jdGlvbiBzYXZlKG15VG9kb3Mpe1xyXG4gICAgY29uc3QgbXlUb2RvTGlzdCA9IEpTT04uc3RyaW5naWZ5KG15VG9kb3MpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9kb3MnLG15VG9kb0xpc3QpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWQoKXtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm15VG9kb3NcIik7XHJcbiAgICBpZihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdG9kb0xpc3RzID0gIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dG9kb0xpc3RzLmxlbmd0aCA7aSsrKXtcclxuICAgICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRvZG9MaXN0c1tpXSxOZXdQcm9qZWN0LnByb3RvdHlwZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvZG9MaXN0c1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgY3JlYXRlUHJvamVjdERPTSwgY3JlYXRlUHJvamVjdEJ0biB9O1xyXG5pbXBvcnQgTmV3VGFzayBmcm9tIFwiLi9OZXdUYXNrXCI7XHJcbmltcG9ydCBjcmVhdGVUYXNrRE9NIGZyb20gXCIuL2NyZWF0ZVRhc2tET01cIjtcclxuaW1wb3J0IHsgc2F2ZSxsb2FkIH0gZnJvbSBcIi4vU2F2ZV9Mb2FkXCI7XHJcbmltcG9ydCBlbXB0eURPTSBmcm9tIFwiLi9lbXB0eURPTVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RET00ocHJvamVjdE9iaixteVRvZG9zKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE9iajtcclxuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdlwiKTtcclxuICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIsIHByb2plY3QuaWQpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3REaXZIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgcHJvamVjdERpdkhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInByb2plY3REaXZIZWFkaW5nXCIpO1xyXG4gICAgcHJvamVjdERpdkhlYWRpbmcudGV4dENvbnRlbnQgPSBgUHJvamVjdCA6ICR7cHJvamVjdC5uYW1lfWA7XHJcblxyXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGFkZFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrRm9ybVwiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrSW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0lucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xyXG4gICAgdGFza0lucHV0RWxlbS5jbGFzc0xpc3QuYWRkKFwidGFza0lucHV0RWxlbVwiKTtcclxuICAgIHRhc2tJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIixcIlwiKTtcclxuICAgIHRhc2tJbnB1dEVsZW0uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIixcIkVudGVyIHRoZSB0YXNrIGhlcmVcIik7XHJcblxyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJkYXRlXCIpO1xyXG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlXCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBhZGR0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZHRhc2tCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwic3VibWl0XCIpO1xyXG4gICAgYWRkdGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0J0blwiKTtcclxuICAgIGFkZHRhc2tCdG4udGV4dENvbnRlbnQgPSBcIiArIE5ldyBUYXNrXCJcclxuXHJcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRFbGVtKTtcclxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZHRhc2tCdG4pO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdE5hdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdlwiKTtcclxuICAgIGNvbnN0IGFsbFRhc2tzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGFsbFRhc2tzTGluay50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XHJcbiAgICBhbGxUYXNrc0xpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZMaW5rXCIpO1xyXG4gICAgYWxsVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBhbGxUYXNrc0xpbmsuc2V0QXR0cmlidXRlKFwiaWRcIixcImFsbFRhc2tzXCIpO1xyXG4gICAgY29uc3QgdG9kYXlzVGFza3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2TGlua1wiKTtcclxuICAgIHRvZGF5c1Rhc2tzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0b2RheXNUYXNrc1wiKTtcclxuXHJcbiAgICBjb25zdCB0aGlzV2Vla3NUYXNrc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0xpbmsudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2TGlua1wiKTtcclxuICAgIHRoaXNXZWVrc1Rhc2tzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0aGlzV2Vla3NUYXNrc1wiKVxyXG5cclxuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NMaW5rKTtcclxuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQodG9kYXlzVGFza3NMaW5rKTtcclxuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQodGhpc1dlZWtzVGFza3NMaW5rKVxyXG5cclxuICAgIGNvbnN0IHZpZXdUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB2aWV3VGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInZpZXdUYXNrc0RpdlwiKTtcclxuXHJcbiAgICBjb25zdCBhbGxUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhbGxUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWxsVGFza3NEaXZcIik7XHJcblxyXG4gICAgY29uc3QgdGhpc1dlZWtzVGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0aGlzV2Vla3NUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGhpc1dlZWtzVGFza3NEaXZcIik7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHJcbiAgICBjb25zdCB0b2RheXNUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RheXNUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kYXlzVGFza3NEaXZcIik7XHJcbiAgICB0b2RheXNUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuXHJcblxyXG4gICAgYWxsVGFza3NEaXYuaW5uZXJUZXh0PSBcIkFsbCBUYXNrc1wiO1xyXG4gICAgdG9kYXlzVGFza3NEaXYuaW5uZXJUZXh0ID0gXCJUYXNrcyBmb3IgVG9kYXlcIjtcclxuICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmlubmVyVGV4dCA9IFwiVGFza3MgZm9yIHRoaXMgV2Vla1wiXHJcbiAgICB2aWV3VGFza3NEaXYuYXBwZW5kQ2hpbGQoYWxsVGFza3NEaXYpO1xyXG4gICAgdmlld1Rhc2tzRGl2LmFwcGVuZENoaWxkKHRoaXNXZWVrc1Rhc2tzRGl2KTtcclxuICAgIHZpZXdUYXNrc0Rpdi5hcHBlbmRDaGlsZCh0b2RheXNUYXNrc0Rpdik7XHJcblxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2SGVhZGluZyk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hdik7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHZpZXdUYXNrc0Rpdik7XHJcblxyXG4gICAgLy9FdmVudCBMaXN0ZW5lcnNcclxuICAgIGZ1bmN0aW9uIHNob3dUYWIodGFiKSB7Ly9Td2l0Y2hpbmcgdGFic1xyXG5cclxuICAgICAgICBhbGxUYXNrc0xpbmsuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCB0YWIgPT09IFwiYWxsXCIpO1xyXG4gICAgICAgIHRvZGF5c1Rhc2tzTGluay5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIHRhYiA9PT0gXCJ0b2RheVwiKTtcclxuICAgICAgICB0aGlzV2Vla3NUYXNrc0xpbmsuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCB0YWIgPT09IFwidGhpc1dlZWtcIik7XHJcblxyXG4gICAgICAgIGFsbFRhc2tzRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIHRhYiAhPT0gXCJhbGxcIik7XHJcbiAgICAgICAgdG9kYXlzVGFza3NEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgdGFiICE9PSBcInRvZGF5XCIpO1xyXG4gICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIHRhYiAhPT0gXCJ0aGlzV2Vla1wiKTtcclxuICAgIH1cclxuICAgIGFsbFRhc2tzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCJhbGxcIilcclxuICAgIH0pO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBzaG93VGFiKFwidG9kYXlcIilcclxuICAgIH0pO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICBzaG93VGFiKFwidGhpc1dlZWtcIilcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIGFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXNrID0gbmV3IE5ld1Rhc2sodGFza0lucHV0RWxlbS52YWx1ZSx0YXNrRHVlRGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgdGFzay5zZXREdWVEYXRlID0gbmV3IERhdGUodGFza0R1ZURhdGUudmFsdWUpO1xyXG4gICAgICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00odGFzayxwcm9qZWN0LG15VG9kb3MpKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS5hZGR0YXNrID0gdGFzaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFzay5pc1RvZGF5KCkpIHtcclxuICAgICAgICAgICAgdG9kYXlzVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTSh0YXNrLHByb2plY3QsbXlUb2RvcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhc2suaXNUaGlzV2VlaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00odGFzayxwcm9qZWN0LG15VG9kb3MpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZShteVRvZG9zKTtcclxuICAgICAgICBteVRvZG9zID0gbG9hZCgpXHJcbiAgICAgICAgdGFza0lucHV0RWxlbS52YWx1ZT0gXCJcIjtcclxuICAgICAgICB0YXNrRHVlRGF0ZS52YWx1ZT1cIlwiO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvL0xvYWQgYWxsIEV4aXN0aW5nIHRhc2tzIGxpc3RzXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBteVRvZG9zW2ldLnRhc2tzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRE9NKG15VG9kb3NbaV0udGFza3Nbal0sIG15VG9kb3NbaV0sIG15VG9kb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTsgLy8gQXBwZW5kIHRoZSB0YXNrIGVsZW1lbnQgdG8gdGhlIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udG9kYXkubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZGF5c1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50b2RheVtqXSxteVRvZG9zW2ldLG15VG9kb3MpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udGhpc1dlZWsubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50aGlzV2Vla1tqXSxteVRvZG9zW2ldLG15VG9kb3MpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ0bihwcm9qZWN0LG15VG9kb3MsbmV3UHJvamVjdERvbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5cIik7XHJcbiAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qZWN0QnV0dG9uXCIpXHJcbiAgICBwcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiLHByb2plY3QuaWQpO1xyXG4gICAgY29uc3QgcHJvamVjdEJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBwcm9qZWN0QnRuVGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgIHByb2plY3RCdG4udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlQnRuXCIpO1xyXG5cclxuICAgIHByb2plY3RCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEJ0blRleHQpO1xyXG4gICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxteVRvZG9zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBteVRvZG9zID0gbXlUb2Rvcy5maWx0ZXIodCA9PiB0LmlkICE9PSBwcm9qZWN0LmlkKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdERvbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgcHJvamVjdEJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgc2F2ZShteVRvZG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKGVtcHR5RE9NKCkpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0QnV0dG9uXCIpO1xyXG4gICAgICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb2plY3RCdG47XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrRE9NO1xyXG5pbXBvcnQgeyBzYXZlLGxvYWQgfSBmcm9tIFwiLi9TYXZlX0xvYWRcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tET00oTmV3VGFza09iaixOZXdQcm9qZWN0T2JqLG15VG9kb3Mpe1xyXG4gICAgY29uc3QgdGFzayA9IE5ld1Rhc2tPYmo7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gTmV3UHJvamVjdE9iajtcclxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza0RpdlwiKTtcclxuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIsIHRhc2suaWQpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0YXNrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGFza1RleHRcIik7XHJcbiAgICB0YXNrVGV4dC50ZXh0Q29udGVudCA9IE5ld1Rhc2tPYmoudGFzaztcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RleHQpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRHVlRGF0ZVRleHRcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IE5ld1Rhc2tPYmouZHVlRGF0ZVR4dDtcclxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tTdGF0dXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdGFza1N0YXR1c0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XHJcbiAgICB0YXNrU3RhdHVzQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0YXNrU3RhdHVzQnRuXCIpXHJcbiAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrU3RhdHVzQnRuXCIpO1xyXG4gICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza0J0blwiKVxyXG4gICAgdGFza1N0YXR1c0J0bi50ZXh0Q29udGVudCA9IHRhc2suY29tcGxldGUgPyBcIkRvbmVcIiA6IFwiTm90IERvbmVcIjtcclxuICAgIGlmKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRG9uZVwiKTtcclxuICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrTm90RG9uZVwiKTtcclxuICAgICAgICB0YXNrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlXCIpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tEb25lXCIpO1xyXG4gICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ29tcGxldGVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzQnRuKTtcclxuICAgIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgdGFza0RlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIik7XHJcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuXCIpXHJcbiAgICB0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVsZXRlQnRuXCIpO1xyXG4gICAgdGFza0RlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xyXG5cclxuICAgIC8vRXZlbnQgTGlzdGVuZXJzXHJcbiAgICB0YXNrRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKG15VG9kb3NbaV0uaWQgPT09IHByb2plY3QuaWQpe1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxteVRvZG9zW2ldLnRhc2tzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG15VG9kb3NbaV0udGFza3Nbal0uaWQgPT09IHRhc2suaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVRvZG9zW2ldLmRlbGV0ZVRhc2sgPSB0YXNrLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgdGhlIHRhc2sgZWxlbWVudCBmcm9tIHRoZSBET01cclxuICAgICAgICBjb25zdCB0YXNrSWQgPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKTtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIHRhc2tEaXYgZWxlbWVudHMgd2l0aCB0aGUgc2FtZSB0YXNrIGlkXHJcbiAgICAgICAgY29uc3QgdGFza0RpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS10YXNrLWlkPVwiJHt0YXNrSWR9XCJdYCk7XHJcbiAgICAgICAgdGFza0RpdnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYucmVtb3ZlKCkpO1xyXG4gICAgICAgIHNhdmUobXlUb2Rvcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YXNrU3RhdHVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihteVRvZG9zW2ldLmlkID09PSBwcm9qZWN0LmlkKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bXlUb2Rvc1tpXS50YXNrcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihteVRvZG9zW2ldLnRhc2tzW2pdLmlkID09PSB0YXNrLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuQ2hhbmdlKG15VG9kb3NbaV0udGFza3Nbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1RoaXNXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRvZG9zW2ldLnRhc2tzVG9kYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYobXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRvZG9zW2ldLnRhc2tzW2pdLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuQ2hhbmdlKG15VG9kb3NbaV0udGFza3Nbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1RoaXNXZWVrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRvZG9zW2ldLnRhc2tzVG9kYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlKG15VG9kb3MpO1xyXG4gICAgICAgIG15VG9kb3MgPSBsb2FkKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gdGFza1N0YXR1c0J0bkNoYW5nZShwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJRCA9IHRhc2tEaXYuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFzay1pZD1cIiR7dGFza0lEfVwiXWApO1xyXG4gICAgICAgICAgICB0YXNrRGl2cy5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tTdGF0dXNCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi50YXNrU3RhdHVzQnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1RleHQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi50YXNrVGV4dFwiKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHByb2plY3QuY29tcGxldGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4udGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRG9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrTm90RG9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrVGV4dC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbXBsZXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4udGV4dENvbnRlbnQgPSBcIk5vdCBEb25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza05vdERvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0RvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2F2ZShteVRvZG9zKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gdGFza0RpdjtcclxufSIsImV4cG9ydCBkZWZhdWx0IGVtcHR5RE9NO1xyXG5mdW5jdGlvbiBlbXB0eURPTSgpIHtcclxuICAgIGNvbnN0IGVtcHR5RE9NRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbXB0eURPTUVsZW0uY2xhc3NMaXN0LmFkZChcImVtcHR5VGV4dFwiKTtcclxuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIk5vIFByb2plY3QgaXMgU2VsZWN0ZWQuXCI7XHJcbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIHRleHQyLnRleHRDb250ZW50ID0gXCJQbGVhc2UgU2VsZWN0IGEgcHJvamVjdCBvciBBZGQgYSBOZXcgT25lLlwiO1xyXG4gICAgdGV4dDIuc2V0QXR0cmlidXRlKFwic3R5bGVcIixcImZvbnQtc3R5bGU6IGl0YWxpYztcIilcclxuXHJcbiAgICBlbXB0eURPTUVsZW0uYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgZW1wdHlET01FbGVtLmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgIHJldHVybiBlbXB0eURPTUVsZW07XHJcbn0iLCJcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdERPTSxjcmVhdGVQcm9qZWN0QnRuIH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdERPTVwiO1xyXG5jbGFzcyBQcm9qZWN0RE9NX0JUTiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuZXdQcm9qZWN0T2JqLG15VG9kb3Mpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBuZXdQcm9qZWN0T2JqLmlkO1xyXG4gICAgICAgIHRoaXMucHJvamVjdERPTSA9IGNyZWF0ZVByb2plY3RET01cclxuICAgICAgICAobmV3UHJvamVjdE9iaixteVRvZG9zKTtcclxuICAgICAgICB0aGlzLnByb2plY3RCdG4gPSBjcmVhdGVQcm9qZWN0QnRuKG5ld1Byb2plY3RPYmosbXlUb2Rvcyx0aGlzLnByb2plY3RET00pO1xyXG4gICAgICAgIGFjdGl2ZVN0YXR1cyh0aGlzLnByb2plY3RCdG4pXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xyXG4gICAgICAgICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4odGhpcy5wcm9qZWN0RE9NKTtcclxuICAgICAgICAgICAgYWN0aXZlU3RhdHVzKHRoaXMucHJvamVjdEJ0bilcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmVTdGF0dXMocHJvamVjdEJ0bil7XHJcbiAgICAgICAgICAgIGNvbnN0IEFsbFByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qZWN0QnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnRuRGF0YUlkID0gTnVtYmVyKHByb2plY3RCdG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIpKTtcclxuICAgICAgICAgICAgQWxsUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b25EYXRhSUQgPSBOdW1iZXIoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSk7XHJcbiAgICAgICAgICAgICAgICBpZihidXR0b25EYXRhSUQgPT09IHByb2plY3RCdG5EYXRhSWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdFwiKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RE9NX0JUTjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgTmV3UHJvamVjdCBmcm9tIFwiLi9OZXdQcm9qZWN0XCI7XHJcbmltcG9ydCB7IHNhdmUsbG9hZCB9IGZyb20gJy4vU2F2ZV9Mb2FkJztcclxuaW1wb3J0IFByb2plY3RET01fQlROIGZyb20gJy4vcHJvamVjdERvbUNsYXNzJztcclxuaW1wb3J0IGVtcHR5RE9NIGZyb20gJy4vZW1wdHlET00nO1xyXG5cclxuXHJcblxyXG5sZXQgbXlUb2RvcyA9IFtdOy8vTG9jYWwgdmFyaWFibGVzIHRvIHN0b3JlIGFsbCBUb2Rvc1xyXG5jb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcclxuY29uc3QgbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xyXG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEZvcm1cIik7XHJcblxyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQmFyXCIpO1xyXG5jb25zdCBzY3JlZW5TaXplID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NzBweClcIik7XHJcbmZ1bmN0aW9uIGFkanVzdFNpZGVCYXIoc2NyZWVuU2l6ZSl7XHJcbiAgICBpZihzY3JlZW5TaXplLm1hdGNoZXMpe1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIH1cclxufVxyXG5zY3JlZW5TaXplLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixhZGp1c3RTaWRlQmFyKTtcclxuXHJcbmNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51SWNvblwiKTtcclxuXHJcbm1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcclxuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XHJcbn0pXHJcblxyXG5cclxuYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChlKT0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KCk7XHJcbiAgICBteVRvZG9zLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0RG9tID0gbmV3IFByb2plY3RET01fQlROKG5ld1Byb2plY3QsbXlUb2Rvcyk7XHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3REb20ucHJvamVjdEJ0bik7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gbmV3UHJvamVjdERvbS5wcm9qZWN0QnRuO1xyXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdEJ0bik7XHJcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0XCIpXHJcbiAgICBtYWluY29udGVudC5yZXBsYWNlQ2hpbGRyZW4obmV3UHJvamVjdERvbS5wcm9qZWN0RE9NKTtcclxuICAgIHNhdmUobXlUb2Rvcyk7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKCkgPT4ge1xyXG4gICAgbXlUb2RvcyA9IGxvYWQoKTtcclxuICAgIGFkanVzdFNpZGVCYXIoc2NyZWVuU2l6ZSk7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxteVRvZG9zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REb20gPSBuZXcgUHJvamVjdERPTV9CVE4obXlUb2Rvc1tpXSxteVRvZG9zKTtcclxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3REb20ucHJvamVjdEJ0bik7XHJcbiAgICB9XHJcbiAgICBpZihteVRvZG9zWzBdIT09dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGV0IGEgPSBteVRvZG9zWzBdXHJcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBuZXcgUHJvamVjdERPTV9CVE4oYSxteVRvZG9zKTtcclxuICAgICAgICBtYWluY29udGVudC5yZXBsYWNlQ2hpbGRyZW4ocHJvamVjdERpdi5wcm9qZWN0RE9NKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBtYWluY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oZW1wdHlET00oKSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0VGV4dFwiKTtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RPYmogPSBuZXcgTmV3UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIHJldHVybiBuZXdQcm9qZWN0T2JqO1xyXG59XHJcblxyXG5leHBvcnQge215VG9kb3N9XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9