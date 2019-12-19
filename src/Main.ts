import Board from './Board'

class Main {

    constructor() {
        board = new Board()
        board.initializeBoard()
        //board.createHelpBoard()
        //board.refreshHelpBoard()
        board.createScoreboard()
        board.createUpcomingBallsBoard()
        board.addClicks()
        board.addHovers()
    }
}

export let board: Board

document.addEventListener("DOMContentLoaded", () => { let main = new Main() })