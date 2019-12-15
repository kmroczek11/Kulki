/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Algorithm.ts":
/*!**************************!*\
  !*** ./src/Algorithm.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions_1 = __webpack_require__(/*! ./Directions */ \"./src/Directions.ts\");\r\nvar Algorithm = /** @class */ (function () {\r\n    function Algorithm() {\r\n        var _this = this;\r\n        this.found = false;\r\n        this.calls = 0;\r\n        this.createPath = function (x, y, pathLength) {\r\n            _this.calls += 1;\r\n            console.log(\"Wywołanie nr: \", _this.calls);\r\n            console.log(\"X: \", x, \" Y: \", y, \" Długość: \", pathLength);\r\n            pathLength = pathLength + 1;\r\n            if (Main_1.board.metasX < Main_1.board.startsX && Main_1.board.metasY <= Main_1.board.startsY) {\r\n                //lewy górny\r\n                _this.directions.checkDirection(x, y, \"top\", pathLength);\r\n                _this.directions.checkDirection(x, y, \"left\", pathLength);\r\n            }\r\n            else if (Main_1.board.metasX >= Main_1.board.startsX && Main_1.board.metasY < Main_1.board.startsY) {\r\n                //lewy dolny\r\n                _this.directions.checkDirection(x, y, \"right\", pathLength);\r\n                _this.directions.checkDirection(x, y, \"top\", pathLength);\r\n            }\r\n            else if (Main_1.board.metasX < Main_1.board.startsX && Main_1.board.metasY >= Main_1.board.startsY) {\r\n                //prawy dolny\r\n                _this.directions.checkDirection(x, y, \"left\", pathLength);\r\n                _this.directions.checkDirection(x, y, \"bottom\", pathLength);\r\n            }\r\n            else if (Main_1.board.metasX >= Main_1.board.startsX && Main_1.board.metasY >= Main_1.board.startsY) {\r\n                //prawy górny\r\n                _this.directions.checkDirection(x, y, \"right\", pathLength);\r\n                _this.directions.checkDirection(x, y, \"bottom\", pathLength);\r\n            }\r\n            console.log(Main_1.board.B);\r\n            if (!_this.found && _this.calls < Math.pow(Main_1.board.width, 3)) {\r\n                for (var i = 0; i < Main_1.board.width; i++) {\r\n                    for (var j = 0; j < Main_1.board.height; j++) {\r\n                        if (Main_1.board.A[i][j] == pathLength) {\r\n                            _this.createPath(i, j, pathLength);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        console.log(\"Inicjalizacja klasy Algorithm\");\r\n        this.directions = new Directions_1.default();\r\n    }\r\n    return Algorithm;\r\n}());\r\nexports.default = Algorithm;\r\n\n\n//# sourceURL=webpack:///./src/Algorithm.ts?");

