import { carsBrands, carsModels } from './cars-names';

function clearFields(page: HTMLElement) {
  const inputs = page.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'text') inputs[i].value = '';
    if (inputs[i].type === 'color') inputs[i].value = '#000000';
  }
}

function generateCarName() {
  return `${carsBrands[Math.floor(Math.random() * 50)]} ${carsModels[Math.floor(Math.random() * 50)]}`;
}

function generateCarColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export { clearFields, generateCarName, generateCarColor };
