const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

const checkEamil = (input) => {
    const reg = /^\S+@\S+\.\S+$/
    if (reg.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

const checkedRequired = (inputArr) => {
    inputArr.forEach((input) => {
        if (!input.value.trim()) {
            showError(input, `${input.name} is required`)
        } else {
            showSuccess(input)
        }
    })
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${input.name} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${input.name} must be at less than ${max} characters`)
    }
}

const checkPasswords = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkedRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEamil(email)
    checkPasswords(password, password2)
})