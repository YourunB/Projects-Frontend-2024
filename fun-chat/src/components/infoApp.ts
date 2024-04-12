import './infoApp.sass';

const infoApp = document.createElement('div');
infoApp.classList.add('info-app');
infoApp.id = 'window-info';
infoApp.innerHTML = `
  <div class="info-app__box">
    <div class="info-app__box-wrapper">
      <h3>Funny Chat</h3>
      <p>The application is designed to demonstrate the Fun Chat task as part of the RSSchool JS/FE 2024 course</p><p>Users and messages are deleted once a day</p>
      <p>App created by <a class="dev-link" href="https://github.com/yourunb" target="_blank">Yury Butskevich</a></p>
      <button class="info-app__box__btn" id="btn-close-info">OK</button>
    </div>
  </div>
`;

const btnInfo = document.createElement('img');
btnInfo.classList.add('info');
btnInfo.src = 'info.svg';

const btnCloseInfo = document.getElementById('btn-close-info');

function openInfo() {
  infoApp?.classList.add('info-app_show');
}

function closeInfo() {
  infoApp?.classList.remove('info-app_show');
}

btnCloseInfo?.addEventListener('click', () => closeInfo());
infoApp?.addEventListener('click', () => closeInfo());
btnInfo.addEventListener('click', () => openInfo());

export { infoApp, btnInfo };
