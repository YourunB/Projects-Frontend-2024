import './header.sass';

const header = document.createElement('header');
header.classList.add('header');

const headerLogoBox = document.createElement('div');
headerLogoBox.classList.add('header-logo-box');

const headerTitle = document.createElement('h1');
headerTitle.classList.add('header__title');
headerTitle.textContent = 'Fun Chat';

const headerLogo = document.createElement('img');
headerLogo.classList.add('header__logo');
headerLogo.src = 'favicon.png';
headerLogo.alt = 'Chat';

const headerUser = document.createElement('p');
headerUser.classList.add('header__user');
headerUser.id = 'header-user';

const btnLogOut = document.createElement('button');
btnLogOut.classList.add('header__btn');
btnLogOut.textContent = 'LogOut';

headerLogoBox.append(headerTitle, headerLogo);
header.append(headerLogoBox, headerUser, btnLogOut);

export { header, headerUser, btnLogOut };
