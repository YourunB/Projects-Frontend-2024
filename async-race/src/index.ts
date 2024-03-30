import './index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { footer, btnPrev, btnNext, btnNextWinners, btnPrevWinners, toogleFooterBtns } from './components/footer';
import { garagePage, createPage } from './pages/garagePage';
import { winnersPage, winnersPageTitle, winnersPageNum } from './pages/winnersPage';
import { table, tableBody, createTableRow } from './components/tableWinners';
import { createCarBox } from './components/car';
import { clearFields, generateCarColor, generateCarName } from './components/utils';
import { overlay, openModal } from './components/modalWindow';
import {
  getCarsApi,
  createCarApi,
  removeCarApi,
  selectCarApi,
  updateCarApi,
  startCarApi,
  stopCarApi,
  carEngineApi,
} from './components/apiGarage';
import {
  formCreateCar,
  inputCreateNameCar,
  inputCreateColorCar,
  btnCreateCar,
  boxUpdate,
  inputUpdateNameCar,
  inputUpdateColorCar,
  btnUpdateCar,
  btnRace,
  btnReset,
  btnGenerateCars,
  boxCreate,
} from './components/formCreate';
import { getWinnersApi, saveWinnerApi, updateWinnerApi, removeWinnerApi } from './components/apiWinners';

const app = document.createElement('div');
app.classList.add('container');
document.body.append(app);

const main = document.createElement('main');
main.classList.add('main');
app.append(header, main, footer, overlay);
main.append(garagePage, winnersPage);
garagePage.append(formCreateCar);
winnersPage.append(table);

interface Car {
  name: string;
  color: string;
  id: string;
}

type CarsArray = Car[];

interface CarCharacter {
  velocity: number;
  distance: number;
}

interface CarBoxElements {
  carImage: HTMLElement;
  btnA: HTMLButtonElement;
  btnB: HTMLButtonElement;
  btnSelect: HTMLButtonElement;
  btnRemove: HTMLButtonElement;
}

interface Winner {
  name: string;
  color: string;
  wins: number;
  time: number;
  id: string;
}

type WinnersArray = Winner[];

let winner: boolean = false;
let pageNum: number = 1;
let pageNumWinners: number = 1;
let cars: CarsArray | undefined = [];
const arrWinners: WinnersArray = [];

let sortWinner: string = 'no';
const btnSortWin = document.getElementById('btn-sort-win') as HTMLElement;
const btnSortTime = document.getElementById('btn-sort-time') as HTMLElement;

async function removeCar(id: number) {
  await removeCarApi(id);
  await removeWinnerApi(id);
  clearFields(garagePage);
  updatePage();
  updateWinnersTable();
}

async function selectCar(id: number) {
  const currentCar = (await selectCarApi(id)) || {
    name: '',
    color: 'black',
  };
  inputUpdateNameCar.value = currentCar.name;
  inputUpdateNameCar.dataset.id = `${id}`;
  inputUpdateColorCar.value = currentCar.color;
  boxUpdate.classList.remove('form-create-wrapper_disable');
}

function getCarBoxElements(perentElement: HTMLElement) {
  return {
    carImage: perentElement.getElementsByClassName('car-image')[0] as HTMLElement,
    btnA: perentElement.getElementsByClassName('btn-a')[0] as HTMLButtonElement,
    btnB: perentElement.getElementsByClassName('btn-b')[0] as HTMLButtonElement,
    btnSelect: perentElement.getElementsByClassName('car-box__header__btn')[0] as HTMLButtonElement,
    btnRemove: perentElement.getElementsByClassName('car-box__header__btn')[1] as HTMLButtonElement,
  };
}

const carsTimersId: number[] = [];

