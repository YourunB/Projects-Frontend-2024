import '../pages/pageWelcome.css';
import '../assets/images/puzzle.png';
import '../assets/images/english.png';

const pageWelcome = document.createElement('section');
pageWelcome.classList.add('page-welcome');

const headerPageWelcome = document.createElement('header');
headerPageWelcome.classList.add('page-welcome__header');
pageWelcome.append(headerPageWelcome);

const mainPageWelcome = document.createElement('main');
mainPageWelcome.classList.add('page-welcome__main');
pageWelcome.append(mainPageWelcome);

const titlePageWelcome = document.createElement('h2');
titlePageWelcome.textContent = 'RSS Puzzle - Learn English Fun';
mainPageWelcome.append(titlePageWelcome);

const descriptionGame = document.createElement('p');
descriptionGame.textContent =
  'RSS Puzzle is an interactive mini-game aimed at enhancing English language skills. Players assemble sentences from jumbled words, inspired by Lingualeos Phrase Constructor training. The game integrates various levels of difficulty, hint options, and a unique puzzle-like experience with artwork.';
mainPageWelcome.append(descriptionGame);

const imagePuzzle = document.createElement('img');
imagePuzzle.classList.add('image-puzzle');
imagePuzzle.src = 'puzzle.png';
imagePuzzle.alt = 'Puzzle';
mainPageWelcome.append(imagePuzzle);

const welcomeBox = document.createElement('div');
welcomeBox.classList.add('welcome-box');
mainPageWelcome.append(welcomeBox);

const getFirstName = function getFirstNameFromLocalStorage() {
  if (localStorage.user !== undefined) {
    const data = JSON.parse(localStorage.getItem('user') || '{}');
    return data.firstName;
  } else return '';
};

const getLastName = function getLastNameFromLocalStorage() {
  if (localStorage.user !== undefined) {
    const data = JSON.parse(localStorage.getItem('user') || '{}');
    return data.lastName;
  } else return '';
};

const welcomeText = document.createElement('p');
welcomeText.classList.add('welcome-box__text');
welcomeText.innerHTML = `Welcome dear <span>${getFirstName()} ${getLastName()}</span>!<br> Have a nice learning experience.`;
welcomeBox.append(welcomeText);

const wrapperBtnStart = document.createElement('div');
wrapperBtnStart.classList.add('wrapper-start');
mainPageWelcome.append(wrapperBtnStart);

const btnStart = document.createElement('button');
btnStart.classList.add('wrapper-start__btn');
btnStart.id = 'btn-start';
btnStart.textContent = 'START';
wrapperBtnStart.append(btnStart);

const wrapperImage = document.createElement('div');
wrapperImage.classList.add('wrapper-image');
mainPageWelcome.append(wrapperImage);

const imageEnglish = document.createElement('img');
imageEnglish.src = 'english.png';
imageEnglish.alt = 'English';
imageEnglish.classList.add('wrapper-image__image-english');
wrapperImage.append(imageEnglish);

btnStart.addEventListener('click', () => {
  location.hash = '#game';
});

export { pageWelcome, welcomeText, getFirstName, getLastName };
