'use strict'

let color1, color2

function setup() {
  createCanvas(100, 100)
  windowResized()

  angleMode(DEGREES)
  noStroke()

  color1 = color('red')
  color2 = color('white')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function drawYinYang(centerX, centerY, diameter) {
  const smallDiameter = diameter * 0.5
  const dotDiameter = smallDiameter * 0.33

  push()

  translate(centerX, centerY)

  // half circle
  fill(color1)
  arc(0, 0, diameter, diameter, 0, 180)

  fill(color2)
  arc(0, 0, diameter, diameter, 180, 0)

  //small circles
  fill(color2)
  ellipse(smallDiameter / 2, 0, smallDiameter)

  fill(color1)
  ellipse(-smallDiameter / 2, 0, smallDiameter)

  // dots drawing
  fill(color1)
  ellipse(smallDiameter / 2, 0, dotDiameter)

  fill(color2)
  ellipse(-smallDiameter / 2, 0, dotDiameter)

  pop()
}

function draw() {
  // let diameter

  // if (height < width) {
  //   diameter = height * 0.8
  // } else {
  //   diameter = width * 0.8
  // }
  // const diameter = (height < width) ? height * 0.8 : width * 0.8

  const diameter = min(width, height) * 0.8

  const smallDiameter = diameter * 0.5
  const x = width / 2
  const y = height / 2
  const angle = frameCount

  background(color1)

  translate(x, y)

  // big circle
  push()
  rotate(angle)
  drawYinYang(0, 0, diameter)

  // left circle
  const smallDiameterFix = smallDiameter + 1 // add 1 more pixel to hide the stroke
  const smallAngle = -angle * 2

  push()
  translate(smallDiameter / 2, 0)

  rotate(smallAngle)

  drawYinYang(0, 0, smallDiameterFix)
  pop()

  // right circle
  push()
  translate(-smallDiameter / 2, 0)
  rotate(smallAngle)

  drawYinYang(0, 0, smallDiameterFix)
  pop()

  pop()
}