async function startCar(perentElement: HTMLElement, carId: number) {
  const carBoxElements = getCarBoxElements(perentElement);
  carBoxElements.btnA.disabled = true;
  const carSize = carBoxElements.carImage.getBoundingClientRect().width;
  const trackDistance = perentElement.getBoundingClientRect().width - carSize * 2;
  const data = await startCarApi(carId);
  if (!data) return;
  const carData = data as CarCharacter;
  const time = Number(carData.distance) / Number(carData.velocity);

  let move: number = 0;
  function driveCar() {
    let timerId: NodeJS.Timer | undefined = setInterval(() => {
      if (move >= trackDistance && timerId) {
        clearInterval(timerId);
        btnReset.disabled = false;
        finishCar(carId, Number((time / 1000).toFixed(2)));
      }
      move += (trackDistance / time) * 10;
      carBoxElements.carImage.style.transform = `translateX(${move}px)`;
    }, 10);
    carEngineApi(carId).then((drive) => {
      if (!drive.success && timerId) clearInterval(timerId);
    });
    carBoxElements.btnB.addEventListener('click', () => {
      if (timerId) {
        stopCar(carId, carBoxElements, Number(timerId));
        timerId = undefined;
      }
    });
    carsTimersId.push(Number(timerId));
  }

  carBoxElements.btnB.disabled = false;
  window.requestAnimationFrame(driveCar);
}

function checkCarPosition() {
  const cars = garagePage.getElementsByClassName('car-image') as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < cars.length; i += 1) {
    if (cars[i].style.transform !== '') {
      btnRace.disabled = true;
      return;
    }
  }
  btnRace.disabled = false;
  btnReset.disabled = true;
  unblockBtnsInRace();
}

async function finishCar(carId: number, timeRace: number) {
  let save = false;
  if (!winner && carId) {
    arrWinners?.forEach(async (winner) => {
      if (Number(winner.id) === carId) {
        save = true;
        await updateWinnerApi(
          {
            wins: winner.wins + 1,
            time: timeRace < winner.time ? timeRace : winner.time,
          },
          carId
        );
        updateWinnersTable();
        return;
      }
    });
    if (!save) {
      await saveWinnerApi({
        id: carId,
        wins: 1,
        time: timeRace,
      });
      updateWinnersTable();
    }

    winner = true;
    cars?.forEach((car) => {
      if (Number(car.id) === carId) {
        openModal('Congratulations', `Car ${car.name} is WIN! Time: ${timeRace} sec.`);
      }
      return;
    });
  }
}

async function stopCar(carId: number, carBoxElements: CarBoxElements, timerId?: number) {
  carBoxElements.btnB.disabled = true;
  if (timerId) clearInterval(timerId);
  for (let i = 0; i < carsTimersId.length; i += 1) {
    if (carsTimersId[i] === timerId) {
      carsTimersId.splice(i, 1);
      break;
    }
  }
  await stopCarApi(carId);
  carBoxElements.carImage.style.transform = '';
  carBoxElements.btnA.disabled = false;
  checkCarPosition();
}

async function createCar(name: string = '', color: string = 'white', id: number) {
  const newCar = await createCarBox(name, color, id);
  newCar.addEventListener('click', (event) => {
    const currentTarget = event.target as HTMLElement;
    const perentElement = event.currentTarget as HTMLElement;
    if (currentTarget.tagName === 'BUTTON') {
      if (currentTarget.textContent === 'Remove') {
        openModal('Info', 'You have deleted the car');
        removeCar(Number(currentTarget.dataset.id));
      }
      if (currentTarget.textContent === 'Select') selectCar(Number(currentTarget.dataset.id));
      if (currentTarget.textContent === 'A') {
        blockBtnsInRace();
        startCar(perentElement, Number(currentTarget.dataset.id));
      }
    }
  });

  const pageBox = garagePage.getElementsByClassName('garage-page__content') as HTMLCollectionOf<Element>;
  pageBox[pageBox.length - 1].append(newCar);
}

async function createGarage() {
  cars = await getCarsApi();
  if (!cars) cars = [];
  const startIndex = pageNum === 1 ? 0 : (pageNum - 1) * 7;
  const endIndex = pageNum * 7;
  if (cars.length <= startIndex && pageNum > 1) {
    pageNum -= 1;
    createGarage();
    return;
  }

  if (endIndex < cars.length) btnNext.disabled = false;
  else btnNext.disabled = true;
  if (endIndex > 7) btnPrev.disabled = false;
  else btnPrev.disabled = true;

  createPage(pageNum, cars.length);
  for (let i = startIndex; i < cars.length && i < endIndex; i += 1) {
    createCar(cars[i]?.name, cars[i]?.color, Number(cars[i]?.id));
  }

  setTimeout(() => {
    formCreateCar.classList.remove('form-create_disable');
    btnRace.disabled = false;
  }, 500);
}

