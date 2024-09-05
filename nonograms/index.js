document.body.classList.add("scroll-off");

const startDisplay = document.createElement("div");
startDisplay.className = "start-display";
document.body.append(startDisplay);

const startDisplayTitle = document.createElement("h1");
startDisplayTitle.className = "start-display__title";
startDisplayTitle.textContent = "NONOGRAMS";
startDisplay.append(startDisplayTitle);

const startDisplayLoading = document.createElement("div");
startDisplayLoading.className = "start-display__loading";
startDisplay.append(startDisplayLoading);

const startDisplayLoadingLine = document.createElement("div");
startDisplayLoadingLine.className = "start-display__loading__line";
startDisplayLoading.append(startDisplayLoadingLine);

const startDisplayBtn = document.createElement("button");
startDisplayBtn.className = "start-display__btn";
startDisplayBtn.textContent = "START";
startDisplay.append(startDisplayBtn);

const audioCheck = document.createElement("audio");
audioCheck.src = "./assets/audio/check.mp3";
document.body.append(audioCheck);

const audioUncheck = document.createElement("audio");
audioUncheck.src = "./assets/audio/uncheck.mp3";
document.body.append(audioUncheck);

const audioCross = document.createElement("audio");
audioCross.src = "./assets/audio/cross.mp3";
document.body.append(audioCross);

const audioMusic = document.createElement("audio");
audioMusic.src = "./assets/audio/music.mp3";
audioMusic.volume = 0.5;
audioMusic.loop = true;
document.body.append(audioMusic);

const audioWin = document.createElement("audio");
audioWin.src = "./assets/audio/win.mp3";
document.body.append(audioWin);

const audioClick = document.createElement("audio");
audioClick.src = "./assets/audio/click.mp3";
document.body.append(audioClick);

const header = document.createElement("header");
document.body.append(header);

const title = document.createElement("h2");
title.textContent = "Nonograms";
title.classList = "text-shine";
header.append(title);

const nav = document.createElement("nav");
header.append(nav);

const menu = document.createElement("ul");
menu.id = "menu";
nav.append(menu);

const menuItemSelectLevel = document.createElement("li");
menuItemSelectLevel.textContent = "Levels";
menu.append(menuItemSelectLevel);

const menuItemTheme = document.createElement("li");
menuItemTheme.textContent = "Theme";
menu.append(menuItemTheme);

const menuItemSound = document.createElement("li");
menuItemSound.textContent = "Sound";
menu.append(menuItemSound);

const menuItemResults = document.createElement("li");
menuItemResults.textContent = "Results";
menu.append(menuItemResults);

const backImg = document.createElement("img");
backImg.src = "./assets/images/lines.png";
backImg.classList = "back-img";
document.body.append(backImg);

const salutImg = document.createElement("img");
salutImg.src = "./assets/images/salut.gif";
salutImg.classList = "salut-img unvisible";
document.body.append(salutImg);

const main = document.createElement("main");
main.classList = "container";
document.body.append(main);

const overlay = document.createElement("div");
overlay.classList = "overlay unvisible";
document.body.append(overlay);

const modalAlert = document.createElement("div");
modalAlert.classList = "modal-alert show-alert unvisible";
document.body.append(modalAlert);

const modalAlertText = document.createElement("div");
modalAlertText.classList = "modal-alert__text";
modalAlert.append(modalAlertText);

const modalSound = document.createElement("div");
modalSound.classList = "modal-sound show unvisible";
document.body.append(modalSound);

const btnCloseModalSound = document.createElement("img");
btnCloseModalSound.src = "./assets/images/svg/cross.svg";
btnCloseModalSound.classList = "close-img";
modalSound.append(btnCloseModalSound);

const modalSoundTitle = document.createElement("h3");
modalSoundTitle.textContent = "SOUND CONTROL";
modalSoundTitle.classList = "modal-sound__title text-shine";
modalSound.append(modalSoundTitle);

