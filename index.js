const buttons = document.querySelectorAll('.add-minus-icon')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img')

    if (img.src.includes('icon-plus.svg')) {
      img.src = './assets/images/icon-minus.svg'
    } else {
      img.src = './assets/images/icon-plus.svg'
    }
  })
})
