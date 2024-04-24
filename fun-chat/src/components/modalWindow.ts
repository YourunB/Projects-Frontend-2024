import './modalWindow.sass';

const modalWindow = document.createElement('div');
modalWindow.classList.add('modal');

const modalForm = document.createElement('div');
modalForm.classList.add('modal__form');

const modalFormTitle = document.createElement('h3');
modalFormTitle.classList.add('modal__form__title');
modalFormTitle.id = 'modal-form-title';
modalFormTitle.textContent = 'Error';

const modalFormText = document.createElement('p');
modalFormText.classList.add('modal__form__text');
modalFormText.id = 'modal-form-text';
modalFormText.textContent = 'asdasdasd asd sad asdasdasd asd asd asd asd asd asd aswd sa d';

const modalFormBtn = document.createElement('button');
modalFormBtn.classList.add('modal__form__btn');
modalFormBtn.id = 'modal-form-btn';
modalFormBtn.textContent = 'OK';

modalForm.append(modalFormTitle, modalFormText, modalFormBtn);
modalWindow.append(modalForm);

function closeModal() {
  modalWindow.classList.remove('modal_show');
}

modalFormBtn.addEventListener('click', () => {
  closeModal();
});

modalWindow.addEventListener('click', () => {
  closeModal();
});

function showMessage(title = 'ERROR', text = 'Error in WebSocket. Trying to repeat') {
  modalWindow.classList.add('modal_show');
  modalFormTitle.textContent = title;
  modalFormText.textContent = text;
}

export { modalWindow, modalFormTitle, modalFormText, showMessage };
