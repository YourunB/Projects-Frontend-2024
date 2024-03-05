import '../pages/pageWelcome.css';
import { btnLogout } from '../components/buttonLogout';
import { windowConfirm, windowConfirmBtnYes, windowConfirmBtnNo } from '../components/modalConfirm';

const pageWelcome = document.createElement('section');
pageWelcome.classList.add('page-welcome');

const headerPageWelcome = document.createElement('header');
headerPageWelcome.classList.add('page-welcome__header');
pageWelcome.append(headerPageWelcome);
headerPageWelcome.append(btnLogout);

const mainPageWelcome = document.createElement('main');
mainPageWelcome.classList.add('page-welcome__main');
pageWelcome.append(mainPageWelcome);
mainPageWelcome.append(windowConfirm);

btnLogout.addEventListener('click', () => {
  windowConfirm.classList.add('modal-confirm_show');
});

windowConfirmBtnYes.addEventListener('click', () => {
  if (localStorage.user !== undefined) {
    localStorage.removeItem('user');
    location.hash = '#login';
  }
  windowConfirm.classList.remove('modal-confirm_show');
});

windowConfirmBtnNo.addEventListener('click', () => {
  windowConfirm.classList.remove('modal-confirm_show');
});

export { pageWelcome };
