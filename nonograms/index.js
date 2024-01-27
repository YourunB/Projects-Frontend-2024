document.body.classList.add('scroll-off');

const startDisplay = document.createElement("div");
startDisplay.className = "start-display";
document.body.append(startDisplay);

const startDisplayTitle = document.createElement("h1");
startDisplayTitle.className = "start-display__title";
startDisplayTitle.textContent = "NONOGRAMS";
startDisplay.append(startDisplayTitle);

const startDisplayLoading = document.createElement("div");
startDisplayLoading.className = "start-display__loading";
startDisplay.append(startDisplayLoading);

const startDisplayLoadingLine = document.createElement("div");
startDisplayLoadingLine.className = "start-display__loading__line";
startDisplayLoading.append(startDisplayLoadingLine);

const startDisplayBtn = document.createElement("button");
startDisplayBtn.className = "start-display__btn";
startDisplayBtn.textContent = "START";
startDisplay.append(startDisplayBtn);

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

const menuItemTheme = document.createElement('li');
menuItemTheme.textContent = 'Theme';
menu.append(menuItemTheme);

const menuItemResults = document.createElement('li');
menuItemResults.textContent = 'Results';
menu.append(menuItemResults);

const menuItemSelectLevel = document.createElement('li');
menuItemSelectLevel.textContent = 'Levels';
menu.append(menuItemSelectLevel);

const backImg = document.createElement('img');
backImg.src = './assets/images/lines.png';
backImg.classList = 'back-img';
document.body.append(backImg);

const salutImg = document.createElement('img');
salutImg.src = './assets/images/salut.gif';
salutImg.classList = 'salut-img unvisible';
document.body.append(salutImg);

const main = document.createElement('main');
main.classList = 'container';
document.body.append(main);

const overlay = document.createElement('div');
overlay.classList = 'overlay';
document.body.append(overlay);

const modalTheme = document.createElement('div');
modalTheme.classList = 'modal-theme unvisible';
document.body.append(modalTheme);

const btnCloseModalTheme = document.createElement('img');
btnCloseModalTheme.src = './assets/images/svg/cross.svg';
btnCloseModalTheme.classList = 'close-img';
modalTheme.append(btnCloseModalTheme);

const modalThemeTitle = document.createElement('h3');
modalThemeTitle.textContent = 'SELECT THEME';
modalThemeTitle.classList = 'modal-theme__title';
modalTheme.append(modalThemeTitle);

for (let i = 0; i < 5; i += 1) {
  const theme = document.createElement('p');
  theme.textContent = `Theme ${i + 1}`;
  theme.classList = 'modal-theme__theme';
  modalTheme.append(theme);
}

const modalSolution = document.createElement('div');
modalSolution.classList = 'modal-solution unvisible';
document.body.append(modalSolution);

const btnCloseModalSolution = document.createElement('img');
btnCloseModalSolution.src = './assets/images/svg/cross.svg';
btnCloseModalSolution.classList = 'close-img';
modalSolution.append(btnCloseModalSolution);

const modalSolutionTitle = document.createElement('h3');
modalSolutionTitle.textContent = 'TASK SOLUTION';
modalSolutionTitle.classList = 'modal-solution__title';
modalSolution.append(modalSolutionTitle);

const modalResults = document.createElement('div');
modalResults.classList = 'modal-results unvisible';
document.body.append(modalResults);

const btnCloseModalResults = document.createElement('img');
btnCloseModalResults.src = './assets/images/svg/cross.svg';
btnCloseModalResults.classList = 'close-img';
modalResults.append(btnCloseModalResults);

const modalResultsTitle = document.createElement('h3');
modalResultsTitle.classList = 'modal-results__title';
modalResultsTitle.textContent = 'LAST RESULTS';
modalResults.append(modalResultsTitle);

const modalResultsContent = document.createElement('p');
modalResultsContent.classList = 'modal-results__content';
modalResults.append(modalResultsContent);

const modalLvl = document.createElement('div');
modalLvl.classList = 'modal-lvl';
document.body.append(modalLvl);

const btnCloseModalLvl = document.createElement('img');
btnCloseModalLvl.src = './assets/images/svg/cross.svg';
btnCloseModalLvl.classList = 'close-img unvisible';
modalLvl.append(btnCloseModalLvl);

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

const modalWin = document.createElement('div');
modalWin.classList = 'modal-win unvisible';
document.body.append(modalWin);

const modalWinTitle = document.createElement('h3');
modalWinTitle.classList = 'modal-win__title';
modalWinTitle.innerHTML = 'Congratulations!<br>You win';
modalWin.append(modalWinTitle);

const modalWinMessage = document.createElement('p');
modalWinMessage.classList = 'modal-win__message';
modalWin.append(modalWinMessage);

const btnPlayAgain = document.createElement('button');
btnPlayAgain.classList = 'btn';
btnPlayAgain.textContent = 'PLAY AGAIN';
modalWin.append(btnPlayAgain);

