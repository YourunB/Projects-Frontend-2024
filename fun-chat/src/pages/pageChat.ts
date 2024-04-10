import './pageChat.sass';
import { header } from '../components/header';
import { footer } from '../components/footer';

const pageChat = document.createElement('div');
pageChat.classList.add('page-chat');

const mainPageChat = document.createElement('main');
mainPageChat.classList.add('page-chat__main');

pageChat.append(header, mainPageChat, footer);

export { pageChat };
