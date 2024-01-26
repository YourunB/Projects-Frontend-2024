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

const overlay = document.createElement('div');
overlay.classList = 'overlay';
document.body.append(overlay);

const modalLvl = document.createElement('div');
modalLvl.classList = 'modal-lvl';
document.body.append(modalLvl);

const modalLvlTitle = document.createElement('h3');
modalLvlTitle.textContent = 'SELECT LEVEL';
modalLvl.append(modalLvlTitle);

for (let i = 0; i < 15; i += 1) {
  const lvlName = document.createElement('p');
  if (i >= 0 && i < 5) lvlName.textContent = `TASK ${i + 1} - 5x5`;
  if (i >= 5 && i < 10) lvlName.textContent = `TASK ${i + 1} - 10x10`;
  if (i >= 10 && i < 15) lvlName.textContent = `TASK ${i + 1} - 15x15`;
  lvlName.classList = 'modal-lvl__task';
  lvlName.setAttribute('data-task', i);
  modalLvl.append(lvlName);
}

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

const lvls = [
  [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
  ],
  [
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  ],
  [
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  ],
  [
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  ],
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
];

let maxLvl = 2;
let currentLvl = lvls[4];

function createTable(arr) {
  const table = document.createElement('table');
  table.classList = 'game-table';
  gameSection.append(table);

  for (let i = 0; i <= arr.length; i += 1) {
    let classRow = 'game-table__row';
    const row = document.createElement('tr');
    if (i === 0) classRow = 'game-table__top'
    //else row.setAttribute('data-row', i - 1);
    row.classList = classRow;
    table.append(row);

    for (let j = 0; j <= arr.length; j += 1) {
      const cell = document.createElement('td');
      if (i === 0 && j !== 0) cell.classList = 'game-table__top-hint';
      if (j === 0 && i !== 0) cell.classList = 'game-table__row-hint';
      if (j !== 0 && i !== 0) {
        cell.setAttribute('data-checked', 0);
        cell.setAttribute('data-cross', 0);
        cell.classList = 'game-table__row__cell';
      }
      row.append(cell);
    }
  }

  addHint(arr);
}

function addHint(arr) {
  const tophint = document.getElementsByClassName('game-table__top-hint');
  const leftHint = document.getElementsByClassName('game-table__row-hint');

  for (let i = 0; i < arr.length; i += 1) {
    let countInRow = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1) countInRow += 1;
      if ((arr[i][j] === 0 || arr[i][j + 1] === undefined) && countInRow !== 0) {
        leftHint[i].textContent += `${countInRow} `;
        countInRow = 0;
      }
    }
  }

  const arrRotate = arr[0].map((v, i) => arr.map(row => row[i]).reverse());
  for (let i = 0; i < arrRotate.length; i += 1) {
    let countInCol = 0;
    for (let j = 0; j < arrRotate[i].length; j += 1) {
      if (arrRotate[i][j] === 1) countInCol += 1;
      if ((arrRotate[i][j] === 0 || arrRotate[i][j + 1] === undefined) && countInCol !== 0) {
        tophint[i].innerHTML = `${countInCol}<br>` + tophint[i].innerHTML;
        countInCol = 0;
      }
    }
  }

}

function checkResult() {
  const tableRow = document.getElementsByClassName('game-table__row');
  const tableCell = document.getElementsByClassName('game-table__row__cell');

  //console.log(tableRow[0].dataset.row)

  const arrResult = [];
  for (let i = 0; i < currentLvl.length; i += 1) {
    for (let j = 0; j < currentLvl[i].length; j += 1) {
      if (currentLvl[i][j] === 1 && tableRow[i].children[j + 1].dataset.checked !== '1') {
        return;
      }
      console.log(tableRow[i].children[j + 1].dataset.checked === '1');
    }
  }
  alert('You win!');
}

function deleteTable() {
  const table = gameSection.getElementsByTagName('table');
  if (table[0] !== undefined) {
    table[0].remove();
  }
}

modalLvl.addEventListener('click', (event) => {
  if (event.target.classList.value.includes('modal-lvl__task')) {
    deleteTable();
    currentLvl = lvls[event.target.dataset.task]
    createTable(currentLvl);
    modalLvl.classList.add('unvisible');
    overlay.classList.add('unvisible');
  }
});

document.body.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.classList[0] === 'game-table__row__cell') {
    event.target.classList.toggle('game-table__row__cell_checked');
    event.target.classList.remove('game-table__row__cell_cross');
    event.target.setAttribute('data-cross', 0);

    if (event.target.classList.value.includes('game-table__row__cell_checked')) event.target.setAttribute('data-checked', 1);
    else event.target.setAttribute('data-checked', 0);

    checkResult();
  }
});

document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  if (event.target.classList[0] === 'game-table__row__cell') {
    event.target.classList.remove('game-table__row__cell_checked');
    event.target.classList.toggle('game-table__row__cell_cross');
    event.target.setAttribute('data-checked', 0);
    
    if (event.target.classList.value.includes('game-table__row__cell_cross')) event.target.setAttribute('data-cross', 1);
    else event.target.setAttribute('data-cross', 0);

    checkResult();
  }
});