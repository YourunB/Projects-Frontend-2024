import '../pages/pageGame.css';
import '../assets/images/svg/translate.svg';
import '../assets/images/svg/volume.svg';

const pageGame = document.createElement('section');
pageGame.classList.add('page-game');

const headerPageGame = document.createElement('header');
headerPageGame.classList.add('page-game__header');
pageGame.append(headerPageGame);

const levelsBox = document.createElement('div');
levelsBox.classList.add('levels-box');
headerPageGame.append(levelsBox);

const hintBtns = document.createElement('div');
hintBtns.classList.add('hint-btns');
headerPageGame.append(hintBtns);

const btnHintTranslate = document.createElement('img');
btnHintTranslate.classList.add('hint-btns__btn');
btnHintTranslate.alt = 'translate';
btnHintTranslate.src = 'translate.svg';
hintBtns.append(btnHintTranslate);

const mainPageGame = document.createElement('main');
mainPageGame.classList.add('page-game__main');
pageGame.append(mainPageGame);

const gameHint = document.createElement('div');
gameHint.classList.add('hint-box');
mainPageGame.append(gameHint);

const hintAudio = document.createElement('img');
hintAudio.classList.add('hint-box__hint-audio');
hintAudio.src = 'volume.svg';
hintAudio.alt = 'Audio';
gameHint.append(hintAudio);

const hintTranslate = document.createElement('p');
hintTranslate.classList.add('hint-box__hint-translate');
gameHint.append(hintTranslate);

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
btnAutoComplete.classList.add('controls__btn_auto');
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
let letterTrue = false;
let hintTranslateShow = false;

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

function setHintOnOff() {
  if (btnHintTranslate.classList.contains('hint-btns__btn_checked') || letterTrue) {
    hintTranslate.classList.add('hint-box__hint-translate_visible');
  } else if (!hintTranslateShow && !letterTrue) hintTranslate.classList.remove('hint-box__hint-translate_visible');
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
    letterTrue = true;
  } else {
    btnCheck.textContent = 'Check';
    btnCheck.classList.remove('controls__btn_true');
    btnContinue.disabled = true;
    letterTrue = false;
  }

  if (levelData.textExample.split(' ').length === arrPuzzles.length) {
    btnCheck.disabled = false;
  } else btnCheck.disabled = true;

  setHintOnOff();
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

  const arrWordsRandom = [...arrWords];
  arrWordsRandom.sort(() => Math.random() - 0.5);

  for (let i = 0; i < arrWordsRandom.length; i += 1) {
    const word = document.createElement('div');
    word.classList.add('game-answers__word');
    if (arrWordsRandom[i] === arrWords[0]) word.classList.add('game-answers__word_first');
    if (arrWordsRandom[i] === arrWords[arrWords.length - 1]) word.classList.add('game-answers__word_last');
    word.textContent = arrWordsRandom[i];
    word.style.width = `${(100 / allWordsLength) * arrWordsRandom[i].length}%`;
    word.style.minWidth = 'fit-content';
    word.dataset.checked = 'false';
    word.dataset.field = `${currentWords}`;
    word.draggable = true;
    gameAnswers.append(word);
    word.addEventListener('click', (event) => {
      movePuzzle(event);
    });
  }

  hintTranslate.textContent = levelData.textExampleTranslate;
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

const gameFields = pageGame.getElementsByClassName('game-box__field');

function nextWords() {
  letterTrue = false;
  setHintOnOff();
  gameFields[currentWords].classList.add('game-box__field_block');
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
  hintTranslate.textContent = levelData.textExampleTranslate;
}

