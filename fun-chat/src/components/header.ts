import './header.sass';

const header = document.createElement('header');
header.classList.add('header');

const headerTitle = document.createElement('h1');
headerTitle.classList.add('header__title');
headerTitle.textContent = 'Fun Chat';

const headerLogo = document.createElement('img');
headerLogo.classList.add('header__logo');
headerLogo.src = 'favicon.png';
headerLogo.alt = 'Chat';

header.append(headerTitle, headerLogo);

export { header };
