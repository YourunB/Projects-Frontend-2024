import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const windowSources = document.getElementById('window-sources');
const btnMenu = document.getElementById('btn-menu');
const btnUp = document.getElementById('btn-to-top');
const btnChoose = document.getElementById('btn-choose');
const wrapperChoose = document.getElementById('choose-box');

function showBtnUp() {
    if (document.body.getBoundingClientRect().top <= -400) btnUp?.classList.add('btn-to-top_visible');
    else btnUp?.classList.remove('btn-to-top_visible');
}

btnMenu?.addEventListener('click', () => {
    windowSources?.classList.toggle('sources_show');
    btnMenu?.classList.toggle('header__btn-menu_rotate');
});

windowSources?.addEventListener('click', (event) => {
    const target = event.target as Element;
    if (target.classList.value === 'source__item' || target.classList.value === 'source__item-name') {
        windowSources?.classList.toggle('sources_show');
        btnMenu?.classList.toggle('header__btn-menu_rotate');
        wrapperChoose?.classList.add('choose-box_hide');
    }
});

btnChoose?.addEventListener('click', () => {
    windowSources?.classList.toggle('sources_show');
    btnMenu?.classList.toggle('header__btn-menu_rotate');
});

btnUp?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
});

window.addEventListener('scroll', () => {
    showBtnUp();
});

