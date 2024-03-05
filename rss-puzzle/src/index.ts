import './global.css';
import { pageLogin } from './pages/pageLogin';

const content = document.createElement('main');
document.body.append(content);

window.addEventListener('load', () => {
  location.hash = '#login';
  content.append(pageLogin);
});

window.addEventListener('hashchange', () => {
  if (location.hash === '#login') {
    content.innerHTML = '';
    content.append(pageLogin);
  }
  if (
    location.hash !== '#login' &&
    location.hash !== '#welcome' &&
    location.hash !== '#game' &&
    location.hash !== '#results'
  ) {
    content.innerHTML = 'This page does not exist!';
  }
});
