import './index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { footer } from './components/footer';
import { garagePage, createPage } from './pages/garagePage';
import { winnersPage } from './pages/winnersPage';
import { createCarBox } from './components/car';
import { clearFields, generateCarColor, generateCarName } from './components/utils';
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
  btnGenerateCars,
} from './components/formCreate';
import { overlay, openModal } from './components/modalWindow';

const app = document.createElement('div');
app.classList.add('container');
document.body.append(app);

const main = document.createElement('main');
main.classList.add('main');
app.append(header, main, footer, overlay);
main.append(garagePage, winnersPage);
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
        finishCar(carId, (time / 1000).toFixed(2));
      }
      move += (trackDistance / time) * 10;
      carBoxElements.carImage.style.transform = `translateX(${move}px)`;
    }, 10);
    carEngineApi(carId).then((drive) => {
      if (!drive.success) clearInterval(timerId);
      finishCar(carId, 'broke');
    });
    carBoxElements.btnB.addEventListener('click', () => {
      stopCar(carId, carBoxElements, Number(timerId));
      finishCar(carId, 'broke');
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

let winner = false;
function finishCar(carId: number, time: string) {
  if (!winner && carId && time !== 'broke') {
    winner = true;
    cars?.forEach((car) => {
      if (Number(car.id) === carId) {
        openModal('Congratulations', `Car ${car.name} is win! Time: ${time}`);
      }
    });
  }
  console.log(carId, time);
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
  await pageContent.remove();
  createGarage();
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
