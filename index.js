const buttons = document.querySelectorAll('.add-minus-icon')
const items = document.querySelectorAll('li')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img')
    const info = items[index].querySelector('p')

    if (img.src.includes('icon-plus.svg')) {
      img.src = './assets/images/icon-minus.svg'
      info.classList.remove('info-hide')
    } else {
      img.src = './assets/images/icon-plus.svg'
      info.classList.add('info-hide')
    }
  })
})

const changeImage = () => {
  const img = document.getElementById('background-pattern')

  if (window.innerWidth > 516) {
    img.src = './assets/images/background-pattern-desktop.svg'
  } else {
    img.src = './assets/images/background-pattern-mobile.svg'
  }
}

window.addEventListener('resize', changeImage)

changeImage()