const btnRandom = document.createElement('button');
btnRandom.textContent = 'RANDOM TASK';
btnRandom.classList = 'btn';
modalLvl.append(btnRandom);

const timerSection = document.createElement('section');
timerSection.classList = 'timer-section';
main.append(timerSection);

const timer = document.createElement('p');
timer.textContent = '00:00';
timer.classList = 'timer-section__timer';
timerSection.append(timer);

const gameSection = document.createElement('section');
gameSection.classList = 'game-section';
main.append(gameSection);

const controlsSection = document.createElement('section');
controlsSection.classList = 'controls-section';
main.append(controlsSection);

const btnReset = document.createElement('button');
btnReset.textContent = 'RESET';
btnReset.classList = 'btn';
controlsSection.append(btnReset);

const btnSolutuion = document.createElement('button');
btnSolutuion.textContent = 'SOLUTION';
btnSolutuion.classList = 'btn';
controlsSection.append(btnSolutuion);

const btnSave = document.createElement('button');
btnSave.textContent = 'SAVE GAME';
btnSave.classList = 'btn';
controlsSection.append(btnSave);

const btnLastGame = document.createElement('button');
btnLastGame.textContent = 'LAST GAME';
btnLastGame.classList = 'btn';
controlsSection.append(btnLastGame);

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
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
let currentLvlNumber = 0;
let currentLvl = lvls[currentLvlNumber];
let timerGameId = null;

function createTable(arr) {
  clearTimerGame();
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

  const arrResult = [];
  for (let i = 0; i < currentLvl.length; i += 1) {
    for (let j = 0; j < currentLvl[i].length; j += 1) {
      if (currentLvl[i][j] === 1 && tableRow[i].children[j + 1].dataset.checked !== '1') return;
      if (currentLvl[i][j] === 0 && tableRow[i].children[j + 1].dataset.checked !== '0') return;
      //console.log(tableRow[i].children[j + 1].dataset.checked === '1');
    }
  }
  saveResults(tableRow.length, timer.textContent, modalLvl.getElementsByClassName('modal-lvl__task')[currentLvlNumber].textContent);
  modalWin.classList.remove('unvisible');
  modalWinMessage.textContent = `Game time: ${timer.textContent}`;
  clearTimerGame();
  overlay.classList.remove('unvisible');
  salutImg.classList.remove('unvisible');
}

function saveResults(row, time, task) {
  const min = Number(timer.textContent.slice(0, 2));
  const sec = Number(timer.textContent.slice(-2));
  const timeInSec = min * 60 + sec;
  let difficult = 'easy';
  if (row >= 0 && row <= 6) difficult = 'easy difficult';
  if (row >= 7 && row <= 11) difficult = 'middle difficult';
  if (row >= 12) difficult = 'hard difficult';
  if (localStorage.getItem('results')) {
    const arr = JSON.parse(localStorage.getItem('results'));
    arr.push([timeInSec, time, task, difficult]);
    localStorage.setItem('results', JSON.stringify(arr));
  } else {
    const arr = [[timeInSec, time, task, difficult]]
    localStorage.setItem('results', JSON.stringify(arr));
  }
}

function deleteTable() {
  const table = gameSection.getElementsByTagName('table');
  if (table[0] !== undefined) {
    table[0].remove();
  }
}

