const arrletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrQuestions = [
  ['Scary green animal', 'CROCODILE'],
  ['White with long ears', 'RABBIT'],
  ['The thickest tree on earth', 'BAOBAB'],
  ['Highest mountain on earth', 'EVEREST'],
  ['Sank in 1912 year', 'TITANIC'],
  ['Deepest ocean', 'PACIFIC'],
  ['Measures air humidity', 'HYDROMETR'],
  ['The hardest substance in the human body', 'TEETH'],
  ['First planet from the sun', 'MERCURY'],
  ['There are six zeros in the number', 'MILLION'],
];

let questionNumber = selectQuestion(0, arrQuestions.length);
let countMove = 0;

const wrapperSky = document.createElement('div');
wrapperSky.className = 'wrapper-sky';
document.body.append(wrapperSky);

const wrapperSkySun = document.createElement('div');
wrapperSkySun.className = 'wrapper-sky__sun';
document.body.append(wrapperSkySun);

const wrapperDesert = document.createElement('div');
wrapperDesert.className = 'wrapper-desert';
document.body.append(wrapperDesert);

const container = document.createElement('main');
container.className = 'container';
document.body.append(container);

const gallowsSection = document.createElement('section');
gallowsSection.className = 'gallows-section';
container.append(gallowsSection);

for (let i = 0; i <= 6; i += 1) {
  const gallowsSectionImg = document.createElement('img');
  if (i === 0) gallowsSectionImg.className = 'gallows-section__img';
  else gallowsSectionImg.className = 'gallows-section__img gallows-section__img_unvisible';
  gallowsSectionImg.src = `./assets/images/gallows${i}.png`;
  gallowsSection.append(gallowsSectionImg);
}
const gallowsSectionImg = gallowsSection.getElementsByClassName('gallows-section__img');

const gameSection = document.createElement('section');
gameSection.className = 'game-section';
container.append(gameSection);

const gameSectionAnswer = document.createElement('div');
gameSectionAnswer.className = 'game-section__answer';
gameSection.append(gameSectionAnswer);

const gameSectionHint = document.createElement('p');
gameSectionHint.className = 'game-section__hint';
gameSection.append(gameSectionHint);

const gameSectionGuesses = document.createElement('p');
gameSectionGuesses.className = 'game-section__guesses';
gameSectionGuesses.textContent = 'Incorrect guesses: ';
gameSection.append(gameSectionGuesses);

const gameSectionGuessesMove = document.createElement('span');
gameSectionGuessesMove.className = 'game-section__guesses__move';
gameSectionGuessesMove.textContent = `${countMove} / 6`;
gameSectionGuesses.append(gameSectionGuessesMove);

const gameSectionKeyboard = document.createElement('div');
gameSectionKeyboard.className = 'game-section__keyboard';
gameSection.append(gameSectionKeyboard);

arrletters.forEach((letter) => {
  const gameSectionKeyboardBtn = document.createElement('button');
  gameSectionKeyboardBtn.className = 'game-section__keyboard__btn';
  gameSectionKeyboardBtn.textContent = letter;
  gameSectionKeyboard.append(gameSectionKeyboardBtn);
});

function selectQuestion(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createGame() {
  const answer = arrQuestions[questionNumber][1].split('');
  answer.forEach(() => {
    const gameSectionAnswerChar = document.createElement('span');
    gameSectionAnswerChar.className = 'game-section__answer__char';
    gameSectionAnswerChar.textContent = '_';
    gameSectionAnswer.append(gameSectionAnswerChar);
  });
  gameSectionHint.textContent = `Hint: ${arrQuestions[questionNumber][0]}`;
}

function checkChar(char) {
  const answer = arrQuestions[questionNumber][1];
  if (countMove < 6 && answer.indexOf(char) !== -1) {
    const charPosition = document.getElementsByClassName('game-section__answer__char');
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i].toUpperCase() === char) {
        charPosition[i].textContent = answer[i];
      }
    }
  } else {
    if (countMove <= 6) {
      changeMove();
      gallowsSectionImg[countMove].classList.remove('gallows-section__img_unvisible');
    }
  }
}

function changeMove() {
  if (countMove < 6) {
    countMove += 1;
    gameSectionGuessesMove.textContent = `${countMove} / 6`;
  }
}

gameSectionKeyboard.addEventListener('click', (event) => {
  checkChar(event.target.textContent.toUpperCase());
});

createGame();