import './index.sass';
import { pageChat } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';

function openPage() {
  document.body.innerHTML = '';
  if (sessionStorage.user === undefined) {
    location.hash = '#login';
    document.body.append(pageLogin);
    return;
  } else {
    location.hash = '#chat';
    document.body.append(pageChat);
    return;
  }
}

window.addEventListener('load', () => {
  openPage();
});

window.addEventListener('hashchange', () => {
  openPage();
});
