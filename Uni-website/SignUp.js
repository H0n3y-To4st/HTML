const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('Login', (e) => {
    e.preventDefault()

    checkInputs();

    if (user.Value == '' || user.Value == null) {
        // result in error
    setAsError(username, 'Please provide a Username')
    } else {
        setAsSuccess(username)
    }

    if (email.Value === '' || email.Value == null) {
        // result in error
    setAsError(email, 'Please provide an email')
    } else {
        setAsSuccess(email)
    }

    if (password.Value === '' || password.Value == null) {
        // result in error
    setAsError(password, 'Please provide a password')
    } else {
        setAsSuccess(password)
    }
})
