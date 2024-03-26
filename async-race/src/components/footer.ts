import './footer.css';

const footer = document.createElement('footer');
footer.classList.add('footer');

const btnNext = document.createElement('button');
const btnPrev = document.createElement('button');
const btnNextWinners = document.createElement('button');
const btnPrevWinners = document.createElement('button');

btnNext.classList.add('footer__btn');
btnPrev.classList.add('footer__btn');
btnNextWinners.className = 'footer__btn footer__btn_hide';
btnPrevWinners.className = 'footer__btn footer__btn_hide';

btnNext.textContent = 'Next';
btnNext.id = 'btn-next';
btnPrev.textContent = 'Prev';
btnPrev.id = 'btn-prev';

btnNextWinners.textContent = 'Next';
btnPrevWinners.textContent = 'Prev';

function toogleFooterBtns() {
  btnNextWinners.classList.toggle('footer__btn_hide');
  btnPrevWinners.classList.toggle('footer__btn_hide');
  btnNext.classList.toggle('footer__btn_hide');
  btnPrev.classList.toggle('footer__btn_hide');
}

footer.append(btnPrev, btnNext, btnPrevWinners, btnNextWinners);

export { footer, btnPrev, btnNext, btnPrevWinners, btnNextWinners, toogleFooterBtns };
