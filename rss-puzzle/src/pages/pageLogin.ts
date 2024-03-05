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
inputFirstName.autocomplete = 'off';
inputFirstName.pattern = '^[A-Za-z\\-]+$';
inputFirstName.minLength = 3;
inputFirstName.title = 'Enter first name (only latin letters and "-")';
formLogin.append(inputFirstName);

const errorFirstName = document.createElement('p');
errorFirstName.classList.add('error-validate');
formLogin.append(errorFirstName);

const inputLastName = document.createElement('input');
inputLastName.id = 'input-last-name';
inputLastName.placeholder = 'Last Name';
inputLastName.required = true;
inputLastName.autocomplete = 'off';
inputLastName.pattern = '^[A-Za-z\\-]+$';
inputLastName.minLength = 4;
inputLastName.title = 'Enter last name (only latin letters and "-")';
formLogin.append(inputLastName);

const errorLastName = document.createElement('p');
errorLastName.classList.add('error-validate');
formLogin.append(errorLastName);

const btnLogin = document.createElement('button');
btnLogin.id = 'btn-login';
btnLogin.disabled = true;
btnLogin.textContent = 'LogIn';
formLogin.append(btnLogin);

function checkInputs() {
  if (inputFirstName.value !== '' && inputLastName.value !== '') btnLogin.disabled = false;
  else btnLogin.disabled = true;
}

function login() {
  const data = {
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
  };
  localStorage.setItem('user', JSON.stringify(data));
}

function validateInputs() {
  let validInputCount = 0;

  if (inputFirstName.value.length < 3) errorFirstName.textContent = 'enter min length 3 chars';
  else if (inputFirstName.validity.valid === false) errorFirstName.textContent = 'enter only latin letters or "-"';
  else if (inputFirstName.value[0] !== inputFirstName.value[0].toUpperCase()) {
    errorFirstName.textContent = 'enter first uppercase letter';
  } else {
    errorFirstName.textContent = '';
    validInputCount += 1;
  }

  if (inputLastName.value.length < 4) errorLastName.textContent = 'enter min length 4 chars';
  else if (inputLastName.validity.valid === false) errorLastName.textContent = 'enter only latin letters or "-"';
  else if (inputLastName.value[0] !== inputLastName.value[0].toUpperCase()) {
    errorLastName.textContent = 'enter first uppercase letter';
  } else {
    errorLastName.textContent = '';
    validInputCount += 1;
  }

  if (validInputCount === 2) login();
}

inputFirstName?.addEventListener('input', () => {
  checkInputs();
});

inputLastName?.addEventListener('input', () => {
  checkInputs();
});

btnLogin.addEventListener('click', (event) => {
  event?.preventDefault();
  validateInputs();
});

export { pageLogin };