/***/ }),

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(color) {\r\n        var ball = document.createElement(\"div\");\r\n        ball.style.background = color;\r\n        ball.style.width = \"80px\";\r\n        ball.style.height = \"80px\";\r\n        ball.style.borderRadius = \"80px\";\r\n        ball.classList.add(color);\r\n        return ball;\r\n    }\r\n    return Ball;\r\n}());\r\nexports.default = Ball;\r\n\n\n//# sourceURL=webpack:///./src/Ball.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Algorithm_1 = __webpack_require__(/*! ./Algorithm */ \"./src/Algorithm.ts\");\r\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n        var _this = this;\r\n        this.width = 9;\r\n        this.height = 9;\r\n        this.status = \"S\";\r\n        this.colors = [\r\n            \"red\",\r\n            \"orange\",\r\n            \"yellow\",\r\n            \"green\",\r\n            \"blue\",\r\n            \"darkblue\",\r\n            \"violet\"\r\n        ];\r\n        this.selected = null;\r\n        this.initializeBoard = function () {\r\n            _this.A = [];\r\n            _this.B = [];\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tablicy A zerami\r\n                _this.A[i] = [];\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.A[i][j] = 0;\r\n                }\r\n            }\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tablicy B tablicami\r\n                _this.B[i] = [];\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n            _this.table = document.createElement(\"table\");\r\n            _this.table.classList.add(\"board\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tabeli wartościami z tablicy A\r\n                var tr = document.createElement(\"tr\");\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    var td = document.createElement(\"td\");\r\n                    td.classList.add(i + \"_\" + j);\r\n                    tr.appendChild(td);\r\n                }\r\n                _this.table.appendChild(tr);\r\n            }\r\n            document.body.appendChild(_this.table);\r\n            //this.refreshBoard()\r\n            // for (let i: number = 0; i < 3; i++) {\r\n            //     let randX: number = Math.floor((Math.random() * this.x) + 0);\r\n            //     let randY: number = Math.floor((Math.random() * this.y) + 0);\r\n            //     this.fillWithX(randX, randY)\r\n            // }\r\n            _this.disperseBall(0, 1);\r\n            _this.disperseBall(2, 1);\r\n            _this.disperseBall(2, 3);\r\n        };\r\n        this.refreshBoardA = function () {\r\n            console.log(\"Odświeżenie tablicy A\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    if (typeof _this.A[i][j] == \"number\")\r\n                        _this.A[i][j] = 0;\r\n                }\r\n            }\r\n        };\r\n        this.refreshBoardB = function () {\r\n            console.log(\"Odświeżenie tablicy B\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n        };\r\n        this.disperseBall = function (x, y) {\r\n            var color = _this.colors[Math.floor(Math.random() * 7 + 0)];\r\n            var ball = new Ball_1.default(color);\r\n            if (_this.A[x][y] == \"\") {\r\n                _this.A[x][y] = color;\r\n                var td = document.getElementsByClassName(x + \"_\" + y)[0];\r\n                td.appendChild(ball);\r\n            }\r\n            else\r\n                _this.disperseBall(x, y);\r\n            //this.refreshBoard()\r\n        };\r\n        this.addClicks = function () {\r\n            var tds = Array.from(document.getElementsByTagName(\"td\"));\r\n            tds.forEach(function (td) {\r\n                td.addEventListener(\"click\", function () {\r\n                    _this.addStartOrMeta(td.className);\r\n                });\r\n            });\r\n        };\r\n        this.addStartOrMeta = function (c) {\r\n            var x = parseInt(c.split(\"_\")[0]);\r\n            var y = parseInt(c.split(\"_\")[1]);\r\n            console.log(x, y);\r\n            if (_this.A[x][y] != 0) {\r\n                if (_this.status == \"S\") {\r\n                    // console.log(\"Pole z kulką i wybieranie\");\r\n                    // console.log(\"X i Y startu: \", x, y);\r\n                    _this.selected = (document.getElementsByClassName(x + \"_\" + y)[0].firstChild);\r\n                    _this.selectedColor = _this.selected.classList[0];\r\n                    _this.selected.style.width = \"120px\";\r\n                    _this.selected.style.height = \"120px\";\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                    _this.status = \"M\";\r\n                }\r\n                else {\r\n                    // console.log(\"Pole z kulką i zmiana wybranej\");\r\n                    // console.log(\"X i Y startu: \", x, y);\r\n                    _this.selected.style.width = \"80px\";\r\n                    _this.selected.style.height = \"80px\";\r\n                    _this.selected = (document.getElementsByClassName(x + \"_\" + y)[0].firstChild);\r\n                    _this.selectedColor = _this.selected.classList[0];\r\n                    _this.selected.style.width = \"120px\";\r\n                    _this.selected.style.height = \"120px\";\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                }\r\n            }\r\n            else {\r\n                if (_this.status == \"M\") {\r\n                    _this.metasX = x;\r\n                    _this.metasY = y;\r\n                    // console.log(\"X i Y mety: \", x, y);\r\n                    _this.A[x][y] = \"M\";\r\n                    _this.algorithm = new Algorithm_1.default();\r\n                    _this.algorithm.createPath(_this.startsX, _this.startsY, 0);\r\n                }\r\n            }\r\n        };\r\n        this.colorFields = function (fields, color) {\r\n            console.log(\"Zmiana koloru ścieżki na: \", color);\r\n            fields = fields.filter(function (field) { return field != \"\"; });\r\n            console.log(fields);\r\n            for (var i = 0; i < fields.length; i++) {\r\n                var td = document.getElementsByClassName(fields[i])[0];\r\n                td.style.backgroundColor = color;\r\n            }\r\n        };\r\n    }\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Directions.ts":
/*!***************************!*\
  !*** ./src/Directions.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions = /** @class */ (function () {\r\n    function Directions() {\r\n        var _this = this;\r\n        this.checkDirection = function (x, y, direction, pathLength) {\r\n            if (!Main_1.board.algorithm.found) {\r\n                var startingX = void 0;\r\n                var startingY = void 0;\r\n                switch (direction) {\r\n                    case \"left\":\r\n                        startingX = x - 1;\r\n                        startingY = y;\r\n                        if (startingX < 0)\r\n                            startingX = 0;\r\n                        break;\r\n                    case \"top\":\r\n                        startingX = x;\r\n                        startingY = y - 1;\r\n                        if (startingY < 0)\r\n                            startingY = 0;\r\n                        break;\r\n                    case \"right\":\r\n                        startingX = x + 1;\r\n                        startingY = y;\r\n                        if (startingX > Main_1.board.width - 1)\r\n                            startingX = Main_1.board.width - 1;\r\n                        break;\r\n                    case \"bottom\":\r\n                        startingX = x;\r\n                        startingY = y + 1;\r\n                        if (startingY > Main_1.board.height - 1)\r\n                            startingY = Main_1.board.height - 1;\r\n                        break;\r\n                }\r\n                if (Main_1.board.A[startingX][startingY] == 0) {\r\n                    Main_1.board.A[startingX][startingY] = pathLength;\r\n                    if ((Main_1.board.B[startingX][startingY][0] = \"\"))\r\n                        Main_1.board.B[startingX][startingY] = [];\r\n                    Main_1.board.B[startingX][startingY] = Main_1.board.B[startingX][startingY].concat(Main_1.board.B[x][y]);\r\n                    Main_1.board.B[startingX][startingY].push(x.toString() + \"_\" + y.toString());\r\n                }\r\n                else if (Main_1.board.A[startingX][startingY] == \"M\") {\r\n                    console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                    Main_1.board.algorithm.found = true;\r\n                    Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                    _this.restartBoards(x, y);\r\n                }\r\n            }\r\n        };\r\n        this.restartBoards = function (x, y) {\r\n            var start = (document.getElementsByClassName(Main_1.board.startsX + \"_\" + Main_1.board.startsY)[0]);\r\n            start.innerHTML = \"\";\r\n            Main_1.board.A[Main_1.board.startsX][Main_1.board.startsY] = 0;\r\n            Main_1.board.A[Main_1.board.metasX][Main_1.board.metasY] = 0;\r\n            Main_1.board.A[x][y] = Main_1.board.selectedColor;\r\n            var finish = document.getElementsByClassName(x + \"_\" + y)[0];\r\n            finish.appendChild(Main_1.board.selected);\r\n            Main_1.board.selected.style.width = \"80px\";\r\n            Main_1.board.selected.style.height = \"80px\";\r\n            Main_1.board.selected = null;\r\n            Main_1.board.status = \"S\";\r\n            Main_1.board.colorFields(Main_1.board.B[x][y], \"pink\");\r\n            setTimeout(function () {\r\n                Main_1.board.colorFields(Main_1.board.B[x][y], \"white\");\r\n                Main_1.board.refreshBoardB();\r\n            }, 2000);\r\n            Main_1.board.refreshBoardA();\r\n            console.log(\"Tablica A: \", Main_1.board.A);\r\n        };\r\n        console.log(\"Inicjalizacja klasy Directions\");\r\n    }\r\n    return Directions;\r\n}());\r\nexports.default = Directions;\r\n\n\n//# sourceURL=webpack:///./src/Directions.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        exports.board = new Board_1.default();\r\n        exports.board.initializeBoard();\r\n        exports.board.addClicks();\r\n    }\r\n    return Main;\r\n}());\r\ndocument.addEventListener(\"DOMContentLoaded\", function () { var main = new Main(); });\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ })

/******/ });