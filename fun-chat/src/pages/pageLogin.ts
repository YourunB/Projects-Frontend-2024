import './pageLogin.sass';
import '../assets/images/svg/info.svg';
import { formLogin, btnLogin, inputName, inputPass } from '../components/formLogin';
import { infoApp, btnInfo } from '../components/infoApp';
import { apiAuthorization } from '../components/apiChat';
import { v4 as uuidv4 } from 'uuid';
import { modalWindow, modalFormText, modalFormTitle } from '../components/modalWindow';

const pageLogin = document.createElement('main');
pageLogin.classList.add('page-login__main');

pageLogin.append(formLogin, btnInfo, infoApp, modalWindow);

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const id = uuidv4();
  apiAuthorization(id, inputName.value, inputPass.value).then((data: unknown) => {
    if (typeof data === 'string') {
      const obj = JSON.parse(data);
      console.log(obj);
      if (obj.type !== 'ERROR') {
        addUserToSessionStorage(obj.id, obj.payload.user.login);
        location.hash = '#chat';
      }
      if (obj.type === 'ERROR') {
        modalWindow.classList.add('modal_show');
        modalFormText.textContent = obj.payload.error;
        modalFormTitle.textContent = obj.type;
      }
    }
  });
});

function addUserToSessionStorage(uId: string, uName: string) {
  const data = {
    id: uId,
    name: uName,
  };
  sessionStorage.setItem('user', JSON.stringify(data));
}

export { pageLogin };
