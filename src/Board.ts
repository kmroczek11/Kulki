import Algorithm from "./Algorithm";
import Ball from "./Ball";
import { board } from "./Main";

export default class Board {
  public width: number = 9;
  public height: number = 9;
  public A: (number | string)[][];
  public B: Array<string>[][];
  private table: HTMLElement;
  public status: string = "S";
  public startsX: number;
  public startsY: number;
  public metasX: number;
  public metasY: number;
  public algorithm: Algorithm;
  public colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "black",
    "violet"
  ];
  public selected: HTMLElement = null;
  public selectedColor: string;
  public initialValue: number = this.width * this.height
  public helpTable: HTMLElement
  public points: number = 0
  public ballsAmount: number = 3
  public scoreBoard: HTMLElement = null
  public upcomingColors: string[] = []
  public upcomingBallsBoard: HTMLElement
  public allFields: { id: number, x: number, y: number }[] = [];
  public calls: number = 0

  constructor() { }

  initializeBoard = () => {
    this.A = [];
    this.B = [];

    for (let i: number = 0; i < this.width; i++) {
      //wypełnienie tablicy A zerami
      this.A[i] = [];
      for (let j: number = 0; j < this.height; j++) {
        this.A[i][j] = this.initialValue;
      }
    }

    for (let i: number = 0; i < this.width; i++) {
      //wypełnienie tablicy B tablicami
      this.B[i] = [];
      for (let j: number = 0; j < this.height; j++) {
        this.B[i][j] = [""];
      }
    }

    this.table = document.createElement("table");
    this.table.classList.add("board");
    for (let i: number = 0; i < this.width; i++) {
      //wypełnienie tabeli wartościami z tablicy A
      let tr: HTMLElement = document.createElement("tr");
      for (let j: number = 0; j < this.height; j++) {
        let td = document.createElement("td");
        td.classList.add(i + "_" + j);
        tr.appendChild(td);
      }
      this.table.appendChild(tr);
    }
    document.body.appendChild(this.table);

    this.getRandomColors()
    this.disperseBalls(this.upcomingColors);
  };

  getRandomColors = () => {
    this.upcomingColors = []
    for (let i: number = 0; i < this.ballsAmount; i++) {
      this.upcomingColors.push(this.colors[Math.floor(Math.random() * 7 + 0)])
    }
    //console.log(this.upcomingColors)
  }

  refreshBoardA = () => {
    //console.log("Odświeżenie tablicy A");
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (typeof this.A[i][j] == "number") this.A[i][j] = this.initialValue;
      }
    }
  };

  refreshBoardB = () => {
    //console.log("Odświeżenie tablicy B");
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        this.B[i][j] = [""];
      }
    }
  };

  disperseBalls = (colors: string[]) => {
    this.allFields = []
    let id: number = 0
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (this.A[i][j] == this.initialValue) {
          this.allFields.push({ id: id, x: i, y: j })
          id++
        }
      }
    }

    if (!(this.allFields.length < this.ballsAmount)) {
      let howMany: number = 0
      while (howMany < this.ballsAmount) {
        this.calls++
        console.log("Wywołanie: ", this.calls)

        let index: number = Math.floor((Math.random() * this.allFields.length) + 0);

        let field = this.allFields[index]

        let x = field.x
        let y = field.y
        let color: string = colors[howMany]
        //let color = "red"
        let ball = <HTMLElement>new Ball(color);
        this.A[x][y] = color;
        let td = <HTMLElement>document.getElementsByClassName(x + "_" + y)[0];
        td.appendChild(ball);
        let id = field.id
        this.allFields = this.allFields.filter(field => field.id != id)
        howMany++
      }
      console.warn("Wywołań", this.calls)
      this.getRandomColors()
    } else {
      console.log("Koniec gry")
    }
  }

  addClicks = () => {
    let tds = Array.from(document.getElementsByTagName("td"));
    tds.forEach(td => {
      td.addEventListener("click", () => {
        this.addStartOrMeta(td.className);
      });
    });
  };

  addHovers = () => {
    let tds = Array.from(document.getElementsByTagName("td"));
    tds.forEach(td => {
      td.addEventListener("mousenter", () => {
        //this.setRoute(td.className);
      });
    });
  }

  getBoardCell = (cl: string, boardName: string) => {
    var board = <HTMLElement>(document.getElementsByClassName(boardName)[0])
    var tds = board.getElementsByTagName("td")
    for (var i = 0; i < tds.length; i++) {
      if (tds[i].className == cl) {
        return <HTMLElement>tds[i]
      }
    }
  }

  removeBallsFromCells = (cells: string[]) => {
    for (let i: number = 0; i < cells.length; i++) {
      let td: HTMLElement = this.getBoardCell(cells[i], "board")
      td.innerHTML = ""
    }
  }

  createHelpBoard = () => {
    this.helpTable = document.createElement("table");
    this.helpTable.classList.add("helpBoard");
    for (let i: number = 0; i < this.width; i++) {
      let tr: HTMLElement = document.createElement("tr");
      for (let j: number = 0; j < this.height; j++) {
        let td = document.createElement("td");
        td.classList.add(i + "_" + j);
        tr.appendChild(td);
      }
      this.helpTable.appendChild(tr);
    }
    document.body.appendChild(this.helpTable);
  }

  refreshHelpBoard = () => {
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        this.getBoardCell(i + "_" + j, "helpBoard").innerHTML = this.A[i][j].toString();
      }
    }
  }

  createScoreboard = () => {
    this.scoreBoard = document.createElement("div")
    this.scoreBoard.classList.add("scoreboard")
    this.scoreBoard.innerHTML = this.points.toString()
    document.body.appendChild(this.scoreBoard)
  }

  clearSpecificPoints = (cells: string[]) => {
    for (let i: number = 0; i < cells.length; i++) {
      let x: number = parseInt(cells[i].split("_")[0]);
      let y: number = parseInt(cells[i].split("_")[1]);
      board.A[x][y] = this.initialValue
    }
  }

  createUpcomingBallsBoard = () => {
    this.upcomingBallsBoard = document.createElement("div")
    let title: HTMLElement = document.createElement("p")
    title.innerHTML = "Następne: "
    this.upcomingBallsBoard.appendChild(title)
    this.upcomingBallsBoard.classList.add("upcomingBallsBoard")
    for (let i: number = 0; i < this.upcomingColors.length; i++) {
      let ball = <HTMLElement>new Ball(this.upcomingColors[i]);
      this.upcomingBallsBoard.appendChild(ball)
    }
    document.body.appendChild(this.upcomingBallsBoard)
  }

  refreshUpcomingBallsBoard = () => {
    this.upcomingBallsBoard.innerHTML = ""
    for (let i: number = 0; i < this.upcomingColors.length; i++) {
      let ball = <HTMLElement>new Ball(this.upcomingColors[i]);
      this.upcomingBallsBoard.appendChild(ball)
    }
  }

  addStartOrMeta = (c: string) => {
    let x: number = parseInt(c.split("_")[0]);
    let y: number = parseInt(c.split("_")[1]);
    //console.log(x, y);
    if (this.A[x][y] != this.initialValue) {
      if (this.status == "S") {
        // console.log("Pole z kulką i wybieranie");
        // console.log("X i Y startu: ", x, y);
        this.selected = <HTMLElement>(
          this.getBoardCell(x + "_" + y, "board").firstChild
        );
        console.log("Wybrana kulka: ", this.selected)
        this.selectedColor = this.selected.classList[0];
        this.selected.style.width = "60px";
        this.selected.style.height = "60px";
        this.startsX = x;
        this.startsY = y;
        this.status = "M";
      } else {
        // console.log("Pole z kulką i zmiana wybranej");
        // console.log("X i Y startu: ", x, y);
        this.selected.style.width = "40px";
        this.selected.style.height = "40px";
        this.selected = <HTMLElement>(
          this.getBoardCell(x + "_" + y, "board").firstChild
        );
        this.selectedColor = this.selected.classList[0];
        this.selected.style.width = "60px";
        this.selected.style.height = "60px";
        this.startsX = x;
        this.startsY = y;
      }
    } else {
      if (this.status == "M") {
        this.metasX = x;
        this.metasY = y;
        this.A[x][y] = "M";
        this.algorithm = new Algorithm();
        this.algorithm.createPath(this.startsX, this.startsY, 0);
      }
    }
    this.refreshHelpBoard()
  };

  colorFields = (fields: string[], color: string) => {
    //console.log("Zmiana koloru ścieżki na: ", color);
    fields = fields.filter(field => field != "");
    //console.log(fields)
    for (let i: number = 0; i < fields.length; i++) {
      let td = this.getBoardCell(fields[i], "board")
      td.style.backgroundColor = color;
    }
  };
}
