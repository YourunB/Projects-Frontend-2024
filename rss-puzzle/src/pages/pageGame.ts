import '../pages/pageGame.css';
import '../assets/images/svg/translate.svg';
import '../assets/images/svg/volume.svg';
import '../assets/images/svg/audio.svg';
import '../assets/images/svg/picture.svg';
import {
  resultsWindow,
  btnContinueInResults,
  addCountsResult,
  addSentenceResult,
  removeSentenceResult,
  addPainting,
} from '../components/resultsWindow';

const pageGame = document.createElement('section');
pageGame.classList.add('page-game');
pageGame.append(resultsWindow);

const headerPageGame = document.createElement('section');
headerPageGame.classList.add('page-game__header');
pageGame.append(headerPageGame);

const levelsBox = document.createElement('div');
levelsBox.classList.add('levels-box');
headerPageGame.append(levelsBox);

const labelLevel = document.createElement('label');
labelLevel.textContent = 'Level:';
const labelRound = document.createElement('label');
labelRound.textContent = 'Round:';
const selectLevel = document.createElement('select');
selectLevel.classList.add('select-level');
const selectRound = document.createElement('select');
selectRound.classList.add('select-level');
levelsBox.append(labelLevel, selectLevel, labelRound, selectRound);

for (let i = 0; i < 6; i += 1) {
  const option = document.createElement('option');
  option.textContent = String(i + 1);
  option.value = String(i + 1);
  selectLevel.append(option);
}

const hintBtns = document.createElement('div');
hintBtns.classList.add('hint-btns');
headerPageGame.append(hintBtns);

const btnHintTranslate = document.createElement('img');
btnHintTranslate.classList.add('hint-btns__btn');
btnHintTranslate.alt = 'translate';
btnHintTranslate.src = 'translate.svg';
hintBtns.append(btnHintTranslate);

const btnHintAudio = document.createElement('img');
btnHintAudio.classList.add('hint-btns__btn');
btnHintAudio.alt = 'audio';
btnHintAudio.src = 'audio.svg';
hintBtns.append(btnHintAudio);

const btnHintPicture = document.createElement('img');
btnHintPicture.classList.add('hint-btns__btn');
btnHintPicture.alt = 'picture';
btnHintPicture.src = 'picture.svg';
hintBtns.append(btnHintPicture);

const audioPlayer = document.createElement('audio');
pageGame.append(audioPlayer);

const mainPageGame = document.createElement('section');
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

const container = document.createElement('div');
container.classList.add('game-container');
mainPageGame.append(container);

const gameBox = document.createElement('div');
gameBox.classList.add('game-box');
container.append(gameBox);

const gameAnswers = document.createElement('div');
gameAnswers.classList.add('game-answers');
container.append(gameAnswers);

const infoRound = document.createElement('div');
infoRound.classList.add('info-round');
gameAnswers.append(infoRound);

const controlsPageGame = document.createElement('section');
controlsPageGame.classList.add('controls');
pageGame.append(controlsPageGame);

const btnAutoComplete = document.createElement('button');
btnAutoComplete.classList.add('controls__btn');
btnAutoComplete.classList.add('controls__btn_auto');
btnAutoComplete.textContent = 'Give Up';
controlsPageGame.append(btnAutoComplete);

const btnResults = document.createElement('button');
btnResults.className = 'controls__btn controls__btn_results controls__btn_hide';
btnResults.textContent = 'Results';
btnResults.disabled = true;
controlsPageGame.append(btnResults);

const btnCheck = document.createElement('button');
btnCheck.classList.add('controls__btn');
btnCheck.textContent = 'Check';
btnCheck.disabled = true;
controlsPageGame.append(btnCheck);

interface levelData {
  audioExample: string;
  id: number;
  textExample: string;
  textExampleTranslate: string;
  word: string;
  wordTranslate: string;
}

interface roundData {
  author: string;
  cutSrc: string;
  id: string;
  imageSrc: string;
  name: string;
  year: string;
}

interface data {
  rounds: {
    levelData: roundData;
    words: levelData[];
  }[];
  roundsCount: number;
}

let arrLevels: data;
let levelData: levelData;
let roundData: roundData;
let currentLevel = 1;
let currentRound = 0;
let currentWords = 0;
let topPosition = 0;
let letterTrue = false;
let hintTranslateShow = false;
let hintAudioShow = false;
let hintPictureShow = false;

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

  const gameFields = gameBox.getElementsByClassName('game-box__field');
  for (let i = 0; i < gameFields.length; i += 1) {
    gameFields[i].classList.remove('game-box__field_block');
  }
}

