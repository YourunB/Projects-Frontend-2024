import './index.sass';
import { pageChat, setUserNameToHeader } from './pages/pageChat';
import './assets/audio/msg.mp3';
import { pageLogin } from './pages/pageLogin';
import { btnLogOut } from './components/header';
import { loading } from './components/loading';
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
  scrollToMsgs,
} from './components/chat';
import { modalFormTitle, modalWindow, modalFormText } from './components/modalWindow';
import { btnLogin, inputName, inputPass, clearInputs } from './components/formLogin';
import {
  apiLogIn,
  apiLogOut,
  apiGetActiveUsers,
  apiGetInactiveUsers,
  apiSendMsg,
  //apiSetDeliverMsg,
  apiGetMsgsHistory,
  apiSetReadMsg,
  apiEditMsg,
  apiDeleteMsg,
} from './components/apiChat';
import { infoApp, btnInfo } from './components/infoApp';
import { v4 as uuidv4 } from 'uuid';

let socket: WebSocket;

const page = document.createElement('div');
page.classList.add('page');
document.body.append(loading, page, modalWindow, btnInfo, infoApp);

const soundMsg = document.createElement('audio');
soundMsg.src = 'msg.mp3';

let passTemp = '';
let loginTemp = '';

connectSocket();
function connectSocket() {
  socket = new WebSocket('ws://127.0.0.1:4000/');

  socket.onclose = () => {
    showMessage('Warning', 'WebSocket closed');
    if (sessionStorage.user !== undefined) {
      sessionStorage.removeItem('user');
      location.hash = '#login';
    }
    connectSocket();
    loading.classList.remove('loading_hide');
  };

  socket.onerror = () => {
    showMessage();
    connectSocket();
    loading.classList.remove('loading_hide');
  };

  socket.onopen = () => {
    if (location.hash === '#chat' && sessionStorage.user !== undefined) {
      setTimeout(() => {
        const data = JSON.parse(sessionStorage.user);
        apiLogIn(data.id, data.name, data.pass);
        updateChatUsers();
      }, 500);
    }
    modalWindow.classList.remove('modal_show');
    loading.classList.add('loading_hide');
  };

  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    const arrMsgs = data.payload.messages;
    const id = uuidv4();

    function updateMessages() {
      if (arrMsgs) {
        let userUnread = '';
        let countUnread = 0;
        for (let i = 0; i < arrMsgs.length; i += 1) {
          userUnread = arrMsgs[i].from;
          if (!arrMsgs[i].status.isReaded) countUnread += 1;

          if (
            (arrMsgs[i].from === loginTemp && arrMsgs[i].to === checkedUser.textContent) ||
            (arrMsgs[i].to === loginTemp && arrMsgs[i].from === checkedUser.textContent)
          ) {
            if (i == 0) chatMessagesBoxMain.innerHTML = '';
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
        const usersCounts = chatUsersBox.getElementsByClassName('count-msgs') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < usersCounts.length; i += 1) {
          if (usersCounts[i].dataset.login === userUnread) {
            usersCounts[i].textContent = countUnread > 0 ? String(countUnread) : '';
          }
        }

        scrollToMsgs();
      }
    }

    function checkAllMsgs() {
      const users = chatUsersBox.getElementsByClassName('chat__users__user') as HTMLCollectionOf<HTMLAreaElement>;
      for (let i = 0; i < users.length; i += 1) {
        apiGetMsgsHistory(id, users[i].dataset.login || '');
      }
    }

    switch (data.type) {
      case 'ERROR':
        showMessage(data.type, data.payload.error);
        break;
      case 'USER_LOGIN':
        loginTemp = data.payload.user.login;
        if (sessionStorage.user === undefined) addUserToSessionStorage(data.id, data.payload.user.login, passTemp);
        setUserNameToHeader();
        location.hash = '#chat';
        checkAllMsgs();
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
        checkAllMsgs();
        break;
      case 'MSG_SEND':
        checkAllMsgs();
        break;
      case 'MSG_READ':
        apiGetMsgsHistory(id, checkedUser.textContent || '');
        break;
      case 'MSG_EDIT':
        apiGetMsgsHistory(id, checkedUser.textContent || '');
        break;
      case 'MSG_DELETE':
        apiGetMsgsHistory(id, checkedUser.textContent || '');
        break;
    }
  };
}

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

function showMessage(title = 'ERROR', text = 'Error in WebSocket. Trying to repeat') {
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

function clearInput() {
  btnSendMessage.disabled = true;
  inputMessage.value = '';
  inputMessage.dataset.edit = 'false';
}

function sendMessage() {
  readMessages();
  setTimeout(() => {
    const id = uuidv4();
    if (inputMessage.dataset.edit === 'false') {
      const login = checkedUser.textContent ? checkedUser.textContent : '';
      apiSendMsg(id, login, inputMessage.value);
      clearInput();
    }
    if (inputMessage.dataset.edit === 'true') {
      apiEditMsg(id, contextMenu.dataset.msgId || '', inputMessage.value);
      clearInput();
    }
  }, 100);
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

function openHideContextMenu(msgElement: HTMLElement) {
  if (msgElement.classList.contains('msg')) {
    const posTop = msgElement.getBoundingClientRect().top;
    const posLeft = msgElement.getBoundingClientRect().left;
    contextMenu.style.top = `${posTop}px`;
    contextMenu.style.left = `${posLeft}px`;
    contextMenu.classList.add('context-menu_show');
    contextMenu.dataset.msgId = msgElement.dataset.id;
    contextMenu.dataset.msgText = msgElement.dataset.text;
  } else contextMenu.classList.remove('context-menu_show');
}

chatUsersBox.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  if (currentTarget.classList.contains('chat__users__user')) {
    const login = currentTarget.dataset.login || '';
    const isLogined = currentTarget.dataset.isLogined || '';
    const id = uuidv4();
    updateCurrentUser(login, isLogined);
    apiGetMsgsHistory(id, login);
    chatUsersBox.classList.remove('chat__users_show');
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
  soundMsg.play();
});

chatMessagesBoxMain.addEventListener('click', () => {
  readMessages();
});

chatMessagesBoxMain.addEventListener('wheel', () => {
  readMessages();
});

contextMenu.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  if (currentTarget.textContent === 'Edit') {
    inputMessage.dataset.edit = 'true';
    inputMessage.value = contextMenu.dataset.msgText || '';
    btnSendMessage.disabled = false;
  }
  if (currentTarget.textContent === 'Delete') {
    const id = uuidv4();
    apiDeleteMsg(id, contextMenu.dataset.msgId || '');
    clearInput();
  }
});

document.body.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  openHideContextMenu(currentTarget);
});

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
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

export { openChat, socket };
