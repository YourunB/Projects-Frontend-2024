import './pageChat.sass';
import { apiAuthorization, apiLogOut } from '../components/apiChat';
import { header, headerUser, btnLogOut } from '../components/header';
import { footer } from '../components/footer';
import { modalWindow, modalFormText, modalFormTitle } from '../components/modalWindow';

const pageChat = document.createElement('div');
pageChat.classList.add('page-chat');

const mainPageChat = document.createElement('main');
mainPageChat.classList.add('page-chat__main');

console.log(modalWindow);
pageChat.append(header, mainPageChat, modalWindow, footer);

function setUserNameToHeader() {
  if (sessionStorage.user !== undefined) {
    const data = JSON.parse(sessionStorage.user);
    headerUser.innerHTML = `<span>User: </span>${data.name}`;
  }
}

setUserNameToHeader();

async function logIn() {
  if (sessionStorage.user !== undefined) {
    const data = JSON.parse(sessionStorage.user);
    console.log(data);

    await apiAuthorization(data.id, data.name, data.pass).then((data: unknown) => {
      console.log(data);
      if (typeof data === 'string') {
        const obj = JSON.parse(data);
        if (obj.type === 'ERROR') {
          modalWindow.classList.add('modal_show');
          modalFormText.textContent = obj.payload.error;
          modalFormTitle.textContent = obj.type;
        }
      }
    });
  }
}

setTimeout(() => {
  logIn();
}, 500);

function logOut() {
  if (sessionStorage.user !== undefined) {
    const data = JSON.parse(sessionStorage.user);
    apiLogOut(data.id, data.name, data.pass).then((data: unknown) => {
      if (typeof data === 'string') {
        const obj = JSON.parse(data);
        console.log(obj);
        if (obj.type !== 'ERROR') {
          sessionStorage.removeItem('user');
          location.hash = '#login';
        }
        if (obj.type === 'ERROR') {
          modalWindow.classList.add('modal_show');
          modalFormText.textContent = obj.payload.error;
          modalFormTitle.textContent = obj.type;
        }
      }
    });
  }
}

btnLogOut.addEventListener('click', () => {
  logOut();
});

export { pageChat, setUserNameToHeader };
