const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('confim-password')

form.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // get the value from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Insert an username')
    } else {
        // add success class
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Insert an email')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Insert a valid email')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Insert a password')
    } else {
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Insert a password')
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Passwords do not match')
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small')

    // add error message inside small
    small.innerText = message

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
}