function randomTask(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timerGame(minStart = 0, secStart = 0) {
  let min = minStart;
  let sec = secStart;
  timerGameId = setInterval(() => {
    sec += 1;
    if (sec >= 60) {
      min += 1;
      sec = 0;
    }
    timer.textContent = `${String(min).length === 1 ? '0' + min : min}:${String(sec).length === 1 ? '0' + sec : sec}`;
  }, 1000);
}

function clearTimerGame() {
  clearInterval(timerGameId);
  timerGameId = null;
  timer.textContent = `00:00`;
}

function createSolution(arr) {
  const table = document.createElement('table');
  table.classList = 'game-table';
  modalSolution.append(table);

  for (let i = 0; i < arr.length; i += 1) {
    const row = document.createElement('tr');
    row.classList = 'game-table__row';
    table.append(row);

    for (let j = 0; j < arr[i].length; j += 1) {
      const cell = document.createElement('td');
      if (arr[i][j] === 1) cell.classList = 'game-table__row__cell game-table__row__cell_checked';
      else cell.classList = 'game-table__row__cell';
      row.append(cell);
    }
  }
}

function deleteSolution() {
  const table = modalSolution.getElementsByTagName('table');
  if (table[0] !== undefined) {
    table[0].remove();
  }
}

menuItemSelectLevel.addEventListener('click', () => {
  modalLvl.classList.remove('unvisible');
  overlay.classList.remove('unvisible');
});

modalLvl.addEventListener('click', (event) => {
  if (event.target.classList.value.includes('modal-lvl__task')) {
    deleteTable();
    currentLvlNumber = event.target.dataset.task
    currentLvl = lvls[currentLvlNumber];
    createTable(currentLvl);
    modalLvl.classList.add('unvisible');
    overlay.classList.add('unvisible');
    btnCloseModalLvl.classList.remove('unvisible');
  }
});

btnRandom.addEventListener('click', () => {
  clearTimerGame();
  deleteTable();
  currentLvlNumber = randomTask(0, 14);
  currentLvl = lvls[currentLvlNumber];
  createTable(currentLvl);
  modalLvl.classList.add('unvisible');
  overlay.classList.add('unvisible');
});

btnPlayAgain.addEventListener('click', () => {
  clearTimerGame();
  deleteTable();
  createTable(currentLvl);
  modalWin.classList.add('unvisible');
  overlay.classList.add('unvisible');
  salutImg.classList.add('unvisible');
});

btnReset.addEventListener('click', () => {
  clearTimerGame();
  deleteTable();
  createTable(currentLvl);
});

document.body.addEventListener('click', (event) => {
  if (event.target.classList[0] === 'game-table__row__cell') {
    if (timerGameId === null) timerGame();
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
    if (timerGameId === null) timerGame();
    event.target.classList.remove('game-table__row__cell_checked');
    event.target.classList.toggle('game-table__row__cell_cross');
    event.target.setAttribute('data-checked', 0);
    
    if (event.target.classList.value.includes('game-table__row__cell_cross')) event.target.setAttribute('data-cross', 1);
    else event.target.setAttribute('data-cross', 0);

    checkResult();
  }
});

btnSave.addEventListener('click', () => {
  const table = document.getElementsByClassName('game-section')[0];
  const obj = {
    lvl: Number(currentLvlNumber),
    min: Number(timer.textContent.slice(0, 2)),
    sec: Number(timer.textContent.slice(-2)),
    table: table.innerHTML,
  }
  localStorage.setItem('lastGame', JSON.stringify(obj));
});

btnLastGame.addEventListener('click', () => {
  clearTimerGame();
  if (localStorage.getItem('lastGame')) {
    const data = JSON.parse(localStorage.getItem('lastGame'));
    console.log(data.table);
    deleteTable();
    timerGame(data.min, data.sec);
    currentLvlNumber = data.lvl;
    currentLvl = lvls[currentLvlNumber];
    gameSection.innerHTML = data.table;
  }
});

menuItemResults.addEventListener('click', () => {
  let results = '';
  modalResults.classList.remove('unvisible');
  overlay.classList.remove('unvisible');
  if (localStorage.getItem('results')) {
    const arr = JSON.parse(localStorage.getItem('results'));
    const arrLast = arr.slice(-5);
    arrLast.sort(function(a, b) {return a[0] - b[0]});
    for (let i = 0; i < arrLast.length && i < 5; i += 1) {
      results += `${i + 1}. ${arrLast[i][1]} ${arrLast[i][2]} ${arrLast[i][3]}<br>`;
    }
    modalResultsContent.innerHTML = results;
  } else {
    modalResultsContent.textContent = 'No completed games yet';
  }
});

btnSolutuion.addEventListener('click', () => {
  createSolution(currentLvl);
  overlay.classList.remove('unvisible');
  modalSolution.classList.remove('unvisible');
});

btnCloseModalSolution.addEventListener('click', () => {
  deleteSolution();
  overlay.classList.add('unvisible');
  modalSolution.classList.add('unvisible');
});

btnCloseModalResults.addEventListener('click', () => {
  overlay.classList.add('unvisible');
  modalResults.classList.add('unvisible');
});

btnCloseModalLvl.addEventListener('click', () => {
  overlay.classList.add('unvisible');
  modalLvl.classList.add('unvisible');
});

btnCloseModalTheme.addEventListener('click', () => {
  overlay.classList.add('unvisible');
  modalTheme.classList.add('unvisible');
});

menuItemTheme.addEventListener('click', () => {
  modalTheme.classList.remove('unvisible');
  overlay.classList.remove('unvisible');
});

modalTheme.addEventListener('click', (event) => {
  const theme = modalTheme.getElementsByClassName('modal-theme__theme');
  switch (event.target) {
    case theme[0]:
      document.body.classList = 'body_dark';
      break;
    case theme[1]:
      document.body.classList = 'body_dark-red';
      break;
    case theme[2]:
      document.body.classList = 'body_dark-green';
      break;
    case theme[3]:
      document.body.classList = 'body_light-yellow';
      break;
    case theme[4]:
      document.body.classList = '';
      break;
  }
});

startDisplayBtn.addEventListener('click', () => {
  startDisplay.classList.add('hide');
  setTimeout(() => {
    startDisplay.classList.add('unvisible');
    startDisplay.classList.remove('hide');
  }, 995);
});