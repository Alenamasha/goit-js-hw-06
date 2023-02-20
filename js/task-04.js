let counterValue = 0

const spanValue = document.querySelector('#value')

const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')

const handleClick = () => {
  spanValue.textContent = counterValue -= 1
}

const addClick = () => {
  spanValue.textContent = counterValue += 1
}

btnDecrement.addEventListener('click', handleClick)
btnIncrement.addEventListener('click', addClick)
