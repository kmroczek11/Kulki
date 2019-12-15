import Algorithm from "./Algorithm";
import Ball from "./Ball";

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
    "darkblue",
    "violet"
  ];
  public selected: HTMLElement = null;
  public selectedColor: string;

  constructor() {}

  initializeBoard = () => {
    this.A = [];
    this.B = [];

    for (let i: number = 0; i < this.width; i++) {
      //wypełnienie tablicy A zerami
      this.A[i] = [];
      for (let j: number = 0; j < this.height; j++) {
        this.A[i][j] = 0;
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

    //this.refreshBoard()

    // for (let i: number = 0; i < 3; i++) {
    //     let randX: number = Math.floor((Math.random() * this.x) + 0);
    //     let randY: number = Math.floor((Math.random() * this.y) + 0);
    //     this.fillWithX(randX, randY)
    // }

    this.disperseBall(0, 1);
    this.disperseBall(2, 1);
    this.disperseBall(2, 3);
  };

  refreshBoardA = () => {
    console.log("Odświeżenie tablicy A");
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (typeof this.A[i][j] == "number") this.A[i][j] = 0;
      }
    }
  };

  refreshBoardB = () => {
    console.log("Odświeżenie tablicy B");
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        this.B[i][j] = [""];
      }
    }
  };

  disperseBall = (x: number, y: number) => {
    let color: string = this.colors[Math.floor(Math.random() * 7 + 0)];
    let ball = <HTMLElement>new Ball(color);

    if (this.A[x][y] == "") {
      this.A[x][y] = color;
      let td = <HTMLElement>document.getElementsByClassName(x + "_" + y)[0];
      td.appendChild(ball);
    } else this.disperseBall(x, y);

    //this.refreshBoard()
  };

  addClicks = () => {
    let tds = Array.from(document.getElementsByTagName("td"));
    tds.forEach(td => {
      td.addEventListener("click", () => {
        this.addStartOrMeta(td.className);
      });
    });
  };

  addStartOrMeta = (c: string) => {
    let x: number = parseInt(c.split("_")[0]);
    let y: number = parseInt(c.split("_")[1]);
    console.log(x, y);
    if (this.A[x][y] != 0) {
      if (this.status == "S") {
        // console.log("Pole z kulką i wybieranie");
        // console.log("X i Y startu: ", x, y);
        this.selected = <HTMLElement>(
          document.getElementsByClassName(x + "_" + y)[0].firstChild
        );
        this.selectedColor = this.selected.classList[0];
        this.selected.style.width = "120px";
        this.selected.style.height = "120px";
        this.startsX = x;
        this.startsY = y;
        this.status = "M";
      } else {
        // console.log("Pole z kulką i zmiana wybranej");
        // console.log("X i Y startu: ", x, y);
        this.selected.style.width = "80px";
        this.selected.style.height = "80px";
        this.selected = <HTMLElement>(
          document.getElementsByClassName(x + "_" + y)[0].firstChild
        );
        this.selectedColor = this.selected.classList[0];
        this.selected.style.width = "120px";
        this.selected.style.height = "120px";
        this.startsX = x;
        this.startsY = y;
      }
    } else {
      if (this.status == "M") {
        this.metasX = x;
        this.metasY = y;
        // console.log("X i Y mety: ", x, y);
        this.A[x][y] = "M";
        this.algorithm = new Algorithm();
        this.algorithm.createPath(this.startsX, this.startsY, 0);
      }
    }
  };

  colorFields = (fields: string[], color: string) => {
    console.log("Zmiana koloru ścieżki na: ", color);
    fields = fields.filter(field => field != "");
    console.log(fields)
    for (let i: number = 0; i < fields.length; i++) {
      let td = document.getElementsByClassName(fields[i])[0] as HTMLElement;
      td.style.backgroundColor = color;
    }
  };
}
