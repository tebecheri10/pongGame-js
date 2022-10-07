/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("\r\nconst createGameLayout = ()=>{\r\n    let canvas = document.querySelector(\"#gameCanvas\");\r\n    let canvasContext = canvas.getContext('2d');\r\n    canvasContext.fillStyle = \"black\"\r\n    canvasContext.fillRect(0,0,canvas.width , canvas.height)\r\n    canvasContext.fillStyle = \"red\"\r\n    canvasContext.fillRect(122,122,50 ,50)\r\n}\r\n\r\nwindow.addEventListener(\"load\", ()=>{\r\n    createGameLayout();\r\n})\n\n//# sourceURL=webpack://javascriptpong/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;