import { board } from "./Main";
import Directions from "./Directions";

export default class Algorithm {
  public found: boolean = false;
  private calls: number = 0;
  private directions: Directions;

  constructor() {
    console.log("Inicjalizacja klasy Algorithm");
    this.directions = new Directions();
  }

  createPath = (x: number, y: number, pathLength: number) => {
    this.calls += 1;
    console.log("Wywołanie nr: ", this.calls);

    console.log("X: ", x, " Y: ", y, " Długość: ", pathLength);

    pathLength = pathLength + 1;

    if (board.metasX < board.startsX && board.metasY <= board.startsY) {
      //lewy górny
      this.directions.checkDirection(x, y, "top", pathLength);
      this.directions.checkDirection(x, y, "left", pathLength);
    } else if (board.metasX >= board.startsX && board.metasY < board.startsY) {
      //lewy dolny
      this.directions.checkDirection(x, y, "right", pathLength);
      this.directions.checkDirection(x, y, "top", pathLength);
    } else if (board.metasX < board.startsX && board.metasY >= board.startsY) {
      //prawy dolny
      this.directions.checkDirection(x, y, "left", pathLength);
      this.directions.checkDirection(x, y, "bottom", pathLength);
    } else if (board.metasX >= board.startsX && board.metasY >= board.startsY) {
      //prawy górny
      this.directions.checkDirection(x, y, "right", pathLength);
      this.directions.checkDirection(x, y, "bottom", pathLength);
    }

    console.log(board.B);

    if (!this.found && this.calls < Math.pow(board.width, 3)) {
      for (let i: number = 0; i < board.width; i++) {
        for (let j: number = 0; j < board.height; j++) {
          if (board.A[i][j] == pathLength) {
            this.createPath(i, j, pathLength);
          }
        }
      }
    }
  };
}
