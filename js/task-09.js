function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const widgetEl = document.querySelector('.widget')
const bodyEl = document.querySelector('body')
const colorChangeEl = document.querySelector('.change-color')

colorChangeEl.addEventListener('click', (event) => {
  bodyEl.style.background = getRandomHexColor()
  colorChangeEl.textContent = getRandomHexColor()
})






















