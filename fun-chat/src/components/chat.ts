import './chat.sass';

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

const chatMessagesBoxMain = document.createElement('div');
chatMessagesBoxMain.classList.add('chat__messages__main');

const chatMessagesBoxFooter = document.createElement('div');
chatMessagesBoxFooter.classList.add('chat__messages__footer');
chatMessagesBoxFooter.classList.add('chat__messages__footer_block');

const inputMessage = document.createElement('input');
inputMessage.placeholder = 'Message';
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

chatMessagesBoxHeader.append(checkedUser, checkedUserStatus);
chatMessagesBoxFooter.append(inputMessage, btnSendMessage);
chatMessagesBox.append(chatMessagesBoxHeader, chatMessagesBoxMain, chatMessagesBoxFooter, contextMenu);
chatUsersBox.append(chatSearch);
chat.append(chatUsersBox, chatMessagesBox);

const chatUsersBoxActive = document.createElement('div');
const chatUsersBoxInactive = document.createElement('div');
chatUsersBox.append(chatUsersBoxActive, chatUsersBoxInactive);

function addUserToChat(userName: string, isLogined: boolean) {
  const user = document.createElement('p');
  user.classList.add('chat__users__user');
  user.innerHTML = `<span class="logined-${isLogined}">&#9679;</span> ${userName}`;
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

function updateCurrentUser(login: string, isLogined: string, state = 'add') {
  if (state === 'add') {
    checkedUser.textContent = login;
    if (isLogined === 'true') {
      checkedUserStatus.textContent = 'online';
      checkedUserStatus.classList.remove('chat__messages__header__status_offline');
    } else {
      checkedUserStatus.textContent = 'offline';
      checkedUserStatus.classList.add('chat__messages__header__status_offline');
    }
  }
  if (state === 'update') {
    if (checkedUser.textContent === login) {
      if (isLogined === 'true') {
        checkedUserStatus.textContent = 'online';
        checkedUserStatus.classList.remove('chat__messages__header__status_offline');
      } else {
        checkedUserStatus.textContent = 'offline';
        checkedUserStatus.classList.add('chat__messages__header__status_offline');
      }
    }
  }
  if (checkedUser.textContent !== '') chatMessagesBoxFooter.classList.remove('chat__messages__footer_block');
}

function updateMessagesInChat(
  login: string,
  time: string,
  text: string,
  status: string,
  edited: string,
  you: boolean,
  id: string,
  read = false
) {
  let msgForYou = false;

  const lineRead = document.createElement('div');
  lineRead.classList.add('line-read');
  lineRead.textContent = 'new messages';

  const msg = document.createElement('div');
  if (you) msg.classList.add('msg-you');
  else {
    msg.classList.add('msg-for-you');
    msgForYou = true;
  }

  msg.innerHTML = `
    <div class="msg" data-id="${id}" data-for-you="${msgForYou}">
      <div class="msg__head">
        <span>${you ? 'you' : login}</span><span>${time}</span>
      </div>
      <div class="msg__main">${text}</div>
      <div class="msg__footer"><span>${edited}</span><span>${status}</span></div>
    </div>
  `;
  if (!read && msgForYou && chatMessagesBoxMain.getElementsByClassName('line-read').length === 0) {
    chatMessagesBoxMain.append(lineRead);
  }
  chatMessagesBoxMain.append(msg);
  chatMessagesBoxMain.scrollTo(0, chatMessagesBoxMain.scrollHeight);
}

chatSearch.addEventListener('input', () => {
  searchUser(chatSearch.value);
});

inputMessage.addEventListener('input', () => {
  if (inputMessage.value.length > 0) btnSendMessage.disabled = false;
  else btnSendMessage.disabled = true;
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
};
