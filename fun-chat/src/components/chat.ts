import './chat.sass';

const chat = document.createElement('div');
chat.classList.add('chat');

const chatUserBox = document.createElement('div');
chatUserBox.classList.add('chat__users');

const chatSearch = document.createElement('input');
chatSearch.classList.add('chat__users__search');
chatSearch.placeholder = 'Search';

chatUserBox.append(chatSearch);
chat.append(chatUserBox);

export { chat };
