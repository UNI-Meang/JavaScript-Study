const canvas = document.querySelector("canvas")
const score = document.querySelector("#score")

// To get 2d animation from canvas
const c = canvas.getContext("2d")

// 캔버스 값
canvas.width = innerWidth
canvas.height = innerHeight - 3

const bubbleArray = []
const clickEventArray = []

let scoreCount = 0

// 버블 클래스
class Bubble {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.fillStyle = this.color
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fill()
    }
    update() {
        this.draw()
        this.radius += 0.5
        // Stop when two circles are correlates
        bubbleArray.forEach((bubble, bubbleIndex) => {
            let dist = Math.hypot(this.x - bubble.x, this.y - bubble.y) // 두 버블 사이에 거리 계산
            if ((dist - this.radius - bubble.radius) < 0.5 && bubble != this) {
                console.log(dist - this.radius - bubble.radius);
                // cancelAnimationFrame(animationId) // To stop the game 
            }
        })
    }
}

// To get new bubble
function getBubble() {
    let x = Math.random() * canvas.width // to make random x position
    let y = Math.random() * canvas.height // to make random y position
    let radius = 20
    let color = `rgba(${Math.random()*360},${Math.random()*270},${Math.random()*180},0.7)` // Randomizing the color
    bubbleArray.push(new Bubble(x, y, radius, color))
}