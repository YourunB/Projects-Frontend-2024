import '../pages/pageWelcome.css';
import { btnLogout } from '../components/buttonLogout';
import { windowConfirm, windowConfirmBtnYes, windowConfirmBtnNo } from '../components/modalConfirm';
import '../assets/images/puzzle.png';
import '../assets/images/english.png';

const pageWelcome = document.createElement('section');
pageWelcome.classList.add('page-welcome');

const headerPageWelcome = document.createElement('header');
headerPageWelcome.classList.add('page-welcome__header');
pageWelcome.append(headerPageWelcome);

headerPageWelcome.append(btnLogout);

const mainPageWelcome = document.createElement('main');
mainPageWelcome.classList.add('page-welcome__main');
pageWelcome.append(mainPageWelcome);
mainPageWelcome.append(windowConfirm);

const titlePageWelcome = document.createElement('h1');
titlePageWelcome.textContent = 'RSS Puzzle';
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

const wrapperImage = document.createElement('div');
wrapperImage.classList.add('wrapper-image');
mainPageWelcome.append(wrapperImage);

const imageEnglish = document.createElement('img');
imageEnglish.src = 'english.png';
imageEnglish.alt = 'English';
imageEnglish.classList.add('wrapper-image__image-english');
wrapperImage.append(imageEnglish);

btnLogout.addEventListener('click', () => {
  windowConfirm.classList.add('modal-confirm_show');
});

windowConfirmBtnYes.addEventListener('click', () => {
  if (localStorage.user !== undefined) {
    localStorage.removeItem('user');
    location.hash = '#login';
  }
  windowConfirm.classList.remove('modal-confirm_show');
});

windowConfirmBtnNo.addEventListener('click', () => {
  windowConfirm.classList.remove('modal-confirm_show');
});

export { pageWelcome };
