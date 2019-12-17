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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Directions_1 = __webpack_require__(/*! ./Directions */ \"./src/Directions.ts\");\r\nvar Algorithm = /** @class */ (function () {\r\n    function Algorithm() {\r\n        var _this = this;\r\n        this.found = false;\r\n        this.calls = 0;\r\n        this.createPath = function (x, y, pathLength) {\r\n            pathLength = pathLength + 1;\r\n            var f = [];\r\n            f.push([\r\n                _this.directions.checkDirection(x, y, \"top\", pathLength),\r\n                _this.directions.checkDirection(x, y, \"left\", pathLength),\r\n                _this.directions.checkDirection(x, y, \"right\", pathLength),\r\n                _this.directions.checkDirection(x, y, \"bottom\", pathLength)\r\n            ]);\r\n            do {\r\n                _this.calls += 1;\r\n                //console.log(\"Wywołanie nr: \", this.calls);\r\n                var functionFlatArray = [];\r\n                f.forEach(function (arrOfFunc) { return functionFlatArray = functionFlatArray.concat(arrOfFunc); });\r\n                var f2 = [];\r\n                functionFlatArray.forEach(function (func) {\r\n                    if (func != undefined) {\r\n                        f2.push(func());\r\n                    }\r\n                });\r\n                f = f2;\r\n            } while (f.length > 0);\r\n        };\r\n        console.log(\"Inicjalizacja klasy Algorithm\");\r\n        this.directions = new Directions_1.default();\r\n    }\r\n    return Algorithm;\r\n}());\r\nexports.default = Algorithm;\r\n\n\n//# sourceURL=webpack:///./src/Algorithm.ts?");

