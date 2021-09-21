'use strict'

function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)

  
}

function draw() {
  // background(0, 0, 0, 50)
  background('black')

  push()
  translate(mouseX, mouseY)
  // rotate(frameCount)

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 2; x++) {
      // console.log(x, y)
      ellipse(x * 20, y * 20, 20)
    }
  }

  pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
