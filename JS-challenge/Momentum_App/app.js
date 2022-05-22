const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function loginSubmit(e){
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add('hidden');
}

loginForm.addEventListener('submit',loginSubmit);

