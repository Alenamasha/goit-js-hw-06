const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', (event) => {
  console.log(formEl)
  event.preventDefault()
  const {
    elements: { email, password },
  } = event.currentTarget

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!')
  }
  const data = {
    email: email.value,
    password: password.value,
  }
  console.log(data)
  event.currentTarget.reset()
})
