import { board } from "./Main";

export default class Directions {
  constructor() {
    console.log("Inicjalizacja klasy Directions");
  }

  checkDirection = (
    x: number,
    y: number,
    direction: string,
    pathLength: number
  ) => {
    if (!board.algorithm.found) {
      let startingX: number;
      let startingY: number;

      switch (direction) {
        case "left":
          startingX = x - 1;
          startingY = y;
          if (startingX < 0) startingX = 0;
          break;
        case "top":
          startingX = x;
          startingY = y - 1;
          if (startingY < 0) startingY = 0;
          break;
        case "right":
          startingX = x + 1;
          startingY = y;
          if (startingX > board.width - 1) startingX = board.width - 1;
          break;
        case "bottom":
          startingX = x;
          startingY = y + 1;
          if (startingY > board.height - 1) startingY = board.height - 1;
          break;
      }

      if (board.A[startingX][startingY] == 0) {
        board.A[startingX][startingY] = pathLength;

        if ((board.B[startingX][startingY][0] = ""))
          board.B[startingX][startingY] = [];

        board.B[startingX][startingY] = board.B[startingX][startingY].concat(
          board.B[x][y]
        );
        board.B[startingX][startingY].push(x.toString() + "_" + y.toString());
      } else if (board.A[startingX][startingY] == "M") {
        console.log("Najkrótsza ścieżka:", pathLength);
        board.algorithm.found = true;
        board.B[x][y].push(x.toString() + "_" + y.toString());

        this.restartBoards(x, y);
      }
    }
  };

  restartBoards = (x: number, y: number) => {
    let start = <HTMLElement>(
      document.getElementsByClassName(board.startsX + "_" + board.startsY)[0]
    );
    start.innerHTML = "";
    board.A[board.startsX][board.startsY] = 0;
    board.A[board.metasX][board.metasY] = 0;
    board.A[x][y] = board.selectedColor;

    let finish = <HTMLElement>document.getElementsByClassName(x + "_" + y)[0];
    finish.appendChild(board.selected);
    board.selected.style.width = "80px";
    board.selected.style.height = "80px";
    board.selected = null;
    board.status = "S";
    
    board.colorFields(board.B[x][y], "pink");
    setTimeout(() => {
      board.colorFields(board.B[x][y], "white")     
      board.refreshBoardB();
    }, 2000);

    board.refreshBoardA();
    console.log("Tablica A: ", board.A);
  };
}
