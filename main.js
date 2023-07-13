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
    --headerBG : rgb(42, 39, 39);
    --headerColor: bisque;
    --sideBarBG : rgb(32, 32, 32);
    --sideBarColor : rgb(255, 255, 255);
    --projectbtnBG : transparent;
    --projectbtnColor:rgb(186, 183, 183);
    --projectbtnBGActive:rgba(73, 72, 72,0.7);
    --projectbtnColorActive: rgb(248, 248, 248);
    --taskBG:rgb(42, 39, 39);
    --taskColor:white;

    --ProjectDIVBG:rgb(59, 59, 59);
    --ProjectDivColor:bisque;

    --taskNavcolorActive:rgb(153, 255, 0);
    --taskNavcolor:rgb(108, 6, 6);

    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    --taskFormDivBG: rgb(27, 1, 49);
    --addProjectBtnBg:bisque;
    --addProjectBtnColor:black;
}
body{
    background-color: black;
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
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
    background: var(--projectbtnBG);
    color: var(--projectbtnColor);
    transition: all 0.2s;
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
    background-color: rgba(117, 1, 1,0.7);
    color: rgb(255, 255, 255);
    font-weight: 100;
    font-size: 1rem;
    border: 1px solid rgba(104, 0, 0);
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
    background-color: black;
    color: bisque;
    outline: 1px solid bisque;
}
.addProjectForm>input:focus{
    transform: scale3d(1.1,1.1,1.1);
    outline: 2px solid rgb(99, 233, 38);
}
.addProjectBtn{
    background-color: var(--addProjectBtnBg);
    color: var(--addProjectBtnColor);
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
    background-color: var(--taskFormDivBG);
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
    background-color: var(--headerBG);
    color: var(--headerColor);
    padding: 10px;
}
.projectNav >h4 {
    cursor: pointer;
}
.projectNav>h4:hover{
    border-bottom: 2px solid var(--taskNavcolorActive);
    color: var(--taskNavcolorActive);
    transform: scale3d(1.1, 1.1, 1.1);
    transition: all 0.3s;
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
    background-color: transparent;
    border: 1px solid bisque;
    color: bisque;
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
    /* background-color: green; */
    color: greenyellow;
    border: 1px solid greenyellow;
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
    background-color: var(--ProjectDIVBG);
    color: var(--ProjectDivColor);
    z-index: 3;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root {\r\n    font-size: 16px;\r\n    --headerBG : rgb(42, 39, 39);\r\n    --headerColor: bisque;\r\n    --sideBarBG : rgb(32, 32, 32);\r\n    --sideBarColor : rgb(255, 255, 255);\r\n    --projectbtnBG : transparent;\r\n    --projectbtnColor:rgb(186, 183, 183);\r\n    --projectbtnBGActive:rgba(73, 72, 72,0.7);\r\n    --projectbtnColorActive: rgb(248, 248, 248);\r\n    --taskBG:rgb(42, 39, 39);\r\n    --taskColor:white;\r\n\r\n    --ProjectDIVBG:rgb(59, 59, 59);\r\n    --ProjectDivColor:bisque;\r\n\r\n    --taskNavcolorActive:rgb(153, 255, 0);\r\n    --taskNavcolor:rgb(108, 6, 6);\r\n\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    \r\n    --taskFormDivBG: rgb(27, 1, 49);\r\n    --addProjectBtnBg:bisque;\r\n    --addProjectBtnColor:black;\r\n}\r\nbody{\r\n    background-color: black;\r\n}\r\n.view {\r\n    display: block;\r\n}\r\n.content {\r\n    display: flex;\r\n}\r\n.menuIcon{\r\n    width: 40px;\r\n    height: 40px;\r\n    fill: var(--headerColor);\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n.mainContent{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\nheader{\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    font-size: 1.5rem;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sideBar {\r\n    background-color: var(--sideBarBG);\r\n    color: var(--sideBarColor);\r\n    width: min-content;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    padding: 1rem;\r\n}\r\n.projectBtn{\r\n    display: flex;\r\n    width: 100%;\r\n    max-width: 250px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1rem;\r\n    font-weight: 700;\r\n    padding: 0.5rem ;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-bottom: 30px;\r\n    background: var(--projectbtnBG);\r\n    color: var(--projectbtnColor);\r\n    transition: all 0.2s;\r\n}\r\n.projectBtn:hover {\r\n    background-color: var(--projectbtnBGActive);\r\n    color: var(--projectbtnColorActive);\r\n    box-shadow: none;\r\n}\r\n.activeProject {\r\n    background-color: var(--projectbtnBGActive);\r\n    color: var(--projectbtnColorActive);\r\n    box-shadow: none;\r\n}\r\n.closeBtn {\r\n    padding: 5px;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-color: rgba(117, 1, 1,0.7);\r\n    color: rgb(255, 255, 255);\r\n    font-weight: 100;\r\n    font-size: 1rem;\r\n    border: 1px solid rgba(104, 0, 0);\r\n    width: fit-content;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.closeBtn:hover {\r\n    outline: 1px solid whitesmoke;\r\n}\r\n\r\n\r\n\r\n\r\n.projects{\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.headingPROJECTS{\r\n    text-align: left;\r\n    font-size: 2.3rem;\r\n    color: rgb(153, 255, 0);\r\n    font-weight: 100;\r\n    font-style: italic;\r\n    \r\n}\r\n.addProjectForm{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 20px;\r\n    justify-content: right;\r\n    margin-bottom: 20px;\r\n}\r\n.addProjectForm > input {\r\n    font-size: 1rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    margin-right: 10px;\r\n    background-color: black;\r\n    color: bisque;\r\n    outline: 1px solid bisque;\r\n}\r\n.addProjectForm>input:focus{\r\n    transform: scale3d(1.1,1.1,1.1);\r\n    outline: 2px solid rgb(99, 233, 38);\r\n}\r\n.addProjectBtn{\r\n    background-color: var(--addProjectBtnBg);\r\n    color: var(--addProjectBtnColor);\r\n    padding: 0.4rem;\r\n    font-weight: 600;\r\n    font-size: 1.2rem;\r\n    align-self: right;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    border: 2px solid black;\r\n}\r\n.addProjectBtn:hover{\r\n    outline: 1px solid white;\r\n}\r\n\r\n\r\n\r\n.projectDiv{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: var(--ProjectDIVBG);\r\n    color: var(--ProjectDivColor);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 1rem;\r\n}\r\n.projectDivHeading{\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n    color: var(--ProjectDivColor);\r\n}\r\n.addTaskForm{\r\n    background-color: var(--taskFormDivBG);\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    padding: 1rem;\r\n    width: 80%;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem{\r\n    grid-column: 1/ span 2;\r\n    padding: 10px;\r\n    font-size: 1.3rem;\r\n    border: 1px solid var(--headerColor);\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: var(--headerColor);\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem:focus{\r\n    outline: 4px solid rgb(76, 136, 255);\r\n    border: none;\r\n}\r\n.taskDueDate{\r\n    padding: 0.4rem;\r\n    font-size: 1rem;\r\n    width: fit-content;\r\n    align-self: center;\r\n    justify-items: center;\r\n    margin: 0 auto;\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(57, 56, 56);\r\n    border-radius: 10px;\r\n    border: none;\r\n    cursor: pointer;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.addTaskBtn{\r\n    border-radius: 10px;\r\n    border: none;\r\n    box-shadow: 1px 1px 1px black;\r\n    font-size: 1.4rem;\r\n    margin: 0 auto;\r\n    padding: 0.8rem;\r\n    width: max-content;\r\n    background: rgb(33, 54, 1);\r\n    color: white;\r\n    font-weight: 700;\r\n    transition: all 0.4s;\r\n    cursor: pointer;\r\n}\r\n.addTaskBtn:hover{\r\n    outline: 1px solid white;\r\n}\r\n.addTaskBtn:active{\r\n    transform: scale3d(0.6,0.6,0.6);\r\n}\r\n\r\n.projectNav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    font-size: 1.1rem;\r\n    color: var(--taskNavcolor);\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n    padding: 10px;\r\n}\r\n.projectNav >h4 {\r\n    cursor: pointer;\r\n}\r\n.projectNav>h4:hover{\r\n    border-bottom: 2px solid var(--taskNavcolorActive);\r\n    color: var(--taskNavcolorActive);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n    transition: all 0.3s;\r\n}\r\n.active {\r\n    border-bottom: 2px solid var(--taskNavcolorActive);\r\n    color: var(--taskNavcolorActive);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n    transition: all 0.3s;\r\n}\r\n.viewTasksDiv{\r\n    border-radius: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: var(--taskDivBG);\r\n    display: grid;\r\n    gap: 20px;\r\n    padding: 10px;\r\n}\r\n.allTasksDiv,.todaysTasksDiv, .thisWeeksTasksDiv{\r\n    color:var(--ProjectDivColor);\r\n}\r\n\r\n.taskDiv{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    padding: 0.4rem;\r\n    margin-top: 10px;\r\n    border-radius: 10px;\r\n    background-color: var(--taskBG);\r\n    color: var(--taskColor);\r\n}\r\n.taskText{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.3rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n}\r\n.taskDueDateText{\r\n    color: white;\r\n    text-align: right;\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    border-radius: 5px;\r\n    font-size: 0.9rem;\r\n    font-weight: 900;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.taskBtn {\r\n    padding: 0.3rem 1rem;\r\n    font-size: 0.8rem;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-weight: 700;\r\n    outline: none;\r\n    cursor: pointer;\r\n    transition: all 0.1s;\r\n}\r\n.taskStatusBtn {\r\n    background-color: transparent;\r\n    border: 1px solid bisque;\r\n    color: bisque;\r\n}\r\n.taskStatusBtn:hover {\r\n    outline: 2px solid white;\r\n}\r\n.taskDeleteBtn {\r\n    background-color: rgb(147, 4, 4);\r\n    color: white;\r\n    margin-left: 10px;\r\n    border: 1px solid white;\r\n}\r\n.taskDeleteBtn:hover {\r\n    outline: 2px solid whitesmoke;\r\n}\r\n.taskDeleteBtn:active {\r\n    outline: none;\r\n    transform: scale(0.6);\r\n}\r\n\r\n.taskDone{\r\n    /* background-color: green; */\r\n    color: greenyellow;\r\n    border: 1px solid greenyellow;\r\n}\r\n.taskComplete{\r\n    text-decoration: line-through;\r\n    color: rgba(255, 255, 255, 0.4);\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.emptyText {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: var(--ProjectDIVBG);\r\n    color: var(--ProjectDivColor);\r\n    z-index: 3;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*Responsive Design*/\r\n@media only screen and (max-width: 770px){\r\n    header{\r\n        font-size: 1rem;\r\n    }\r\n    .menuIcon {\r\n        display: block;\r\n        margin-right: 1rem;\r\n    }\r\n    .content {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .sideBar{\r\n        width: 100%;\r\n        height: min-content;\r\n        min-height: min-content;\r\n    }\r\n}"],"sourceRoot":""}]);
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
    taskDeleteBtn.textContent = "Remove task";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUs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d0RBQWM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQUk7QUFDUixDQUFDO0FBQ0Q7QUFDQTtBQUNBLGNBQWMsZ0RBQUk7QUFDbEI7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDLGtDQUFrQyx3REFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3REFBYztBQUMzQztBQUNBLEtBQUs7QUFDTCxvQ0FBb0MscURBQVE7QUFDNUM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1EQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ2dCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL05ld1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9TYXZlX0xvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy8uL3NyYy9jcmVhdGVQcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvY3JlYXRlVGFza0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzLy4vc3JjL2VtcHR5RE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvcHJvamVjdERvbUNsYXNzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QtanMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOnJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1oZWFkZXJCRyA6IHJnYig0MiwgMzksIDM5KTtcclxuICAgIC0taGVhZGVyQ29sb3I6IGJpc3F1ZTtcclxuICAgIC0tc2lkZUJhckJHIDogcmdiKDMyLCAzMiwgMzIpO1xyXG4gICAgLS1zaWRlQmFyQ29sb3IgOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAtLXByb2plY3RidG5CRyA6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1wcm9qZWN0YnRuQ29sb3I6cmdiKDE4NiwgMTgzLCAxODMpO1xyXG4gICAgLS1wcm9qZWN0YnRuQkdBY3RpdmU6cmdiYSg3MywgNzIsIDcyLDAuNyk7XHJcbiAgICAtLXByb2plY3RidG5Db2xvckFjdGl2ZTogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgLS10YXNrQkc6cmdiKDQyLCAzOSwgMzkpO1xyXG4gICAgLS10YXNrQ29sb3I6d2hpdGU7XHJcblxyXG4gICAgLS1Qcm9qZWN0RElWQkc6cmdiKDU5LCA1OSwgNTkpO1xyXG4gICAgLS1Qcm9qZWN0RGl2Q29sb3I6YmlzcXVlO1xyXG5cclxuICAgIC0tdGFza05hdmNvbG9yQWN0aXZlOnJnYigxNTMsIDI1NSwgMCk7XHJcbiAgICAtLXRhc2tOYXZjb2xvcjpyZ2IoMTA4LCA2LCA2KTtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgICAtLXRhc2tGb3JtRGl2Qkc6IHJnYigyNywgMSwgNDkpO1xyXG4gICAgLS1hZGRQcm9qZWN0QnRuQmc6YmlzcXVlO1xyXG4gICAgLS1hZGRQcm9qZWN0QnRuQ29sb3I6YmxhY2s7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi52aWV3IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1lbnVJY29ue1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmaWxsOiB2YXIoLS1oZWFkZXJDb2xvcik7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYWluQ29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCRyk7XHJcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zaWRlQmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGVCYXJCRyk7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZUJhckNvbG9yKTtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4ucHJvamVjdEJ0bntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJvamVjdGJ0bkJHKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQ29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnByb2plY3RCdG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdGJ0bkJHQWN0aXZlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQ29sb3JBY3RpdmUpO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYWN0aXZlUHJvamVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQkdBY3RpdmUpO1xyXG4gICAgY29sb3I6IHZhcigtLXByb2plY3RidG5Db2xvckFjdGl2ZSk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5jbG9zZUJ0biB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE3LCAxLCAxLDAuNyk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA0LCAwLCAwKTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2xvc2VCdG46aG92ZXIge1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5wcm9qZWN0c3tcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uaGVhZGluZ1BST0pFQ1RTe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xyXG4gICAgY29sb3I6IHJnYigxNTMsIDI1NSwgMCk7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgXHJcbn1cclxuLmFkZFByb2plY3RGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYWRkUHJvamVjdEZvcm0gPiBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBiaXNxdWU7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmlzcXVlO1xyXG59XHJcbi5hZGRQcm9qZWN0Rm9ybT5pbnB1dDpmb2N1c3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsMS4xLDEuMSk7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgcmdiKDk5LCAyMzMsIDM4KTtcclxufVxyXG4uYWRkUHJvamVjdEJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZFByb2plY3RCdG5CZyk7XHJcbiAgICBjb2xvcjogdmFyKC0tYWRkUHJvamVjdEJ0bkNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGFsaWduLXNlbGY6IHJpZ2h0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmFkZFByb2plY3RCdG46aG92ZXJ7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcblxyXG5cclxuLnByb2plY3REaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Qcm9qZWN0RElWQkcpO1xyXG4gICAgY29sb3I6IHZhcigtLVByb2plY3REaXZDb2xvcik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG4ucHJvamVjdERpdkhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLVByb2plY3REaXZDb2xvcik7XHJcbn1cclxuLmFkZFRhc2tGb3Jte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza0Zvcm1EaXZCRyk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50YXNrSW5wdXRFbGVte1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvIHNwYW4gMjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50YXNrSW5wdXRFbGVtOmZvY3Vze1xyXG4gICAgb3V0bGluZTogNHB4IHNvbGlkIHJnYig3NiwgMTM2LCAyNTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi50YXNrRHVlRGF0ZXtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYig1NywgNTYsIDU2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hZGRUYXNrQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigzMywgNTQsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGRUYXNrQnRuOmhvdmVye1xyXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5hZGRUYXNrQnRuOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjYsMC42LDAuNik7XHJcbn1cclxuXHJcbi5wcm9qZWN0TmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10YXNrTmF2Y29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQkcpO1xyXG4gICAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnByb2plY3ROYXYgPmg0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvamVjdE5hdj5oNDpob3ZlcntcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10YXNrTmF2Y29sb3JBY3RpdmUpO1xyXG4gICAgY29sb3I6IHZhcigtLXRhc2tOYXZjb2xvckFjdGl2ZSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10YXNrTmF2Y29sb3JBY3RpdmUpO1xyXG4gICAgY29sb3I6IHZhcigtLXRhc2tOYXZjb2xvckFjdGl2ZSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4udmlld1Rhc2tzRGl2e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRhc2tEaXZCRyk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYWxsVGFza3NEaXYsLnRvZGF5c1Rhc2tzRGl2LCAudGhpc1dlZWtzVGFza3NEaXZ7XHJcbiAgICBjb2xvcjp2YXIoLS1Qcm9qZWN0RGl2Q29sb3IpO1xyXG59XHJcblxyXG4udGFza0RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza0JHKTtcclxuICAgIGNvbG9yOiB2YXIoLS10YXNrQ29sb3IpO1xyXG59XHJcbi50YXNrVGV4dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLnRhc2tEdWVEYXRlVGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRhc2tCdG4ge1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG59XHJcbi50YXNrU3RhdHVzQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmlzcXVlO1xyXG4gICAgY29sb3I6IGJpc3F1ZTtcclxufVxyXG4udGFza1N0YXR1c0J0bjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuLnRhc2tEZWxldGVCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgNCwgNCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi50YXNrRGVsZXRlQnRuOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcbi50YXNrRGVsZXRlQnRuOmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG59XHJcblxyXG4udGFza0RvbmV7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cclxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG59XHJcbi50YXNrQ29tcGxldGV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5lbXB0eVRleHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUHJvamVjdERJVkJHKTtcclxuICAgIGNvbG9yOiB2YXIoLS1Qcm9qZWN0RGl2Q29sb3IpO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLypSZXNwb25zaXZlIERlc2lnbiovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5tZW51SWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5zaWRlQmFye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0Msd0JBQXdCO0lBQ3hCLGlCQUFpQjs7SUFFakIsOEJBQThCO0lBQzlCLHdCQUF3Qjs7SUFFeEIscUNBQXFDO0lBQ3JDLDZCQUE2Qjs7SUFFN0Isc0hBQXNIOztJQUV0SCwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZUFBZTtB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QkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzSEFBc0g7QUFDMUg7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0JBQW9CO0FBQ3BCO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAtLWhlYWRlckJHIDogcmdiKDQyLCAzOSwgMzkpO1xcclxcbiAgICAtLWhlYWRlckNvbG9yOiBiaXNxdWU7XFxyXFxuICAgIC0tc2lkZUJhckJHIDogcmdiKDMyLCAzMiwgMzIpO1xcclxcbiAgICAtLXNpZGVCYXJDb2xvciA6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgLS1wcm9qZWN0YnRuQkcgOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgLS1wcm9qZWN0YnRuQ29sb3I6cmdiKDE4NiwgMTgzLCAxODMpO1xcclxcbiAgICAtLXByb2plY3RidG5CR0FjdGl2ZTpyZ2JhKDczLCA3MiwgNzIsMC43KTtcXHJcXG4gICAgLS1wcm9qZWN0YnRuQ29sb3JBY3RpdmU6IHJnYigyNDgsIDI0OCwgMjQ4KTtcXHJcXG4gICAgLS10YXNrQkc6cmdiKDQyLCAzOSwgMzkpO1xcclxcbiAgICAtLXRhc2tDb2xvcjp3aGl0ZTtcXHJcXG5cXHJcXG4gICAgLS1Qcm9qZWN0RElWQkc6cmdiKDU5LCA1OSwgNTkpO1xcclxcbiAgICAtLVByb2plY3REaXZDb2xvcjpiaXNxdWU7XFxyXFxuXFxyXFxuICAgIC0tdGFza05hdmNvbG9yQWN0aXZlOnJnYigxNTMsIDI1NSwgMCk7XFxyXFxuICAgIC0tdGFza05hdmNvbG9yOnJnYigxMDgsIDYsIDYpO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBcXHJcXG4gICAgLS10YXNrRm9ybURpdkJHOiByZ2IoMjcsIDEsIDQ5KTtcXHJcXG4gICAgLS1hZGRQcm9qZWN0QnRuQmc6YmlzcXVlO1xcclxcbiAgICAtLWFkZFByb2plY3RCdG5Db2xvcjpibGFjaztcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi52aWV3IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLm1lbnVJY29ue1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBmaWxsOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLm1haW5Db250ZW50e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJCRyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZUJhciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGVCYXJCRyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlQmFyQ29sb3IpO1xcclxcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0QnRue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb2plY3RidG5CRyk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQ29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuLnByb2plY3RCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQkdBY3RpdmUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdGJ0bkNvbG9yQWN0aXZlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuLmFjdGl2ZVByb2plY3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0YnRuQkdBY3RpdmUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJvamVjdGJ0bkNvbG9yQWN0aXZlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuLmNsb3NlQnRuIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNywgMSwgMSwwLjcpO1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA0LCAwLCAwKTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0bjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdHN7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5oZWFkaW5nUFJPSkVDVFN7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDE1MywgMjU1LCAwKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmFkZFByb2plY3RGb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybSA+IGlucHV0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiBiaXNxdWU7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBiaXNxdWU7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0Rm9ybT5pbnB1dDpmb2N1c3tcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwxLjEsMS4xKTtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYig5OSwgMjMzLCAzOCk7XFxyXFxufVxcclxcbi5hZGRQcm9qZWN0QnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRQcm9qZWN0QnRuQmcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWRkUHJvamVjdEJ0bkNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYWxpZ24tc2VsZjogcmlnaHQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmFkZFByb2plY3RCdG46aG92ZXJ7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3REaXZ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1Qcm9qZWN0RElWQkcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tUHJvamVjdERpdkNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0RGl2SGVhZGluZ3tcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tUHJvamVjdERpdkNvbG9yKTtcXHJcXG59XFxyXFxuLmFkZFRhc2tGb3Jte1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrRm9ybURpdkJHKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrSW5wdXRFbGVte1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8gc3BhbiAyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50YXNrSW5wdXRFbGVtOmZvY3Vze1xcclxcbiAgICBvdXRsaW5lOiA0cHggc29saWQgcmdiKDc2LCAxMzYsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuLnRhc2tEdWVEYXRle1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgY29sb3I6IHJnYig1NywgNTYsIDU2KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5hZGRUYXNrQnRue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzMsIDU0LCAxKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWRkVGFza0J0bjpob3ZlcntcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4uYWRkVGFza0J0bjphY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjYsMC42LDAuNik7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TmF2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGFza05hdmNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQkcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4ucHJvamVjdE5hdiA+aDQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5wcm9qZWN0TmF2Pmg0OmhvdmVye1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGFza05hdmNvbG9yQWN0aXZlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRhc2tOYXZjb2xvckFjdGl2ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGFza05hdmNvbG9yQWN0aXZlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRhc2tOYXZjb2xvckFjdGl2ZSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxyXFxufVxcclxcbi52aWV3VGFza3NEaXZ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGFza0RpdkJHKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4uYWxsVGFza3NEaXYsLnRvZGF5c1Rhc2tzRGl2LCAudGhpc1dlZWtzVGFza3NEaXZ7XFxyXFxuICAgIGNvbG9yOnZhcigtLVByb2plY3REaXZDb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50YXNrRGl2e1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrQkcpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGFza0NvbG9yKTtcXHJcXG59XFxyXFxuLnRhc2tUZXh0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMC40cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4udGFza0R1ZURhdGVUZXh0e1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi50YXNrQnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XFxyXFxufVxcclxcbi50YXNrU3RhdHVzQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJpc3F1ZTtcXHJcXG4gICAgY29sb3I6IGJpc3F1ZTtcXHJcXG59XFxyXFxuLnRhc2tTdGF0dXNCdG46aG92ZXIge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi50YXNrRGVsZXRlQnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NywgNCwgNCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ0bjpob3ZlciB7XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcclxcbn1cXHJcXG4udGFza0RlbGV0ZUJ0bjphY3RpdmUge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XFxyXFxufVxcclxcblxcclxcbi50YXNrRG9uZXtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47ICovXFxyXFxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XFxyXFxufVxcclxcbi50YXNrQ29tcGxldGV7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lbXB0eVRleHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUHJvamVjdERJVkJHKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLVByb2plY3REaXZDb2xvcik7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qUmVzcG9uc2l2ZSBEZXNpZ24qL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpe1xcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnVJY29uIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5zaWRlQmFye1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICAgICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIE5ld1Byb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnRvZGF5ID0gW107XHJcbiAgICB0aGlzLnRoaXNXZWVrID0gW107XHJcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXQgYWRkdGFzayh2YWx1ZSkge1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHZhbHVlKTtcclxuICAgIHRoaXMudGFza3NUaGlzV2VlaygpO1xyXG4gICAgdGhpcy50YXNrc1RvZGF5KCk7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVsZXRlVGFzayhpZCkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhc2tzVGhpc1dlZWsoKTtcclxuICAgIHRoaXMudGFza3NUb2RheSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGNvbXBsZXRlU3RhdHVzKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICB0aGlzLmNvbXBsZXRlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgXCJJbnZhbGlkIHZhbHVlLiBFeHBlY3RlZCBhIGJvb2xlYW4uIEF0ICdOZXdQcm9qZWN0LmNvbXBsZXRlJ1wiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICBpZiAodGhpcy5kdWVEYXRlID09PSB1bmRlZmluZWQgfHwgdGhpcy5kdWVEYXRlID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IFwiTm8gRHVlIERhdGVcIjtcclxuICAgIH0gZWxzZSBpZiAoZHVlRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGR1ZURhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgYSBkYXRlLiBBdCAnTmV3UHJvamVjdC5kdWVkYXRlJ1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRhc2tzVGhpc1dlZWsoKSB7XHJcbiAgICBjb25zdCBhX3dlZWsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDsgLy8gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgd2Vla1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGhpcy50aGlzV2VlayA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgIGNvbnN0IGRpZmZJbk1pbGxpU2VjID0gZ2l2ZW5EYXRlLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKTtcclxuICAgICAgcmV0dXJuIGRpZmZJbk1pbGxpU2VjID49IDAgJiYgZGlmZkluTWlsbGlTZWMgPCBhX3dlZWs7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRhc2tzVG9kYXkoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLnRvZGF5ID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcclxuICAgICAgY29uc3QgZ2l2ZW5EYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgIGdpdmVuRGF0ZS5nZXRNb250aCgpID09PSBjdXJyZW50RGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgZ2l2ZW5EYXRlLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Byb2plY3Q7XHJcbiIsImNsYXNzIE5ld1Rhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGFzayxkdWVEYXRlKXtcclxuICAgICAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZVR4dFxyXG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldCBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgICAgICBpZih0aGlzLmR1ZURhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmR1ZURhdGUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGVUeHQgPSBcIk5vIER1ZSBEYXRlXCI7XHJcbiAgICAgICAgfWVsc2UgaWYoZHVlRGF0ZSBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGR1ZURhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGVUeHQgPSBgRHVlIERhdGUgOiAke2R1ZURhdGUuZ2V0RGF0ZSgpfS0ke2R1ZURhdGUuZ2V0TW9udGgoKX0tJHtkdWVEYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIGEgZGF0ZS4gQXQgTmV3VGFza1wiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1RvZGF5KCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICB0YXNrRGF0ZS5nZXREYXRlKCkgPT09IGN1cnJlbnREYXRlLmdldERhdGUoKSAmJlxyXG4gICAgICAgIHRhc2tEYXRlLmdldE1vbnRoKCkgPT09IGN1cnJlbnREYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RoaXNXZWVrKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZHVlRGF0ZSk7XHJcbiAgICAgICAgY29uc3Qgb25lV2Vla01pbGxpc2Vjb25kcyA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwOyAvLyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIG9uZSB3ZWVrXHJcbiAgICAgICAgY29uc3QgZGlmZkluTWlsbGlzZWNvbmRzID0gdGFza0RhdGUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgIHJldHVybiBkaWZmSW5NaWxsaXNlY29uZHMgPj0gMCAmJiBkaWZmSW5NaWxsaXNlY29uZHMgPCBvbmVXZWVrTWlsbGlzZWNvbmRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdUYXNrOyIsImltcG9ydCBOZXdQcm9qZWN0IGZyb20gXCIuL05ld1Byb2plY3RcIjtcclxuXHJcbmV4cG9ydCB7c2F2ZSxsb2FkfTtcclxuXHJcbmZ1bmN0aW9uIHNhdmUobXlUb2Rvcyl7XHJcbiAgICBjb25zdCBteVRvZG9MaXN0ID0gSlNPTi5zdHJpbmdpZnkobXlUb2Rvcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb2RvcycsbXlUb2RvTGlzdCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZCgpe1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibXlUb2Rvc1wiKTtcclxuICAgIGlmKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB0b2RvTGlzdHMgPSAgSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTx0b2RvTGlzdHMubGVuZ3RoIDtpKyspe1xyXG4gICAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodG9kb0xpc3RzW2ldLE5ld1Byb2plY3QucHJvdG90eXBlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9kb0xpc3RzXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgeyBjcmVhdGVQcm9qZWN0RE9NLCBjcmVhdGVQcm9qZWN0QnRuIH07XHJcbmltcG9ydCBOZXdUYXNrIGZyb20gXCIuL05ld1Rhc2tcIjtcclxuaW1wb3J0IGNyZWF0ZVRhc2tET00gZnJvbSBcIi4vY3JlYXRlVGFza0RPTVwiO1xyXG5pbXBvcnQgeyBzYXZlLGxvYWQgfSBmcm9tIFwiLi9TYXZlX0xvYWRcIjtcclxuaW1wb3J0IGVtcHR5RE9NIGZyb20gXCIuL2VtcHR5RE9NXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERPTShwcm9qZWN0T2JqLG15VG9kb3MpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0T2JqO1xyXG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpO1xyXG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIiwgcHJvamVjdC5pZCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdERpdkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwcm9qZWN0RGl2SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERpdkhlYWRpbmdcIik7XHJcbiAgICBwcm9qZWN0RGl2SGVhZGluZy50ZXh0Q29udGVudCA9IGBQcm9qZWN0IDogJHtwcm9qZWN0Lm5hbWV9YDtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgYWRkVGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tGb3JtXCIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tJbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrSW5wdXRFbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInRleHRcIik7XHJcbiAgICB0YXNrSW5wdXRFbGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrSW5wdXRFbGVtXCIpO1xyXG4gICAgdGFza0lucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLFwiXCIpO1xyXG4gICAgdGFza0lucHV0RWxlbS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLFwiRW50ZXIgdGhlIHRhc2sgaGVyZVwiKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tEdWVEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImRhdGVcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFza0R1ZURhdGVcIik7XHJcblxyXG5cclxuICAgIGNvbnN0IGFkZHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkdGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJzdWJtaXRcIik7XHJcbiAgICBhZGR0YXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnRuXCIpO1xyXG4gICAgYWRkdGFza0J0bi50ZXh0Q29udGVudCA9IFwiICsgTmV3IFRhc2tcIlxyXG5cclxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dEVsZW0pO1xyXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xyXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkdGFza0J0bik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0TmF2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmF2XCIpO1xyXG4gICAgY29uc3QgYWxsVGFza3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgYWxsVGFza3NMaW5rLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcclxuICAgIGFsbFRhc2tzTGluay5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hdkxpbmtcIik7XHJcbiAgICBhbGxUYXNrc0xpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGFsbFRhc2tzTGluay5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWxsVGFza3NcIik7XHJcbiAgICBjb25zdCB0b2RheXNUYXNrc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICB0b2RheXNUYXNrc0xpbmsudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XHJcbiAgICB0b2RheXNUYXNrc0xpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZMaW5rXCIpO1xyXG4gICAgdG9kYXlzVGFza3NMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB0b2RheXNUYXNrc0xpbmsuc2V0QXR0cmlidXRlKFwiaWRcIixcInRvZGF5c1Rhc2tzXCIpO1xyXG5cclxuICAgIGNvbnN0IHRoaXNXZWVrc1Rhc2tzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIHRoaXNXZWVrc1Rhc2tzTGluay50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0xpbmsuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYXZMaW5rXCIpO1xyXG4gICAgdGhpc1dlZWtzVGFza3NMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0xpbmsuc2V0QXR0cmlidXRlKFwiaWRcIixcInRoaXNXZWVrc1Rhc2tzXCIpXHJcblxyXG4gICAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChhbGxUYXNrc0xpbmspO1xyXG4gICAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZCh0b2RheXNUYXNrc0xpbmspO1xyXG4gICAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZCh0aGlzV2Vla3NUYXNrc0xpbmspXHJcblxyXG4gICAgY29uc3Qgdmlld1Rhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHZpZXdUYXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidmlld1Rhc2tzRGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IGFsbFRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGFsbFRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJhbGxUYXNrc0RpdlwiKTtcclxuXHJcbiAgICBjb25zdCB0aGlzV2Vla3NUYXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aGlzV2Vla3NUYXNrc0RpdlwiKTtcclxuICAgIHRoaXNXZWVrc1Rhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG5cclxuICAgIGNvbnN0IHRvZGF5c1Rhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZGF5c1Rhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RheXNUYXNrc0RpdlwiKTtcclxuICAgIHRvZGF5c1Rhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG5cclxuXHJcbiAgICBhbGxUYXNrc0Rpdi5pbm5lclRleHQ9IFwiQWxsIFRhc2tzXCI7XHJcbiAgICB0b2RheXNUYXNrc0Rpdi5pbm5lclRleHQgPSBcIlRhc2tzIGZvciBUb2RheVwiO1xyXG4gICAgdGhpc1dlZWtzVGFza3NEaXYuaW5uZXJUZXh0ID0gXCJUYXNrcyBmb3IgdGhpcyBXZWVrXCJcclxuICAgIHZpZXdUYXNrc0Rpdi5hcHBlbmRDaGlsZChhbGxUYXNrc0Rpdik7XHJcbiAgICB2aWV3VGFza3NEaXYuYXBwZW5kQ2hpbGQodGhpc1dlZWtzVGFza3NEaXYpO1xyXG4gICAgdmlld1Rhc2tzRGl2LmFwcGVuZENoaWxkKHRvZGF5c1Rhc2tzRGl2KTtcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REaXZIZWFkaW5nKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmF2KTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQodmlld1Rhc2tzRGl2KTtcclxuXHJcbiAgICAvL0V2ZW50IExpc3RlbmVyc1xyXG4gICAgZnVuY3Rpb24gc2hvd1RhYih0YWIpIHsvL1N3aXRjaGluZyB0YWJzXHJcblxyXG4gICAgICAgIGFsbFRhc2tzTGluay5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIHRhYiA9PT0gXCJhbGxcIik7XHJcbiAgICAgICAgdG9kYXlzVGFza3NMaW5rLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgdGFiID09PSBcInRvZGF5XCIpO1xyXG4gICAgICAgIHRoaXNXZWVrc1Rhc2tzTGluay5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIsIHRhYiA9PT0gXCJ0aGlzV2Vla1wiKTtcclxuXHJcbiAgICAgICAgYWxsVGFza3NEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgdGFiICE9PSBcImFsbFwiKTtcclxuICAgICAgICB0b2RheXNUYXNrc0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCB0YWIgIT09IFwidG9kYXlcIik7XHJcbiAgICAgICAgdGhpc1dlZWtzVGFza3NEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIiwgdGFiICE9PSBcInRoaXNXZWVrXCIpO1xyXG4gICAgfVxyXG4gICAgYWxsVGFza3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RhYihcImFsbFwiKVxyXG4gICAgfSk7XHJcbiAgICB0b2RheXNUYXNrc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCJ0b2RheVwiKVxyXG4gICAgfSk7XHJcbiAgICB0aGlzV2Vla3NUYXNrc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xyXG4gICAgICAgIHNob3dUYWIoXCJ0aGlzV2Vla1wiKVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBuZXcgTmV3VGFzayh0YXNrSW5wdXRFbGVtLnZhbHVlLHRhc2tEdWVEYXRlLnZhbHVlKTtcclxuICAgICAgICB0YXNrLnNldER1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrRHVlRGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTSh0YXNrLHByb2plY3QsbXlUb2RvcykpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBteVRvZG9zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS5pZCA9PT0gcHJvamVjdC5pZCl7XHJcbiAgICAgICAgICAgICAgICBteVRvZG9zW2ldLmFkZHRhc2sgPSB0YXNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXNrLmlzVG9kYXkoKSkge1xyXG4gICAgICAgICAgICB0b2RheXNUYXNrc0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRE9NKHRhc2sscHJvamVjdCxteVRvZG9zKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFzay5pc1RoaXNXZWVrKCkpIHtcclxuICAgICAgICAgICAgdGhpc1dlZWtzVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTSh0YXNrLHByb2plY3QsbXlUb2RvcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzYXZlKG15VG9kb3MpO1xyXG4gICAgICAgIG15VG9kb3MgPSBsb2FkKClcclxuICAgICAgICB0YXNrSW5wdXRFbGVtLnZhbHVlPSBcIlwiO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLnZhbHVlPVwiXCI7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vTG9hZCBhbGwgRXhpc3RpbmcgdGFza3MgbGlzdHNcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBteVRvZG9zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS5pZCA9PT0gcHJvamVjdC5pZCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG15VG9kb3NbaV0udGFza3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tET00obXlUb2Rvc1tpXS50YXNrc1tqXSwgbXlUb2Rvc1tpXSwgbXlUb2Rvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsVGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpOyAvLyBBcHBlbmQgdGhlIHRhc2sgZWxlbWVudCB0byB0aGUgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbXlUb2Rvc1tpXS50b2RheS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kYXlzVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTShteVRvZG9zW2ldLnRvZGF5W2pdLG15VG9kb3NbaV0sbXlUb2RvcykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgbXlUb2Rvc1tpXS50aGlzV2Vlay5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1dlZWtzVGFza3NEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0RPTShteVRvZG9zW2ldLnRoaXNXZWVrW2pdLG15VG9kb3NbaV0sbXlUb2RvcykpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcm9qZWN0RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QnRuKHByb2plY3QsbXlUb2RvcyxuZXdQcm9qZWN0RG9tKXtcclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ0blwiKTtcclxuICAgIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixcInByb2plY3RCdXR0b25cIilcclxuICAgIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LWlkXCIscHJvamVjdC5pZCk7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHByb2plY3RCdG5UZXh0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgcHJvamVjdEJ0bi52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XHJcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VCdG5cIik7XHJcblxyXG4gICAgcHJvamVjdEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuVGV4dCk7XHJcbiAgICBwcm9qZWN0QnRuLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBmb3IobGV0IGk9MDtpPG15VG9kb3MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIG15VG9kb3MgPSBteVRvZG9zLmZpbHRlcih0ID0+IHQuaWQgIT09IHByb2plY3QuaWQpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0RG9tLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBwcm9qZWN0QnRuLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBzYXZlKG15VG9kb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluQ29udGVudC5yZXBsYWNlQ2hpbGRyZW4oZW1wdHlET00oKSk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2plY3RCdXR0b25cIik7XHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvamVjdEJ0bjtcclxufSIsImV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tET007XHJcbmltcG9ydCB7IHNhdmUsbG9hZCB9IGZyb20gXCIuL1NhdmVfTG9hZFwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0RPTShOZXdUYXNrT2JqLE5ld1Byb2plY3RPYmosbXlUb2Rvcyl7XHJcbiAgICBjb25zdCB0YXNrID0gTmV3VGFza09iajtcclxuICAgIGNvbnN0IHByb2plY3QgPSBOZXdQcm9qZWN0T2JqO1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGl2XCIpO1xyXG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIiwgdGFzay5pZCk7XHJcblxyXG4gICAgY29uc3QgdGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGV4dFwiKTtcclxuICAgIHRhc2tUZXh0LnRleHRDb250ZW50ID0gTmV3VGFza09iai50YXNrO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XHJcblxyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlVGV4dFwiKTtcclxuICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gTmV3VGFza09iai5kdWVEYXRlVHh0O1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XHJcblxyXG4gICAgY29uc3QgdGFza1N0YXR1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICB0YXNrU3RhdHVzQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcclxuICAgIHRhc2tTdGF0dXNCdG4uc2V0QXR0cmlidXRlKFwiaWRcIixcInRhc2tTdGF0dXNCdG5cIilcclxuICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tTdGF0dXNCdG5cIik7XHJcbiAgICB0YXNrU3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQnRuXCIpXHJcbiAgICB0YXNrU3RhdHVzQnRuLnRleHRDb250ZW50ID0gdGFzay5jb21wbGV0ZSA/IFwiRG9uZVwiIDogXCJOb3QgRG9uZVwiO1xyXG4gICAgaWYodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tEb25lXCIpO1xyXG4gICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29tcGxldGVcIik7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza05vdERvbmVcIik7XHJcbiAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwidGFza0RvbmVcIik7XHJcbiAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tTdGF0dXNCdG4pO1xyXG4gICAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICB0YXNrRGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKTtcclxuICAgIHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tCdG5cIilcclxuICAgIHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tEZWxldGVCdG5cIik7XHJcbiAgICB0YXNrRGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJSZW1vdmUgdGFza1wiO1xyXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcclxuXHJcbiAgICAvL0V2ZW50IExpc3RlbmVyc1xyXG4gICAgdGFza0RlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUb2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihteVRvZG9zW2ldLmlkID09PSBwcm9qZWN0LmlkKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8bXlUb2Rvc1tpXS50YXNrcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihteVRvZG9zW2ldLnRhc2tzW2pdLmlkID09PSB0YXNrLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS5kZWxldGVUYXNrID0gdGFzay5pZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB0YXNrIGVsZW1lbnQgZnJvbSB0aGUgRE9NXHJcbiAgICAgICAgY29uc3QgdGFza0lkID0gdGFza0Rpdi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCB0YXNrRGl2IGVsZW1lbnRzIHdpdGggdGhlIHNhbWUgdGFzayBpZFxyXG4gICAgICAgIGNvbnN0IHRhc2tEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFzay1pZD1cIiR7dGFza0lkfVwiXWApO1xyXG4gICAgICAgIHRhc2tEaXZzLmZvckVhY2goKGRpdikgPT4gZGl2LnJlbW92ZSgpKTtcclxuICAgICAgICBzYXZlKG15VG9kb3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza1N0YXR1c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS5pZCA9PT0gcHJvamVjdC5pZCl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPG15VG9kb3NbaV0udGFza3MubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobXlUb2Rvc1tpXS50YXNrc1tqXS5pZCA9PT0gdGFzay5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bkNoYW5nZShteVRvZG9zW2ldLnRhc2tzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VG9kb3NbaV0udGFza3NUaGlzV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1RvZGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKG15VG9kb3NbaV0udGFza3Nbal0uY29tcGxldGUgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1tqXS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bkNoYW5nZShteVRvZG9zW2ldLnRhc2tzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VG9kb3NbaV0udGFza3NUaGlzV2VlaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUb2Rvc1tpXS50YXNrc1RvZGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2F2ZShteVRvZG9zKTtcclxuICAgICAgICBteVRvZG9zID0gbG9hZCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIHRhc2tTdGF0dXNCdG5DaGFuZ2UocHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSUQgPSB0YXNrRGl2LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKVxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2tJRH1cIl1gKTtcclxuICAgICAgICAgICAgdGFza0RpdnMuZm9yRWFjaCgoZGl2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrU3RhdHVzQnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1N0YXR1c0J0blwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUZXh0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIudGFza1RleHRcIilcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0LmNvbXBsZXRlID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuLnRleHRDb250ZW50ID0gXCJEb25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKFwidGFza0RvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1N0YXR1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwidGFza05vdERvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2tDb21wbGV0ZVwiKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXNrU3RhdHVzQnRuLnRleHRDb250ZW50ID0gXCJOb3QgRG9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tOb3REb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRhc2tEb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrQ29tcGxldGVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNhdmUobXlUb2RvcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHRhc2tEaXY7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBlbXB0eURPTTtcclxuZnVuY3Rpb24gZW1wdHlET00oKSB7XHJcbiAgICBjb25zdCBlbXB0eURPTUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZW1wdHlET01FbGVtLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVRleHRcIik7XHJcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJObyBQcm9qZWN0IGlzIFNlbGVjdGVkLlwiO1xyXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiUGxlYXNlIFNlbGVjdCBhIHByb2plY3Qgb3IgQWRkIGEgTmV3IE9uZS5cIjtcclxuICAgIHRleHQyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsXCJmb250LXN0eWxlOiBpdGFsaWM7XCIpXHJcblxyXG4gICAgZW1wdHlET01FbGVtLmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgIGVtcHR5RE9NRWxlbS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICByZXR1cm4gZW1wdHlET01FbGVtO1xyXG59IiwiXHJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RET00sY3JlYXRlUHJvamVjdEJ0biB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RET01cIjtcclxuY2xhc3MgUHJvamVjdERPTV9CVE4ge1xyXG4gICAgY29uc3RydWN0b3IobmV3UHJvamVjdE9iaixteVRvZG9zKXtcclxuICAgICAgICB0aGlzLmlkID0gbmV3UHJvamVjdE9iai5pZDtcclxuICAgICAgICB0aGlzLnByb2plY3RET00gPSBjcmVhdGVQcm9qZWN0RE9NXHJcbiAgICAgICAgKG5ld1Byb2plY3RPYmosbXlUb2Rvcyk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0QnRuID0gY3JlYXRlUHJvamVjdEJ0bihuZXdQcm9qZWN0T2JqLG15VG9kb3MsdGhpcy5wcm9qZWN0RE9NKTtcclxuICAgICAgICBhY3RpdmVTdGF0dXModGhpcy5wcm9qZWN0QnRuKVxyXG4gICAgICAgIHRoaXMucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcclxuICAgICAgICAgICAgbWFpbkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKHRoaXMucHJvamVjdERPTSk7XHJcbiAgICAgICAgICAgIGFjdGl2ZVN0YXR1cyh0aGlzLnByb2plY3RCdG4pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aXZlU3RhdHVzKHByb2plY3RCdG4pe1xyXG4gICAgICAgICAgICBjb25zdCBBbGxQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvamVjdEJ1dHRvblwiKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEJ0bkRhdGFJZCA9IE51bWJlcihwcm9qZWN0QnRuLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1pZFwiKSk7XHJcbiAgICAgICAgICAgIEFsbFByb2plY3RCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uRGF0YUlEID0gTnVtYmVyKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgaWYoYnV0dG9uRGF0YUlEID09PSBwcm9qZWN0QnRuRGF0YUlkKXtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RcIik7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERPTV9CVE47IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IE5ld1Byb2plY3QgZnJvbSBcIi4vTmV3UHJvamVjdFwiO1xyXG5pbXBvcnQgeyBzYXZlLGxvYWQgfSBmcm9tICcuL1NhdmVfTG9hZCc7XHJcbmltcG9ydCBQcm9qZWN0RE9NX0JUTiBmcm9tICcuL3Byb2plY3REb21DbGFzcyc7XHJcbmltcG9ydCBlbXB0eURPTSBmcm9tICcuL2VtcHR5RE9NJztcclxuXHJcblxyXG5cclxubGV0IG15VG9kb3MgPSBbXTsvL0xvY2FsIHZhcmlhYmxlcyB0byBzdG9yZSBhbGwgVG9kb3NcclxuY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XHJcbmNvbnN0IG1haW5jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcclxuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RGb3JtXCIpO1xyXG5cclxuY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZUJhclwiKTtcclxuY29uc3Qgc2NyZWVuU2l6ZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzcwcHgpXCIpO1xyXG5mdW5jdGlvbiBhZGp1c3RTaWRlQmFyKHNjcmVlblNpemUpe1xyXG4gICAgaWYoc2NyZWVuU2l6ZS5tYXRjaGVzKXtcclxuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuc2NyZWVuU2l6ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsYWRqdXN0U2lkZUJhcik7XHJcblxyXG5jb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUljb25cIik7XHJcblxyXG5tZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XHJcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xyXG59KVxyXG5cclxuXHJcbmFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwoZSk9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCgpO1xyXG4gICAgbXlUb2Rvcy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdERvbSA9IG5ldyBQcm9qZWN0RE9NX0JUTihuZXdQcm9qZWN0LG15VG9kb3MpO1xyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RG9tLnByb2plY3RCdG4pO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IG5ld1Byb2plY3REb20ucHJvamVjdEJ0bjtcclxuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3RCdG4pO1xyXG4gICAgbmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdFwiKVxyXG4gICAgbWFpbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKG5ld1Byb2plY3REb20ucHJvamVjdERPTSk7XHJcbiAgICBzYXZlKG15VG9kb3MpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCgpID0+IHtcclxuICAgIG15VG9kb3MgPSBsb2FkKCk7XHJcbiAgICBhZGp1c3RTaWRlQmFyKHNjcmVlblNpemUpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8bXlUb2Rvcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RG9tID0gbmV3IFByb2plY3RET01fQlROKG15VG9kb3NbaV0sbXlUb2Rvcyk7XHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RG9tLnByb2plY3RCdG4pO1xyXG4gICAgfVxyXG4gICAgaWYobXlUb2Rvc1swXSE9PXVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxldCBhID0gbXlUb2Rvc1swXVxyXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gbmV3IFByb2plY3RET01fQlROKGEsbXlUb2Rvcyk7XHJcbiAgICAgICAgbWFpbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKHByb2plY3REaXYucHJvamVjdERPTSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgbWFpbmNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKGVtcHR5RE9NKCkpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFRleHRcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0T2JqID0gbmV3IE5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICByZXR1cm4gbmV3UHJvamVjdE9iajtcclxufVxyXG5cclxuZXhwb3J0IHtteVRvZG9zfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==