function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

const controlsEl = document.querySelector("#controls")
const createEl = document.querySelector("[data-create]")
const boxesEl = document.querySelector("#boxes")
const destroyEl = document.querySelector("[data-destroy]")

function createBoxes(amount) {
  let markup = ""
  for (let i = 0; i < amount; i += 1) {
    const size = 30+i*10
    markup += `<div style = "width: ${size}px; height: 
    ${size}px; background-color: ${getRandomHexColor()}"></div>`

  }
  boxesEl.innerHTML = ""
  boxesEl.insertAdjacentHTML("beforeend", markup)


}

createEl.addEventListener("click", handleCreate)
function handleCreate() {
  const amount = Number(controlsEl.firstElementChild.value)
  if (amount) {
  createBoxes(amount)
}
}

destroyEl.addEventListener("click", handleDestroy)
function handleDestroy() {
  boxesEl.innerHTML = ""
}














// const controlsEl = document.querySelector('#controls')
// const datacreateEl = document.querySelector('[data-create]')
// const datadestroyEl = document.querySelector('[data-destroy]')
// const boxesEl = document.querySelector('#boxes')

// function createBoxes(amount) {
//   const allElBox = []
//   for (let i = 0; i < amount; i++) {
//     const divEl = document.createElement('div')
//     divEl.style.height = `${30 + 10 * i}px`
//     divEl.style.width = `${30 + 10 * i}px`
//     divEl.style.background = getRandomHexColor()
//     allElBox.push(divEl)
//     console.log(divEl)
//   }
//   return allElBox
// }
// console.log(createBoxes)

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`
// }

// const btnCreateEl = document.querySelector('[data-create]')
// const btnDestroyEl = document.querySelector('[data-destroy]')
// const numberInputEl = document.querySelector('#controls input')
// const boxesEls = document.getElementById('boxes')

// const createBoxes = () => {
//   const createdBoxes = []
//   const totalSize = numberInputEl.value * 10 + 30
//   for (let box = 30; box < totalSize; box += 10) {
//     let boxesStyle = `<div style="background-color: ${getRandomHexColor()}; width: ${box}px; height: ${box}px"></div>`
//     createdBoxes.push(boxesStyle)
//   }
//   const string = createdBoxes.join('')
//   boxesEls.innerHTML = string
// }

// const destroyBoxes = () => {
//   boxesEls.innerHTML = ''
//   numberInputEl.value = null
// }
// btnCreateEl.addEventListener('click', createBoxes)
// btnDestroyEl.addEventListener('click', destroyBoxes)
