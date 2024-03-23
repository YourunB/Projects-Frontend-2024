import './index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { footer } from './components/footer';
import { garagePage, createPage } from './pages/garagePage';
import { winnersPage } from './pages/winnersPage';
import { createCarBox } from './components/car';
import { totalСars, getCarsApi, createCarApi, removeCarApi } from './components/api';
import { formCreateCar, inputCreateNameCar, inputCreateColorCar, btnCreateCar } from './components/formCreate';

interface Car {
  name: string;
  color: string;
  id: string;
}

type CarsArray = Car[];

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

const pageNum = 1;
let cars: CarsArray | undefined = [];

btnToGarage.addEventListener('click', () => {
  winnersPage.classList.add('winners-page_hide');
  garagePage.classList.remove('garage-page_hide');
});

btnToWinners.addEventListener('click', () => {
  garagePage.classList.add('garage-page_hide');
  winnersPage.classList.remove('winners-page_hide');
});

function removeCar(id: number) {
  removeCarApi(id);
  const deleteCar = document.getElementsByClassName('car-box');
  for (let i = 0; i < deleteCar.length; i += 1) {
    const carElement = deleteCar[i] as HTMLElement;
    if (carElement.dataset.id === id.toString()) {
      carElement.remove();
      return;
    }
  }
}

async function createCar(name: string = '', color: string = 'white', id: number) {
  const newCar = await createCarBox(name, color, id);
  newCar.addEventListener('click', (event) => {
    const currentTarget = event.target as HTMLElement;
    if (currentTarget.tagName === 'BUTTON' && currentTarget.textContent === 'Remove') {
      removeCar(Number(currentTarget.dataset.id));
    }
  });

  const pageBox = garagePage.getElementsByClassName('garage-page__content') as HTMLCollectionOf<Element>;
  pageBox[pageBox.length - 1].append(newCar);
}

async function createGarage() {
  cars = await getCarsApi(pageNum);
  createPage(pageNum, totalСars);

  if (!cars) cars = [];
  for (let i = 0; i < cars.length; i += 1) {
    createCar(cars[i]?.name, cars[i]?.color, Number(cars[i]?.id));
  }
}

createGarage();

btnCreateCar.addEventListener('click', () => {
  const newId = cars?.map((car) => Number(car.id)) || [0];
  const objNewCar = {
    name: inputCreateNameCar.value,
    color: inputCreateColorCar.value,
    id: Math.max(...newId) + 1,
  };
  createCarApi(objNewCar);
  createCar(objNewCar.name, objNewCar.color, objNewCar.id);
});
