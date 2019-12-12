import { board } from "./Main"
import Directions from "./Directions"

export default class Algorithm {
    public found: boolean = false;
    private calls: number = 0
    private directions: Directions

    constructor(x: number, y: number) {
        console.log("Inicjalizacja klasy Algorithm")
        this.directions =  new Directions()
        this.createPath(x, y, 0)
    }

    colorFields = (fields: string[]) => {
        fields = fields.filter(field => field != "")
        console.log("Pola: ", fields)

        for (let i: number = 0; i < fields.length; i++) {
            console.log("Pole: ", fields[i])
            let td = document.getElementsByClassName(fields[i])[0] as HTMLElement
            td.style.backgroundColor = "pink"
        }
    }

    createPath = (x: number, y: number, pathLength: number) => {
        this.calls += 1
        console.log("Wywołanie nr: ", this.calls)

        console.log("X: ", x, " Y: ", y, " Długość: ", pathLength)

        pathLength = pathLength + 1

        let startingX: number = x - 1
        let finishingX: number = x + 1
        let startingY: number = y - 1
        let finishingY: number = y + 1
        console.log(startingX, finishingX, startingY, finishingY)

        if (startingX < 0) startingX = 0
        if (finishingX > board.x - 1) finishingX = board.x - 1
        if (startingY < 0) startingY = 0
        if (finishingY > board.y - 1) finishingY = board.y - 1

        console.log("Pary punktów: (", startingX, ",", y, "), (", x, ",", startingY, "), (", finishingX, ",", y, "), (", x, ",", finishingY, ")")

        // if (board.A[startingX][y] == 0) {//punkt na lewo od zaznaczonego

        //     board.A[startingX][y] = pathLength

        //     if (board.B[startingX][y][0] = "")
        //         board.B[startingX][y] = []

        //     board.B[startingX][y] = board.B[startingX][y].concat(board.B[x][y])
        //     board.B[startingX][y].push(x.toString() + "_" + y.toString())

        // } else if (board.A[startingX][y] == "M") {

        //     console.log("Najkrótsza ścieżka:", pathLength)
        //     this.found = true
        //     board.B[x][y].push(x.toString() + "_" + y.toString())
        //     this.colorFields(board.B[x][y])
        // }

        // if (board.A[x][startingY] == 0) {//punkt u góry zaznaczonego

        //     board.A[x][startingY] = pathLength

        //     if (board.B[x][startingY][0] = "")
        //         board.B[x][startingY] = []

        //     board.B[x][startingY] = board.B[x][startingY].concat(board.B[x][y])
        //     board.B[x][startingY].push(x.toString() + "_" + y.toString())

        // } else if (board.A[x][startingY] == "M") {

        //     console.log("Najkrótsza ścieżka:", pathLength)
        //     this.found = true
        //     board.B[x][y].push(x.toString() + "_" + y.toString())
        //     this.colorFields(board.B[x][y])
        // }

        // if (board.A[finishingX][y] == 0) { //punkt na prawo od zaznaczonego

        //     board.A[finishingX][y] = pathLength

        //     if (board.B[finishingX][y][0] = "")
        //         board.B[finishingX][y] = []

        //     board.B[finishingX][y] = board.B[finishingX][y].concat(board.B[x][y])
        //     board.B[finishingX][y].push(x.toString() + "_" + y.toString())

        // } else if (board.A[finishingX][y] == "M") {

        //     console.log("Najkrótsza ścieżka:", pathLength)
        //     this.found = true
        //     board.B[x][y].push(x.toString() + "_" + y.toString())
        //     this.colorFields(board.B[x][y])
        // }

        // if (board.A[x][finishingY] == 0) { //punkt u dołu od zaznaczonego

        //     board.A[x][finishingY] = pathLength

        //     if (board.B[x][finishingY][0] = "")
        //         board.B[x][finishingY] = []

        //     board.B[x][finishingY] = board.B[x][finishingY].concat(board.B[x][y])
        //     board.B[x][finishingY].push(x.toString() + "_" + y.toString())

        // } else if (board.A[x][finishingY] == "M") {

        //     console.log("Najkrótsza ścieżka:", pathLength)
        //     this.found = true
        //     board.B[x][y].push(x.toString() + "_" + y.toString())
        //     this.colorFields(board.B[x][y])
        // }

        this.directions.checkLeftDirection(x, y, pathLength)
        this.directions.checkTopDirection(x, y, pathLength)
        this.directions.checkRightDirection(x, y, pathLength)
        this.directions.checkBottomDirection(x, y, pathLength)

        console.log(board.B)

        if (!this.found) {
            for (let i: number = 0; i < board.x; i++) {
                for (let j: number = 0; j < board.y; j++) {
                    if (board.A[i][j] == pathLength) {
                        this.createPath(i, j, pathLength)
                    }
                }
            }
        }

        board.refreshBoard()
    }
}
