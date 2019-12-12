import Algorithm from './Algorithm'

export default class Board {
    public x: number = 10
    public y: number = 10
    public A: (number | string)[][];
    public B: Array<string>[][];
    private table: HTMLElement;
    private status: string = "S"
    private startsX: number
    private startsY: number
    public algorithm: Algorithm

    constructor() {
        this.initializeBoard()
    }

    initializeBoard = () => {
        this.A = []
        this.B = []

        for (let i: number = 0; i < this.x; i++) {//wypełnienie tablicy A zerami
            this.A[i] = []
            for (let j: number = 0; j < this.y; j++) {
                this.A[i][j] = 0
            }
        }

        for (let i: number = 0; i < this.x; i++) {//wypełnienie tablicy B tablicami
            this.B[i] = []
            for (let j: number = 0; j < this.y; j++) {
                this.B[i][j] = [""]
            }
        }

        this.table = document.createElement("table")
        this.table.classList.add("board")
        for (let i: number = 0; i < this.x; i++) {//wypełnienie tabeli wartościami z tablicy A
            let tr: HTMLElement = document.createElement("tr")
            for (let j: number = 0; j < this.y; j++) {
                let td = document.createElement("td")
                td.classList.add(i + "_" + j)
                tr.appendChild(td)
            }
            this.table.appendChild(tr)
        }
        document.body.appendChild(this.table)

        // for (var i: number = 0; i < x; i++) {//wypisanie tablicy A
        //     for (var j: number = 0; j < y; j++) {
        //         console.log(this.A[i][j])
        //     }
        // }
        this.refreshBoard()

        // for (let i: number = 0; i < 3; i++) {
        //     let randX: number = Math.floor((Math.random() * this.x) + 0);
        //     let randY: number = Math.floor((Math.random() * this.y) + 0);
        //     this.fillWithX(randX, randY)
        // }
        
        this.fillWithX(0, 1)
        this.fillWithX(2, 1)
        this.fillWithX(2, 3)

        this.addClicks()
    }

    refreshBoard = () => {
        console.log("Odświeżenie tablicy A")
        for (let i: number = 0; i < this.x; i++) {
            for (let j: number = 0; j < this.y; j++) {
                let tds = Array.from(document.getElementsByClassName(i + "_" + j))
                tds.forEach(td => {
                    td.innerHTML = String(this.A[i][j])
                });
            }
        }
    }

    fillWithX = (x: number, y: number) => {

        if (this.A[x][y] != "X")
            this.A[x][y] = "X"
        else
            this.fillWithX(x, y)

        this.refreshBoard()
    }

    addClicks = () => {
        let tds = Array.from(document.getElementsByTagName("td"))
        tds.forEach(td => {
            td.addEventListener("click", () => { this.addStartOrMeta(td.className) })
        });
    }

    addStartOrMeta = (c: string) => {
        let x: number = parseInt(c.split("_")[0]);
        let y: number = parseInt(c.split("_")[1]);
        if (this.A[x][y] == 0) {
            this.A[x][y] = this.status
            this.refreshBoard()
            if (this.status == "S") {
                this.startsX = x
                this.startsY = y
                this.status = "M"
            } else {
                this.algorithm = new Algorithm(this.startsX, this.startsY)
            }
        }
    }
}
