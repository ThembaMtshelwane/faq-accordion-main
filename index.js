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
