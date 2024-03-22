import './garagePage.css';

const garagePage = document.createElement('section');
garagePage.classList.add('garage-page');

function createPage(page: number, totalCars: number) {
  const garagePageContent = document.createElement('div');
  garagePageContent.classList.add('garage-page__content');
  garagePage.append(garagePageContent);

  const titleGarageTotalCars = document.createElement('h2');
  titleGarageTotalCars.classList.add('garage-page__content__total');
  titleGarageTotalCars.textContent = `Garage (${totalCars})`;
  const titleGaragePageNum = document.createElement('h3');
  titleGaragePageNum.classList.add('garage-page__content__number');
  titleGaragePageNum.textContent = `Page #${page}`;
  garagePageContent.append(titleGarageTotalCars, titleGaragePageNum);
}

export { garagePage, createPage };
