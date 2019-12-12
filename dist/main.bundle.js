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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions_1 = __webpack_require__(/*! ./Directions */ \"./src/Directions.ts\");\r\nvar Algorithm = /** @class */ (function () {\r\n    function Algorithm(x, y) {\r\n        var _this = this;\r\n        this.found = false;\r\n        this.calls = 0;\r\n        this.colorFields = function (fields) {\r\n            fields = fields.filter(function (field) { return field != \"\"; });\r\n            console.log(\"Pola: \", fields);\r\n            for (var i = 0; i < fields.length; i++) {\r\n                console.log(\"Pole: \", fields[i]);\r\n                var td = document.getElementsByClassName(fields[i])[0];\r\n                td.style.backgroundColor = \"pink\";\r\n            }\r\n        };\r\n        this.createPath = function (x, y, pathLength) {\r\n            _this.calls += 1;\r\n            console.log(\"Wywołanie nr: \", _this.calls);\r\n            console.log(\"X: \", x, \" Y: \", y, \" Długość: \", pathLength);\r\n            pathLength = pathLength + 1;\r\n            var startingX = x - 1;\r\n            var finishingX = x + 1;\r\n            var startingY = y - 1;\r\n            var finishingY = y + 1;\r\n            console.log(startingX, finishingX, startingY, finishingY);\r\n            if (startingX < 0)\r\n                startingX = 0;\r\n            if (finishingX > Main_1.board.x - 1)\r\n                finishingX = Main_1.board.x - 1;\r\n            if (startingY < 0)\r\n                startingY = 0;\r\n            if (finishingY > Main_1.board.y - 1)\r\n                finishingY = Main_1.board.y - 1;\r\n            console.log(\"Pary punktów: (\", startingX, \",\", y, \"), (\", x, \",\", startingY, \"), (\", finishingX, \",\", y, \"), (\", x, \",\", finishingY, \")\");\r\n            // if (board.A[startingX][y] == 0) {//punkt na lewo od zaznaczonego\r\n            //     board.A[startingX][y] = pathLength\r\n            //     if (board.B[startingX][y][0] = \"\")\r\n            //         board.B[startingX][y] = []\r\n            //     board.B[startingX][y] = board.B[startingX][y].concat(board.B[x][y])\r\n            //     board.B[startingX][y].push(x.toString() + \"_\" + y.toString())\r\n            // } else if (board.A[startingX][y] == \"M\") {\r\n            //     console.log(\"Najkrótsza ścieżka:\", pathLength)\r\n            //     this.found = true\r\n            //     board.B[x][y].push(x.toString() + \"_\" + y.toString())\r\n            //     this.colorFields(board.B[x][y])\r\n            // }\r\n            // if (board.A[x][startingY] == 0) {//punkt u góry zaznaczonego\r\n            //     board.A[x][startingY] = pathLength\r\n            //     if (board.B[x][startingY][0] = \"\")\r\n            //         board.B[x][startingY] = []\r\n            //     board.B[x][startingY] = board.B[x][startingY].concat(board.B[x][y])\r\n            //     board.B[x][startingY].push(x.toString() + \"_\" + y.toString())\r\n            // } else if (board.A[x][startingY] == \"M\") {\r\n            //     console.log(\"Najkrótsza ścieżka:\", pathLength)\r\n            //     this.found = true\r\n            //     board.B[x][y].push(x.toString() + \"_\" + y.toString())\r\n            //     this.colorFields(board.B[x][y])\r\n            // }\r\n            // if (board.A[finishingX][y] == 0) { //punkt na prawo od zaznaczonego\r\n            //     board.A[finishingX][y] = pathLength\r\n            //     if (board.B[finishingX][y][0] = \"\")\r\n            //         board.B[finishingX][y] = []\r\n            //     board.B[finishingX][y] = board.B[finishingX][y].concat(board.B[x][y])\r\n            //     board.B[finishingX][y].push(x.toString() + \"_\" + y.toString())\r\n            // } else if (board.A[finishingX][y] == \"M\") {\r\n            //     console.log(\"Najkrótsza ścieżka:\", pathLength)\r\n            //     this.found = true\r\n            //     board.B[x][y].push(x.toString() + \"_\" + y.toString())\r\n            //     this.colorFields(board.B[x][y])\r\n            // }\r\n            // if (board.A[x][finishingY] == 0) { //punkt u dołu od zaznaczonego\r\n            //     board.A[x][finishingY] = pathLength\r\n            //     if (board.B[x][finishingY][0] = \"\")\r\n            //         board.B[x][finishingY] = []\r\n            //     board.B[x][finishingY] = board.B[x][finishingY].concat(board.B[x][y])\r\n            //     board.B[x][finishingY].push(x.toString() + \"_\" + y.toString())\r\n            // } else if (board.A[x][finishingY] == \"M\") {\r\n            //     console.log(\"Najkrótsza ścieżka:\", pathLength)\r\n            //     this.found = true\r\n            //     board.B[x][y].push(x.toString() + \"_\" + y.toString())\r\n            //     this.colorFields(board.B[x][y])\r\n            // }\r\n            _this.directions.checkLeftDirection(x, y, pathLength);\r\n            _this.directions.checkTopDirection(x, y, pathLength);\r\n            _this.directions.checkRightDirection(x, y, pathLength);\r\n            _this.directions.checkBottomDirection(x, y, pathLength);\r\n            console.log(Main_1.board.B);\r\n            if (!_this.found) {\r\n                for (var i = 0; i < Main_1.board.x; i++) {\r\n                    for (var j = 0; j < Main_1.board.y; j++) {\r\n                        if (Main_1.board.A[i][j] == pathLength) {\r\n                            _this.createPath(i, j, pathLength);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            Main_1.board.refreshBoard();\r\n        };\r\n        console.log(\"Inicjalizacja klasy Algorithm\");\r\n        this.directions = new Directions_1.default();\r\n        this.createPath(x, y, 0);\r\n    }\r\n    return Algorithm;\r\n}());\r\nexports.default = Algorithm;\r\n\n\n//# sourceURL=webpack:///./src/Algorithm.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Algorithm_1 = __webpack_require__(/*! ./Algorithm */ \"./src/Algorithm.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n        var _this = this;\r\n        this.x = 10;\r\n        this.y = 10;\r\n        this.status = \"S\";\r\n        this.initializeBoard = function () {\r\n            _this.A = [];\r\n            _this.B = [];\r\n            for (var i = 0; i < _this.x; i++) { //wypełnienie tablicy A zerami\r\n                _this.A[i] = [];\r\n                for (var j = 0; j < _this.y; j++) {\r\n                    _this.A[i][j] = 0;\r\n                }\r\n            }\r\n            for (var i = 0; i < _this.x; i++) { //wypełnienie tablicy B tablicami\r\n                _this.B[i] = [];\r\n                for (var j = 0; j < _this.y; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n            _this.table = document.createElement(\"table\");\r\n            _this.table.classList.add(\"board\");\r\n            for (var i = 0; i < _this.x; i++) { //wypełnienie tabeli wartościami z tablicy A\r\n                var tr = document.createElement(\"tr\");\r\n                for (var j = 0; j < _this.y; j++) {\r\n                    var td = document.createElement(\"td\");\r\n                    td.classList.add(i + \"_\" + j);\r\n                    tr.appendChild(td);\r\n                }\r\n                _this.table.appendChild(tr);\r\n            }\r\n            document.body.appendChild(_this.table);\r\n            // for (var i: number = 0; i < x; i++) {//wypisanie tablicy A\r\n            //     for (var j: number = 0; j < y; j++) {\r\n            //         console.log(this.A[i][j])\r\n            //     }\r\n            // }\r\n            _this.refreshBoard();\r\n            // for (let i: number = 0; i < 3; i++) {\r\n            //     let randX: number = Math.floor((Math.random() * this.x) + 0);\r\n            //     let randY: number = Math.floor((Math.random() * this.y) + 0);\r\n            //     this.fillWithX(randX, randY)\r\n            // }\r\n            _this.fillWithX(0, 1);\r\n            _this.fillWithX(2, 1);\r\n            _this.fillWithX(2, 3);\r\n            _this.addClicks();\r\n        };\r\n        this.refreshBoard = function () {\r\n            console.log(\"Odświeżenie tablicy A\");\r\n            var _loop_1 = function (i) {\r\n                var _loop_2 = function (j) {\r\n                    var tds = Array.from(document.getElementsByClassName(i + \"_\" + j));\r\n                    tds.forEach(function (td) {\r\n                        td.innerHTML = String(_this.A[i][j]);\r\n                    });\r\n                };\r\n                for (var j = 0; j < _this.y; j++) {\r\n                    _loop_2(j);\r\n                }\r\n            };\r\n            for (var i = 0; i < _this.x; i++) {\r\n                _loop_1(i);\r\n            }\r\n        };\r\n        this.fillWithX = function (x, y) {\r\n            if (_this.A[x][y] != \"X\")\r\n                _this.A[x][y] = \"X\";\r\n            else\r\n                _this.fillWithX(x, y);\r\n            _this.refreshBoard();\r\n        };\r\n        this.addClicks = function () {\r\n            var tds = Array.from(document.getElementsByTagName(\"td\"));\r\n            tds.forEach(function (td) {\r\n                td.addEventListener(\"click\", function () { _this.addStartOrMeta(td.className); });\r\n            });\r\n        };\r\n        this.addStartOrMeta = function (c) {\r\n            var x = parseInt(c.split(\"_\")[0]);\r\n            var y = parseInt(c.split(\"_\")[1]);\r\n            if (_this.A[x][y] == 0) {\r\n                _this.A[x][y] = _this.status;\r\n                _this.refreshBoard();\r\n                if (_this.status == \"S\") {\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                    _this.status = \"M\";\r\n                }\r\n                else {\r\n                    _this.algorithm = new Algorithm_1.default(_this.startsX, _this.startsY);\r\n                }\r\n            }\r\n        };\r\n        this.initializeBoard();\r\n    }\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Directions.ts":
/*!***************************!*\
  !*** ./src/Directions.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions = /** @class */ (function () {\r\n    function Directions() {\r\n        this.checkLeftDirection = function (x, y, pathLength) {\r\n            var startingX = x - 1;\r\n            if (startingX < 0)\r\n                startingX = 0;\r\n            if (Main_1.board.A[startingX][y] == 0) { //punkt na lewo od zaznaczonego\r\n                Main_1.board.A[startingX][y] = pathLength;\r\n                if (Main_1.board.B[startingX][y][0] = \"\")\r\n                    Main_1.board.B[startingX][y] = [];\r\n                Main_1.board.B[startingX][y] = Main_1.board.B[startingX][y].concat(Main_1.board.B[x][y]);\r\n                Main_1.board.B[startingX][y].push(x.toString() + \"_\" + y.toString());\r\n            }\r\n            else if (Main_1.board.A[startingX][y] == \"M\") {\r\n                console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                Main_1.board.algorithm.found = true;\r\n                Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                Main_1.board.algorithm.colorFields(Main_1.board.B[x][y]);\r\n            }\r\n        };\r\n        this.checkTopDirection = function (x, y, pathLength) {\r\n            var startingY = y - 1;\r\n            if (startingY < 0)\r\n                startingY = 0;\r\n            if (Main_1.board.A[x][startingY] == 0) { //punkt u góry zaznaczonego\r\n                Main_1.board.A[x][startingY] = pathLength;\r\n                if (Main_1.board.B[x][startingY][0] = \"\")\r\n                    Main_1.board.B[x][startingY] = [];\r\n                Main_1.board.B[x][startingY] = Main_1.board.B[x][startingY].concat(Main_1.board.B[x][y]);\r\n                Main_1.board.B[x][startingY].push(x.toString() + \"_\" + y.toString());\r\n            }\r\n            else if (Main_1.board.A[x][startingY] == \"M\") {\r\n                console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                Main_1.board.algorithm.found = true;\r\n                Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                Main_1.board.algorithm.colorFields(Main_1.board.B[x][y]);\r\n            }\r\n        };\r\n        this.checkRightDirection = function (x, y, pathLength) {\r\n            var finishingX = x + 1;\r\n            if (finishingX > Main_1.board.x - 1)\r\n                finishingX = Main_1.board.x - 1;\r\n            if (Main_1.board.A[finishingX][y] == 0) { //punkt na prawo od zaznaczonego\r\n                Main_1.board.A[finishingX][y] = pathLength;\r\n                if (Main_1.board.B[finishingX][y][0] = \"\")\r\n                    Main_1.board.B[finishingX][y] = [];\r\n                Main_1.board.B[finishingX][y] = Main_1.board.B[finishingX][y].concat(Main_1.board.B[x][y]);\r\n                Main_1.board.B[finishingX][y].push(x.toString() + \"_\" + y.toString());\r\n            }\r\n            else if (Main_1.board.A[finishingX][y] == \"M\") {\r\n                console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                Main_1.board.algorithm.found = true;\r\n                Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                Main_1.board.algorithm.colorFields(Main_1.board.B[x][y]);\r\n            }\r\n        };\r\n        this.checkBottomDirection = function (x, y, pathLength) {\r\n            var finishingY = y + 1;\r\n            if (finishingY > Main_1.board.y - 1)\r\n                finishingY = Main_1.board.y - 1;\r\n            if (Main_1.board.A[x][finishingY] == 0) { //punkt u dołu od zaznaczonego\r\n                Main_1.board.A[x][finishingY] = pathLength;\r\n                if (Main_1.board.B[x][finishingY][0] = \"\")\r\n                    Main_1.board.B[x][finishingY] = [];\r\n                Main_1.board.B[x][finishingY] = Main_1.board.B[x][finishingY].concat(Main_1.board.B[x][y]);\r\n                Main_1.board.B[x][finishingY].push(x.toString() + \"_\" + y.toString());\r\n            }\r\n            else if (Main_1.board.A[x][finishingY] == \"M\") {\r\n                console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                Main_1.board.algorithm.found = true;\r\n                Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                Main_1.board.algorithm.colorFields(Main_1.board.B[x][y]);\r\n            }\r\n        };\r\n        console.log(\"Inicjalizacja klasy Directions\");\r\n        console.log(Main_1.board);\r\n    }\r\n    return Directions;\r\n}());\r\nexports.default = Directions;\r\n\n\n//# sourceURL=webpack:///./src/Directions.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        exports.board = new Board_1.default();\r\n    }\r\n    return Main;\r\n}());\r\ndocument.addEventListener(\"DOMContentLoaded\", function () { var main = new Main(); });\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ })

/******/ });