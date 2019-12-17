import { board } from "./Main";

export default class Directions {
  private inRow: number = 5

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
          if (startingX < 0) return
          break;
        case "top":
          startingX = x;
          startingY = y - 1;
          if (startingY < 0) return
          break;
        case "right":
          startingX = x + 1;
          startingY = y;
          if (startingX > board.width - 1) return
          break;
        case "bottom":
          startingX = x;
          startingY = y + 1;
          if (startingY > board.height - 1) return
          break;
      }

      if (board.A[startingX][startingY] == "M") {
        console.log("Najkrótsza ścieżka:", pathLength);
        board.algorithm.found = true;

        board.B[x][y].push(startingX.toString() + "_" + startingY.toString());

        board.B[x][y].push(x.toString() + "_" + y.toString());

        this.restartBoards(x, y, startingX, startingY);
      }

      // else if (board.colors.includes(board.A[startingX][startingY] as string)) {
      //   // console.log("kulka!", x, y, direction, board.A[startingX][startingY])
      // }

      else if (board.A[startingX][startingY] > pathLength) {
        board.A[startingX][startingY] = pathLength;

        board.B[startingX][startingY] = board.B[startingX][startingY].concat(
          board.B[x][y]
        );

        board.B[startingX][startingY].push(x.toString() + "_" + y.toString());

        return () => {
          var f = []

          f.push(this.checkDirection(startingX, startingY, "top", pathLength + 1));
          f.push(this.checkDirection(startingX, startingY, "left", pathLength + 1));
          f.push(this.checkDirection(startingX, startingY, "right", pathLength + 1));
          f.push(this.checkDirection(startingX, startingY, "bottom", pathLength + 1));

          return f
        }
      }
    }
    board.refreshHelpBoard()
  };

  restartBoards = (x: number, y: number, startingX: number, startingY: number) => {
    console.log("Tablica A: ", board.A)
    console.log("Tablica B:", board.B)
    let start = <HTMLElement>(
      document.getElementsByClassName(board.startsX + "_" + board.startsY)[0]
    );
    start.innerHTML = "";
    board.A[board.startsX][board.startsY] = 0;
    board.A[board.metasX][board.metasY] = 0;
    board.A[startingX][startingY] = board.selectedColor;

    let finish = <HTMLElement>document.getElementsByClassName(startingX + "_" + startingY)[0];
    finish.appendChild(board.selected);
    board.selected.style.width = "40px";
    board.selected.style.height = "40px";
    board.selected = null;
    board.status = "S";
    board.algorithm.found = false

    board.colorFields(board.B[x][y], "pink");

    board.disperseBalls()

    this.checkHorizontalRow(startingX, startingY)

    setTimeout(() => {
      board.colorFields(board.B[x][y], "white")
      board.refreshBoardA();
      board.refreshHelpBoard()
      board.refreshBoardB();
    }, 1000);
  };

  checkHorizontalRow = (x: number, y: number) => {
    let balls: string[] = []
    let allX: number[] = []
    let sum: number = 0
    let start: number = x - this.inRow
    let finish: number = x + this.inRow
    if (start < 0) start = 0
    if (finish > board.width) finish = board.width
    for (let i: number = start; i < finish; i++) {
      console.log(i, " ", y)
      if (board.A[i][y] == board.selectedColor) {
        balls.push(i + "_" + y)
        allX.push(i)
        sum++
      }
    }

    if (sum == 5) {
      board.removeBallsFromCells(balls)
      for (let i: number = 0; i < allX.length; i++) {
        board.A[allX[i]][y] = board.initialValue
      }
      board.refreshHelpBoard()
      board.points += sum
    }
    this.checkVerticalRow(x, y)
  }

  checkVerticalRow = (x: number, y: number) => {
    let balls: string[] = []
    let allY: number[] = []
    let sum: number = 0
    let start: number = y - this.inRow
    let finish: number = y + this.inRow
    if (start < 0) start = 0
    if (finish > board.height) finish = board.height
    for (let i: number = start; i < finish; i++) {
      console.log(x, " ", i)
      if (board.A[x][i] == board.selectedColor) {
        balls.push(x + "_" + i)
        allY.push(i)
        sum++
      }
    }

    if (sum == 5) {
      board.removeBallsFromCells(balls)
      for (let i: number = 0; i < allY.length; i++) {
        board.A[x][allY[i]] = board.initialValue
      }
      board.refreshHelpBoard()
      board.points += sum
    }
    board.scoreBoard.innerHTML = board.points.toString()
  }
}
