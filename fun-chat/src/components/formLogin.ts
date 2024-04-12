import './formLogin.sass';

const formLogin = document.createElement('form');
formLogin.classList.add('form-login');

const labelName = document.createElement('label');
labelName.textContent = 'Name';
labelName.htmlFor = 'input-name';

const labelPass = document.createElement('label');
labelPass.textContent = 'Password';
labelPass.htmlFor = 'input-pass';

const inputName = document.createElement('input');
inputName.classList.add('form-login__input');
inputName.id = 'input-name';
inputName.autocomplete = 'off';
inputName.type = 'text';
inputName.minLength = 3;
inputName.pattern = '^[A-Z][A-Za-z\\-]*$';
inputName.required = true;

const inputPass = document.createElement('input');
inputPass.classList.add('form-login__input');
inputPass.id = 'input-pass';
inputPass.autocomplete = 'off';
inputPass.type = 'password';
inputPass.minLength = 8;
inputPass.pattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
inputPass.required = true;

const nameErr = document.createElement('p');
nameErr.classList.add('form-login__err');
nameErr.id = 'name-err';

const passErr = document.createElement('p');
passErr.classList.add('form-login__err');
passErr.id = 'pass-err';

const btnLogin = document.createElement('button');
btnLogin.classList.add('form-login__btn');
btnLogin.id = 'btn-login';
btnLogin.type = 'submit';
btnLogin.textContent = 'Login';
btnLogin.disabled = true;

formLogin.append(labelName, inputName, nameErr, labelPass, inputPass, passErr, btnLogin);

function checkValidate() {
  if (inputName.validity.valid && inputPass.validity.valid) btnLogin.disabled = false;
  else btnLogin.disabled = true;
}

inputName.addEventListener('input', () => {
  inputName.classList.add('form-login__input_validate');
  if (inputName.validity.valid) nameErr.textContent = '';
  if (!inputName.validity.valid) {
    let msgErr = '';
    if (inputName.value.length < 3) msgErr = '- min length: 3</br>';
    if (inputName.value.length > 0) {
      if (inputName.value[0] !== inputName.value[0].toUpperCase()) msgErr += '- first letter is capitalized</br>';
    }
    if (/[а-яёА-ЯЁ]/.test(inputName.value)) msgErr += '- only Latin letters';
    nameErr.innerHTML = msgErr;
  }
  checkValidate();
});

inputPass.addEventListener('input', () => {
  inputPass.classList.add('form-login__input_validate');
  if (inputPass.validity.valid) passErr.textContent = '';
  if (!inputPass.validity.valid) {
    let msgErr = '';
    if (inputPass.value.length < 8) msgErr = '- min length: 8</br>';
    if (!/[a-z]/.test(inputPass.value)) msgErr += '- need small letter</br>';
    if (!/[A-Z]/.test(inputPass.value)) msgErr += '- need capitalized letter</br>';
    if (!/[0-9]/.test(inputPass.value)) msgErr += '- need number</br>';
    passErr.innerHTML = msgErr;
  }
  checkValidate();
});

export { formLogin, btnLogin, inputName, inputPass };
