import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

setTheme();

const windowSources = document.getElementById('window-sources');
const wrapperChoose = document.getElementById('choose-box');
const btnChoose = document.getElementById('btn-choose');
const btnMenu = document.getElementById('btn-menu');
const btnUp = document.getElementById('btn-to-top');
const btnTheme = document.getElementById('btn-theme');

function showBtnUp() {
    if (document.body.getBoundingClientRect().top <= -400) btnUp?.classList.add('btn-to-top_visible');
    else btnUp?.classList.remove('btn-to-top_visible');
}

function setTheme() {
    if (localStorage.getItem('theme') !== null) document.body.classList.add('light-theme');
    else document.body.classList.remove('light-theme');
}

btnTheme?.addEventListener('click', () => {
    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
    else localStorage.removeItem('theme');
    setTheme();
});

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