function resetRace() {
  if (carsTimersId.length > 0) {
    carsTimersId.forEach((timerId) => clearInterval(timerId));
    carsTimersId.length = 0;
  }

  const cars = garagePage.getElementsByClassName('car-image') as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < cars.length; i += 1) {
    const perentElement = cars[i].parentElement;
    if (perentElement) {
      const carBoxElements = getCarBoxElements(perentElement);
      stopCar(Number(perentElement.dataset.id), carBoxElements);
    }
  }
}

async function updatePage() {
  btnNext.disabled = true;
  btnPrev.disabled = true;
  btnReset.disabled = true;
  boxUpdate.classList.add('form-create-wrapper_disable');
  formCreateCar.classList.add('form-create_disable');

  const [pageContent] = garagePage.getElementsByClassName('garage-page__content');
  pageContent.remove();
  createGarage();
}

async function sortWinners() {
  switch (sortWinner) {
    case 'no':
      break;
    case 'winDown':
      arrWinners.sort((a, b) => b.wins - a.wins);
      break;
    case 'winUp':
      arrWinners.sort((a, b) => a.wins - b.wins);
      break;
    case 'timeDown':
      arrWinners.sort((a, b) => b.time - a.time);
      break;
    case 'timeUp':
      arrWinners.sort((a, b) => a.time - b.time);
      break;
    default:
      break;
  }
}

async function createWinnersArr() {
  let winners: WinnersArray | undefined = [];
  winners = await getWinnersApi();
  if (!winners) winners = [];
  arrWinners.length = 0;
  winners.forEach((winner) => {
    cars?.forEach((car) => {
      if (winner.id === car.id) arrWinners.push({ ...winner, ...car });
    });
  });
  sortWinners();
}

async function clearTableWinners() {
  const rows = tableBody.getElementsByTagName('tr');
  Array.from(rows).forEach((row) => row.remove());
}

function addWinnersToTable() {
  const startIndex = pageNumWinners === 1 ? 0 : (pageNumWinners - 1) * 10;
  const endIndex = pageNumWinners * 10;
  if (arrWinners.length <= startIndex && pageNumWinners > 1) {
    pageNumWinners -= 1;
    addWinnersToTable();
    return;
  }

  if (endIndex < arrWinners.length) btnNextWinners.disabled = false;
  else btnNextWinners.disabled = true;
  if (endIndex > 10) btnPrevWinners.disabled = false;
  else btnPrevWinners.disabled = true;

  for (let i = startIndex; i < arrWinners.length && i < endIndex; i += 1) {
    tableBody.append(
      createTableRow(i + 1, arrWinners[i].color, arrWinners[i].name, arrWinners[i].wins, arrWinners[i].time)
    );
  }

  winnersPageTitle.textContent = `Winners (${arrWinners.length})`;
  winnersPageNum.textContent = `Page #${pageNumWinners}`;
}

function blockBtnsInRace() {
  btnRace.disabled = true;
  btnGenerateCars.disabled = true;
  btnNext.classList.add('footer__btn_disable');
  btnPrev.classList.add('footer__btn_disable');
  boxUpdate.classList.add('form-create-wrapper_disable');
  boxCreate.classList.add('form-create-wrapper_disable');
  const carBtns = garagePage.getElementsByClassName('car-box__header__btn') as HTMLCollectionOf<HTMLButtonElement>;
  Array.from(carBtns).forEach((btn) => (btn.disabled = true));
}

function unblockBtnsInRace() {
  btnGenerateCars.disabled = false;
  btnNext.classList.remove('footer__btn_disable');
  btnPrev.classList.remove('footer__btn_disable');
  if (inputUpdateNameCar.value.length > 0) boxUpdate.classList.remove('form-create-wrapper_disable');
  boxCreate.classList.remove('form-create-wrapper_disable');
  const carBtns = garagePage.getElementsByClassName('car-box__header__btn') as HTMLCollectionOf<HTMLButtonElement>;
  Array.from(carBtns).forEach((btn) => (btn.disabled = false));
}

