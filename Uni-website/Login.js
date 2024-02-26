const form = document.getElementById('form')
const username = document.getElementById('user')
const password = document.getElementById('password')

form.addEventListener('Login', (e) => {
    e.preventDefault()

    checkInputs();

    if (username.value == '' || username.Value == null) {
        // result in error
    setAsError(username, 'Please provide a Username')
    } else {
        setAsSuccess(username)
    }

    if (password.Value === '' || password.value == null) {
        // result in error
    setAsError(password, 'Please provide a password')
    } else {
        setAsSuccess(password)
    }
})
