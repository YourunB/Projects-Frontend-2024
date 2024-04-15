import './pageChat.sass';
import { header, headerUser } from '../components/header';
import { footer } from '../components/footer';

const pageChat = document.createElement('div');
pageChat.classList.add('page-chat');

const mainPageChat = document.createElement('main');
mainPageChat.classList.add('page-chat__main');

pageChat.append(header, mainPageChat, footer);

function setUserNameToHeader() {
  const data = JSON.parse(sessionStorage.user);
  headerUser.innerHTML = `<span>User: </span>${data.name}`;
}

setUserNameToHeader();

export { pageChat };
