const header = document.createElement('header');
document.body.append(header);

const title = document.createElement('h1');
title.textContent = 'Nonograms';
header.append(title);

const nav = document.createElement('nav');
header.append(nav);

const menu = document.createElement('ul');
menu.id = 'menu';
nav.append(menu);

const menuItemGeneral = document.createElement('li');
menuItemGeneral.textContent = 'General';
menu.append(menuItemGeneral);

const menuItemResults = document.createElement('li');
menuItemResults.textContent = 'Results';
menu.append(menuItemResults);

const menuItemSelectLevel = document.createElement('li');
menuItemSelectLevel.textContent = 'Select level';
menu.append(menuItemSelectLevel);

const main = document.createElement('main');
main.classList = 'container';
document.body.append(main);

const footer = document.createElement('footer');
document.body.append(footer);

const footerDev = document.createElement('a');
footerDev.innerHTML = '&copy; 2024 Yury Butskevich';
footerDev.href = 'https://github.com/yourunb';
footerDev.target = '_blank';
footer.append(footerDev);