import '../pages/pageLogin.css';

const pageLogin = document.createElement('section');
pageLogin.classList.add('page-login');

const formLogin = document.createElement('form');
formLogin.classList.add('page-login__form');
pageLogin.append(formLogin);

const inputFirstName = document.createElement('input');
inputFirstName.id = 'input-first-name';
inputFirstName.placeholder = 'First Name';
inputFirstName.required = true;
formLogin.append(inputFirstName);

const inputLastName = document.createElement('input');
inputLastName.id = 'input-last-name';
inputLastName.placeholder = 'Last Name';
inputLastName.required = true;
formLogin.append(inputLastName);

const btnLogin = document.createElement('button');
btnLogin.id = 'btn-login';
btnLogin.disabled = true;
btnLogin.textContent = 'LogIn';
formLogin.append(btnLogin);

function checkInputs() {
  if (inputFirstName.value !== '' && inputLastName.value !== '') btnLogin.disabled = false;
  else btnLogin.disabled = true;
}

inputFirstName?.addEventListener('input', () => {
  checkInputs();
});

inputLastName?.addEventListener('input', () => {
  checkInputs();
});

export { pageLogin };