for (let i = 0; i < 6; i += 1) {
  const modalSoundBox = document.createElement("div");
  modalSoundBox.classList = "modal-sound__box";
  modalSound.append(modalSoundBox);
  const modalSoundInput = document.createElement("input");
  modalSoundInput.type = "checkbox";
  modalSoundInput.checked = true;
  modalSoundInput.id = `switch${i + 1}`;
  modalSoundBox.append(modalSoundInput);
  const modalSoundLabel = document.createElement("label");
  modalSoundLabel.setAttribute("for", `switch${i + 1}`);
  modalSoundBox.append(modalSoundLabel);
  const modalSoundText = document.createElement("span");
  if (i === 0) modalSoundText.textContent = "Music";
  if (i === 1) modalSoundText.textContent = "Fill cell";
  if (i === 2) modalSoundText.textContent = "Unfill cell";
  if (i === 3) modalSoundText.textContent = "Cross cell";
  if (i === 4) modalSoundText.textContent = "Win";
  if (i === 5) modalSoundText.textContent = "Click";
  modalSoundBox.append(modalSoundText);
}

const modalTheme = document.createElement("div");
modalTheme.classList = "modal-theme show unvisible";
document.body.append(modalTheme);

const btnCloseModalTheme = document.createElement("img");
btnCloseModalTheme.src = "./assets/images/svg/cross.svg";
btnCloseModalTheme.classList = "close-img";
modalTheme.append(btnCloseModalTheme);

const modalThemeTitle = document.createElement("h3");
modalThemeTitle.textContent = "SELECT THEME";
modalThemeTitle.classList = "modal-theme__title text-shine";
modalTheme.append(modalThemeTitle);

for (let i = 0; i < 5; i += 1) {
  const theme = document.createElement("p");
  theme.textContent = `Theme ${i + 1}`;
  theme.classList = "modal-theme__theme";
  modalTheme.append(theme);
}

const modalResults = document.createElement("div");
modalResults.classList = "modal-results show unvisible";
document.body.append(modalResults);

const btnCloseModalResults = document.createElement("img");
btnCloseModalResults.src = "./assets/images/svg/cross.svg";
btnCloseModalResults.classList = "close-img";
modalResults.append(btnCloseModalResults);

const modalResultsTitle = document.createElement("h3");
modalResultsTitle.classList = "modal-results__title text-shine";
modalResultsTitle.textContent = "LAST RESULTS";
modalResults.append(modalResultsTitle);

const modalResultsContent = document.createElement("p");
modalResultsContent.classList = "modal-results__content";
modalResults.append(modalResultsContent);

const modalLvl = document.createElement("div");
modalLvl.classList = "modal-lvl show unvisible";
document.body.append(modalLvl);

const btnCloseModalLvl = document.createElement("img");
btnCloseModalLvl.src = "./assets/images/svg/cross.svg";
btnCloseModalLvl.classList = "close-img";
modalLvl.append(btnCloseModalLvl);

const modalLvlTitle = document.createElement("h3");
modalLvlTitle.classList = "modal-lvl__title text-shine";
modalLvlTitle.textContent = "SELECT LEVEL";
modalLvl.append(modalLvlTitle);

for (let i = 0; i < 15; i += 1) {
  const lvlName = document.createElement("p");
  if (i >= 0 && i < 5) lvlName.textContent = `TASK ${i + 1} - 5x5`;
  if (i >= 5 && i < 10) lvlName.textContent = `TASK ${i + 1} - 10x10`;
  if (i >= 10 && i < 15) lvlName.textContent = `TASK ${i + 1} - 15x15`;
  lvlName.classList = "modal-lvl__task";
  lvlName.setAttribute("data-task", i);
  modalLvl.append(lvlName);
}

const modalWin = document.createElement("div");
modalWin.classList = "modal-win unvisible";
document.body.append(modalWin);

const modalWinTitle = document.createElement("h3");
modalWinTitle.classList = "modal-win__title text-shine";
modalWinTitle.innerHTML = "Congratulations!<br>You win";
modalWin.append(modalWinTitle);

