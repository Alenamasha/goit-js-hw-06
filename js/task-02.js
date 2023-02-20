const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const listEl = document.querySelector('#ingredients')

const listElements = []

for (const ingredient of ingredients) {
  const listElement = document.createElement('li')
  listElement.classList.add('item')
  listElement.innerHTML = ingredient
  listElements.push(listElement)
}

console.log(listElements)

listEl.append(...listElements)
console.log(listEl)
