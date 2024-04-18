import './index.sass';
import { pageChat, setUserNameToHeader } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';
import { btnLogOut } from './components/header';
import { addUserToChat, chatUsersBoxActive, chatUsersBoxInactive, chatSearch, searchUser } from './components/chat';
import { modalFormTitle, modalWindow, modalFormText } from './components/modalWindow';
import { btnLogin, inputName, inputPass, clearInputs } from './components/formLogin';
import { socket, apiLogIn, apiLogOut, apiGetActiveUsers, apiGetInactiveUsers } from './components/apiChat';
import { v4 as uuidv4 } from 'uuid';

const page = document.createElement('div');
page.classList.add('page');
document.body.append(page, modalWindow);

let passTemp = '';
let loginTemp = '';

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

function addUserToSessionStorage(uId: string, uName: string, uPass: string) {
  const data = {
    id: uId,
    name: uName,
    pass: uPass,
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
  passTemp = inputPass.value;
}

function updateChatUsers() {
  const id = uuidv4();
  apiGetActiveUsers(id);
  apiGetInactiveUsers(id);
}

if (location.hash === '#chat' && sessionStorage.user !== undefined) {
  setTimeout(() => {
    const data = JSON.parse(sessionStorage.user);
    apiLogIn(data.id, data.name, data.pass);
    updateChatUsers();
  }, 500);
}

socket.addEventListener('message', (msg) => {
  const data = JSON.parse(msg.data);
  console.log(data);
  switch (data.type) {
    case 'ERROR':
      showMessage(data.type, data.payload.error);
      break;
    case 'USER_LOGIN':
      loginTemp = data.payload.user.login;
      if (sessionStorage.user === undefined) addUserToSessionStorage(data.id, data.payload.user.login, passTemp);
      setUserNameToHeader();
      location.hash = '#chat';
      break;
    case 'USER_LOGOUT':
      sessionStorage.removeItem('user');
      location.hash = '#login';
      break;
    case 'USER_ACTIVE':
      chatUsersBoxActive.innerHTML = '';
      for (let i = 0; i < data.payload.users.length; i += 1) {
        if (loginTemp !== data.payload.users[i].login) {
          addUserToChat(data.payload.users[i].login, data.payload.users[i].isLogined);
        }
        if (chatSearch.value.length > 0) searchUser(chatSearch.value);
      }
      break;
    case 'USER_INACTIVE':
      chatUsersBoxInactive.innerHTML = '';
      for (let i = 0; i < data.payload.users.length; i += 1) {
        if (loginTemp !== data.payload.users[i].login) {
          addUserToChat(data.payload.users[i].login, data.payload.users[i].isLogined);
        }
        if (chatSearch.value.length > 0) searchUser(chatSearch.value);
      }
      break;
    case 'USER_EXTERNAL_LOGIN':
      updateChatUsers();
      break;
    case 'USER_EXTERNAL_LOGOUT':
      updateChatUsers();
      break;
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
    updateChatUsers();
  }
});

btnLogOut.addEventListener('click', () => {
  if (sessionStorage.user !== undefined) {
    const data = JSON.parse(sessionStorage.user);
    apiLogOut(data.id, data.name, data.pass);
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (btnLogin.disabled === false && location.hash === '#login') {
      openChat();
      clearInputs();
      updateChatUsers();
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