const modalWinMessage = document.createElement("p");
modalWinMessage.classList = "modal-win__message";
modalWin.append(modalWinMessage);

const btnPlayAgain = document.createElement("button");
btnPlayAgain.classList = "btn btn_again";
btnPlayAgain.title = "Play Again";
modalWin.append(btnPlayAgain);

const btnRandom = document.createElement("button");
btnRandom.classList = "btn btn_random";
btnRandom.title = "Random Level";
modalLvl.append(btnRandom);

const timerSection = document.createElement("section");
timerSection.classList = "timer-section";
main.append(timerSection);

const timer = document.createElement("p");
timer.textContent = "00:00";
timer.classList = "timer-section__timer";
timerSection.append(timer);

const gameSection = document.createElement("section");
gameSection.classList = "game-section";
main.append(gameSection);

const controlsSection = document.createElement("section");
controlsSection.classList = "controls-section";
main.append(controlsSection);

const btnReset = document.createElement("button");
btnReset.classList = "btn btn_reset";
btnReset.title = "Reset Game";
controlsSection.append(btnReset);

const btnSolutuion = document.createElement("button");
btnSolutuion.classList = "btn btn_solution";
btnSolutuion.title = "Solution";
controlsSection.append(btnSolutuion);

const btnSave = document.createElement("button");
btnSave.classList = "btn btn_save";
btnSave.title = "Save Game";
controlsSection.append(btnSave);

const btnLastGame = document.createElement("button");
btnLastGame.classList = "btn btn_load";
btnLastGame.title = "Load Game";
controlsSection.append(btnLastGame);

const footer = document.createElement("footer");
document.body.append(footer);

const footerDev = document.createElement("a");
footerDev.innerHTML = "&copy; 2024 Yury Butskevich";
footerDev.href = "https://github.com/yourunb";
footerDev.target = "_blank";
footer.append(footerDev);

const lvls = [
  [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ],
  [
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
  ],
  [
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  ],
  [
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  ],
  [
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  ],
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
];

let currentLvlNumber = 0;
let currentLvl = lvls[currentLvlNumber];
let timerGameId = null;
let minStart = 0;
let secStart = 0;

function createTable(arr) {
  clearTimerGame();
  const table = document.createElement("table");
  table.classList = "game-table";
  gameSection.append(table);

  for (let i = 0; i <= arr.length; i += 1) {
    let classRow = "game-table__row";
    const row = document.createElement("tr");
    if (i === 0) classRow = "game-table__top";
    row.classList = classRow;
    table.append(row);

    for (let j = 0; j <= arr.length; j += 1) {
      const cell = document.createElement("td");
      if (i === 0 && j !== 0) cell.classList = "game-table__top-hint";
      if (j === 0 && i !== 0) cell.classList = "game-table__row-hint";
      if (j !== 0 && i !== 0) {
        cell.setAttribute("data-checked", 0);
        cell.setAttribute("data-cross", 0);
        cell.classList = "game-table__row__cell";
      }
      row.append(cell);
    }
  }

  addHint(arr);
}

function addHint(arr) {
  const tophint = document.getElementsByClassName("game-table__top-hint");
  const leftHint = document.getElementsByClassName("game-table__row-hint");

  for (let i = 0; i < arr.length; i += 1) {
    let countInRow = 0;
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1) countInRow += 1;
      if (
        (arr[i][j] === 0 || arr[i][j + 1] === undefined) &&
        countInRow !== 0
      ) {
        leftHint[i].textContent += `${countInRow} `;
        countInRow = 0;
      }
    }
  }

  const arrRotate = arr[0].map((v, i) => arr.map((row) => row[i]).reverse());
  for (let i = 0; i < arrRotate.length; i += 1) {
    let countInCol = 0;
    for (let j = 0; j < arrRotate[i].length; j += 1) {
      if (arrRotate[i][j] === 1) countInCol += 1;
      if (
        (arrRotate[i][j] === 0 || arrRotate[i][j + 1] === undefined) &&
        countInCol !== 0
      ) {
        tophint[i].innerHTML = `${countInCol}<br>` + tophint[i].innerHTML;
        countInCol = 0;
      }
    }
  }
}

