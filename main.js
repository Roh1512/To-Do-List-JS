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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n:root {\r\n    font-size: 16px;\r\n    --headerBG : black;\r\n    --headerColor: white;\r\n    --sideBarBG : rgb(213, 213, 213);\r\n    --sideBarColor : black;\r\n    --btnBG : rgb(191, 191, 191);\r\n    --activeBtnBG: rgb(167, 167, 167);\r\n    --actibeBtnColor:white;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n.view {\r\n    display: block;\r\n}\r\n.content {\r\n    display: flex;\r\n}\r\nheader{\r\n    background-color: var(--headerBG);\r\n    color: var(--headerColor);\r\n    width: 100%;\r\n    padding: 0.5rem;\r\n    font-size: 1.5rem;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.sideBar {\r\n    background-color: var(--sideBarBG);\r\n    color: var(--sideBarColor);\r\n    width: 30%;\r\n    height: 100vh;\r\n    padding: 1rem;\r\n    border-right: 1px solid black;\r\n}\r\n.localTasks{\r\n    padding: 1rem;\r\n    border-bottom: 2px dotted black;\r\n    text-align: center;\r\n}\r\n.localTasksBtn{\r\n    background:transparent;\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    padding: 0.5rem ;\r\n    border: none;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    box-shadow: 1px 1px 1px rgb(121, 120, 120);\r\n}\r\n.localTasksBtn:hover {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\n.projects{\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.headingPROJECTS{\r\n    text-align: left;\r\n    font-size: 2.3rem;\r\n    color: rgb(35, 109, 19);\r\n    font-weight: 900;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n.addProjectForm{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: right;\r\n    margin-bottom: 1rem;\r\n}\r\n.addProjectForm > input {\r\n    font-size: 1rem;\r\n    padding: 0.4rem;\r\n    margin-bottom: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n}\r\n.addProjectForm>input:focus{\r\n    outline: 2px solid blue;\r\n}\r\n.addProjectBtn{\r\n    padding: 0.4rem;\r\n    font-weight: 600;\r\n    align-self: right;\r\n    border-radius: 5px;\r\n    box-shadow: 3px 3px 2px  black;\r\n    cursor: pointer;\r\n}\r\n\r\n.closeBtn{\r\n    padding: 5px;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: rgb(120, 4, 4);\r\n    color: white;\r\n    font-weight: 900;\r\n    border: 1px solid white;\r\n    outline: 1px solid rgb(120, 4, 4);\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    transition: all 0.3s;\r\n}\r\n.closeBtn:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.active{\r\n    background: var(--activeBtnBG);\r\n}\r\n\r\n.projectDiv{\r\n    width: 100%;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding-top: 1rem;\r\n}\r\n.projectDivHeading{\r\n    font-size: 2rem;\r\n    margin-bottom: 10px;\r\n}\r\n.addTaskForm{\r\n    border: 2px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    padding: 1rem;\r\n    width: 80%;\r\n    gap: 10px;\r\n}\r\n.taskInputElem{\r\n    grid-column: 1/ span 2;\r\n    padding: 10px;\r\n    font-size: 1.3rem;\r\n    border: 2px solid black;\r\n    border-radius: 10px;\r\n}\r\n.taskInputElem:focus{\r\n    outline: 2px solid blue;\r\n}\r\n.taskDueDate{\r\n    padding: 0.3rem;\r\n    font-size: 1rem;\r\n    width: fit-content;\r\n    align-self: center;\r\n    justify-items: center;\r\n    margin: 0 auto;\r\n}\r\n.addTaskBtn{\r\n    border-radius: 5px;\r\n    font-size: 1.4rem;\r\n    margin: 0 auto;\r\n    padding: 0.4rem;\r\n    width: max-content;\r\n}\r\n.projectNav{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n    margin-bottom: 20px;\r\n    font-size: 1.4rem;\r\n}\r\n.projectNav >h4 {\r\n    cursor: pointer;\r\n}\r\n.viewTasksDiv{\r\n    border: 2px solid red;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: rgb(23, 13, 13);\r\n    display: grid;\r\n    gap: 20px;\r\n}\r\n\r\n.taskDiv{\r\n    border: 1px solid greenyellow;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    padding: 0.4rem;\r\n}\r\n.taskTextDiv{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 1.2rem;\r\n    padding: 0.4rem;\r\n}\r\n.taskDueDateDiv{\r\n    background-color: bisque;\r\n    font-size: 0.9rem;\r\n    font-weight: 900;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-style: italic;\r\n}\r\n.taskBtnDiv{\r\n    display: flex;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n}\r\n.taskBtn {\r\n    padding: 0.3rem 1rem;\r\n    font-size: 1rem;\r\n    border: none;\r\n    background-color: var(--btnBG);\r\n    border-radius: 5px;\r\n    font-weight: 700;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.deleteBtn {\r\n    background-color: rgb(147, 4, 4);\r\n    color: white;\r\n    margin-left: 10px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n\r\n/*Responsive Design*/\r\n@media only screen and (max-width: 600px){\r\n    header{\r\n        font-size: 1.5rem;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-js/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-js/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/NewProject.js":
/*!***************************!*\
  !*** ./src/NewProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewProject {\r\n  constructor(name, dueDate) {\r\n    this.id = new Date().getTime();\r\n    this.name = name;\r\n    this.tasks = [];\r\n    this.dueDate = dueDate;\r\n    this.today = [];\r\n    this.thisWeek = [];\r\n    this.complete = false;\r\n  }\r\n\r\n  set addtask(value) {\r\n    this.tasks.unshift(value);\r\n    this.tasksThisWeek();\r\n    this.tasksToday();\r\n  }\r\n\r\n  set deleteTask(id) {\r\n    const index = this.tasks.findIndex((task) => task.id === id);\r\n    if (index !== -1) {\r\n      this.tasks.splice(index, 1);\r\n    }\r\n    this.tasksThisWeek();\r\n    this.tasksToday();\r\n  }\r\n\r\n  set completeClass(value) {\r\n    if (typeof value === \"boolean\") {\r\n      this.complete = value;\r\n    } else {\r\n      throw new Error(\r\n        \"Invalid value. Expected a boolean. At 'NewProject.complete'\"\r\n      );\r\n    }\r\n  }\r\n\r\n  set setDueDate(dueDate) {\r\n    if (this.dueDate === undefined || this.dueDate === \"\") {\r\n      this.dueDate = \"No Due Date\";\r\n    } else if (dueDate instanceof Date && !isNaN(dueDate.getTime())) {\r\n      this.dueDate = dueDate;\r\n    } else {\r\n      throw new Error(\"Expected a date. At 'NewProject.duedate'\");\r\n    }\r\n  }\r\n\r\n  tasksThisWeek() {\r\n    const a_week = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in one week\r\n    const currentDate = new Date();\r\n    this.thisWeek = this.tasks.filter((task) => {\r\n      const givenDate = new Date(task.dueDate);\r\n      const diffInMilliSec = givenDate.getTime() - currentDate.getTime();\r\n      return diffInMilliSec >= 0 && diffInMilliSec < a_week;\r\n    });\r\n  }\r\n\r\n  tasksToday() {\r\n    const currentDate = new Date();\r\n    this.today = this.tasks.filter((task) => {\r\n      const givenDate = new Date(task.dueDate);\r\n      return (\r\n        givenDate.getFullYear() === currentDate.getFullYear() &&\r\n        givenDate.getMonth() === currentDate.getMonth() &&\r\n        givenDate.getDate() === currentDate.getDate()\r\n      );\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProject);\r\n\n\n//# sourceURL=webpack://to-do-list-js/./src/NewProject.js?");

/***/ }),

/***/ "./src/NewTask.js":
/*!************************!*\
  !*** ./src/NewTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass NewTask {\r\n    constructor(task,dueDate){\r\n        this.id = new Date().getTime();\r\n        this.task = task;\r\n        this.dueDate = dueDate;\r\n        this.dueDateTxt\r\n        this.complete = false;\r\n    }\r\n    set completeStatus(value){\r\n        if (typeof value === 'boolean') {\r\n            this.complete = value;\r\n        } else {\r\n            throw new Error(\"Invalid value. Expected a boolean. At 'NewTask'.complete\");\r\n        }\r\n    }\r\n    set setDueDate(dueDate) {\r\n        if(this.dueDate === undefined || this.dueDate === \"\"){\r\n            this.dueDateTxt = \"No Due Date\";\r\n        }else if(dueDate instanceof Date && !isNaN(dueDate.getTime())) {\r\n            this.dueDateTxt = `${dueDate.getDate()}-${dueDate.getMonth()}-${dueDate.getFullYear()}`;\r\n        }else {\r\n            throw new Error(\"Expected a date. At NewTask\")\r\n        }\r\n    }\r\n\r\n    isToday() {\r\n        const currentDate = new Date();\r\n        const taskDate = new Date(this.dueDate);\r\n        return (\r\n        taskDate.getDate() === currentDate.getDate() &&\r\n        taskDate.getMonth() === currentDate.getMonth() &&\r\n        taskDate.getFullYear() === currentDate.getFullYear()\r\n        );\r\n    }\r\n\r\n    isThisWeek() {\r\n        const currentDate = new Date();\r\n        const taskDate = new Date(this.dueDate);\r\n        const oneWeekMilliseconds = 7 * 24 * 60 * 60 * 1000; // Number of milliseconds in one week\r\n        const diffInMilliseconds = taskDate.getTime() - currentDate.getTime();\r\n        return diffInMilliseconds >= 0 && diffInMilliseconds < oneWeekMilliseconds;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);\n\n//# sourceURL=webpack://to-do-list-js/./src/NewTask.js?");

/***/ }),

/***/ "./src/Save_Load.js":
/*!**************************!*\
  !*** ./src/Save_Load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load: () => (/* binding */ load),\n/* harmony export */   save: () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewProject */ \"./src/NewProject.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction save(myTodos){\r\n    let myTodoList = JSON.stringify(myTodos);\r\n    localStorage.setItem('myTodos',myTodoList);\r\n}\r\nfunction load(myTodos){\r\n    \r\n    const todos = localStorage.getItem(\"myTodos\");\r\n    if(todos){\r\n        myTodos = JSON.parse(todos);\r\n    }\r\n    for(let i=0;i<myTodos.length;i++){\r\n        Object.setPrototypeOf(myTodos[i],_NewProject__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://to-do-list-js/./src/Save_Load.js?");

/***/ }),

/***/ "./src/createProjectDOM.js":
/*!*********************************!*\
  !*** ./src/createProjectDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectBtn: () => (/* binding */ createProjectBtn),\n/* harmony export */   createProjectDOM: () => (/* binding */ createProjectDOM)\n/* harmony export */ });\n/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewTask */ \"./src/NewTask.js\");\n/* harmony import */ var _createTaskDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskDOM */ \"./src/createTaskDOM.js\");\n/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Save_Load */ \"./src/Save_Load.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createProjectDOM(projectObj,myTodos) {\r\n    const project = projectObj;\r\n    const projectDiv = document.createElement(\"div\");\r\n    projectDiv.classList.add(\"projectDiv\");\r\n    projectDiv.setAttribute(\"data-project-id\", project.id);\r\n\r\n    const projectDivHeading = document.createElement(\"h2\");\r\n    projectDivHeading.classList.add(\"projectDivHeading\");\r\n    projectDivHeading.textContent = project.name;\r\n\r\n    const addTaskForm = document.createElement(\"form\");\r\n    addTaskForm.classList.add(\"addTaskForm\");\r\n\r\n    const taskInputElem = document.createElement(\"input\");\r\n    taskInputElem.setAttribute(\"type\",\"text\");\r\n    taskInputElem.classList.add(\"taskInputElem\");\r\n    taskInputElem.setAttribute(\"required\",\"\");\r\n    taskInputElem.setAttribute(\"placeholder\",\"Enter the task here\");\r\n\r\n    const taskDueDate = document.createElement(\"input\");\r\n    taskDueDate.setAttribute(\"type\",\"date\");\r\n    taskDueDate.classList.add(\"taskDueDate\");\r\n\r\n\r\n    const addtaskBtn = document.createElement(\"button\");\r\n    addtaskBtn.setAttribute(\"type\",\"submit\");\r\n    addtaskBtn.classList.add(\"addTaskBtn\");\r\n    addtaskBtn.textContent = \" + New Task\"\r\n\r\n    addTaskForm.appendChild(taskInputElem);\r\n    addTaskForm.appendChild(taskDueDate);\r\n    addTaskForm.appendChild(addtaskBtn);\r\n\r\n    const projectNav = document.createElement(\"div\");\r\n    projectNav.classList.add(\"projectNav\");\r\n    const allTasksLink = document.createElement(\"h4\");\r\n    allTasksLink.textContent = \"All Tasks\";\r\n    allTasksLink.classList.add(\"projectNavLink\");\r\n    allTasksLink.classList.add(\"active\");\r\n    allTasksLink.setAttribute(\"id\",\"allTasks\");\r\n    const todaysTasksLink = document.createElement(\"h4\");\r\n    todaysTasksLink.textContent = \"Today\";\r\n    todaysTasksLink.classList.add(\"projectNavLink\");\r\n    todaysTasksLink.classList.remove(\"active\");\r\n    todaysTasksLink.setAttribute(\"id\",\"todaysTasks\");\r\n\r\n    const thisWeeksTasksLink = document.createElement(\"h4\");\r\n    thisWeeksTasksLink.textContent = \"This Week\";\r\n    thisWeeksTasksLink.classList.add(\"projectNavLink\");\r\n    thisWeeksTasksLink.classList.remove(\"active\");\r\n    thisWeeksTasksLink.setAttribute(\"id\",\"thisWeeksTasks\")\r\n\r\n    projectNav.appendChild(allTasksLink);\r\n    projectNav.appendChild(todaysTasksLink);\r\n    projectNav.appendChild(thisWeeksTasksLink)\r\n\r\n    const viewTasksDiv = document.createElement(\"div\");\r\n    viewTasksDiv.classList.add(\"viewTasksDiv\");\r\n\r\n    const allTasksDiv = document.createElement(\"div\");\r\n    allTasksDiv.classList.add(\"allTasksDiv\");\r\n\r\n    const thisWeeksTasksDiv = document.createElement(\"div\")\r\n    thisWeeksTasksDiv.classList.add(\"thisWeeksTasksDiv\");\r\n    thisWeeksTasksDiv.classList.add(\"hide\");\r\n\r\n    const todaysTasksDiv = document.createElement(\"div\");\r\n    todaysTasksDiv.classList.add(\"todaysTasksDiv\");\r\n    todaysTasksDiv.classList.add(\"hide\");\r\n\r\n\r\n    allTasksDiv.innerText= \"All\";\r\n    todaysTasksDiv.innerText = \"Today\";\r\n    thisWeeksTasksDiv.innerText = \"ThisWeek\"\r\n    viewTasksDiv.appendChild(allTasksDiv);\r\n    viewTasksDiv.appendChild(thisWeeksTasksDiv);\r\n    viewTasksDiv.appendChild(todaysTasksDiv);\r\n\r\n    projectDiv.appendChild(projectDivHeading);\r\n    projectDiv.appendChild(addTaskForm);\r\n    projectDiv.appendChild(projectNav);\r\n    projectDiv.appendChild(viewTasksDiv);\r\n\r\n    //Event Listeners\r\n    function showTab(tab) {//Switching tabs\r\n\r\n        allTasksLink.classList.toggle(\"active\", tab === \"all\");\r\n        todaysTasksLink.classList.toggle(\"active\", tab === \"today\");\r\n        thisWeeksTasksLink.classList.toggle(\"active\", tab === \"thisWeek\");\r\n\r\n        allTasksDiv.classList.toggle(\"hide\", tab !== \"all\");\r\n        todaysTasksDiv.classList.toggle(\"hide\", tab !== \"today\");\r\n        thisWeeksTasksDiv.classList.toggle(\"hide\", tab !== \"thisWeek\");\r\n    }\r\n    allTasksLink.addEventListener(\"click\", () => {\r\n        showTab(\"all\")\r\n    });\r\n    todaysTasksLink.addEventListener(\"click\",() => {\r\n        showTab(\"today\")\r\n    });\r\n    thisWeeksTasksLink.addEventListener(\"click\",() => {\r\n        showTab(\"thisWeek\")\r\n\r\n    });\r\n\r\n    \r\n    addTaskForm.addEventListener(\"submit\",(e) =>{\r\n        e.preventDefault();\r\n        let task = new _NewTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskInputElem.value,taskDueDate.value);\r\n        task.setDueDate = new Date(taskDueDate.value);\r\n        allTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task,project,myTodos));\r\n        for(let i = 0; i < myTodos.length; i++){\r\n            if(myTodos[i].id === project.id){\r\n                myTodos[i].addtask = task;\r\n                console.log(myTodos[i].tasks);\r\n            }\r\n        }\r\n        if (task.isToday()) {\r\n            todaysTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task,project,myTodos));\r\n        }\r\n\r\n        if (task.isThisWeek()) {\r\n            thisWeeksTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task,project,myTodos));\r\n        }\r\n        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_2__.save)(myTodos);\r\n    });\r\n\r\n\r\n\r\n    //Load all Existing tasks lists\r\n    window.addEventListener(\"load\",() => {\r\n\r\n        for(let i = 0; i < myTodos.length; i++){\r\n            if(myTodos[i].id === project.id){\r\n                for(let j = 0; j < myTodos[i].tasks.length; j++){\r\n                    allTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(myTodos[i].tasks[j],myTodos[i],myTodos));\r\n                }\r\n                for(let j = 0; j < myTodos[i].today.length; j++){\r\n                    todaysTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(myTodos[i].today[j],myTodos[i],myTodos))\r\n                }\r\n                for(let j = 0; j < myTodos[i].thisWeek.length; j++){\r\n                    thisWeeksTasksDiv.appendChild((0,_createTaskDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(myTodos[i].thisWeek[j],myTodos[i],myTodos))\r\n                }\r\n            }\r\n        }\r\n    })\r\n\r\n    return projectDiv;\r\n}\r\n\r\nfunction createProjectBtn(project,myTodos,newProjectDom){\r\n    const projectBtn = document.createElement(\"div\");\r\n    projectBtn.classList.add(\"localTasksBtn\");\r\n    const projectBtnText = document.createElement(\"p\");\r\n\r\n    projectBtnText.textContent = project.name;\r\n    projectBtn.value = project.name;\r\n\r\n    const closeBtn = document.createElement(\"button\");\r\n    closeBtn.textContent = \"X\";\r\n    closeBtn.classList.add(\"closeBtn\");\r\n\r\n    projectBtn.appendChild(projectBtnText);\r\n    projectBtn.appendChild(closeBtn);\r\n    closeBtn.addEventListener(\"click\",() => {\r\n        for(let i=0;i<myTodos.length;i++){\r\n            myTodos = myTodos.filter(t => t.id !== project.id);\r\n            projectBtn.remove();\r\n            newProjectDom.remove();\r\n        }\r\n    })\r\n    return projectBtn;\r\n}\n\n//# sourceURL=webpack://to-do-list-js/./src/createProjectDOM.js?");

