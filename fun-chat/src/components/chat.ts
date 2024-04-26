import './chat.sass';
import '../assets/images/svg/users.svg';
import { emoji, emojiBox } from './emoji';

const chat = document.createElement('div');
chat.classList.add('chat');

const chatUsersBox = document.createElement('div');
chatUsersBox.classList.add('chat__users');

const chatSearch = document.createElement('input');
chatSearch.classList.add('chat__search');
chatSearch.placeholder = 'Search';

const chatMessagesBox = document.createElement('div');
chatMessagesBox.classList.add('chat__messages');

const chatMessagesBoxHeader = document.createElement('div');
chatMessagesBoxHeader.classList.add('chat__messages__header');

const checkedUser = document.createElement('p');
checkedUser.classList.add('chat__messages__header__user');

const checkedUserStatus = document.createElement('p');
checkedUserStatus.classList.add('chat__messages__header__status');

const btnMenuUsers = document.createElement('img');
btnMenuUsers.classList.add('chat__messages__header__btn');
btnMenuUsers.src = 'users.svg';

const chatMessagesBoxMain = document.createElement('div');
chatMessagesBoxMain.classList.add('chat__messages__main');
chatMessagesBoxMain.textContent = '... choose user ...';

const chatMessagesBoxFooter = document.createElement('div');
chatMessagesBoxFooter.classList.add('chat__messages__footer');
chatMessagesBoxFooter.classList.add('chat__messages__footer_block');

const inputMessage = document.createElement('input');
inputMessage.placeholder = 'Message';
inputMessage.dataset.edit = 'false';
inputMessage.classList.add('chat__messages__footer__input');

const btnSendMessage = document.createElement('button');
btnSendMessage.textContent = 'Send';
btnSendMessage.disabled = true;
btnSendMessage.classList.add('chat__messages__footer__btn');

const contextMenu = document.createElement('div');
contextMenu.classList.add('context-menu');
contextMenu.innerHTML = `
  <p class="context-menu__item">Edit</p>
  <p class="context-menu__item">Delete</p>
`;

chatMessagesBoxHeader.append(checkedUser, checkedUserStatus, btnMenuUsers);
chatMessagesBoxFooter.append(inputMessage, emoji, btnSendMessage);
chatMessagesBox.append(chatMessagesBoxHeader, chatMessagesBoxMain, chatMessagesBoxFooter, contextMenu);
chatUsersBox.append(chatSearch);
chat.append(chatUsersBox, chatMessagesBox);

interface Msg {
  login: string;
  time: string;
  text: string;
  status: string;
  edited: string;
  you: boolean;
  id: string;
  read: boolean;
}

const chatUsersBoxActive = document.createElement('div');
const chatUsersBoxInactive = document.createElement('div');
chatUsersBox.append(chatUsersBoxActive, chatUsersBoxInactive);

function addUserToChat(userName: string, isLogined: boolean) {
  const user = document.createElement('p');
  user.classList.add('chat__users__user');
  user.innerHTML = `<span class="logined-${isLogined}">&#9679;</span> ${userName} <span class="count-msgs" data-login="${userName}"></span>`;
  user.dataset.login = `${userName}`;
  user.dataset.isLogined = `${isLogined}`;
  if (isLogined) chatUsersBoxActive.append(user);
  else chatUsersBoxInactive.append(user);
}

function searchUser(value = '') {
  const arrUsers = chat.getElementsByClassName('chat__users__user');
  for (let i = 0; i < arrUsers.length; i += 1) {
    if (arrUsers[i].textContent?.toLowerCase().indexOf(value.toLocaleLowerCase()) === -1) {
      arrUsers[i].classList.add('chat__users__user_hide');
    } else arrUsers[i].classList.remove('chat__users__user_hide');
  }
}

function updateCurrentUser(login: string, isLogined: string | undefined, state = 'update') {
  if (state === 'add') checkedUser.textContent = login;
  if (checkedUser.textContent === login) {
    if (isLogined && isLogined === 'true') {
      checkedUserStatus.textContent = 'online';
      checkedUserStatus.classList.remove('chat__messages__header__status_offline');
    } else {
      checkedUserStatus.textContent = 'offline';
      checkedUserStatus.classList.add('chat__messages__header__status_offline');
    }
    if (checkedUser.textContent !== '') chatMessagesBoxFooter.classList.remove('chat__messages__footer_block');
  }
}

function updateMessagesInChat(objMsg: Msg) {
  let msgForYou = false;

  const lineRead = document.createElement('div');
  lineRead.classList.add('line-read');
  lineRead.textContent = 'new messages';

  const msg = document.createElement('div');
  if (objMsg.you) msg.classList.add('msg-you');
  else {
    msg.classList.add('msg-for-you');
    msgForYou = true;
  }

  msg.innerHTML = `
    <div class="msg" data-id="${objMsg.id}" data-text="${objMsg.text}" data-for-you="${msgForYou}">
      <div class="msg__head">
        <span>${objMsg.you ? 'you' : objMsg.login}</span><span>${objMsg.time}</span>
      </div>
      <div class="msg__main">${objMsg.text}</div>
      <div class="msg__footer"><span>${objMsg.edited}</span><span>${objMsg.status}</span></div>
    </div>
  `;
  if (!objMsg.read && msgForYou && chatMessagesBoxMain.getElementsByClassName('line-read').length === 0) {
    chatMessagesBoxMain.append(lineRead);
  }
  chatMessagesBoxMain.append(msg);
}

function scrollToMsgs() {
  const checkReadLine = chatMessagesBoxMain.getElementsByClassName('line-read') as HTMLCollectionOf<HTMLElement>;
  if (checkReadLine.length > 0) {
    chatMessagesBoxMain.scrollTo({
      top: checkReadLine[0].offsetTop - 150,
      left: 0,
      behavior: 'smooth',
    });
  } else {
    chatMessagesBoxMain.scrollTo({
      top: chatMessagesBoxMain.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}

function checkInput() {
  if (inputMessage.value.length > 0 && inputMessage.value.trim() !== '') btnSendMessage.disabled = false;
  else btnSendMessage.disabled = true;
}

chatSearch.addEventListener('input', () => {
  searchUser(chatSearch.value);
});

inputMessage.addEventListener('input', () => {
  checkInput();
});

btnMenuUsers.addEventListener('click', () => {
  chatUsersBox.classList.toggle('chat__users_show');
});

emojiBox.addEventListener('click', (event) => {
  const currentTarget = event.target as HTMLElement;
  if (currentTarget.classList.contains('emoji-box__item')) {
    inputMessage.value += currentTarget.textContent;
    checkInput();
  }
});

export {
  chat,
  chatUsersBox,
  chatUsersBoxActive,
  chatUsersBoxInactive,
  chatSearch,
  checkedUser,
  checkedUserStatus,
  btnSendMessage,
  inputMessage,
  chatMessagesBoxMain,
  contextMenu,
  addUserToChat,
  updateCurrentUser,
  searchUser,
  updateMessagesInChat,
  scrollToMsgs,
};
