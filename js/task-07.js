const inputEl = document.querySelector('#font-size-control')
const textFsEl = document.querySelector('#text')

inputEl.addEventListener('change', (event) => {
  textFsEl.style.fontSize = event.target.value + `px`
  console.log(textFsEl)
  console.log(event.target.value)
})
console.log(inputEl)