/***/ }),

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(color) {\r\n        var ball = document.createElement(\"div\");\r\n        ball.style.background = color;\r\n        ball.style.width = \"40px\";\r\n        ball.style.height = \"40px\";\r\n        ball.style.borderRadius = \"80px\";\r\n        ball.classList.add(color);\r\n        return ball;\r\n    }\r\n    return Ball;\r\n}());\r\nexports.default = Ball;\r\n\n\n//# sourceURL=webpack:///./src/Ball.ts?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Algorithm_1 = __webpack_require__(/*! ./Algorithm */ \"./src/Algorithm.ts\");\r\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n        var _this = this;\r\n        this.width = 9;\r\n        this.height = 9;\r\n        this.status = \"S\";\r\n        this.colors = [\r\n            \"red\",\r\n            \"orange\",\r\n            \"yellow\",\r\n            \"green\",\r\n            \"blue\",\r\n            \"darkblue\",\r\n            \"violet\"\r\n        ];\r\n        this.selected = null;\r\n        this.initialValue = this.width * this.height;\r\n        this.points = 0;\r\n        this.ballsAmount = 3;\r\n        this.scoreBoard = null;\r\n        this.initializeBoard = function () {\r\n            _this.A = [];\r\n            _this.B = [];\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tablicy A zerami\r\n                _this.A[i] = [];\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.A[i][j] = _this.initialValue;\r\n                }\r\n            }\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tablicy B tablicami\r\n                _this.B[i] = [];\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n            _this.table = document.createElement(\"table\");\r\n            _this.table.classList.add(\"board\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tabeli wartościami z tablicy A\r\n                var tr = document.createElement(\"tr\");\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    var td = document.createElement(\"td\");\r\n                    td.classList.add(i + \"_\" + j);\r\n                    tr.appendChild(td);\r\n                }\r\n                _this.table.appendChild(tr);\r\n            }\r\n            document.body.appendChild(_this.table);\r\n            _this.disperseBalls();\r\n        };\r\n        this.refreshBoardA = function () {\r\n            //console.log(\"Odświeżenie tablicy A\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    if (typeof _this.A[i][j] == \"number\")\r\n                        _this.A[i][j] = _this.initialValue;\r\n                }\r\n            }\r\n        };\r\n        this.refreshBoardB = function () {\r\n            //console.log(\"Odświeżenie tablicy B\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n        };\r\n        this.disperseBalls = function () {\r\n            var howMany = 0;\r\n            while (howMany < _this.ballsAmount) {\r\n                //let color: string = this.colors[Math.floor(Math.random() * 7 + 0)];\r\n                var color = \"red\";\r\n                var ball = new Ball_1.default(color);\r\n                var x = Math.floor((Math.random() * _this.width) + 0);\r\n                var y = Math.floor((Math.random() * _this.height) + 0);\r\n                if (_this.A[x][y] == _this.initialValue) {\r\n                    _this.A[x][y] = color;\r\n                    var td = document.getElementsByClassName(x + \"_\" + y)[0];\r\n                    td.appendChild(ball);\r\n                    howMany++;\r\n                }\r\n            }\r\n        };\r\n        this.addClicks = function () {\r\n            var tds = Array.from(document.getElementsByTagName(\"td\"));\r\n            tds.forEach(function (td) {\r\n                td.addEventListener(\"click\", function () {\r\n                    _this.addStartOrMeta(td.className);\r\n                });\r\n            });\r\n        };\r\n        this.getBoardCell = function (cl, boardName) {\r\n            var board = (document.getElementsByClassName(boardName)[0]);\r\n            var tds = board.getElementsByTagName(\"td\");\r\n            for (var i = 0; i < tds.length; i++) {\r\n                if (tds[i].className == cl) {\r\n                    return tds[i];\r\n                }\r\n            }\r\n        };\r\n        this.removeBallsFromCells = function (cells) {\r\n            for (var i = 0; i < cells.length; i++) {\r\n                var td = _this.getBoardCell(cells[i], \"board\");\r\n                td.innerHTML = \"\";\r\n            }\r\n        };\r\n        this.createHelpBoard = function () {\r\n            _this.helpTable = document.createElement(\"table\");\r\n            _this.helpTable.classList.add(\"helpBoard\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                var tr = document.createElement(\"tr\");\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    var td = document.createElement(\"td\");\r\n                    td.classList.add(i + \"_\" + j);\r\n                    tr.appendChild(td);\r\n                }\r\n                _this.helpTable.appendChild(tr);\r\n            }\r\n            document.body.appendChild(_this.helpTable);\r\n        };\r\n        this.refreshHelpBoard = function () {\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.getBoardCell(i + \"_\" + j, \"helpBoard\").innerHTML = _this.A[i][j].toString();\r\n                }\r\n            }\r\n        };\r\n        this.createScoreboard = function () {\r\n            _this.scoreBoard = document.createElement(\"div\");\r\n            _this.scoreBoard.classList.add(\"scoreboard\");\r\n            _this.scoreBoard.innerHTML = _this.points.toString();\r\n            document.body.appendChild(_this.scoreBoard);\r\n        };\r\n        this.addStartOrMeta = function (c) {\r\n            var x = parseInt(c.split(\"_\")[0]);\r\n            var y = parseInt(c.split(\"_\")[1]);\r\n            //console.log(x, y);\r\n            if (_this.A[x][y] != _this.initialValue) {\r\n                if (_this.status == \"S\") {\r\n                    // console.log(\"Pole z kulką i wybieranie\");\r\n                    // console.log(\"X i Y startu: \", x, y);\r\n                    _this.selected = (_this.getBoardCell(x + \"_\" + y, \"board\").firstChild);\r\n                    console.log(\"Wybrana kulka: \", _this.selected);\r\n                    _this.selectedColor = _this.selected.classList[0];\r\n                    _this.selected.style.width = \"60px\";\r\n                    _this.selected.style.height = \"60px\";\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                    _this.status = \"M\";\r\n                }\r\n                else {\r\n                    // console.log(\"Pole z kulką i zmiana wybranej\");\r\n                    // console.log(\"X i Y startu: \", x, y);\r\n                    _this.selected.style.width = \"40px\";\r\n                    _this.selected.style.height = \"40px\";\r\n                    _this.selected = (_this.getBoardCell(x + \"_\" + y, \"board\").firstChild);\r\n                    _this.selectedColor = _this.selected.classList[0];\r\n                    _this.selected.style.width = \"60px\";\r\n                    _this.selected.style.height = \"60px\";\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                }\r\n            }\r\n            else {\r\n                if (_this.status == \"M\") {\r\n                    _this.metasX = x;\r\n                    _this.metasY = y;\r\n                    _this.A[x][y] = \"M\";\r\n                    _this.algorithm = new Algorithm_1.default();\r\n                    _this.algorithm.createPath(_this.startsX, _this.startsY, 0);\r\n                }\r\n            }\r\n            _this.refreshHelpBoard();\r\n        };\r\n        this.colorFields = function (fields, color) {\r\n            console.log(\"Zmiana koloru ścieżki na: \", color);\r\n            fields = fields.filter(function (field) { return field != \"\"; });\r\n            //console.log(fields)\r\n            for (var i = 0; i < fields.length; i++) {\r\n                var td = _this.getBoardCell(fields[i], \"board\");\r\n                td.style.backgroundColor = color;\r\n            }\r\n        };\r\n    }\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Directions.ts":
/*!***************************!*\
  !*** ./src/Directions.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions = /** @class */ (function () {\r\n    function Directions() {\r\n        var _this = this;\r\n        this.inRow = 5;\r\n        this.checkDirection = function (x, y, direction, pathLength) {\r\n            if (!Main_1.board.algorithm.found) {\r\n                var startingX_1;\r\n                var startingY_1;\r\n                switch (direction) {\r\n                    case \"left\":\r\n                        startingX_1 = x - 1;\r\n                        startingY_1 = y;\r\n                        if (startingX_1 < 0)\r\n                            return;\r\n                        break;\r\n                    case \"top\":\r\n                        startingX_1 = x;\r\n                        startingY_1 = y - 1;\r\n                        if (startingY_1 < 0)\r\n                            return;\r\n                        break;\r\n                    case \"right\":\r\n                        startingX_1 = x + 1;\r\n                        startingY_1 = y;\r\n                        if (startingX_1 > Main_1.board.width - 1)\r\n                            return;\r\n                        break;\r\n                    case \"bottom\":\r\n                        startingX_1 = x;\r\n                        startingY_1 = y + 1;\r\n                        if (startingY_1 > Main_1.board.height - 1)\r\n                            return;\r\n                        break;\r\n                }\r\n                if (Main_1.board.A[startingX_1][startingY_1] == \"M\") {\r\n                    console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                    Main_1.board.algorithm.found = true;\r\n                    Main_1.board.B[x][y].push(startingX_1.toString() + \"_\" + startingY_1.toString());\r\n                    Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                    _this.restartBoards(x, y, startingX_1, startingY_1);\r\n                }\r\n                // else if (board.colors.includes(board.A[startingX][startingY] as string)) {\r\n                //   // console.log(\"kulka!\", x, y, direction, board.A[startingX][startingY])\r\n                // }\r\n                else if (Main_1.board.A[startingX_1][startingY_1] > pathLength) {\r\n                    Main_1.board.A[startingX_1][startingY_1] = pathLength;\r\n                    Main_1.board.B[startingX_1][startingY_1] = Main_1.board.B[startingX_1][startingY_1].concat(Main_1.board.B[x][y]);\r\n                    Main_1.board.B[startingX_1][startingY_1].push(x.toString() + \"_\" + y.toString());\r\n                    return function () {\r\n                        var f = [];\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"top\", pathLength + 1));\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"left\", pathLength + 1));\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"right\", pathLength + 1));\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"bottom\", pathLength + 1));\r\n                        return f;\r\n                    };\r\n                }\r\n            }\r\n            Main_1.board.refreshHelpBoard();\r\n        };\r\n        this.restartBoards = function (x, y, startingX, startingY) {\r\n            console.log(\"Tablica A: \", Main_1.board.A);\r\n            console.log(\"Tablica B:\", Main_1.board.B);\r\n            var start = (document.getElementsByClassName(Main_1.board.startsX + \"_\" + Main_1.board.startsY)[0]);\r\n            start.innerHTML = \"\";\r\n            Main_1.board.A[Main_1.board.startsX][Main_1.board.startsY] = 0;\r\n            Main_1.board.A[Main_1.board.metasX][Main_1.board.metasY] = 0;\r\n            Main_1.board.A[startingX][startingY] = Main_1.board.selectedColor;\r\n            var finish = document.getElementsByClassName(startingX + \"_\" + startingY)[0];\r\n            finish.appendChild(Main_1.board.selected);\r\n            Main_1.board.selected.style.width = \"40px\";\r\n            Main_1.board.selected.style.height = \"40px\";\r\n            Main_1.board.selected = null;\r\n            Main_1.board.status = \"S\";\r\n            Main_1.board.algorithm.found = false;\r\n            Main_1.board.colorFields(Main_1.board.B[x][y], \"pink\");\r\n            Main_1.board.disperseBalls();\r\n            _this.checkHorizontalRow(startingX, startingY);\r\n            setTimeout(function () {\r\n                Main_1.board.colorFields(Main_1.board.B[x][y], \"white\");\r\n                Main_1.board.refreshBoardA();\r\n                Main_1.board.refreshHelpBoard();\r\n                Main_1.board.refreshBoardB();\r\n            }, 1000);\r\n        };\r\n        this.checkHorizontalRow = function (x, y) {\r\n            var balls = [];\r\n            var allX = [];\r\n            var sum = 0;\r\n            var start = x - _this.inRow;\r\n            var finish = x + _this.inRow;\r\n            if (start < 0)\r\n                start = 0;\r\n            if (finish > Main_1.board.width)\r\n                finish = Main_1.board.width;\r\n            for (var i = start; i < finish; i++) {\r\n                console.log(i, \" \", y);\r\n                if (Main_1.board.A[i][y] == Main_1.board.selectedColor) {\r\n                    balls.push(i + \"_\" + y);\r\n                    allX.push(i);\r\n                    sum++;\r\n                }\r\n            }\r\n            if (sum == 5) {\r\n                Main_1.board.removeBallsFromCells(balls);\r\n                for (var i = 0; i < allX.length; i++) {\r\n                    Main_1.board.A[allX[i]][y] = Main_1.board.initialValue;\r\n                }\r\n                Main_1.board.refreshHelpBoard();\r\n                Main_1.board.points += sum;\r\n            }\r\n            _this.checkVerticalRow(x, y);\r\n        };\r\n        this.checkVerticalRow = function (x, y) {\r\n            var balls = [];\r\n            var allY = [];\r\n            var sum = 0;\r\n            var start = y - _this.inRow;\r\n            var finish = y + _this.inRow;\r\n            if (start < 0)\r\n                start = 0;\r\n            if (finish > Main_1.board.height)\r\n                finish = Main_1.board.height;\r\n            for (var i = start; i < finish; i++) {\r\n                console.log(x, \" \", i);\r\n                if (Main_1.board.A[x][i] == Main_1.board.selectedColor) {\r\n                    balls.push(x + \"_\" + i);\r\n                    allY.push(i);\r\n                    sum++;\r\n                }\r\n            }\r\n            if (sum == 5) {\r\n                Main_1.board.removeBallsFromCells(balls);\r\n                for (var i = 0; i < allY.length; i++) {\r\n                    Main_1.board.A[x][allY[i]] = Main_1.board.initialValue;\r\n                }\r\n                Main_1.board.refreshHelpBoard();\r\n                Main_1.board.points += sum;\r\n            }\r\n            Main_1.board.scoreBoard.innerHTML = Main_1.board.points.toString();\r\n        };\r\n        console.log(\"Inicjalizacja klasy Directions\");\r\n    }\r\n    return Directions;\r\n}());\r\nexports.default = Directions;\r\n\n\n//# sourceURL=webpack:///./src/Directions.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        exports.board = new Board_1.default();\r\n        exports.board.initializeBoard();\r\n        exports.board.createHelpBoard();\r\n        exports.board.refreshHelpBoard();\r\n        exports.board.createScoreboard();\r\n        exports.board.addClicks();\r\n    }\r\n    return Main;\r\n}());\r\ndocument.addEventListener(\"DOMContentLoaded\", function () { var main = new Main(); });\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ })

/******/ });