function setHintOnOff() {
  const data = JSON.parse(localStorage.user);
  hintTranslateShow = data.hintTranslateState;
  hintAudioShow = data.hintAudioState;
  hintPictureShow = data.hintPictureState;

  function setBtnHintOnOff(hint: boolean, btn: HTMLElement) {
    if (hint) btn.classList.add('hint-btns__btn_checked');
    else btn.classList.remove('hint-btns__btn_checked');
  }

  setBtnHintOnOff(hintTranslateShow, btnHintTranslate);
  if (hintTranslateShow || letterTrue) {
    hintTranslate.classList.add('hint-box__hint-translate_visible');
  } else if (!hintTranslateShow && !letterTrue) hintTranslate.classList.remove('hint-box__hint-translate_visible');

  setBtnHintOnOff(hintAudioShow, btnHintAudio);
  if (hintAudioShow || letterTrue) {
    hintAudio.classList.add('hint-box__hint-audio_visible');
  } else if (!hintAudioShow && !letterTrue) hintAudio.classList.remove('hint-box__hint-audio_visible');

  setBtnHintOnOff(hintPictureShow, btnHintPicture);
  const puzzles = pageGame.getElementsByClassName('game-answers__word');
  if (hintPictureShow || letterTrue) {
    for (let i = 0; i < puzzles.length; i += 1) {
      puzzles[i].classList.remove('game-answers__word_hide-image');
    }
  } else if (!hintPictureShow && !letterTrue) {
    for (let i = 0; i < puzzles.length; i += 1) {
      if (!hintPictureShow && !puzzles[i].parentElement?.classList.contains('game-box__field_block')) {
        puzzles[i].classList.add('game-answers__word_hide-image');
      }
    }
  }
}

function saveResults(complete: boolean, round: number) {
  const data = JSON.parse(localStorage.user);
  if (round === 0) data.results = [];
  data.results.push([round, complete]);
  localStorage.setItem('user', JSON.stringify(data));
}

function saveCompleteLevel() {
  const data = JSON.parse(localStorage.user);
  if (data.levels[`level${currentLevel}`].rounds.indexOf(currentRound) === -1) {
    data.levels[`level${currentLevel}`].total = arrLevels.rounds.length;
    data.levels[`level${currentLevel}`].rounds.push(currentRound);
    data.levels[`level${currentLevel}`].rounds.sort((a: number, b: number) => a - b);
    localStorage.setItem('user', JSON.stringify(data));
  }
}

function showFinalImage() {
  saveCompleteLevel();
  gameBox.classList.add('game-box_complete');
  infoRound.classList.add('info-round_show');
  btnCheck.classList.add('controls__btn_true');
  btnCheck.textContent = 'Continue';
  btnCheck.disabled = false;
  btnAutoComplete.disabled = true;
  btnResults.classList.remove('controls__btn_hide');
  btnResults.disabled = false;
}

function hideFinalImage() {
  gameBox.classList.remove('game-box_complete');
  infoRound.classList.remove('info-round_show');
  btnCheck.classList.remove('controls__btn_true');
  btnCheck.textContent = 'Check';
  btnCheck.disabled = true;
  btnAutoComplete.disabled = false;
  btnResults.classList.add('controls__btn_hide');
  btnResults.disabled = true;
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
    letterTrue = true;
    gameFields[currentWords].classList.add('game-box__field_block');
    if (currentWords === 9) showFinalImage();
  } else {
    btnCheck.textContent = 'Check';
    btnCheck.classList.remove('controls__btn_true');
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
  roundData = arrLevels.rounds[currentRound].levelData;
  levelData = arrLevels.rounds[currentRound].words[currentWords];
  const arrWords = levelData.textExample.split(' ');
  const allWordsLength = arrWords.reduce((sum, word) => sum + word.length, 0);
  let leftPosition = 0;
  const arrWordsPuzzle = [];

  for (let i = 0; i < arrWords.length; i += 1) {
    const word = document.createElement('div');
    word.classList.add('game-answers__word');
    if (!hintPictureShow) word.classList.add('game-answers__word_hide-image');
    if (i === 0) word.classList.add('game-answers__word_first');
    if (i === arrWords.length - 1) word.classList.add('game-answers__word_last');

    const wordText = document.createElement('p');
    wordText.textContent = arrWords[i];
    wordText.draggable = false;
    word.append(wordText);

    word.style.width = `${(1000 / allWordsLength) * arrWords[i].length}px`;
    word.dataset.checked = 'false';
    word.dataset.field = `${currentWords}`;
    word.draggable = true;
    word.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${roundData.imageSrc}')`;
    word.style.backgroundPosition = `${-leftPosition}px ${-topPosition}px`;
    leftPosition += Number(word.style.width.slice(0, -2));

    if (!word.classList.contains('game-answers__word_last')) {
      const wordLedge = document.createElement('div');
      wordLedge.classList.add('game-answers__word__ledge');
      wordLedge.style.backgroundPosition = `${-leftPosition}px ${-topPosition - 20.625}px`;
      word.append(wordLedge);
    }

    arrWordsPuzzle.push(word);
    word.addEventListener('click', (event) => {
      movePuzzle(event);
    });
  }

  infoRound.textContent = `Painting: ${arrLevels.rounds[currentRound].levelData.name}, Year: ${arrLevels.rounds[currentRound].levelData.year}, Author: ${arrLevels.rounds[currentRound].levelData.author}.`;

  arrWordsPuzzle
    .sort(() => Math.random() - 0.5)
    .forEach((puzzle) => {
      gameAnswers.append(puzzle);
    });

  hintTranslate.textContent = levelData.textExampleTranslate;
  topPosition += 56.25;
}