function checkResult() {
  const tableRow = document.getElementsByClassName("game-table__row");

  for (let i = 0; i < currentLvl.length; i += 1) {
    for (let j = 0; j < currentLvl[i].length; j += 1) {
      if (
        currentLvl[i][j] === 1 &&
        tableRow[i].children[j + 1].dataset.checked !== "1"
      )
        return;
      if (
        currentLvl[i][j] === 0 &&
        tableRow[i].children[j + 1].dataset.checked !== "0"
      )
        return;
    }
  }
  if (document.getElementById("switch5").checked === true) audioWin.play();
  saveResults(
    tableRow.length,
    timer.textContent,
    modalLvl.getElementsByClassName("modal-lvl__task")[currentLvlNumber]
      .textContent,
  );
  modalWin.classList.remove("unvisible");
  modalWinMessage.textContent = `Game time: ${timer.textContent}`;
  clearTimerGame();
  overlay.classList.remove("unvisible");
  salutImg.classList.remove("unvisible");
}

function saveResults(row, time, task) {
  const min = Number(timer.textContent.slice(0, 2));
  const sec = Number(timer.textContent.slice(-2));
  const timeInSec = min * 60 + sec;
  let difficult = "easy";
  if (row >= 0 && row <= 6) difficult = "easy difficult";
  if (row >= 7 && row <= 11) difficult = "middle difficult";
  if (row >= 12) difficult = "hard difficult";
  if (localStorage.getItem("results")) {
    const arr = JSON.parse(localStorage.getItem("results"));
    arr.push([timeInSec, time, task, difficult]);
    localStorage.setItem("results", JSON.stringify(arr));
  } else {
    const arr = [[timeInSec, time, task, difficult]];
    localStorage.setItem("results", JSON.stringify(arr));
  }
}

function deleteTable() {
  const table = gameSection.getElementsByTagName("table");
  if (table[0] !== undefined) {
    table[0].remove();
  }
}

function randomTask(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timerGame() {
  let min = minStart;
  let sec = secStart;
  timerGameId = setInterval(() => {
    sec += 1;
    if (sec >= 60) {
      min += 1;
      sec = 0;
    }
    timer.textContent = `${String(min).length === 1 ? "0" + min : min}:${
      String(sec).length === 1 ? "0" + sec : sec
    }`;
  }, 1000);
}

function clearTimerGame() {
  clearInterval(timerGameId);
  timerGameId = null;
  minStart = 0;
  secStart = 0;
  timer.textContent = `00:00`;
}

function showAlert(text) {
  modalAlertText.textContent = text;
  modalAlert.classList.remove("unvisible");
  setTimeout(() => {
    modalAlert.classList.add("unvisible");
  }, 995);
}

menuItemSelectLevel.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  modalLvl.classList.remove("unvisible");
  overlay.classList.remove("unvisible");
});

modalLvl.addEventListener("click", (event) => {
  if (event.target.classList.value.includes("modal-lvl__task")) {
    if (document.getElementById("switch6").checked === true) audioClick.play();
    deleteTable();
    currentLvlNumber = event.target.dataset.task;
    currentLvl = lvls[currentLvlNumber];
    createTable(currentLvl);
    overlay.classList.add("hide");
    modalLvl.classList.add("hide");
    setTimeout(() => {
      overlay.classList.add("unvisible");
      modalLvl.classList.add("unvisible");
      overlay.classList.remove("hide");
      modalLvl.classList.remove("hide");
    }, 490);
    enableBtns();
  }
});

