'use strict'

let myVariable
let x = 0
let speed = 10
let way = 1 // -1

function setup() {
  createCanvas(windowWidth, windowHeight)

  // put setup code here
}

function draw() {
  // console.log(mouseY)
  background(255, 0, 0)

  
  x += speed * way

  // la balle touche le mur du coup on va dans l'autre sens
  if(x > windowWidth) {
    way = -1
    console.log('right limit reached')
  }
  if(x < 0) {
    way = 1
    console.log('left limit reached')
  }
  
  ellipse(x, windowHeight * 0.5, 30)

  // myVariable = mouseX + ', ' + mouseY

  // text(myVariable, windowWidth / 2, windowHeight / 2)
  // put drawing code here
}

function windowResized() {
  console.log(myVariable)
  resizeCanvas(windowWidth, windowHeight)
}