async function updateWinnersTable() {
  await clearTableWinners();
  await createWinnersArr();
  addWinnersToTable();
}

async function startApp() {
  await createGarage();
  await createWinnersArr();
  addWinnersToTable();
}

startApp();

btnNext.addEventListener('click', () => {
  pageNum += 1;
  updatePage();
});

btnPrev.addEventListener('click', () => {
  pageNum -= 1;
  updatePage();
});

btnNextWinners.addEventListener('click', async () => {
  pageNumWinners += 1;
  await clearTableWinners();
  addWinnersToTable();
});

btnPrevWinners.addEventListener('click', async () => {
  pageNumWinners -= 1;
  await clearTableWinners();
  addWinnersToTable();
});

btnSortWin.addEventListener('click', () => {
  switch (sortWinner) {
    case 'no':
      sortWinner = 'winDown';
      btnSortWin.innerHTML = 'Wins&#8595;';
      break;
    case 'winDown':
      sortWinner = 'winUp';
      btnSortWin.innerHTML = 'Wins&#8593;';
      break;
    default:
      sortWinner = 'no';
      btnSortWin.innerHTML = 'Wins';
  }
  btnSortTime.innerHTML = 'Best time(sec)';
  updateWinnersTable();
});

btnSortTime.addEventListener('click', () => {
  switch (sortWinner) {
    case 'no':
      sortWinner = 'timeDown';
      btnSortTime.innerHTML = 'Best time(sec)&#8595;';
      break;
    case 'timeDown':
      sortWinner = 'timeUp';
      btnSortTime.innerHTML = 'Best time(sec)&#8593;';
      break;
    default:
      sortWinner = 'no';
      btnSortTime.innerHTML = 'Best time(sec)';
  }
  btnSortWin.innerHTML = 'Wins';
  updateWinnersTable();
});

btnCreateCar.addEventListener('click', async () => {
  openModal('Info', 'You have added new car');
  const getId = cars?.map((car) => Number(car.id)) || [0];
  const newId = Math.max(...getId) + 1;
  const objNewCar = {
    name: inputCreateNameCar.value,
    color: inputCreateColorCar.value,
    id: newId,
  };
  await createCarApi(objNewCar);
  updatePage();
  clearFields(garagePage);
});

btnUpdateCar.addEventListener('click', async () => {
  openModal('Info', 'You have updated car details');
  const objUpdateCar = {
    name: inputUpdateNameCar.value,
    color: inputUpdateColorCar.value,
  };
  await updateCarApi(objUpdateCar, Number(inputUpdateNameCar.dataset.id));
  updatePage();
  clearFields(garagePage);
});

btnRace.addEventListener('click', () => {
  blockBtnsInRace();
  winner = false;
  btnRace.disabled = true;
  const cars = garagePage.getElementsByClassName('car-image') as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < cars.length; i += 1) {
    const perentElement = cars[i].parentElement;
    if (perentElement) startCar(perentElement, Number(perentElement.dataset.id));
  }
});

btnReset.addEventListener('click', () => {
  btnReset.disabled = true;
  resetRace();
});

btnGenerateCars.addEventListener('click', async () => {
  openModal('Info', 'You have added 100 new cars');
  const getId = cars?.map((car) => Number(car.id)) || [0];
  let newId = Math.max(...getId) + 1;
  for (let i = 0; i < 100; i += 1) {
    const objNewCar = {
      name: generateCarName(),
      color: generateCarColor(),
      id: (newId += 1),
    };
    await createCarApi(objNewCar);
  }
  updatePage();
});

btnToGarage.addEventListener('click', () => {
  toogleFooterBtns();
  winnersPage.classList.add('winners-page_hide');
  garagePage.classList.remove('garage-page_hide');
});

btnToWinners.addEventListener('click', () => {
  toogleFooterBtns();
  garagePage.classList.add('garage-page_hide');
  winnersPage.classList.remove('winners-page_hide');
});
