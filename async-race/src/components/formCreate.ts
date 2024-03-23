import './formCreate.css';

const formCreateCar = document.createElement('div');
formCreateCar.classList.add('form-create');

const inputCreateNameCar = document.createElement('input');
inputCreateNameCar.classList.add('form-create__input-text');
inputCreateNameCar.type = 'text';

const inputCreateColorCar = document.createElement('input');
inputCreateColorCar.classList.add('form-create__input-color');
inputCreateColorCar.type = 'color';

const btnCreateCar = document.createElement('button');
btnCreateCar.classList.add('form-create__btn');
btnCreateCar.textContent = 'Create';

const boxCreate = document.createElement('div');
boxCreate.classList.add('form-create-wrapper');
boxCreate.append(inputCreateNameCar, inputCreateColorCar, btnCreateCar);

const inputUpdateNameCar = document.createElement('input');
inputUpdateNameCar.classList.add('form-create__input-text');
inputUpdateNameCar.type = 'text';

const inputUpdateColorCar = document.createElement('input');
inputUpdateColorCar.classList.add('form-create__input-color');
inputUpdateColorCar.type = 'color';

const btnUpdateCar = document.createElement('button');
btnUpdateCar.classList.add('form-create__btn');
btnUpdateCar.textContent = 'Update';

const boxUpdate = document.createElement('div');
boxUpdate.className = 'form-create-wrapper form-create-wrapper_disable';
boxUpdate.append(inputUpdateNameCar, inputUpdateColorCar, btnUpdateCar);

const btnRace = document.createElement('button');
btnRace.className = 'form-create__btn form-create__btn-race';
btnRace.textContent = 'Race';

const btnReset = document.createElement('button');
btnReset.className = 'form-create__btn form-create__btn-race';
btnReset.textContent = 'Reset';

const btnGenerateCars = document.createElement('button');
btnGenerateCars.classList.add('form-create__btn');
btnGenerateCars.textContent = 'Generate Cars';

const boxControls = document.createElement('div');
boxControls.classList.add('form-create-wrapper');
boxControls.append(btnRace, btnReset, btnGenerateCars);

formCreateCar.append(boxCreate, boxUpdate, boxControls);

export { formCreateCar, inputCreateNameCar, inputCreateColorCar, btnCreateCar };
