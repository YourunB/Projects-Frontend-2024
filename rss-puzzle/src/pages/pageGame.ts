import '../pages/pageGame.css';

const pageGame = document.createElement('section');
pageGame.classList.add('page-game');

const headerPageGame = document.createElement('header');
headerPageGame.classList.add('page-game__header');
pageGame.append(headerPageGame);

const mainPageGame = document.createElement('main');
mainPageGame.classList.add('page-game__main');
pageGame.append(mainPageGame);

const gameBox = document.createElement('div');
gameBox.classList.add('game-box');
mainPageGame.append(gameBox);

const gameAnswers = document.createElement('div');
gameAnswers.classList.add('game-answers');
mainPageGame.append(gameAnswers);

const controlsPageGame = document.createElement('section');
controlsPageGame.classList.add('controls');
pageGame.append(controlsPageGame);

const btnCheck = document.createElement('button');
btnCheck.classList.add('controls__btn');
btnCheck.textContent = 'Check';
controlsPageGame.append(btnCheck);

const btnContinue = document.createElement('button');
btnContinue.classList.add('controls__btn');
btnContinue.textContent = 'Continue';
btnContinue.disabled = true;
controlsPageGame.append(btnContinue);

interface levelData {
  audioExample: string;
  id: number;
  textExample: string;
  textExampleTranslate: string;
  word: string;
  wordTranslate: string;
}

interface data {
  rounds: {
    levelData: {
      author: string;
      cutSrc: string;
      id: string;
      imageSrc: string;
      name: string;
      year: string;
    };
    words: {
      audioExample: string;
      id: number;
      textExample: string;
      textExampleTranslate: string;
      word: string;
      wordTranslate: string;
    }[];
  }[];
  roundsCount: number;
}

let arrLevels: data;
let levelData: levelData;
const currentLevel = 1;
let currentRound = 0;
let currentWords = 0;

function createGame() {
  for (let i = 0; i < 10; i += 1) {
    const gameField = document.createElement('div');
    gameField.classList.add('game-box__field');
    gameField.setAttribute('data-field', String(i));
    gameBox.append(gameField);
  }
}

function clearFields() {
  const allPuzzles = pageGame.getElementsByClassName('game-answers__word');
  for (let i = allPuzzles.length - 1; i >= 0; i -= 1) {
    allPuzzles[i].remove();
  }
}

function checkField(gameFields: HTMLCollectionOf<Element>) {
  const arrPuzzles = gameFields[currentWords].getElementsByClassName('game-answers__word');
  const arrWords = [];
  for (let i = 0; i < arrPuzzles.length; i += 1) {
    arrWords.push(arrPuzzles[i].textContent);
  }
  console.log(levelData);
  if (levelData.textExample === arrWords.join(' ')) btnContinue.disabled = false;
  else btnContinue.disabled = true;
}

function movePuzzle(event: Event) {
  const gameFields = document.getElementsByClassName('game-box__field');
  const gameAnswers = document.getElementsByClassName('game-answers');

  if (event.target instanceof HTMLElement && event.target.dataset.complete !== 'true') {
    if (event.target.dataset.checked === 'false') {
      event.target.dataset.checked = 'true';
      gameFields[currentWords].append(event.target as HTMLElement);
    } else {
      event.target.dataset.checked = 'false';
      gameAnswers[0].append(event.target as HTMLElement);
    }
  }
  checkField(gameFields);
}

function createAnswers() {
  btnContinue.disabled = true;

  levelData = arrLevels.rounds[currentRound].words[currentWords];
  const arrWords = levelData.textExample.split(' ');
  const allWordsLength = arrWords.reduce((sum, word) => sum + word.length, 0);

  arrWords.sort(() => Math.random() - 0.5);

  for (let i = 0; i < arrWords.length; i += 1) {
    const word = document.createElement('div');
    word.classList.add('game-answers__word');
    word.textContent = arrWords[i];
    word.style.width = `${(100 / allWordsLength) * arrWords[i].length}%`;
    word.style.minWidth = 'fit-content';
    word.dataset.checked = 'false';
    gameAnswers.append(word);
    word.addEventListener('click', (event) => {
      movePuzzle(event);
    });
  }
}

function getFile(link: string) {
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      arrLevels = data;
    });
}

getFile(`lingleo/data/wordCollectionLevel${currentLevel}.json`);

createGame();
setTimeout(() => {
  console.log(arrLevels);
  createAnswers();
}, 500);

btnContinue.addEventListener('click', () => {
  btnContinue.disabled = true;
  currentWords += 1;
  if (currentWords >= 10) {
    clearFields();
    currentWords = 0;
    currentRound += 1;
  }
  createAnswers();
});

export { pageGame };
