import './index.sass';
import { pageChat } from './pages/pageChat';
import { pageLogin } from './pages/pageLogin';

window.addEventListener('load', () => {
  if (localStorage.user !== undefined) {
    document.body.append(pageChat);
  } else {
    document.body.append(pageLogin);
  }
});

window.addEventListener('hashchange', () => {
  document.body.innerHTML = '';
  if (location.hash === '#login') {
    document.body.append(pageLogin);
    return;
  }
  if (location.hash === '#chat') {
    document.body.append(pageChat);
    return;
  }
  if (location.hash !== '#login' && location.hash !== '#chat') {
    document.body.innerHTML = '<p class="error">Error 404:&nbsp;<span>This page does not exist</span><p>';
  }
});
