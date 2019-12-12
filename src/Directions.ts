import { board } from "./Main"

export default class Directions {
    constructor() {
        console.log("Inicjalizacja klasy Directions")
        console.log(board)
    }

    checkLeftDirection = (x: number, y: number, pathLength: number) => {
        let startingX: number = x - 1
        if (startingX < 0) startingX = 0

        if (board.A[startingX][y] == 0) {//punkt na lewo od zaznaczonego

            board.A[startingX][y] = pathLength

            if (board.B[startingX][y][0] = "")
                board.B[startingX][y] = []

            board.B[startingX][y] = board.B[startingX][y].concat(board.B[x][y])
            board.B[startingX][y].push(x.toString() + "_" + y.toString())

        } else if (board.A[startingX][y] == "M") {

            console.log("Najkrótsza ścieżka:", pathLength)
            board.algorithm.found = true
            board.B[x][y].push(x.toString() + "_" + y.toString())
            board.algorithm.colorFields(board.B[x][y])
        }
    }

    checkTopDirection = (x: number, y: number, pathLength: number) => {
        let startingY: number = y - 1
        if (startingY < 0) startingY = 0

        if (board.A[x][startingY] == 0) {//punkt u góry zaznaczonego

            board.A[x][startingY] = pathLength

            if (board.B[x][startingY][0] = "")
                board.B[x][startingY] = []

            board.B[x][startingY] = board.B[x][startingY].concat(board.B[x][y])
            board.B[x][startingY].push(x.toString() + "_" + y.toString())

        } else if (board.A[x][startingY] == "M") {

            console.log("Najkrótsza ścieżka:", pathLength)
            board.algorithm.found = true
            board.B[x][y].push(x.toString() + "_" + y.toString())
            board.algorithm.colorFields(board.B[x][y])
        }
    }

    checkRightDirection = (x: number, y: number, pathLength: number) => {
        let finishingX: number = x + 1
        if (finishingX > board.x - 1) finishingX = board.x - 1

        if (board.A[finishingX][y] == 0) { //punkt na prawo od zaznaczonego

            board.A[finishingX][y] = pathLength

            if (board.B[finishingX][y][0] = "")
                board.B[finishingX][y] = []

            board.B[finishingX][y] = board.B[finishingX][y].concat(board.B[x][y])
            board.B[finishingX][y].push(x.toString() + "_" + y.toString())

        } else if (board.A[finishingX][y] == "M") {

            console.log("Najkrótsza ścieżka:", pathLength)
            board.algorithm.found = true
            board.B[x][y].push(x.toString() + "_" + y.toString())
            board.algorithm.colorFields(board.B[x][y])
        }
    }

    checkBottomDirection = (x: number, y: number, pathLength: number) => {
        let finishingY: number = y + 1
        if (finishingY > board.y - 1) finishingY = board.y - 1

        if (board.A[x][finishingY] == 0) { //punkt u dołu od zaznaczonego

            board.A[x][finishingY] = pathLength

            if (board.B[x][finishingY][0] = "")
                board.B[x][finishingY] = []

            board.B[x][finishingY] = board.B[x][finishingY].concat(board.B[x][y])
            board.B[x][finishingY].push(x.toString() + "_" + y.toString())

        } else if (board.A[x][finishingY] == "M") {

            console.log("Najkrótsza ścieżka:", pathLength)
            board.algorithm.found = true
            board.B[x][y].push(x.toString() + "_" + y.toString())
            board.algorithm.colorFields(board.B[x][y])
        }
    }
}