function autoComplete() {
  btnAutoComplete.disabled = true;
  btnCheck.disabled = true;
  const currentPuzzles = pageGame.getElementsByClassName('game-answers__word');
  const sourceResult = levelData.textExample.split(' ');
  const result: HTMLElement[] = [];

  letterTrue = true;
  setHintOnOff();

  gameFields[currentWords].classList.add('game-box__field_block');

  for (let i = 0; i < sourceResult.length; i += 1) {
    for (let j = 0; j < currentPuzzles.length; j += 1) {
      if (
        sourceResult[i] === currentPuzzles[j].textContent &&
        (<HTMLElement>currentPuzzles[j]).dataset.field === currentWords.toString()
      ) {
        result.push(<HTMLElement>currentPuzzles[j]);
      }
    }
  }

  const fieldNumber = currentWords;
  for (let i = 0; i < result.length; i += 1) {
    setTimeout(() => {
      gameFields[fieldNumber].append(result[i]);
    }, i * 200);
    if (i >= result.length - 1) {
      setTimeout(() => {
        nextWords();
        if (i === result.length - 1) btnAutoComplete.disabled = false;
      }, i * 200);
    }
  }

  gameFields[fieldNumber].classList.add('game-box__field_complete');
  setTimeout(() => {
    gameFields[fieldNumber].classList.remove('game-box__field_complete');
  }, 500);
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

function startMove(event: TouchEvent | MouseEvent) {
  const targetElement = event.target as HTMLElement;
  if (targetElement.classList.contains('game-answers__word')) {
    targetElement.classList.add('game-answers__word_move');
    (gameFields[currentWords] as HTMLElement).style.boxShadow = '0 0 3px 3px yellow';
    gameAnswers.style.boxShadow = '0 0 3px 3px yellow';
  }
}

function endMove(event: TouchEvent | MouseEvent) {
  const targetElement = event.target as HTMLElement;
  targetElement.classList.remove('game-answers__word_move');
  (gameFields[currentWords] as HTMLElement).style.boxShadow = '';
  gameAnswers.style.boxShadow = '';
}

function move(event: TouchEvent | MouseEvent) {
  event.preventDefault();
  const [moveElement] = mainPageGame.getElementsByClassName('game-answers__word_move');
  const eventElement =
    'touches' in event
      ? (document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY) as HTMLElement)
      : (event.target as HTMLElement);
  if (!eventElement || !moveElement) return;
  const checkMove =
    (moveElement !== eventElement &&
      eventElement.classList.contains('game-box__field') &&
      eventElement.dataset.field === String(currentWords)) ||
    eventElement.classList.contains('game-answers') ||
    eventElement.classList.contains('game-answers__word');

  if (!checkMove) return;
  const nextElement = eventElement === moveElement.nextElementSibling ? eventElement.nextElementSibling : eventElement;
  if (nextElement && nextElement.parentNode && !eventElement.classList.contains('game-answers__word')) {
    nextElement.append(moveElement);
  } else if (nextElement && nextElement.parentNode && eventElement.classList.contains('game-answers__word')) {
    nextElement.before(moveElement);
  }

  checkField(gameFields);
}

mainPageGame.addEventListener('touchstart', startMove);
mainPageGame.addEventListener('touchend', endMove);
mainPageGame.addEventListener('touchmove', move);

mainPageGame.addEventListener('dragstart', startMove);
mainPageGame.addEventListener('dragend', endMove);
mainPageGame.addEventListener('dragover', (event) => {
  event.preventDefault();
  const [moveElement] = mainPageGame.getElementsByClassName('game-answers__word_move');
  const eventElement = event.target as HTMLElement;
  const checkMove =
    (moveElement !== eventElement &&
      eventElement.classList.contains('game-box__field') &&
      eventElement.dataset.field === String(currentWords)) ||
    eventElement.classList.contains('game-answers') ||
    eventElement.classList.contains('game-answers__word');

  if (!checkMove) return;
  const nextElement = eventElement === moveElement.nextElementSibling ? eventElement.nextElementSibling : eventElement;
  if (nextElement && nextElement.parentNode && !eventElement.classList.contains('game-answers__word')) {
    nextElement.append(moveElement);
  } else if (nextElement && nextElement.parentNode && eventElement.classList.contains('game-answers__word')) {
    nextElement.before(moveElement);
  }

  checkField(gameFields);
});

btnHintTranslate.addEventListener('click', () => {
  btnHintTranslate.classList.toggle('hint-btns__btn_checked');
  hintTranslateShow = hintTranslateShow ? false : true;
  setHintOnOff();
});

export { pageGame };
