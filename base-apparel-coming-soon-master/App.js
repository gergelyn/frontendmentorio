const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('span.error-msg');

email.addEventListener('input', function(event) {
    if (email.validity.valid) {
        email.className = '';
        emailError.textContent = '';
        emailError.className = 'error-msg';
    } else {
        showEmailError();
    }
});

form.addEventListener('submit', function(event) {
    if(!email.validity.valid) {
        showEmailError();
        event.preventDefault;
    }
});

function showEmailError() {
    if(email.validity.valueMissing) {
        emailError.textContent = 'Email cannot be empty';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Please provide a valid email address'
    }
    email.className = 'error';
    emailError.className = 'error-msg active';
}