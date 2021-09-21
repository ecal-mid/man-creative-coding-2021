// $('.main-container--elem').on('click', () => {
//   console.log('you clicked me')
// })

$(document).ready(() => {
  console.log('ready!')

  const elem = $('.main-container--elem')
  elem.click(function () {
    elem.css('background-color', 'yellow')
  })
})

window.onload = () => {
  const imageContainer = document.querySelector('.main-container--elem')
  // const images = elem.querySelectorAll('img')
  console.log(imageContainer)
  // elem.onclick = () => {
  //   for (let image of images) {
  //     console.log(image)
  //     image.src = '/assets/images/random-google-image.jpg'
  //   }
  // }

  const repetitions = 100

  for(let n = 0; n < repetitions; n++) {
    const src = '/assets/images/random-google-image.jpg'
    createImage(src, imageContainer, n)
  }

  function createImage(source, parent, index) {
    const img = document.createElement('img')
    img.src = source
    img.title = index

    img.onclick = () => {

      // if(img.classList.contains('hidden')) {
      //   // remove
      //   img.classList.remove('hidden')
      // } else {
      //   // add
      //   img.classList.add('hidden')
      // }
      img.classList.toggle('hidden')

    }

    parent.appendChild(img)
  }
}


