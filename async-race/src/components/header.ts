import './header.css';

const header = document.createElement('header');
header.classList.add('header');

const btnToGarage = document.createElement('button');
const btnToWinners = document.createElement('button');
btnToGarage.classList.add('header__btn');
btnToWinners.classList.add('header__btn');
btnToGarage.textContent = 'To Garage';
btnToWinners.textContent = 'To Winners';
header.append(btnToGarage, btnToWinners);

export { header, btnToGarage, btnToWinners };
