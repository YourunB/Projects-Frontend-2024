import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const windowAbout = document.getElementById('window-about') as HTMLElement;
const windowSources = document.getElementById('window-sources') as HTMLElement;
const wrapperChoose = document.getElementById('choose-box') as HTMLElement;
const titleApp = document.getElementById('title-app') as HTMLElement;
const btnChoose = document.getElementById('btn-choose') as HTMLElement;
const btnMenu = document.getElementById('btn-menu') as HTMLElement;
const btnUp = document.getElementById('btn-to-top') as HTMLElement;
const btnTheme = document.getElementById('btn-theme') as HTMLElement;
const btnCloseAbout = document.getElementById('btn-close-about') as HTMLElement;

function showBtnUp() {
    if (document.body.getBoundingClientRect().top <= -400) btnUp?.classList.add('btn-to-top_visible');
    else btnUp?.classList.remove('btn-to-top_visible');
}

function setTheme() {
    if (localStorage.getItem('theme') !== null) {
        document.body.classList.add('light-theme');
        btnTheme?.classList.add('header__btn-theme_rotate');
    } else {
        document.body.classList.remove('light-theme');
        btnTheme?.classList.remove('header__btn-theme_rotate');
    }
}

setTheme();

function closeAboutWindow() {
    windowAbout?.classList.remove('about_show');
    document.body.classList.remove('scroll-off');
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

function resetCheckedItem() {
    const newsItems = document.getElementsByClassName('source__item');
    for (let i = 0; i < newsItems.length; i += 1) {
        if (newsItems[i].classList.value === 'source__item source__item_checked') {
            newsItems[i].classList.remove('source__item_checked');
        }
    }
}

windowSources?.addEventListener('click', (event) => {
    const target = event.target as Element;
    if (target.classList.value === 'source__item' || target.classList.value === 'source__item-name') {
        if (target.classList.value === 'source__item') {
            resetCheckedItem();
            const el = event.target as HTMLElement;
            el.classList.add('source__item_checked');
        }
        if (target.classList.value === 'source__item-name') {
            resetCheckedItem();
            console.log(target.parentElement?.classList.add('source__item_checked'));
        }
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

windowAbout?.addEventListener('click', (event) => {
    const target = event.target as Element;
    if (target.classList.value === 'about about_show') closeAboutWindow();
});
btnCloseAbout?.addEventListener('click', () => closeAboutWindow());

titleApp?.addEventListener('click', () => {
    windowAbout?.classList.add('about_show');
    document.body.classList.add('scroll-off');
});

window.addEventListener('scroll', () => {
    showBtnUp();
});
