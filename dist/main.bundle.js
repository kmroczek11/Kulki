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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions_1 = __webpack_require__(/*! ./Directions */ \"./src/Directions.ts\");\r\nvar Algorithm = /** @class */ (function () {\r\n    function Algorithm() {\r\n        var _this = this;\r\n        this.found = false;\r\n        this.calls = 0;\r\n        this.createPath = function (x, y, pathLength) {\r\n            _this.found = false;\r\n            pathLength = pathLength + 1;\r\n            var f = [];\r\n            f.push([\r\n                _this.directions.checkDirection(x, y, \"top\", pathLength),\r\n                _this.directions.checkDirection(x, y, \"left\", pathLength),\r\n                _this.directions.checkDirection(x, y, \"right\", pathLength),\r\n                _this.directions.checkDirection(x, y, \"bottom\", pathLength)\r\n            ]);\r\n            do {\r\n                _this.calls += 1;\r\n                //console.log(\"Wywołanie nr: \", this.calls);\r\n                var functionFlatArray = [];\r\n                f.forEach(function (arrOfFunc) { return functionFlatArray = functionFlatArray.concat(arrOfFunc); });\r\n                var f2 = [];\r\n                functionFlatArray.forEach(function (func) {\r\n                    if (func != undefined) {\r\n                        f2.push(func());\r\n                    }\r\n                });\r\n                f = f2;\r\n            } while (f.length > 0);\r\n            if (!_this.found) {\r\n                console.log(\"Brak dojścia\");\r\n                Main_1.board.moveBall = false;\r\n            }\r\n        };\r\n        console.log(\"Inicjalizacja klasy Algorithm\");\r\n        this.directions = new Directions_1.default();\r\n    }\r\n    return Algorithm;\r\n}());\r\nexports.default = Algorithm;\r\n\n\n//# sourceURL=webpack:///./src/Algorithm.ts?");

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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Algorithm_1 = __webpack_require__(/*! ./Algorithm */ \"./src/Algorithm.ts\");\r\nvar Ball_1 = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n        var _this = this;\r\n        this.width = 9;\r\n        this.height = 9;\r\n        this.status = \"S\";\r\n        this.algorithm = new Algorithm_1.default();\r\n        this.colors = [\r\n            \"red\",\r\n            \"orange\",\r\n            \"yellow\",\r\n        ];\r\n        this.selected = null;\r\n        this.initialValue = this.width * this.height;\r\n        this.points = 0;\r\n        this.ballsAmount = 3;\r\n        this.scoreBoard = null;\r\n        this.upcomingColors = [];\r\n        this.allFields = [];\r\n        this.calls = 0;\r\n        this.trackToField = \"\";\r\n        this.selectedFieldBefore = \"\";\r\n        this.moveBall = false;\r\n        this.initializeBoard = function () {\r\n            _this.A = [];\r\n            _this.B = [];\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tablicy A zerami\r\n                _this.A[i] = [];\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.A[i][j] = _this.initialValue;\r\n                }\r\n            }\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tablicy B tablicami\r\n                _this.B[i] = [];\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n            _this.table = document.createElement(\"table\");\r\n            _this.table.classList.add(\"board\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                //wypełnienie tabeli wartościami z tablicy A\r\n                var tr = document.createElement(\"tr\");\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    var td = document.createElement(\"td\");\r\n                    td.classList.add(i + \"_\" + j);\r\n                    tr.appendChild(td);\r\n                }\r\n                _this.table.appendChild(tr);\r\n            }\r\n            document.body.appendChild(_this.table);\r\n            _this.getRandomColors();\r\n            _this.disperseBalls(_this.upcomingColors);\r\n        };\r\n        this.getRandomColors = function () {\r\n            _this.upcomingColors = [];\r\n            for (var i = 0; i < _this.ballsAmount; i++) {\r\n                _this.upcomingColors.push(_this.colors[Math.floor(Math.random() * _this.colors.length + 0)]);\r\n            }\r\n            //console.log(this.upcomingColors)\r\n        };\r\n        this.refreshBoardA = function () {\r\n            //console.log(\"Odświeżenie tablicy A\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    if (typeof _this.A[i][j] == \"number\")\r\n                        _this.A[i][j] = _this.initialValue;\r\n                }\r\n            }\r\n        };\r\n        this.refreshBoardB = function () {\r\n            //console.log(\"Odświeżenie tablicy B\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.B[i][j] = [\"\"];\r\n                }\r\n            }\r\n            //console.log(\"Tablica B po odświeżeniu: \", this.B)\r\n        };\r\n        this.disperseBalls = function (colors) {\r\n            _this.allFields = [];\r\n            var id = 0;\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    if (_this.A[i][j] == _this.initialValue) {\r\n                        _this.allFields.push({ id: id, x: i, y: j });\r\n                        id++;\r\n                    }\r\n                }\r\n            }\r\n            if (!(_this.allFields.length < _this.ballsAmount)) {\r\n                var howMany = 0;\r\n                var _loop_1 = function () {\r\n                    _this.calls++;\r\n                    console.log(\"Wywołanie: \", _this.calls);\r\n                    var index = Math.floor((Math.random() * _this.allFields.length) + 0);\r\n                    var field = _this.allFields[index];\r\n                    var x = field.x;\r\n                    var y = field.y;\r\n                    var color = colors[howMany];\r\n                    //let color = \"red\"\r\n                    var ball = new Ball_1.default(color);\r\n                    _this.A[x][y] = color;\r\n                    var td = document.getElementsByClassName(x + \"_\" + y)[0];\r\n                    td.appendChild(ball);\r\n                    var id_1 = field.id;\r\n                    _this.allFields = _this.allFields.filter(function (field) { return field.id != id_1; });\r\n                    howMany++;\r\n                };\r\n                while (howMany < _this.ballsAmount) {\r\n                    _loop_1();\r\n                }\r\n                console.warn(\"Wywołań\", _this.calls);\r\n                _this.getRandomColors();\r\n            }\r\n            else {\r\n                alert(\"Koniec gry\");\r\n            }\r\n        };\r\n        this.getBoardCell = function (cl, boardName) {\r\n            var board = (document.getElementsByClassName(boardName)[0]);\r\n            var tds = board.getElementsByTagName(\"td\");\r\n            for (var i = 0; i < tds.length; i++) {\r\n                if (tds[i].className == cl) {\r\n                    return tds[i];\r\n                }\r\n            }\r\n        };\r\n        this.removeBallsFromCells = function (cells) {\r\n            for (var i = 0; i < cells.length; i++) {\r\n                var td = _this.getBoardCell(cells[i], \"board\");\r\n                td.innerHTML = \"\";\r\n            }\r\n        };\r\n        this.createHelpBoard = function () {\r\n            _this.helpTable = document.createElement(\"table\");\r\n            _this.helpTable.classList.add(\"helpBoard\");\r\n            for (var i = 0; i < _this.width; i++) {\r\n                var tr = document.createElement(\"tr\");\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    var td = document.createElement(\"td\");\r\n                    td.classList.add(i + \"_\" + j);\r\n                    tr.appendChild(td);\r\n                }\r\n                _this.helpTable.appendChild(tr);\r\n            }\r\n            document.body.appendChild(_this.helpTable);\r\n        };\r\n        this.refreshHelpBoard = function () {\r\n            for (var i = 0; i < _this.width; i++) {\r\n                for (var j = 0; j < _this.height; j++) {\r\n                    _this.getBoardCell(i + \"_\" + j, \"helpBoard\").innerHTML = _this.A[i][j].toString();\r\n                }\r\n            }\r\n        };\r\n        this.createScoreboard = function () {\r\n            _this.scoreBoard = document.createElement(\"div\");\r\n            _this.scoreBoard.classList.add(\"scoreboard\");\r\n            _this.scoreBoard.innerHTML = _this.points.toString();\r\n            document.body.appendChild(_this.scoreBoard);\r\n        };\r\n        this.clearSpecificPoints = function (cells) {\r\n            for (var i = 0; i < cells.length; i++) {\r\n                var x = parseInt(cells[i].split(\"_\")[0]);\r\n                var y = parseInt(cells[i].split(\"_\")[1]);\r\n                Main_1.board.A[x][y] = _this.initialValue;\r\n            }\r\n        };\r\n        this.createUpcomingBallsBoard = function () {\r\n            _this.upcomingBallsBoard = document.createElement(\"div\");\r\n            var title = document.createElement(\"p\");\r\n            title.innerHTML = \"Następne: \";\r\n            _this.upcomingBallsBoard.appendChild(title);\r\n            _this.upcomingBallsBoard.classList.add(\"upcomingBallsBoard\");\r\n            for (var i = 0; i < _this.upcomingColors.length; i++) {\r\n                var ball = new Ball_1.default(_this.upcomingColors[i]);\r\n                _this.upcomingBallsBoard.appendChild(ball);\r\n            }\r\n            document.body.appendChild(_this.upcomingBallsBoard);\r\n        };\r\n        this.refreshUpcomingBallsBoard = function () {\r\n            _this.upcomingBallsBoard.innerHTML = \"\";\r\n            var title = document.createElement(\"p\");\r\n            title.innerHTML = \"Następne: \";\r\n            _this.upcomingBallsBoard.appendChild(title);\r\n            for (var i = 0; i < _this.upcomingColors.length; i++) {\r\n                var ball = new Ball_1.default(_this.upcomingColors[i]);\r\n                _this.upcomingBallsBoard.appendChild(ball);\r\n            }\r\n        };\r\n        this.trackPath = function (c) {\r\n            var x = parseInt(c.split(\"_\")[0]);\r\n            var y = parseInt(c.split(\"_\")[1]);\r\n            if (_this.status == \"M\" && !Main_1.board.colors.includes(Main_1.board.A[x][y])) {\r\n                if (_this.trackToField != \"\") {\r\n                    var x_1 = parseInt(_this.trackToField.split(\"_\")[0]);\r\n                    var y_1 = parseInt(_this.trackToField.split(\"_\")[1]);\r\n                    _this.A[x_1][y_1] = _this.recoveredFieldValue;\r\n                    _this.colorFields(_this.B[parseInt(_this.selectedFieldBefore.split(\"_\")[0])][parseInt(_this.selectedFieldBefore.split(\"_\")[1])], \"white\");\r\n                    _this.refreshBoardA();\r\n                    _this.refreshBoardB();\r\n                }\r\n                _this.trackToField = c;\r\n                _this.recoveredFieldValue = _this.A[x][y];\r\n                _this.A[x][y] = \"M\";\r\n                _this.algorithm.createPath(_this.startsX, _this.startsY, 0);\r\n            }\r\n        };\r\n        this.addHovers = function () {\r\n            var tds = Array.from(document.getElementsByTagName(\"td\"));\r\n            tds.forEach(function (td) {\r\n                td.addEventListener(\"mouseenter\", function () {\r\n                    _this.trackPath(td.className);\r\n                });\r\n            });\r\n        };\r\n        this.addClicks = function () {\r\n            var tds = Array.from(document.getElementsByTagName(\"td\"));\r\n            tds.forEach(function (td) {\r\n                td.addEventListener(\"click\", function () {\r\n                    _this.addStartOrMeta(td.className);\r\n                });\r\n            });\r\n        };\r\n        this.addStartOrMeta = function (c) {\r\n            var x = parseInt(c.split(\"_\")[0]);\r\n            var y = parseInt(c.split(\"_\")[1]);\r\n            //console.log(x, y);\r\n            if (_this.A[x][y] != \"M\") {\r\n                if (_this.status == \"S\") {\r\n                    console.log(\"Pole z kulką i wybieranie\");\r\n                    // console.log(\"X i Y startu: \", x, y);\r\n                    _this.selected = (_this.getBoardCell(x + \"_\" + y, \"board\").firstChild);\r\n                    console.log(\"Wybrana kulka: \", _this.selected);\r\n                    _this.selectedColor = _this.selected.classList[0];\r\n                    _this.selected.style.width = \"60px\";\r\n                    _this.selected.style.height = \"60px\";\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                    _this.status = \"M\";\r\n                }\r\n                else {\r\n                    console.log(\"Pole z kulką i zmiana wybranej\");\r\n                    _this.colorFields(_this.B[parseInt(_this.selectedFieldBefore.split(\"_\")[0])][parseInt(_this.selectedFieldBefore.split(\"_\")[1])], \"white\");\r\n                    // console.log(\"X i Y startu: \", x, y);\r\n                    _this.selected.style.width = \"40px\";\r\n                    _this.selected.style.height = \"40px\";\r\n                    _this.selected = (_this.getBoardCell(x + \"_\" + y, \"board\").firstChild);\r\n                    _this.selectedColor = _this.selected.classList[0];\r\n                    _this.selected.style.width = \"60px\";\r\n                    _this.selected.style.height = \"60px\";\r\n                    _this.startsX = x;\r\n                    _this.startsY = y;\r\n                }\r\n            }\r\n            else {\r\n                if (_this.status == \"M\") {\r\n                    console.log(\"Przemieszczenie kulki\");\r\n                    _this.metasX = x;\r\n                    _this.metasY = y;\r\n                    _this.moveBall = true;\r\n                    _this.refreshBoardA();\r\n                    _this.algorithm.createPath(_this.startsX, _this.startsY, 0);\r\n                }\r\n            }\r\n        };\r\n        this.colorFields = function (fields, color) {\r\n            //console.log(\"Zmiana koloru ścieżki na: \", color);\r\n            fields = fields.filter(function (field) { return field != \"\"; });\r\n            //console.log(fields)\r\n            for (var i = 0; i < fields.length; i++) {\r\n                var td = _this.getBoardCell(fields[i], \"board\");\r\n                td.style.backgroundColor = color;\r\n            }\r\n        };\r\n    }\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./src/Board.ts?");

