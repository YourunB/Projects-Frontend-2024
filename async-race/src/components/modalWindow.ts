import './modalWindow.css';

const overlay = document.createElement('div');
overlay.classList.add('overlay');

const modal = document.createElement('div');
modal.classList.add('modal');

const modalTitle = document.createElement('h3');
modalTitle.classList.add('modal__title');

const modalMessage = document.createElement('p');
modalMessage.classList.add('modal__message');

const btnModal = document.createElement('button');
btnModal.classList.add('modal__btn');
btnModal.textContent = 'Continue';

modal.append(modalTitle, modalMessage, btnModal);
overlay.append(modal);

function closeModal() {
  overlay.classList.remove('overlay_show');
}

function openModal(title: string, msg: string) {
  modalTitle.textContent = title;
  modalMessage.textContent = msg;
  overlay.classList.add('overlay_show');
}

overlay.addEventListener('click', () => {
  closeModal();
});

btnModal.addEventListener('click', () => {
  closeModal();
});

export { overlay, openModal };