/***/ }),

/***/ "./src/createTaskDOM.js":
/*!******************************!*\
  !*** ./src/createTaskDOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save_Load */ \"./src/Save_Load.js\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskDOM);\r\n\r\n\r\nfunction createTaskDOM(NewTaskObj,NewProjectObj,myTodos){\r\n    const task = NewTaskObj;\r\n    const project = NewProjectObj;\r\n    const taskDiv = document.createElement(\"div\");\r\n    taskDiv.classList.add(\"taskDiv\");\r\n    taskDiv.setAttribute(\"data-task-id\", task.id);\r\n\r\n    const taskText = document.createElement(\"p\");\r\n    taskText.classList.add(\"taskText\");\r\n    taskText.textContent = NewTaskObj.task;\r\n    taskDiv.appendChild(taskText);\r\n\r\n    const taskDueDate = document.createElement(\"div\");\r\n    taskDueDate.classList.add(\"taskDueDate\");\r\n    taskDueDate.textContent = NewTaskObj.dueDateTxt;\r\n    taskDiv.appendChild(taskDueDate);\r\n\r\n    const taskStatusBtn = document.createElement(\"button\");\r\n    taskStatusBtn.setAttribute(\"type\",\"button\");\r\n    taskStatusBtn.classList.add(\"taskStatusBtn\");\r\n    taskStatusBtn.textContent = NewTaskObj.complete ? \"Done\" : \"Not Done\";\r\n    if(task.complete) {\r\n        taskStatusBtn.classList.add(\"taskDone\");\r\n        taskStatusBtn.classList.remove(\"taskNotDone\");\r\n    }else {\r\n        taskStatusBtn.classList.add(\"taskNotDone\");\r\n        taskStatusBtn.classList.remove(\"taskDone\");\r\n    }\r\n\r\n    taskDiv.appendChild(taskStatusBtn);\r\n    const taskDeleteBtn = document.createElement(\"button\");\r\n    taskDeleteBtn.setAttribute(\"type\",\"button\");\r\n    taskDeleteBtn.classList.add(\"taskDeleteBtn\");\r\n    taskDeleteBtn.textContent = \"Delete\";\r\n    taskDiv.appendChild(taskDeleteBtn);\r\n\r\n    //Event Listeners\r\n    taskDeleteBtn.addEventListener(\"click\", () => {\r\n        for (let i = 0; i < myTodos.length; i++) {\r\n            if(myTodos[i].id === project.id){\r\n                for(let j=0;j<myTodos[i].tasks.length;j++){\r\n                    if(myTodos[i].tasks[j].id === task.id){\r\n                        myTodos[i].deleteTask = task.id;\r\n                        console.log(myTodos[i]);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        // Remove the task element from the DOM\r\n        const taskId = taskDiv.getAttribute(\"data-task-id\");\r\n        // Remove all taskDiv elements with the same task id\r\n        const taskDivs = document.querySelectorAll(`[data-task-id=\"${taskId}\"]`);\r\n        taskDivs.forEach((div) => div.remove());\r\n        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.save)(myTodos);\r\n    });\r\n\r\n    taskStatusBtn.addEventListener(\"click\",() => {\r\n        for (let i = 0; i < myTodos.length; i++) {\r\n            if(myTodos[i].id === project.id){\r\n                for(let j=0;j<myTodos[i].tasks.length;j++){\r\n                    if(myTodos[i].tasks[j].id === task.id){\r\n                        if(myTodos[i].tasks[j].complete === false){\r\n                            myTodos[i].tasks[j].completeStatus = true;\r\n                            console.log(myTodos[i].tasks[j]);//Console\r\n                            taskStatusBtn.textContent = \"Done\";\r\n                            taskStatusBtn.classList.add(\"taskDone\");\r\n                            taskStatusBtn.classList.remove(\"taskNotDone\");\r\n                        }else if(myTodos[i].tasks[j].complete === true){\r\n                            myTodos[i].tasks[j].completeStatus = false;\r\n                            console.log(myTodos[i].tasks[j]);//console\r\n                            taskStatusBtn.textContent = \"Not Done\";\r\n                            taskStatusBtn.classList.add(\"taskNotDone\");\r\n                            taskStatusBtn.classList.remove(\"taskDone\");\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        (0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.save)(myTodos);\r\n    })\r\n    ;(0,_Save_Load__WEBPACK_IMPORTED_MODULE_0__.load)()\r\n    return taskDiv;\r\n}\n\n//# sourceURL=webpack://to-do-list-js/./src/createTaskDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myTodos: () => (/* binding */ myTodos)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewTask */ \"./src/NewTask.js\");\n/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewProject */ \"./src/NewProject.js\");\n/* harmony import */ var _createProjectDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProjectDOM */ \"./src/createProjectDOM.js\");\n/* harmony import */ var _Save_Load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save_Load */ \"./src/Save_Load.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet myTodos = [];//Local variables to store all Todos\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\nlet localTasks = new _NewProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Local Tasks\");\r\nlocalTasks.setDueDate = localTasks.dueDate;\r\nmyTodos[0] = localTasks;\r\n\r\n\r\nwindow.addEventListener(\"load\",() => {\r\n    (0,_Save_Load__WEBPACK_IMPORTED_MODULE_4__.load)()\r\n\r\n    content.appendChild((0,_createProjectDOM__WEBPACK_IMPORTED_MODULE_3__.createProjectDOM)(myTodos[0],myTodos))\r\n    \r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list-js/./src/index.js?");

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