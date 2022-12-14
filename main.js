window.addEventListener('scroll', () => {
  document
    .querySelector('nav')
    .classList.toggle('window-scrolled', window.scrollY > 0)
})

const textButtons = document.querySelectorAll('.contact__btn')

textButtons.forEach(textButton => {
  let text = textButton.querySelector('p')
  text.innerHTML = text.innerHTML.split('').map(
      (character, index) => `<span style="transform:rotate(${index * 20}deg)">${character}</span>`).join('')
})

