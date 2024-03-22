import './car.css';

export function createCarBox() {
  const carBox = document.createElement('div');
  carBox.classList.add('car-box');

  const carBoxHeader = document.createElement('div');
  carBoxHeader.classList.add('car-box__header');
  carBox.append(carBoxHeader);

  const btnSelect = document.createElement('button');
  btnSelect.classList.add('car-box__header__btn');
  btnSelect.textContent = 'Select';

  const btnRemove = document.createElement('button');
  btnRemove.classList.add('car-box__header__btn');
  btnRemove.textContent = 'Remove';

  const carName = document.createElement('p');
  carName.classList.add('car-box__header__car');
  carName.textContent = 'BMW';

  carBoxHeader.append(btnSelect, btnRemove, carName);
  return carBoxHeader;
}
