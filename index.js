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

const overlay = document.createElement('div');
overlay.className = 'overlay overlay_unvisible';
document.body.append(overlay);

const modal = document.createElement('div');
modal.className = 'modal modal_unvisible';
container.append(modal);

const modalTitle = document.createElement('h3');
modalTitle.className = 'modal__title';
modal.append(modalTitle);

const modalAnswer = document.createElement('p');
modalAnswer.className = 'modal__answer';
modal.append(modalAnswer);

const modalBtn = document.createElement('button');
modalBtn.className = 'modal__btn';
modalBtn.textContent = 'Play again'
modal.append(modalBtn);

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

function checkChar(char, btn) {
  if (arrletters.indexOf(char) !== -1 && countMove < 6) {
    btn.disabled = true;
    const answer = arrQuestions[questionNumber][1];
    if (answer.indexOf(char) !== -1) {
      const charPosition = document.getElementsByClassName('game-section__answer__char');
      for (let i = 0; i < answer.length; i += 1) {
        if (answer[i].toUpperCase() === char) {
          charPosition[i].textContent = answer[i];
        }
      }
    } else {
      countMove += 1;
      gameSectionGuessesMove.textContent = `${countMove} / 6`;
      gallowsSectionImg[countMove].classList.remove('gallows-section__img_unvisible');
    }
  }
}

gameSectionKeyboard.addEventListener('click', (event) => {
  checkChar(event.target.textContent.toUpperCase(), event.target);
});

window.addEventListener('keydown', (event) => {
  const arrBtns = gameSectionKeyboard.children;
  const charBtn = event.key.toUpperCase();
  let clickBtn;
  for (let i = 0; i < arrBtns.length; i += 1) {
    if (arrBtns[i].textContent === charBtn && !arrBtns[i].disabled) clickBtn = arrBtns[i];
  }
  if (clickBtn !== undefined) checkChar(charBtn, clickBtn);
});

createGame();