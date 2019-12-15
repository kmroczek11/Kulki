export default class Ball {
    constructor(color: string){
        let ball: HTMLElement = document.createElement("div")
        ball.style.background = color
        ball.style.width = "80px"
        ball.style.height = "80px"
        ball.style.borderRadius = "80px"
        ball.classList.add(color)
        return ball
    }
}