import './index.sass';
import { pageChat } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';
import { modalWindow } from './components/modalWindow';

const page = document.createElement('div');
page.classList.add('page');
document.body.append(page, modalWindow);

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

window.addEventListener('load', () => {
  openPage();
});

window.addEventListener('hashchange', () => {
  openPage();
});
