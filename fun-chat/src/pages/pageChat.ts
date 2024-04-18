import './pageChat.sass';
import { header, headerUser } from '../components/header';
import { footer } from '../components/footer';
import { chat } from '../components/chat';

const pageChat = document.createElement('div');
pageChat.classList.add('page-chat');

const mainPageChat = document.createElement('main');
mainPageChat.classList.add('page-chat__main');

pageChat.append(header, mainPageChat, footer);
mainPageChat.append(chat);

function setUserNameToHeader() {
  if (sessionStorage.user !== undefined) {
    const data = JSON.parse(sessionStorage.user);
    headerUser.innerHTML = `<span>You: </span>${data.name}`;
  }
}

setUserNameToHeader();

export { pageChat, setUserNameToHeader };
