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

const currentUser = document.createElement('p');
currentUser.classList.add('chat__messages__header__user');

const currentUserStatus = document.createElement('p');
currentUserStatus.classList.add('chat__messages__header__status');

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

chatMessagesBoxHeader.append(currentUser, currentUserStatus);
chatMessagesBoxFooter.append(inputMessage, btnSendMessage);
chatMessagesBox.append(chatMessagesBoxHeader, chatMessagesBoxMain, chatMessagesBoxFooter);
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
    currentUser.textContent = login;
    if (isLogined === 'true') {
      currentUserStatus.textContent = 'online';
      currentUserStatus.classList.remove('chat__messages__header__status_offline');
    } else {
      currentUserStatus.textContent = 'offline';
      currentUserStatus.classList.add('chat__messages__header__status_offline');
    }
  }
  if (state === 'update') {
    if (currentUser.textContent === login) {
      if (isLogined === 'true') {
        currentUserStatus.textContent = 'online';
        currentUserStatus.classList.remove('chat__messages__header__status_offline');
      } else {
        currentUserStatus.textContent = 'offline';
        currentUserStatus.classList.add('chat__messages__header__status_offline');
      }
    }
  }
  if (currentUser.textContent !== '') chatMessagesBoxFooter.classList.remove('chat__messages__footer_block');
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
  addUserToChat,
  chatUsersBoxActive,
  chatUsersBoxInactive,
  chatSearch,
  searchUser,
  currentUser,
  currentUserStatus,
  updateCurrentUser,
};
