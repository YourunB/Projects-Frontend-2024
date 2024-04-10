import './index.sass';
import { pageChat } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';

window.addEventListener('load', () => {
  if (localStorage.user !== undefined) {
    location.hash = '#chat';
    document.body.append(pageChat);
  } else {
    location.hash = '#login';
    document.body.append(pageLogin);
  }
});

window.addEventListener('hashchange', () => {
  if (location.hash === '#login' && localStorage.user === undefined) {
    document.body.innerHTML = '';
    document.body.append(pageLogin);
  }
  if (location.hash === '#login' && localStorage.user !== undefined) {
    location.hash = '#chat';
  }
  if (location.hash !== '#login' && location.hash !== '#chat') {
    document.body.innerHTML = '<p class="error">Error 404:&nbsp;<span>This page does not exist</span><p>';
  }
});
