import Board from './Board'

class Main {

    constructor() {
        board = new Board()
    }
}

export let board: Board

document.addEventListener("DOMContentLoaded", () => { let main = new Main() })