import './footer.css';

const footer = document.createElement('footer');
footer.classList.add('footer');

const btnNext = document.createElement('button');
const btnPrev = document.createElement('button');
btnNext.classList.add('footer__btn');
btnPrev.classList.add('footer__btn');
btnNext.textContent = 'Next';
btnNext.id = 'btn-next';
btnPrev.textContent = 'Prev';
btnPrev.id = 'btn-prev';
footer.append(btnPrev, btnNext);

export { footer, btnPrev, btnNext };
