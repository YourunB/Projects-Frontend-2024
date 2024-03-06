import '../pages/pageGame.css';

const pageGame = document.createElement('section');
pageGame.classList.add('page-game');

const headerPageGame = document.createElement('header');
headerPageGame.classList.add('page-game__header');
pageGame.append(headerPageGame);

const mainPageGame = document.createElement('main');
mainPageGame.classList.add('page-game__main');
pageGame.append(mainPageGame);

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
const currentLevel = 5;
const currentRound = 2;
const currentWords = 4;
//let currentAnswer = '';

function createGame() {
  const gameBox = document.createElement('div');
  gameBox.classList.add('game-box');
  mainPageGame.append(gameBox);

  for (let i = 0; i < 10; i += 1) {
    const gameField = document.createElement('div');
    gameField.classList.add('game-box__field');
    gameField.setAttribute('data-field', String(i));
    gameBox.append(gameField);
  }
}

function createAnswers() {
  const gameAnswers = document.createElement('div');
  gameAnswers.classList.add('game-answers');
  mainPageGame.append(gameAnswers);

  levelData = arrLevels.rounds[currentRound].words[currentWords];
  const arrWords = levelData.textExample.split(' ');

  arrWords.sort(() => Math.random() - 0.5);

  for (let i = 0; i < arrWords.length; i += 1) {
    const word = document.createElement('div');
    word.classList.add('game-answers__word');
    word.textContent = arrWords[i];
    word.style.width = `${100 / arrWords.length}%`;
    gameAnswers.append(word);
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

export { pageGame };
