import './chat.sass';

const chat = document.createElement('div');
chat.classList.add('chat');

const chatUsersBox = document.createElement('div');
chatUsersBox.classList.add('chat__users');

const chatSearch = document.createElement('input');
chatSearch.classList.add('chat__search');
chatSearch.placeholder = 'Search';

chatUsersBox.append(chatSearch);
chat.append(chatUsersBox);

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

chatSearch.addEventListener('input', () => {
  searchUser(chatSearch.value);
});

export { chat, chatUsersBox, addUserToChat, chatUsersBoxActive, chatUsersBoxInactive };
