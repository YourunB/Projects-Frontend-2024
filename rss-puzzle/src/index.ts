import './global.css';
import { pageLogin } from './pages/pageLogin';
import { pageWelcome, welcomeText, getFirstName, getLastName } from './pages/pageWelcome';
import { pageGame } from './pages/pageGame';

const content = document.createElement('main');
content.classList.add('pages-window');
document.body.append(content);

window.addEventListener('load', () => {
  if (localStorage.user !== undefined) {
    location.hash = '#welcome';
    content.append(pageWelcome);
  } else {
    location.hash = '#login';
    content.append(pageLogin);
  }
});

window.addEventListener('hashchange', () => {
  if (location.hash === '#login' && localStorage.user === undefined) {
    content.innerHTML = '';
    content.append(pageLogin);
  }
  if (location.hash === '#login' && localStorage.user !== undefined) {
    location.hash = '#welcome';
  }
  if (location.hash === '#welcome') {
    content.innerHTML = '';
    welcomeText.innerHTML = `Welcome dear <span>${getFirstName()} ${getLastName()}</span>!<br> Have a nice learning experience.`;
    content.append(pageWelcome);
  }
  if (location.hash === '#welcome' && localStorage.user === undefined) {
    location.hash = '#login';
  }
  if (location.hash === '#game') {
    content.innerHTML = '';
    content.append(pageGame);
  }
  if (
    location.hash !== '#login' &&
    location.hash !== '#welcome' &&
    location.hash !== '#game' &&
    location.hash !== '#results'
  ) {
    content.innerHTML = 'This page does not exist!';
  }
  content.classList.add('pages-window_hide');
  setTimeout(() => {
    content.classList.remove('pages-window_hide');
  }, 490);
});
