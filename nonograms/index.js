const header = document.createElement('header');
document.body.append(header);

const title = document.createElement('h1');
title.textContent = 'Nonograms';
header.append(title);

const nav = document.createElement('nav');
header.append(nav);

const menu = document.createElement('ul');
menu.id = 'menu';
nav.append(menu);

const menuItemGeneral = document.createElement('li');
menuItemGeneral.textContent = 'General';
menu.append(menuItemGeneral);

const menuItemResults = document.createElement('li');
menuItemResults.textContent = 'Results';
menu.append(menuItemResults);

const menuItemSelectLevel = document.createElement('li');
menuItemSelectLevel.textContent = 'Select level';
menu.append(menuItemSelectLevel);

const main = document.createElement('main');
main.classList = 'container';
document.body.append(main);

const gameSection = document.createElement('section');
gameSection.classList = 'game-section';
main.append(gameSection);

const controlsSection = document.createElement('section');
controlsSection.classList = 'controls-section';
main.append(controlsSection);

const footer = document.createElement('footer');
document.body.append(footer);

const footerDev = document.createElement('a');
footerDev.innerHTML = '&copy; 2024 Yury Butskevich';
footerDev.href = 'https://github.com/yourunb';
footerDev.target = '_blank';
footer.append(footerDev);

const lvl0 = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const lvl1 = [
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
];

const lvl2 = [
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];

let maxLvl = 2;
let currentLvl = 0;

function createTable(arr) {
  const table = document.createElement('table');
  table.classList = 'game-table';
  gameSection.append(table);

  for (let i = 0; i <= arr.length; i += 1) {
    let classRow = 'game-table__row';
    const row = document.createElement('tr');
    if (i === 0) classRow = 'game-table__top'
    else row.setAttribute('data-row', i - 1);
    row.classList = classRow;
    table.append(row);

    for (let j = 0; j <= arr.length; j += 1) {
      const cell = document.createElement('td');
      if (i === 0 && j !== 0) cell.classList = 'game-table__top-hint';
      if (j === 0 && i !== 0) cell.classList = 'game-table__row-hint';
      if (j !== 0 && i !== 0) {
        cell.setAttribute('data-cell', j - 1);
        cell.classList = 'game-table__row__cell';
      }
      row.append(cell);
    }
  }

}

createTable(lvl0);