/***/ }),

/***/ "./src/Directions.ts":
/*!***************************!*\
  !*** ./src/Directions.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Main_1 = __webpack_require__(/*! ./Main */ \"./src/Main.ts\");\r\nvar Directions = /** @class */ (function () {\r\n    function Directions() {\r\n        var _this = this;\r\n        this.inRow = 5;\r\n        this.checkDirection = function (x, y, direction, pathLength) {\r\n            if (!Main_1.board.algorithm.found) {\r\n                var startingX_1;\r\n                var startingY_1;\r\n                switch (direction) {\r\n                    case \"left\":\r\n                        startingX_1 = x - 1;\r\n                        startingY_1 = y;\r\n                        if (startingX_1 < 0)\r\n                            return;\r\n                        break;\r\n                    case \"top\":\r\n                        startingX_1 = x;\r\n                        startingY_1 = y - 1;\r\n                        if (startingY_1 < 0)\r\n                            return;\r\n                        break;\r\n                    case \"right\":\r\n                        startingX_1 = x + 1;\r\n                        startingY_1 = y;\r\n                        if (startingX_1 > Main_1.board.width - 1)\r\n                            return;\r\n                        break;\r\n                    case \"bottom\":\r\n                        startingX_1 = x;\r\n                        startingY_1 = y + 1;\r\n                        if (startingY_1 > Main_1.board.height - 1)\r\n                            return;\r\n                        break;\r\n                }\r\n                if (Main_1.board.A[startingX_1][startingY_1] == \"M\") {\r\n                    console.log(\"Najkrótsza ścieżka:\", pathLength);\r\n                    Main_1.board.algorithm.found = true;\r\n                    Main_1.board.B[x][y].push(startingX_1.toString() + \"_\" + startingY_1.toString());\r\n                    Main_1.board.selectedFieldBefore = x.toString() + \"_\" + y.toString();\r\n                    Main_1.board.B[x][y].push(x.toString() + \"_\" + y.toString());\r\n                    //console.log(\"Pola do pokolorowania: \", board.B[x][y])\r\n                    Main_1.board.colorFields(Main_1.board.B[x][y], \"pink\");\r\n                    if (Main_1.board.moveBall)\r\n                        _this.restartBoards(x, y, startingX_1, startingY_1);\r\n                }\r\n                else if (Main_1.board.colors.includes(Main_1.board.A[startingX_1][startingY_1])) {\r\n                    // console.log(\"kulka!\", x, y, direction, board.A[startingX][startingY])\r\n                }\r\n                else if (Main_1.board.A[startingX_1][startingY_1] > pathLength) {\r\n                    Main_1.board.A[startingX_1][startingY_1] = pathLength;\r\n                    Main_1.board.B[startingX_1][startingY_1] = Main_1.board.B[startingX_1][startingY_1].concat(Main_1.board.B[x][y]);\r\n                    Main_1.board.B[startingX_1][startingY_1].push(x.toString() + \"_\" + y.toString());\r\n                    return function () {\r\n                        var f = [];\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"top\", pathLength + 1));\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"left\", pathLength + 1));\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"right\", pathLength + 1));\r\n                        f.push(_this.checkDirection(startingX_1, startingY_1, \"bottom\", pathLength + 1));\r\n                        return f;\r\n                    };\r\n                }\r\n            }\r\n            //board.refreshHelpBoard()\r\n        };\r\n        this.restartBoards = function (x, y, startingX, startingY) {\r\n            console.log(\"Restartowanie boarda\");\r\n            //console.log(\"Tablica A: \", board.A)\r\n            //console.log(\"Tablica B:\", board.B)\r\n            var start = (document.getElementsByClassName(Main_1.board.startsX + \"_\" + Main_1.board.startsY)[0]);\r\n            start.innerHTML = \"\";\r\n            Main_1.board.A[Main_1.board.startsX][Main_1.board.startsY] = 0;\r\n            Main_1.board.A[Main_1.board.metasX][Main_1.board.metasY] = 0;\r\n            Main_1.board.A[startingX][startingY] = Main_1.board.selectedColor;\r\n            var finish = document.getElementsByClassName(startingX + \"_\" + startingY)[0];\r\n            finish.appendChild(Main_1.board.selected);\r\n            Main_1.board.selected.style.width = \"40px\";\r\n            Main_1.board.selected.style.height = \"40px\";\r\n            Main_1.board.selected = null;\r\n            Main_1.board.status = \"S\";\r\n            Main_1.board.moveBall = false;\r\n            Main_1.board.trackToField = \"\";\r\n            _this.checkRows(startingX, startingY);\r\n            Main_1.board.refreshBoardA();\r\n            Main_1.board.refreshUpcomingBallsBoard();\r\n            Main_1.board.disperseBalls(Main_1.board.upcomingColors);\r\n            //board.refreshHelpBoard()\r\n            setTimeout(function () {\r\n                Main_1.board.colorFields(Main_1.board.B[x][y], \"white\");\r\n                Main_1.board.refreshBoardB();\r\n            }, 100);\r\n        };\r\n        this.checkRows = function (x, y) {\r\n            //console.log(\"PUNKT: \", x, y)\r\n            var horizontalPoints = [];\r\n            var verticalPoints = [];\r\n            var obliqueLeftPoints = [];\r\n            var obliqueRightPoints = [];\r\n            var i = x;\r\n            var j = y;\r\n            var leftHorizontalCounter = 0;\r\n            while (i >= 0) {\r\n                if (i != x) {\r\n                    console.log(\"W lewo w poziomie: \", i, j);\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        horizontalPoints.push(i + \"_\" + j);\r\n                        leftHorizontalCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                i--;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var rightHorizontalCounter = 0;\r\n            while (i < Main_1.board.width) {\r\n                if (i != x) {\r\n                    //console.log(\"W prawo w poziomie: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        horizontalPoints.push(i + \"_\" + j);\r\n                        rightHorizontalCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                i++;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var topVerticalCounter = 0;\r\n            while (j >= 0) {\r\n                if (j != y) {\r\n                    //console.log(\"W górę w pionie: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        verticalPoints.push(i + \"_\" + j);\r\n                        topVerticalCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                j--;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var bottomVerticalCounter = 0;\r\n            while (j < Main_1.board.height) {\r\n                if (j != y) {\r\n                    //console.log(\"W doł w pionie: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        verticalPoints.push(i + \"_\" + j);\r\n                        bottomVerticalCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                j++;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var leftTopCounter = 0;\r\n            while (i >= 0 && j >= 0) {\r\n                if (i != x) {\r\n                    //console.log(\"Na skos w lewo w górę: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        obliqueLeftPoints.push(i + \"_\" + j);\r\n                        leftTopCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                i--;\r\n                j--;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var rightTopCounter = 0;\r\n            while (i < Main_1.board.width && j >= 0) {\r\n                if (i != x) {\r\n                    //console.log(\"Na skos w prawo w górę: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        obliqueRightPoints.push(i + \"_\" + j);\r\n                        rightTopCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                i++;\r\n                j--;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var leftBottomCounter = 0;\r\n            while (i >= 0 && j < Main_1.board.height) {\r\n                if (j != y) {\r\n                    //console.log(\"Na skos w lewo w doł: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        obliqueRightPoints.push(i + \"_\" + j);\r\n                        leftBottomCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                i--;\r\n                j++;\r\n            }\r\n            i = x;\r\n            j = y;\r\n            var rightBottomCounter = 0;\r\n            while (i < Main_1.board.width && j < Main_1.board.height) {\r\n                if (j != y) {\r\n                    //console.log(\"Na skos w prawo w doł: \", i, j)\r\n                    if (Main_1.board.A[i][j] == Main_1.board.selectedColor) {\r\n                        obliqueLeftPoints.push(i + \"_\" + j);\r\n                        rightBottomCounter++;\r\n                    }\r\n                    else {\r\n                        break;\r\n                    }\r\n                }\r\n                i++;\r\n                j++;\r\n            }\r\n            var allPoints = [];\r\n            console.log(\"Długości tablic(poziom, pion, lewy ukos, prawy ukos): \", horizontalPoints.length, verticalPoints.length, obliqueLeftPoints.length, obliqueRightPoints.length);\r\n            if (horizontalPoints.length >= _this.inRow - 1) {\r\n                allPoints.push.apply(allPoints, horizontalPoints);\r\n            }\r\n            if (verticalPoints.length >= _this.inRow - 1) {\r\n                allPoints.push.apply(allPoints, verticalPoints);\r\n            }\r\n            if (obliqueLeftPoints.length >= _this.inRow - 1) {\r\n                allPoints.push.apply(allPoints, obliqueLeftPoints);\r\n            }\r\n            if (obliqueRightPoints.length >= _this.inRow - 1) {\r\n                allPoints.push.apply(allPoints, obliqueRightPoints);\r\n            }\r\n            if (allPoints.length > 0) {\r\n                allPoints.push(x + \"_\" + y);\r\n                Main_1.board.clearSpecificPoints(allPoints);\r\n                Main_1.board.removeBallsFromCells(allPoints);\r\n                Main_1.board.points += allPoints.length;\r\n            }\r\n            Main_1.board.scoreBoard.innerHTML = Main_1.board.points.toString();\r\n        };\r\n        console.log(\"Inicjalizacja klasy Directions\");\r\n    }\r\n    return Directions;\r\n}());\r\nexports.default = Directions;\r\n\n\n//# sourceURL=webpack:///./src/Directions.ts?");

/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        exports.board = new Board_1.default();\r\n        exports.board.initializeBoard();\r\n        //board.createHelpBoard()\r\n        //board.refreshHelpBoard()\r\n        exports.board.createScoreboard();\r\n        exports.board.createUpcomingBallsBoard();\r\n        exports.board.addClicks();\r\n        exports.board.addHovers();\r\n    }\r\n    return Main;\r\n}());\r\ndocument.addEventListener(\"DOMContentLoaded\", function () { var main = new Main(); });\r\n\n\n//# sourceURL=webpack:///./src/Main.ts?");

/***/ })

/******/ });