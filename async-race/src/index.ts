import './index.css';
import { header, btnToGarage, btnToWinners } from './components/header';
import { footer } from './components/footer';
import { garagePage, createPage } from './pages/garagePage';
import { winnersPage } from './pages/winnersPage';
import { createCarBox } from './components/car';
import { clearFields } from './components/utils';
import {
  totalСars,
  getCarsApi,
  createCarApi,
  removeCarApi,
  selectCarApi,
  updateCarApi,
  startCarApi,
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

async function createCar(name: string = '', color: string = 'white', id: number) {
  const newCar = await createCarBox(name, color, id);
  newCar.addEventListener('click', (event) => {
    const currentTarget = event.target as HTMLElement;
    if (currentTarget.tagName === 'BUTTON') {
      if (currentTarget.textContent === 'Remove') removeCar(Number(currentTarget.dataset.id));
      if (currentTarget.textContent === 'Select') selectCar(Number(currentTarget.dataset.id));
      if (currentTarget.textContent === 'A') {
        const res = startCarApi(Number(currentTarget.dataset.id));
        console.log(res);
      }
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

function updatePage() {
  const pageContent = garagePage.getElementsByClassName('garage-page__content');
  for (let i = pageContent.length - 1; i >= 0; i -= 1) {
    pageContent[i].remove();
  }
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
