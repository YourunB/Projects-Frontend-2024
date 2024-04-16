import './index.sass';
import { pageChat, setUserNameToHeader } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';
import { btnLogOut } from './components/header';
import { modalFormTitle, modalWindow, modalFormText } from './components/modalWindow';
import { btnLogin, inputName, inputPass, clearInputs } from './components/formLogin';
import { socket, apiLogIn, apiLogOut } from './components/apiChat';
import { v4 as uuidv4 } from 'uuid';

const page = document.createElement('div');
page.classList.add('page');
document.body.append(page, modalWindow);

let pass = '';

function openPage() {
  page.innerHTML = '';
  if (sessionStorage.user === undefined) {
    location.hash = '#login';
    page.append(pageLogin);
    return;
  } else {
    location.hash = '#chat';
    page.append(pageChat);
    return;
  }
}

function addUserToSessionStorage(uId: string, uName: string) {
  const data = {
    id: uId,
    name: uName,
    //pass: uPass,
  };
  sessionStorage.setItem('user', JSON.stringify(data));
}

function showMessage(title = 'ERROR', text = 'Error in WebSocket') {
  modalWindow.classList.add('modal_show');
  modalFormTitle.textContent = title;
  modalFormText.textContent = text;
}

function openChat() {
  const id = uuidv4();
  apiLogIn(id, inputName.value, inputPass.value);
  pass = inputPass.value;
}

socket.addEventListener('message', (msg) => {
  const data = JSON.parse(msg.data);
  console.log(data);
  switch (data.type) {
    case 'ERROR':
      showMessage(data.type, data.payload.error);
      break;
    case 'USER_LOGIN':
      addUserToSessionStorage(data.id, data.payload.user.login);
      setUserNameToHeader();
      location.hash = '#chat';
      break;
    case 'USER_LOGOUT':
      sessionStorage.removeItem('user');
      location.hash = '#login';
  }
});

socket.addEventListener('error', (err) => {
  console.log('Error:', err);
  showMessage();
});

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  if (btnLogin.disabled === false) {
    openChat();
    clearInputs();
  }
});

btnLogOut.addEventListener('click', () => {
  if (sessionStorage.user !== undefined) {
    const data = JSON.parse(sessionStorage.user);
    apiLogOut(data.id, data.name, pass);
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (btnLogin.disabled === false && location.hash === '#login') {
      openChat();
      clearInputs();
    }
  }
});

window.addEventListener('load', () => {
  openPage();
});

window.addEventListener('hashchange', () => {
  openPage();
});

export { openChat };
