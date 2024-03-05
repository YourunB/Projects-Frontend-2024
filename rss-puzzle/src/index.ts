import './global.css';
import { pageLogin } from './pages/pageLogin';
import { pageWelcome, welcomeText, getFirstName, getLastName } from './pages/pageWelcome';

const content = document.createElement('main');
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
  } else location.hash = '#welcome';
  if (location.hash === '#welcome' && localStorage.user !== undefined) {
    content.innerHTML = '';
    welcomeText.innerHTML = `Welcome dear <span>${getFirstName()} ${getLastName()}</span>!<br> Have a nice learning experience.`;
    content.append(pageWelcome);
  } else location.hash = '#login';
  if (
    location.hash !== '#login' &&
    location.hash !== '#welcome' &&
    location.hash !== '#game' &&
    location.hash !== '#results'
  ) {
    content.innerHTML = 'This page does not exist!';
  }
});
