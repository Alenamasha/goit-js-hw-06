// const inputEl = document.querySelector('#validation-input')

// inputEl.addEventListener('blur', (event) => {
//   const length = Number(event.target.dataset.length)
//   console.log(length)

//   if (event.target.value.length === length) {
//     event.target.classList.add('valid')
//     event.target.classList.remove('invalid')
//   } else {
//     event.target.classList.add('invalid')
//     event.target.classList.remove('valid')
//   }
// })
// console.log(inputEl)

const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', (event) => {
  if (event.target.value.length !== Number(event.target.dataset.length)) {
    event.target.classList.add('invalid')
    event.target.classList.remove('valid')
    console.log('not enough!')
    return
  }
  event.target.classList.add('valid')
  event.target.classList.remove('invalid')
  console.log('Accept!')
})
