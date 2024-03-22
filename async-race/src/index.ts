import './index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { garagePage } from './pages/garagePage';
import { winnersPage } from './pages/winnersPage';
import { getCars } from './components/api';

const app = document.createElement('div');
app.classList.add('container');
document.body.append(app);
app.append(header);

const main = document.createElement('main');
main.classList.add('main');
app.append(main);
main.append(garagePage);
main.append(winnersPage);

btnToGarage.addEventListener('click', () => {
  winnersPage.classList.add('winners-page_hide');
  garagePage.classList.remove('garage-page_hide');
});

btnToWinners.addEventListener('click', () => {
  garagePage.classList.add('garage-page_hide');
  winnersPage.classList.remove('winners-page_hide');
});

console.log(getCars(1, 4));
