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
  console.log(currentCar);
}

function getCarBoxElements(perentElement: HTMLElement) {
  const [carElement] = perentElement.getElementsByTagName('svg');
  const [btnA] = perentElement.getElementsByClassName('btn-a') as HTMLCollectionOf<HTMLButtonElement>;
  const [btnB] = perentElement.getElementsByClassName('btn-b') as HTMLCollectionOf<HTMLButtonElement>;
  return [carElement, btnA, btnB];
}

async function startCar(perentElement: HTMLElement, carId: number) {
  const arrCarElements = getCarBoxElements(perentElement);
  if (arrCarElements[1] instanceof HTMLButtonElement) arrCarElements[1].disabled = true;
  const carSize = arrCarElements[0].getBoundingClientRect().width;
  const trackDistance = perentElement.getBoundingClientRect().width - carSize * 2;
  const data = await startCarApi(carId);
  if (!data) return;
  const carData = data as CarCharacter;
  const time = Number(carData.distance) / Number(carData.velocity);
  let move: number = 0;
  function driveCar() {
    const timerId = setInterval(() => {
      if (move >= trackDistance) clearInterval(timerId);
      move += (trackDistance / time) * 10;
      arrCarElements[0].style.transform = `translateX(${move}px)`;
    }, 10);
    carEngineApi(carId).then((drive) => {
      if (!drive.success) clearInterval(timerId);
    });
    arrCarElements[2].addEventListener('click', () => {
      clearInterval(timerId);
      arrCarElements[0].style.transform = '';
    });
  }

  window.requestAnimationFrame(driveCar);
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

function changePage() {
  const [currentGarageBox] = garagePage.getElementsByClassName('garage-page__content');
  currentGarageBox.remove();
  createGarage();
}

btnNext.addEventListener('click', () => {
  pageNum += 1;
  changePage();
});

btnPrev.addEventListener('click', () => {
  pageNum -= 1;
  changePage();
});

function updatePage() {
  const [pageContent] = garagePage.getElementsByClassName('garage-page__content');
  pageContent.remove();
  createGarage();
}

createGarage();

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
