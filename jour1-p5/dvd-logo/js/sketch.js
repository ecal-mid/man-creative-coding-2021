'use strict'
let x = 0
let y = 0

let wayY = 1 // -1
let wayX = 1 // -1

let dvdLogo

let dvdColor

const SPEED = 3

function setup() {
  createCanvas(windowWidth, windowHeight)

  background(0, 0, 0)
  imageMode(CENTER)

  dvdColor = color('red')

  // put setup code here
}

function draw() {
  // background(0, 0, 0, 50)
  background('black')

  x += SPEED * wayX
  y += SPEED * wayY

  // la balle touche le mur du coup on va dans l'autre sens
  if (x > width) {
    wayX = -1

    dvdColor = randomColor()
  } else if (x < 0) {
    wayX = 1

    dvdColor = randomColor()
  }

  if (y > height) {
    wayY = -1

    dvdColor = randomColor()
  } else if (y < 0) {
    wayY = 1

    dvdColor = randomColor()
  }

  push()
  tint(dvdColor)
  image(dvdLogo, x, y)
  pop()

  // myVariable = mouseX + ', ' + mouseY
  // text(myVariable, windowWidth / 2, windowHeight / 2)
  // put drawing code here
}

function randomColor(r = 255, g = 255, b = 255) {
  return color(random(r), random(g), random(b))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function preload() {
  dvdLogo = loadImage('./assets/DVD_logo.svg') // relative path
}