btnRandom.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  clearTimerGame();
  deleteTable();
  currentLvlNumber = randomTask(0, 14);
  currentLvl = lvls[currentLvlNumber];
  createTable(currentLvl);
  overlay.classList.add("hide");
  modalLvl.classList.add("hide");
  setTimeout(() => {
    overlay.classList.add("unvisible");
    modalLvl.classList.add("unvisible");
    overlay.classList.remove("hide");
    modalLvl.classList.remove("hide");
  }, 490);
  enableBtns();
});

btnPlayAgain.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  clearTimerGame();
  deleteTable();
  createTable(currentLvl);
  modalWin.classList.add("unvisible");
  overlay.classList.add("unvisible");
  salutImg.classList.add("unvisible");
});

btnReset.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  showAlert("Game reset");
  clearTimerGame();
  deleteTable();
  createTable(currentLvl);
  enableBtns();
});

document.body.addEventListener("click", (event) => {
  if (event.target.classList[0] === "game-table__row__cell") {
    if (timerGameId === null) timerGame();
    event.target.classList.toggle("game-table__row__cell_checked");
    event.target.classList.remove("game-table__row__cell_cross");
    event.target.setAttribute("data-cross", 0);

    if (
      event.target.classList.value.includes("game-table__row__cell_checked")
    ) {
      event.target.setAttribute("data-checked", 1);
      if (document.getElementById("switch2").checked === true)
        audioCheck.play();
    } else {
      event.target.setAttribute("data-checked", 0);
      if (document.getElementById("switch3").checked === true)
        audioUncheck.play();
    }

    checkResult();
  }
});

document.body.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (event.target.classList[0] === "game-table__row__cell") {
    if (timerGameId === null) timerGame();
    event.target.classList.remove("game-table__row__cell_checked");
    event.target.classList.toggle("game-table__row__cell_cross");
    event.target.setAttribute("data-checked", 0);

    if (event.target.classList.value.includes("game-table__row__cell_cross")) {
      event.target.setAttribute("data-cross", 1);
      if (document.getElementById("switch4").checked === true)
        audioCross.play();
    } else {
      event.target.setAttribute("data-cross", 0);
      if (document.getElementById("switch3").checked === true)
        audioUncheck.play();
    }

    checkResult();
  }
});

btnSave.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  const table = document.getElementsByClassName("game-section")[0];
  const obj = {
    lvl: Number(currentLvlNumber),
    min: Number(timer.textContent.slice(0, 2)),
    sec: Number(timer.textContent.slice(-2)),
    table: table.innerHTML,
  };
  localStorage.setItem("lastGame", JSON.stringify(obj));
  showAlert("Game saved");
});

btnLastGame.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  clearTimerGame();
  enableBtns();
  if (localStorage.getItem("lastGame")) {
    showAlert("Game loaded");
    const data = JSON.parse(localStorage.getItem("lastGame"));
    minStart = data.min;
    secStart = data.sec;
    timer.textContent = `${
      String(data.min).length === 1 ? "0" + data.min : data.min
    }:${String(data.sec).length === 1 ? "0" + data.sec : data.sec}`;
    deleteTable();
    currentLvlNumber = data.lvl;
    currentLvl = lvls[currentLvlNumber];
    gameSection.innerHTML = data.table;
  } else showAlert("No saved game");
});

menuItemResults.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  let results = "";
  modalResults.classList.remove("unvisible");
  overlay.classList.remove("unvisible");
  if (localStorage.getItem("results")) {
    const arr = JSON.parse(localStorage.getItem("results"));
    const arrLast = arr.slice(-5);
    arrLast.sort(function (a, b) {
      return a[0] - b[0];
    });
    for (let i = 0; i < arrLast.length && i < 5; i += 1) {
      results += `${i + 1}. ${arrLast[i][1]} ${arrLast[i][2]} ${
        arrLast[i][3]
      }<br>`;
    }
    modalResultsContent.innerHTML = results;
  } else {
    modalResultsContent.textContent = "No completed games yet";
  }
});

function disableBtns() {
  btnSave.disabled = true;
  btnSolutuion.disabled = true;
}

