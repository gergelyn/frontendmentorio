const form = document.getElementsByTagName('form')[0];

const firstName = document.getElementById('first-name');
const firstNameError = document.querySelector('#first-name + span.error-msg');
const lastName = document.getElementById('last-name');
const lastNameError = document.querySelector('#last-name + span.error-msg');
const email = document.getElementById('email-address');
const emailError = document.querySelector('#email-address + span.error-msg');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error-msg');

firstName.addEventListener('input', function(event) {
    if (firstName.validity.valid) {
        firstName.className = '';
        firstNameError.textContent = '';
        firstNameError.className = 'error-msg';
    } else {
        showFirstNameError();
    }
});
lastName.addEventListener('input', function(event) {
    if (lastName.validity.valid) {
        lastName.className = '';
        lastNameError.textContent = '';
        lastNameError.className = 'error-msg';
    } else {
        showLastNameError();
    }
});

email.addEventListener('input', function(event) {
    if (email.validity.valid) {
        email.className = '';
        emailError.textContent = '';
        emailError.className = 'error-msg';
    } else {
        showEmailError();
    }
});

password.addEventListener('input', function(event) {
    if (password.validity.valid) {
        password.className = '';
        passwordError.textContent = '';
        passwordError.className = 'error-msg';
    } else {
        showPasswordError();
    }
});

form.addEventListener('submit', function(event) {
    if(!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
    if(!firstName.validity.valid) {
        showFirstNameError();
        event.preventDefault();
    }
    if(!lastName.validity.valid) {
        showLastNameError();
        event.preventDefault();
    }
    if(!password.validity.valid) {
        showPasswordError();
        event.preventDefault();
    }
    
});

function showEmailError() {
    if(email.validity.valueMissing) {
        emailError.textContent = 'Email cannot be empty';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Looks like it is not an email';
    }
    email.className = 'error';
    emailError.className = 'error-msg active';
}

function showFirstNameError() {
    if(firstName.validity.valueMissing) {
        firstNameError.textContent = 'First Name cannot be empty';
    }
    firstName.className = 'error';
    firstNameError.className = 'error-msg active';
}

function showLastNameError() {
    if(lastName.validity.valueMissing) {
        lastNameError.textContent = 'Last Name cannot be empty';
    }
    lastName.className = 'error';
    lastNameError.className = 'error-msg active';
}

function showPasswordError() {
    if(password.validity.valueMissing) {
        passwordError.textContent = 'Password cannot be empty';
    }
    password.className = 'error';
    passwordError.className = 'error-msg active';
}
