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

        board.selectedFieldBefore = x.toString() + "_" + y.toString()

        board.B[x][y].push(x.toString() + "_" + y.toString());

        //console.log("Pola do pokolorowania: ", board.B[x][y])
        board.colorFields(board.B[x][y], "pink")

        if (board.moveBall)
          this.restartBoards(x, y, startingX, startingY);
      }

      else if (board.colors.includes(board.A[startingX][startingY] as string)) {
        // console.log("kulka!", x, y, direction, board.A[startingX][startingY])
      }

      else if (board.A[startingX][startingY] > pathLength) {

        board.A[startingX][startingY] = pathLength;

        board.B[startingX][startingY] = board.B[startingX][startingY].concat(board.B[x][y])

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
    //board.refreshHelpBoard()
  };

  restartBoards = (x: number, y: number, startingX: number, startingY: number) => {
    console.log("Restartowanie boarda")
    //console.log("Tablica A: ", board.A)
    //console.log("Tablica B:", board.B)
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
    board.moveBall = false
    board.trackToField = ""

    this.checkRows(startingX, startingY)

    board.refreshBoardA();

    board.refreshUpcomingBallsBoard()

    board.disperseBalls(board.upcomingColors)

    //board.refreshHelpBoard()

    setTimeout(() => {
      board.colorFields(board.B[x][y], "white")
      board.refreshBoardB();
    }, 100);
  };

  checkRows = (x: number, y: number) => {
    //console.log("PUNKT: ", x, y)
    let horizontalPoints: string[] = []
    let verticalPoints: string[] = []
    let obliqueLeftPoints: string[] = []
    let obliqueRightPoints: string[] = []

    let i = x
    let j = y
    let leftHorizontalCounter = 0
    while (i >= 0) {
      if (i != x) {
        console.log("W lewo w poziomie: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          horizontalPoints.push(i + "_" + j)
          leftHorizontalCounter++
        } else {
          break;
        }
      }
      i--
    }

    i = x
    j = y
    let rightHorizontalCounter = 0
    while (i < board.width) {
      if (i != x) {
        //console.log("W prawo w poziomie: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          horizontalPoints.push(i + "_" + j)
          rightHorizontalCounter++
        } else {
          break;
        }
      }
      i++
    }

    i = x
    j = y
    let topVerticalCounter = 0
    while (j >= 0) {
      if (j != y) {
        //console.log("W górę w pionie: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          verticalPoints.push(i + "_" + j)
          topVerticalCounter++
        } else {
          break;
        }
      }
      j--
    }

    i = x
    j = y
    let bottomVerticalCounter = 0
    while (j < board.height) {
      if (j != y) {
        //console.log("W doł w pionie: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          verticalPoints.push(i + "_" + j)
          bottomVerticalCounter++
        } else {
          break;
        }
      }
      j++
    }

    i = x
    j = y
    let leftTopCounter = 0
    while (i >= 0 && j >= 0) {
      if (i != x) {
        //console.log("Na skos w lewo w górę: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          obliqueLeftPoints.push(i + "_" + j)
          leftTopCounter++
        } else {
          break;
        }
      }
      i--
      j--
    }

    i = x
    j = y
    let rightTopCounter = 0
    while (i < board.width && j >= 0) {
      if (i != x) {
        //console.log("Na skos w prawo w górę: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          obliqueRightPoints.push(i + "_" + j)
          rightTopCounter++
        } else {
          break;
        }
      }
      i++
      j--
    }

    i = x
    j = y
    let leftBottomCounter = 0
    while (i >= 0 && j < board.height) {
      if (j != y) {
        //console.log("Na skos w lewo w doł: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          obliqueRightPoints.push(i + "_" + j)
          leftBottomCounter++
        } else {
          break;
        }

      }
      i--
      j++
    }

    i = x
    j = y
    let rightBottomCounter = 0
    while (i < board.width && j < board.height) {
      if (j != y) {
        //console.log("Na skos w prawo w doł: ", i, j)
        if (board.A[i][j] == board.selectedColor) {
          obliqueLeftPoints.push(i + "_" + j)
          rightBottomCounter++
        } else {
          break;
        }
      }
      i++
      j++
    }

    let allPoints: string[] = []
    console.log("Długości tablic(poziom, pion, lewy ukos, prawy ukos): ", horizontalPoints.length, verticalPoints.length, obliqueLeftPoints.length, obliqueRightPoints.length)
    if (horizontalPoints.length >= this.inRow - 1) {
      allPoints.push(...horizontalPoints)
    }

    if (verticalPoints.length >= this.inRow - 1) {
      allPoints.push(...verticalPoints)
    }

    if (obliqueLeftPoints.length >= this.inRow - 1) {
      allPoints.push(...obliqueLeftPoints)
    }

    if (obliqueRightPoints.length >= this.inRow - 1) {
      allPoints.push(...obliqueRightPoints)
    }

    if (allPoints.length > 0) {
      allPoints.push(x + "_" + y)
      board.clearSpecificPoints(allPoints)
      board.removeBallsFromCells(allPoints)
      board.points += allPoints.length
    }

    board.scoreBoard.innerHTML = board.points.toString()
  }
}