function enableBtns() {
  btnSave.disabled = false;
  btnSolutuion.disabled = false;
  btnLastGame.disabled = false;
}

function showSolution(arr) {
  const rows = gameSection.getElementsByClassName("game-table__row");
  for (let i = 0; i < arr.length; i += 1) {
    const cells = rows[i].getElementsByClassName("game-table__row__cell");
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === 1)
        cells[j].classList =
          "game-table__row__cell game-table__row__cell_checked";
      if (arr[i][j] === 0) cells[j].classList = "game-table__row__cell";
    }
  }
}

btnSolutuion.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  clearTimerGame();
  disableBtns();
  if (!localStorage.getItem("lastGame")) btnLastGame.disabled = true;
  showSolution(currentLvl);
  gameSection
    .getElementsByClassName("game-table")[0]
    .classList.add("game-table_block");
  showAlert("Game solution");
});

btnCloseModalResults.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  overlay.classList.add("hide");
  modalResults.classList.add("hide");
  setTimeout(() => {
    overlay.classList.add("unvisible");
    modalResults.classList.add("unvisible");
    overlay.classList.remove("hide");
    modalResults.classList.remove("hide");
  }, 490);
});

btnCloseModalLvl.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  overlay.classList.add("hide");
  modalLvl.classList.add("hide");
  setTimeout(() => {
    overlay.classList.add("unvisible");
    modalLvl.classList.add("unvisible");
    overlay.classList.remove("hide");
    modalLvl.classList.remove("hide");
  }, 490);
});

btnCloseModalTheme.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  overlay.classList.add("hide");
  modalTheme.classList.add("hide");
  setTimeout(() => {
    overlay.classList.add("unvisible");
    modalTheme.classList.add("unvisible");
    overlay.classList.remove("hide");
    modalTheme.classList.remove("hide");
  }, 490);
});

btnCloseModalSound.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  overlay.classList.add("hide");
  modalSound.classList.add("hide");
  setTimeout(() => {
    overlay.classList.add("unvisible");
    modalSound.classList.add("unvisible");
    overlay.classList.remove("hide");
    modalSound.classList.remove("hide");
  }, 490);
});

menuItemSound.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  modalSound.classList.remove("unvisible");
  overlay.classList.remove("unvisible");
});

menuItemTheme.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  modalTheme.classList.remove("unvisible");
  overlay.classList.remove("unvisible");
});

modalTheme.addEventListener("click", (event) => {
  const theme = modalTheme.getElementsByClassName("modal-theme__theme");
  switch (event.target) {
    case theme[0]:
      if (document.getElementById("switch6").checked === true)
        audioClick.play();
      document.body.classList = "body_dark";
      break;
    case theme[1]:
      if (document.getElementById("switch6").checked === true)
        audioClick.play();
      document.body.classList = "body_dark-red";
      break;
    case theme[2]:
      if (document.getElementById("switch6").checked === true)
        audioClick.play();
      document.body.classList = "body_dark-green";
      break;
    case theme[3]:
      if (document.getElementById("switch6").checked === true)
        audioClick.play();
      document.body.classList = "body_light-yellow";
      break;
    case theme[4]:
      if (document.getElementById("switch6").checked === true)
        audioClick.play();
      document.body.classList = "";
      break;
  }
});

document.getElementById("switch1").addEventListener("click", () => {
  if (document.getElementById("switch1").checked === true) audioMusic.play();
  else audioMusic.pause();
});

startDisplayBtn.addEventListener("click", () => {
  if (document.getElementById("switch6").checked === true) audioClick.play();
  audioMusic.play();
  createTable(currentLvl);
  startDisplay.classList.add("hide");
  setTimeout(() => {
    startDisplay.classList.add("unvisible");
    startDisplay.classList.remove("hide");
    document.body.classList.remove("scroll-off");
  }, 995);
});

modalSound.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    if (document.getElementById("switch6").checked === true) audioClick.play();
  }
});
