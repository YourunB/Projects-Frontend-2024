import './global.css';
import { pageLogin } from './pages/pageLogin';
import { pageWelcome, welcomeText, getFirstName, getLastName } from './pages/pageWelcome';
import { pageGame, resetGame, startGame } from './pages/pageGame';
import { btnLogout } from './components/buttonLogout';
import { windowConfirm, windowConfirmBtnYes, windowConfirmBtnNo } from './components/modalConfirm';

const header = document.createElement('header');
header.classList.add('pages-header');
const headetTitle = document.createElement('h1');
headetTitle.textContent = 'RSS Puzzle';
header.append(headetTitle);
header.append(btnLogout);
header.append(windowConfirm);
document.body.append(header);

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
  if (location.hash === '#game' && localStorage.user !== undefined) {
    content.innerHTML = '';
    content.append(pageGame);
    startGame();
  }
  if (location.hash !== '#game') {
    resetGame();
  }
  if (location.hash === '#game' && localStorage.user === undefined) {
    location.hash = '#welcome';
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

btnLogout.addEventListener('click', () => {
  windowConfirm.classList.add('modal-confirm_show');
});

windowConfirmBtnYes.addEventListener('click', () => {
  if (localStorage.user !== undefined) {
    localStorage.removeItem('user');
    location.hash = '#login';
  }
  resetGame();
  windowConfirm.classList.remove('modal-confirm_show');
});

windowConfirmBtnNo.addEventListener('click', () => {
  windowConfirm.classList.remove('modal-confirm_show');
});
