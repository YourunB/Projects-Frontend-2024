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

const btnAutoComplete = document.createElement('button');
btnAutoComplete.classList.add('controls__btn');
btnAutoComplete.textContent = 'Auto Complete';
controlsPageGame.append(btnAutoComplete);

const btnCheck = document.createElement('button');
btnCheck.classList.add('controls__btn');
btnCheck.textContent = 'Check';
btnCheck.disabled = true;
controlsPageGame.append(btnCheck);

const btnContinue = document.createElement('button');
btnContinue.classList.add('controls__btn');
btnContinue.textContent = 'Continue';
btnContinue.style.display = 'none';
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

  if (levelData.textExample === arrWords.join(' ')) {
    btnCheck.textContent = 'Continue';
    btnCheck.classList.add('controls__btn_true');
    btnContinue.disabled = false;
  } else {
    btnCheck.textContent = 'Check';
    btnCheck.classList.remove('controls__btn_true');
    btnContinue.disabled = true;
  }

  if (levelData.textExample.split(' ').length === arrPuzzles.length) {
    btnCheck.disabled = false;
  } else btnCheck.disabled = true;
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
    word.dataset.field = `${currentWords}`;
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

function highlighPuzzle() {
  const gameFields = pageGame.getElementsByClassName('game-box__field');
  const allPuzzles = gameFields[currentWords].getElementsByClassName('game-answers__word');
  const correctResult = levelData.textExample.split(' ');

  for (let i = 0; i < allPuzzles.length; i += 1) {
    if (correctResult[i] === allPuzzles[i].textContent) {
      allPuzzles[i].classList.add('game-answers__word_true');
    } else {
      allPuzzles[i].classList.add('game-answers__word_false');
    }
  }

  setTimeout(() => {
    const allPuzzles = pageGame.getElementsByClassName('game-answers__word');
    for (let i = 0; i < allPuzzles.length; i += 1) {
      allPuzzles[i].classList.remove('game-answers__word_true');
      allPuzzles[i].classList.remove('game-answers__word_false');
    }
  }, 2000);
}

getFile(`lingleo/data/wordCollectionLevel${currentLevel}.json`);

createGame();
setTimeout(() => {
  console.log(arrLevels);
  createAnswers();
}, 500);

function nextWords() {
  btnCheck.textContent = 'Check';
  btnCheck.classList.remove('controls__btn_true');
  btnCheck.disabled = true;
  currentWords += 1;
  if (currentWords >= 10) {
    clearFields();
    currentWords = 0;
    currentRound += 1;
  }
  createAnswers();
}

function autoComplete() {
  const gameFields = pageGame.getElementsByClassName('game-box__field');
  const currentPuzzles = pageGame.getElementsByClassName('game-answers__word');
  const sourceResult = levelData.textExample.split(' ');
  const result = [];

  for (let i = 0; i < sourceResult.length; i += 1) {
    for (let j = 0; j < currentPuzzles.length; j += 1) {
      if (
        sourceResult[i] === currentPuzzles[j].textContent &&
        (<HTMLElement>currentPuzzles[j]).dataset.field === currentWords.toString()
      ) {
        result.push(currentPuzzles[j]);
      }
    }
  }

  for (let i = 0; i < result.length; i += 1) {
    gameFields[currentWords].append(result[i]);
  }

  nextWords();
}

btnContinue.addEventListener('click', () => {
  btnContinue.disabled = true;
  nextWords();
});

btnCheck.addEventListener('click', () => {
  if (btnCheck.textContent === 'Check') highlighPuzzle();
  if (btnCheck.textContent !== 'Check') nextWords();
});

btnAutoComplete.addEventListener('click', () => {
  autoComplete();
});

export { pageGame };
