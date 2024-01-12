const arrletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const wrapperSky = document.createElement('div');
wrapperSky.className = 'wrapper-sky';
document.body.append(wrapperSky);

const wrapperSkySun = document.createElement('div');
wrapperSkySun.className = 'wrapper-sky__sun';
document.body.append(wrapperSkySun);

const wrapperDesert = document.createElement('div');
wrapperDesert.className = 'wrapper-desert';
document.body.append(wrapperDesert);

const container = document.createElement('main');
container.className = 'container';
document.body.append(container);