const listEl = document.querySelector('#categories')
console.log('Number of categories: ', listEl.children)
for (const item of listEl.children) {
  console.log(
    `Category: ${item.firstElementChild.textContent} 
    Elements: ${item.lastElementChild.children.length}`,
  )
}