function getFile(link: number) {
  fetch(`lingleo/data/wordCollectionLevel${link}.json`)
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

createGame();

function loadCompleteLevel() {
  const data = JSON.parse(localStorage.user);

  for (let i = 6; i >= 1; i -= 1) {
    const level = `level${i}`;
    if (i === 6 && data.levels[level].rounds[data.levels[level].rounds.length - 1] === data.levels[level].total - 1) {
      currentLevel = 1;
      currentRound = 0;
      break;
    }
    if (data.levels[level].rounds[data.levels[level].rounds.length - 1] === data.levels[level].total - 1) {
      currentLevel = i + 1;
      currentRound = 0;
      break;
    }
    if (data.levels[level].total !== null) {
      currentLevel = i;
      currentRound = data.levels[level].rounds[data.levels[level].rounds.length - 1] + 1;
      break;
    }
  }
}

function showSelectLevel() {
  const data = JSON.parse(localStorage.user);

  const optinsSelectLevel = selectLevel.getElementsByTagName('option');
  for (let i = 0; i < optinsSelectLevel.length; i += 1) {
    const level = `level${i + 1}`;
    if (data.levels[level].total === data.levels[level].rounds.length) {
      optinsSelectLevel[i].classList.add('select-level__item_completed');
    } else {
      optinsSelectLevel[i].classList.remove('select-level__item_completed');
    }
    optinsSelectLevel[i].classList.remove('select-level__item_selected');
    if (Number(optinsSelectLevel[i].value) === currentLevel) {
      optinsSelectLevel[i].selected = true;
      optinsSelectLevel[i].classList.add('select-level__item_selected');
    }
  }

  const optinsSelectRound = selectRound.getElementsByTagName('option');
  for (let i = 0; i < optinsSelectRound.length; i += 1) {
    optinsSelectRound[i].classList.remove('select-level__item_selected');
    if (data.levels[`level${currentLevel}`].rounds.indexOf(i) !== -1) {
      optinsSelectRound[i].classList.add('select-level__item_completed');
    } else {
      optinsSelectRound[i].classList.remove('select-level__item_completed');
    }
    if (Number(optinsSelectRound[i].value) === currentRound) {
      optinsSelectRound[i].selected = true;
      optinsSelectRound[i].classList.add('select-level__item_selected');
    }
  }
}

function createLevel() {
  currentWords = 0;
  topPosition = 0;
  letterTrue = false;

  getFile(currentLevel);
  setTimeout(() => {
    createAnswers();

    for (let i = 0; i < arrLevels.rounds.length; i += 1) {
      const option = document.createElement('option');
      option.textContent = String(i + 1);
      option.value = String(i);
      option.classList.add('select-level__item');
      if (Number(option.value) === currentRound) option.selected = true;
      selectRound.append(option);
    }

    showSelectLevel();
  }, 500);

  setHintOnOff();
}

function startGame() {
  loadCompleteLevel();
  createLevel();
}

function changeLevel() {
  createLevel();
}

function resetGame() {
  mainPageGame.classList.add('page-game__main_hide');
  gameBox.classList.remove('game-box_complete');
  infoRound.classList.remove('info-round_show');

  const gameFieldsBlock = gameBox.getElementsByClassName('game-box__field_block');
  const puzzles = pageGame.getElementsByClassName('game-answers__word');
  const roundOptions = selectRound.getElementsByTagName('option');

  setTimeout(() => {
    for (let i = 0; i < gameFieldsBlock.length; i += 1) {
      gameFieldsBlock[i].classList.remove('game-box__field_block');
    }

    for (let i = puzzles.length - 1; i >= 0; i -= 1) {
      puzzles[i].remove();
    }

    for (let i = roundOptions.length - 1; i >= 0; i -= 1) {
      roundOptions[i].remove();
    }

    mainPageGame.classList.remove('page-game__main_hide');
  }, 500);
}

const gameFields = pageGame.getElementsByClassName('game-box__field');

function nextWords() {
  if (currentWords < 10) {
    letterTrue = false;
    gameFields[currentWords].classList.add('game-box__field_block');
    setHintOnOff();
    btnCheck.textContent = 'Check';
    btnCheck.classList.remove('controls__btn_true');
    btnCheck.disabled = true;
    currentWords += 1;
    if (currentWords < 10) {
      createAnswers();
      hintTranslate.textContent = levelData.textExampleTranslate;
      showSelectLevel();
    }
  }

  if (currentWords === 10) {
    showFinalImage();
    currentWords += 1;
    return;
  }

  if (currentWords > 10) {
    hideFinalImage();
    clearFields();
    currentWords = 0;
    currentRound += 1;
    topPosition = 0;

    if (currentLevel !== 6 && currentRound === arrLevels.rounds.length) {
      currentRound = 0;
      currentLevel += 1;
      resetGame();
      changeLevel();
    }

    if (currentLevel === 6 && currentRound === arrLevels.rounds.length) {
      currentRound = 0;
      currentLevel = 1;
      resetGame();
      changeLevel();
    }

    createAnswers();
    hintTranslate.textContent = levelData.textExampleTranslate;
    showSelectLevel();
  }
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
        if (i === result.length - 1) btnAutoComplete.disabled = false;
        nextWords();
      }, i * 200);
    }
  }

  gameFields[fieldNumber].classList.add('game-box__field_complete');
  setTimeout(() => {
    gameFields[fieldNumber].classList.remove('game-box__field_complete');
  }, 500);

  if (currentWords < 10) saveResults(false, currentWords);
}

