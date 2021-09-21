// let ellipses = [
//   { x: 0, y: 0, diameter: 100 },
//   { x: 100, y: 50, diameter: 40 },
// ]

let myKey
let colors = {
  backgroundColor: 'red',
  strokeColor: 'blue'
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  myKey = "backgroundColor"

  let text1 = "hello"
  let text2 = "hello2"
  console.log(text1 === text2)
}
function draw() {
  background(0)


  // if(width > 10)
  
  // for (let i = 0; i < ellipses.length; i++) {
  //   const attributes = ellipses[i]
  //   const x = attributes.x
  //   const y = attributes.y
  //   const diam = attributes.diameter
  //   // console.log(attributes)
  //   ellipse(x, y, diam)
  // }
  
  // console.log(colors[myKey])
}

function mousePressed() {
  myKey = 'strokeColor'
}

// // for (let i = myArray.length - 1; i >= 0; i--) {
// //   console.log(myArray[i])
// // }

// // for (let element of myArray) {
// //   logValue(element)
// // }

// myArray.reverse().forEach(logValue)

// function logValue(value, index) {
//   console.log(value, index)
// }
// console.log(myArray)
// myArray.push(4);

// console.log(myArray)
