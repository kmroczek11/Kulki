import { board } from "./Main";
import Directions from "./Directions";

export default class Algorithm {
  public found: boolean = false;
  public calls: number = 0;
  private directions: Directions;

  constructor() {
    console.log("Inicjalizacja klasy Algorithm");
    this.directions = new Directions();
  }

  createPath = (x: number, y: number, pathLength: number) => {
    this.found = false
    
    pathLength = pathLength + 1;

    var f: any = []

    f.push([
      this.directions.checkDirection(x, y, "top", pathLength),
      this.directions.checkDirection(x, y, "left", pathLength),
      this.directions.checkDirection(x, y, "right", pathLength),
      this.directions.checkDirection(x, y, "bottom", pathLength)])

    do {
      this.calls += 1;
      //console.log("Wywołanie nr: ", this.calls);

      var functionFlatArray: any = []
      f.forEach((arrOfFunc: any) => functionFlatArray = functionFlatArray.concat(arrOfFunc))

      var f2: any = []

      functionFlatArray.forEach((func: any) => {
        if (func != undefined) {
          f2.push(func())
        }
      })

      f = f2
    } while (f.length > 0)

    if (!this.found){
      console.log("Brak dojścia")
    }

  };
}
