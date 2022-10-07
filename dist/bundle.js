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

eval("let canvasHTML = document.querySelector(\"#gameCanvas\");\r\nlet ballX = 50;\r\nlet ballY = 50;\r\nlet speedX = 10;\r\nlet speedY = 10;\r\n\r\nlet racketHeight = 120;\r\nlet racketWidth = 20;\r\nlet racket1Y = 200;\r\nlet racket2Y = 200;\r\n\r\n\r\nconst getCanvas = () => {\r\n  let canvasContext = canvasHTML.getContext(\"2d\");\r\n  return canvasContext;\r\n};\r\n\r\nconst createGameLayout = () => {\r\n  const layout = getCanvas();\r\n  layout.fillStyle = \"black\";\r\n  layout.fillRect(0, 0, canvasHTML.width, canvasHTML.height);\r\n  createBall();\r\n  createLeftRacket();\r\n  createRightRacket();\r\n  computerMovement()\r\n};\r\n\r\nconst createBall = () => {\r\n  const ballElement = getCanvas();\r\n  ballElement.fillStyle = \"#fff\";\r\n  ballElement.beginPath();\r\n  ballElement.arc(ballX, ballY, 10, 0, Math.PI * 2, true);\r\n  ballElement.fill();\r\n  ballMovement();\r\n};\r\n\r\nconst ballMovement = () => {\r\n  // Start Horizontal movement\r\n  ballX = ballX + speedX;\r\n\r\n  //Manage de right side actions if the ball hit the racket or goes outside de canvas\r\n  if (ballX > canvasHTML.width - racketWidth && ballY > racket2Y && ballY < racket2Y + racketHeight) {\r\n    speedX = -speedX;\r\n  }\r\n  if (ballX === canvasHTML.width) {\r\n    onPoint();\r\n    speedX = -speedX;\r\n  }\r\n  //Manage de left side actions if the ball hit the racket or goes outside de canvas\r\n  if (ballX === racketWidth && ballY > racket1Y && ballY < racket1Y + racketHeight) {\r\n    speedX = -speedX;\r\n  }\r\n  if (ballX === 0) {\r\n    onPoint();\r\n    speedX = -speedX;\r\n  }\r\n  // Ball Vertical movement\r\n  ballY = ballY + speedY;\r\n  if (ballY > canvasHTML.height - 10) {\r\n    speedY = -speedY;\r\n  }\r\n  if (ballY === 0) {\r\n    speedY = -speedY;\r\n  }\r\n};\r\n\r\nconst createLeftRacket = () => {\r\n  const leftRacket = getCanvas();\r\n  leftRacket.fillStyle = \"white\";\r\n  leftRacket.fillRect(0, racket1Y, racketWidth, racketHeight);\r\n};\r\n\r\nconst createRightRacket = () => {\r\n    const rightRacket = getCanvas();\r\n    rightRacket.fillStyle = \"white\";\r\n    rightRacket.fillRect( canvasHTML.width - racketWidth , racket2Y, racketWidth, racketHeight);\r\n  };\r\n\r\nconst mousePosition = (e) => {\r\n  let rect = canvasHTML.getBoundingClientRect();\r\n  let root = document;\r\n  let mouseX = e.clientX - rect.left - root.scrollingElement.clientLeft;\r\n  let mouseY = e.clientY - rect.top - root.scrollingElement.clientTop;\r\n\r\n  return {\r\n    x: mouseX,\r\n    y: mouseY,\r\n  };\r\n};\r\n\r\nconst computerMovement = () => {\r\n        let racket2Ymiddle = racket2Y + (racketHeight/ 2)\r\n        if(racket2Ymiddle < ballY){\r\n            racket2Y += Math.random()*17\r\n        }else{\r\n            racket2Y -= Math.random()*17\r\n        }\r\n  };\r\n\r\nconst onPoint = () => {\r\n  ballX = canvasHTML.width / 2;\r\n  ballY = canvasHTML.height / 2;\r\n};\r\n\r\nwindow.addEventListener(\"load\", () => {\r\n    let fps = 30;\r\n    \r\n    canvasHTML.addEventListener(\"mousemove\", (e) => {\r\n      let mousePos = mousePosition(e);\r\n      racket1Y = mousePos.y - racketHeight / 2;\r\n    });\r\n\r\n    if (true) {\r\n    setInterval(() => {\r\n      createGameLayout();\r\n    }, 1000 / fps);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://javascriptpong/./index.js?");

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