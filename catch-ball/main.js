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

