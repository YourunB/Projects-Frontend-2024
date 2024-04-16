import './pageLogin.sass';
import '../assets/images/svg/info.svg';
import { formLogin, btnLogin, inputName, inputPass } from '../components/formLogin';
import { infoApp, btnInfo } from '../components/infoApp';
import { apiAuthorization } from '../components/apiChat';
import { v4 as uuidv4 } from 'uuid';
import { modalWindow, modalFormText, modalFormTitle } from '../components/modalWindow';
import { setUserNameToHeader } from './pageChat';

const pageLogin = document.createElement('main');
pageLogin.classList.add('page-login__main');

pageLogin.append(formLogin, btnInfo, infoApp, modalWindow);

function addUserToSessionStorage(uId: string, uName: string, uPass: string) {
  const data = {
    id: uId,
    name: uName,
    pass: uPass,
  };
  sessionStorage.setItem('user', JSON.stringify(data));
}

function openChat() {
  const id = uuidv4();
  apiAuthorization(id, inputName.value, inputPass.value).then((data: unknown) => {
    if (typeof data === 'string') {
      const obj = JSON.parse(data);
      console.log(obj);
      if (obj.type !== 'ERROR') {
        addUserToSessionStorage(obj.id, obj.payload.user.login, inputPass.value);
        location.hash = '#chat';
        clearInputs();
        setUserNameToHeader();
      }
      if (obj.type === 'ERROR') {
        modalWindow.classList.add('modal_show');
        modalFormText.textContent = obj.payload.error;
        modalFormTitle.textContent = obj.type;
      }
    }
  });
}

function clearInputs() {
  btnLogin.disabled = true;
  inputName.value = '';
  inputName.classList.remove('form-login__input_validate');
  inputPass.value = '';
  inputPass.classList.remove('form-login__input_validate');
}

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (btnLogin.disabled === false) {
    openChat();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (btnLogin.disabled === false) {
      openChat();
    }
  }
});

export { pageLogin };
