import '../components/modalConfirm.css';

const windowConfirm = document.createElement('div');
windowConfirm.classList.add('modal-confirm');

const windowConfirmTitle = document.createElement('p');
windowConfirmTitle.textContent = 'Are you sure?';
windowConfirm.append(windowConfirmTitle);

const windowConfirmBtnYes = document.createElement('button');
windowConfirmBtnYes.id = 'btn-yes-window-confirm';
windowConfirmBtnYes.textContent = 'Yes';
windowConfirm.append(windowConfirmBtnYes);

const windowConfirmBtnNo = document.createElement('button');
windowConfirmBtnNo.id = 'btn-no-window-confirm';
windowConfirmBtnNo.textContent = 'No';
windowConfirm.append(windowConfirmBtnNo);

export { windowConfirm, windowConfirmBtnYes, windowConfirmBtnNo };
