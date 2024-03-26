import './winnersPage.css';

const winnersPage = document.createElement('section');
winnersPage.className = 'winners-page winners-page_hide';

const winnersPageTitle = document.createElement('h2');
winnersPageTitle.classList.add('winners-page__title');

const winnersPageNum = document.createElement('h3');
winnersPageNum.classList.add('winners-page__num');

winnersPage.append(winnersPageTitle, winnersPageNum);

export { winnersPage, winnersPageTitle, winnersPageNum };
