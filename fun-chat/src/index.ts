import './index.sass';
import { pageChat, setUserNameToHeader } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';
import { btnLogOut } from './components/header';
import {
  addUserToChat,
  chatUsersBoxActive,
  chatUsersBoxInactive,
  chatSearch,
  searchUser,
  chatUsersBox,
  updateCurrentUser,
  btnSendMessage,
  checkedUser,
  inputMessage,
  updateMessagesInChat,
  chatMessagesBoxMain,
  contextMenu,
} from './components/chat';
import { modalFormTitle, modalWindow, modalFormText } from './components/modalWindow';
import { btnLogin, inputName, inputPass, clearInputs } from './components/formLogin';
import {
  socket,
  apiLogIn,
  apiLogOut,
  apiGetActiveUsers,
  apiGetInactiveUsers,
  apiSendMsg,
  apiGetMsgsHistory,
  apiSetReadMsg,
} from './components/apiChat';
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
  const arrMsgs = data.payload.messages;
  const id = uuidv4();

  function updateMessages() {
    chatMessagesBoxMain.innerHTML = '';
    for (let i = 0; i < arrMsgs.length; i += 1) {
      const time = new Date(arrMsgs[i].datetime).toString().slice(4, 24);
      const you = loginTemp === arrMsgs[i].from;
      const edited = arrMsgs[i].status.isEdited ? 'edited' : '';
      let status = '';
      if (you && arrMsgs[i].status.isReaded) status = 'read';
      else if (you && arrMsgs[i].status.isDelivered) status = 'delivered';
      else if (you && !arrMsgs[i].status.isEdited) status = 'not delivered';
      updateMessagesInChat(
        arrMsgs[i].from,
        time,
        arrMsgs[i].text,
        status,
        edited,
        you,
        arrMsgs[i].id,
        arrMsgs[i].status.isReaded
      );
    }
  }

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
      updateCurrentUser(data.payload.user.login, data.payload.user.isLogined, 'update');
      break;
    case 'USER_EXTERNAL_LOGOUT':
      updateChatUsers();
      updateCurrentUser(data.payload.user.login, data.payload.user.isLogined, 'update');
      break;
    case 'MSG_FROM_USER':
      updateMessages();
      break;
    case 'MSG_DELIVER':
      updateMessages();
      break;
    case 'MSG_SEND':
      apiGetMsgsHistory(id, checkedUser.textContent || '');
      break;
    case 'MSG_READ':
      apiGetMsgsHistory(id, checkedUser.textContent || '');
      break;
  }
});

function sendMessage() {
  const id = uuidv4();
  const login = checkedUser.textContent ? checkedUser.textContent : '';
  apiSendMsg(id, login, inputMessage.value);
  btnSendMessage.disabled = true;
  inputMessage.value = '';
  readMessages();
}

function readMessages() {
  if (chatMessagesBoxMain.getElementsByClassName('line-read').length !== 0) {
    const allMsgs = chatMessagesBoxMain.getElementsByClassName('msg') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < allMsgs.length; i += 1) {
      if (allMsgs[i].dataset.forYou === 'true') {
        apiSetReadMsg(allMsgs[i].dataset.id || '');
      }
    }
  }
}

socket.addEventListener('error', (err) => {
  console.log('Error:', err);
  showMessage();
});

chatUsersBox.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  if (currentTarget.classList.contains('chat__users__user')) {
    const login = currentTarget.dataset.login || '';
    const isLogined = currentTarget.dataset.isLogined || '';
    const id = uuidv4();
    updateCurrentUser(login, isLogined);
    console.log(id, login);
    apiGetMsgsHistory(id, login);
  }
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
    chatMessagesBoxMain.innerHTML = '';
  }
});

btnSendMessage.addEventListener('click', () => {
  sendMessage();
});

chatMessagesBoxMain.addEventListener('click', () => {
  readMessages();
});

function openHideContextMenu(msgElement: HTMLElement) {
  if (msgElement.classList.contains('msg')) {
    const posTop = msgElement.getBoundingClientRect().top;
    const posLeft = msgElement.getBoundingClientRect().left;
    contextMenu.style.top = `${posTop}px`;
    contextMenu.style.left = `${posLeft}px`;
    contextMenu.classList.add('context-menu_show');
  } else contextMenu.classList.remove('context-menu_show');
}

document.body.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  openHideContextMenu(currentTarget);
});

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  console.log(event.target);
  const currentTarget = event.target as HTMLElement;
  openHideContextMenu(currentTarget);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (btnLogin.disabled === false && location.hash === '#login') {
      openChat();
      clearInputs();
      updateChatUsers();
      return;
    }
    if (btnSendMessage.disabled === false && location.hash === '#chat') {
      sendMessage();
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
