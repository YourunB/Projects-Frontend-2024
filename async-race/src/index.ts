import './index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { footer } from './components/footer';
import { garagePage, createPage } from './pages/garagePage';
import { winnersPage } from './pages/winnersPage';
import { createCarBox } from './components/car';
import { clearFields } from './components/utils';
import {
  getCarsApi,
  createCarApi,
  removeCarApi,
  selectCarApi,
  updateCarApi,
  startCarApi,
  stopCarApi,
  carEngineApi,
} from './components/api';
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
} from './components/formCreate';

const app = document.createElement('div');
app.classList.add('container');
document.body.append(app);

const main = document.createElement('main');
main.classList.add('main');
app.append(main);
main.append(garagePage);
main.append(winnersPage);

app.append(header, main, footer);
garagePage.append(formCreateCar);

interface Car {
  name: string;
  color: string;
  id: string;
}

interface CarCharacter {
  velocity: number;
  distance: number;
}

type CarsArray = Car[];

interface CarBoxElements {
  carImage: HTMLElement;
  btnA: HTMLButtonElement;
  btnB: HTMLButtonElement;
  btnSelect: HTMLButtonElement;
  btnRemove: HTMLButtonElement;
}

const btnNext = document.getElementById('btn-next') as HTMLButtonElement;
const btnPrev = document.getElementById('btn-prev') as HTMLButtonElement;

let pageNum = 1;
let cars: CarsArray | undefined = [];

btnToGarage.addEventListener('click', () => {
  winnersPage.classList.add('winners-page_hide');
  garagePage.classList.remove('garage-page_hide');
});

btnToWinners.addEventListener('click', () => {
  garagePage.classList.add('garage-page_hide');
  winnersPage.classList.remove('winners-page_hide');
});

async function removeCar(id: number) {
  await removeCarApi(id);
  clearFields(garagePage);
  updatePage();
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
    const timerId = setInterval(() => {
      if (move >= trackDistance) {
        clearInterval(timerId);
        btnReset.disabled = false;
      }
      move += (trackDistance / time) * 10;
      carBoxElements.carImage.style.transform = `translateX(${move}px)`;
    }, 10);
    carEngineApi(carId).then((drive) => {
      if (!drive.success) clearInterval(timerId);
    });
    carBoxElements.btnB.addEventListener('click', () => {
      stopCar(carId, carBoxElements, Number(timerId));
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
      if (currentTarget.textContent === 'Remove') removeCar(Number(currentTarget.dataset.id));
      if (currentTarget.textContent === 'Select') selectCar(Number(currentTarget.dataset.id));
      if (currentTarget.textContent === 'A') {
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
  resetRace();

  const [pageContent] = garagePage.getElementsByClassName('garage-page__content');
  await pageContent.remove();
  createGarage();

  btnReset.disabled = true;
  btnRace.disabled = false;
}

createGarage();

btnNext.addEventListener('click', () => {
  pageNum += 1;
  updatePage();
});

btnPrev.addEventListener('click', () => {
  pageNum -= 1;
  updatePage();
});

btnCreateCar.addEventListener('click', async () => {
  const newId = cars?.map((car) => Number(car.id)) || [0];
  const objNewCar = {
    name: inputCreateNameCar.value,
    color: inputCreateColorCar.value,
    id: Math.max(...newId) + 1,
  };
  await createCarApi(objNewCar);
  updatePage();
  clearFields(garagePage);
  boxUpdate.classList.add('form-create-wrapper_disable');
});

btnUpdateCar.addEventListener('click', async () => {
  const objUpdateCar = {
    name: inputUpdateNameCar.value,
    color: inputUpdateColorCar.value,
  };
  await updateCarApi(objUpdateCar, Number(inputUpdateNameCar.dataset.id));
  updatePage();
  clearFields(garagePage);
  boxUpdate.classList.add('form-create-wrapper_disable');
});

btnRace.addEventListener('click', () => {
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