btnCheck.addEventListener('click', () => {
  if (btnCheck.textContent === 'Check') highlighPuzzle();
  if (btnCheck.textContent !== 'Check') {
    if (currentWords < 10) saveResults(true, currentWords);
    nextWords();
  }
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
  if (gameFields[currentWords]) {
    (gameFields[currentWords] as HTMLElement).style.boxShadow = '';
  }
  if (gameAnswers) {
    gameAnswers.style.boxShadow = '';
  }
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

function changeHintState(hint: string) {
  const data = JSON.parse(localStorage.user);
  data[hint] = data[hint] ? false : true;
  localStorage.setItem('user', JSON.stringify(data));
  setHintOnOff();
}

btnHintTranslate.addEventListener('click', () => {
  changeHintState('hintTranslateState');
});

btnHintAudio.addEventListener('click', () => {
  changeHintState('hintAudioState');
});

hintAudio.addEventListener('click', () => {
  audioPlayer.src = `https://github.com/rolling-scopes-school/rss-puzzle-data/raw/main/${levelData.audioExample}`;
  audioPlayer.play();
  hintAudio.classList.add('hint-box__hint-audio_play');
  setTimeout(() => {
    setTimeout(
      () => {
        hintAudio.classList.remove('hint-box__hint-audio_play');
      },
      audioPlayer.duration * 1000 - 1000
    );
  }, 1000);
});

btnHintPicture.addEventListener('click', () => {
  changeHintState('hintPictureState');
});

selectLevel.addEventListener('change', () => {
  if (currentLevel !== Number(selectLevel.value)) {
    currentLevel = Number(selectLevel.value);
    currentRound = 0;
    getFile(currentLevel);
    resetGame();
    changeLevel();
  }
});

selectRound.addEventListener('change', () => {
  if (currentRound !== Number(selectRound.value)) {
    currentRound = Number(selectRound.value);
    resetGame();
    changeLevel();
  }
});

btnResults.addEventListener('click', () => {
  let countKnow = 0;
  let countDontKnow = 0;
  const data = JSON.parse(localStorage.user);

  for (let i = 0; i < data.results.length; i += 1) {
    const audioSrc = arrLevels.rounds[currentRound].words[i].audioExample;
    const sentence = arrLevels.rounds[currentRound].words[i].textExample;
    addSentenceResult(audioSrc, sentence, data.results[i][1]);
    data.results[i][1] === true ? (countKnow += 1) : (countDontKnow += 1);
  }

  const paintingSrc = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${arrLevels.rounds[currentRound].levelData.cutSrc}`;
  const paintingInfo = arrLevels.rounds[currentRound].levelData.name;
  const paintingAuthor = arrLevels.rounds[currentRound].levelData.author;
  addPainting(paintingSrc, paintingAuthor, paintingInfo);
  addCountsResult(countKnow, countDontKnow);
  resultsWindow.classList.add('results-window_show');
});

btnContinueInResults.addEventListener('click', () => {
  nextWords();
  resultsWindow.classList.remove('results-window_show');
  removeSentenceResult();
});

export { pageGame, startGame, resetGame };
