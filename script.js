const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const emailInput = document.querySelector('#email');
const passwordInput2 = document.querySelector('#password2');
const error = document.querySelectorAll('.error');
const geniusz = 3;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}

const setSuccess = (element) => {
    const divWrapper = element.parentElement;
    const errorDisplay = divWrapper.querySelector('.error')

    errorDisplay.innerText = '';
}

const isValidEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(String(email).toLowerCase)
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue2 = passwordInput2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required' )
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
    } else {
        setSuccess(password);
    }

    if(passwordValue2 !== passwordValue) {
        setError(password2, 'Passwords must be the same.');
    } else if(passwordValue2 === '') {
        setError(password2, 'Please repeat your password.');
    } else {
        setSuccess(password2);
    }
}