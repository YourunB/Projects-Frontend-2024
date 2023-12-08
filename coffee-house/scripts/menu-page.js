const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const body = document.body;
const btnBurger = document.getElementById('btn-burger-menu');
const btnCoffee = document.getElementById('btn-coffee');
const btnTea = document.getElementById('btn-tea');
const btnDessert = document.getElementById('btn-dessert');
const blockTea = document.getElementById('tea-block');
const blockDessert = document.getElementById('dessert-block');
const blockCoffee = document.getElementById('coffee-block');
const btnRefresh = document.getElementById('btn-refresh');
let checkedBlock = 'coffee';
let showQuantityProduct = 4;

const modalWindow = document.getElementById('modal-window');
const modalOverlay = document.getElementById('overlay');
const btnModalClose = document.getElementById('btn-modal-close');

btnBurger.addEventListener('click', () => {
  menu.addEventListener('click', (event) => {
    if (event.target.nodeName === 'LI' || event.target.nodeName === 'A') {
      menu.classList.remove('show-menu');
      btnBurger.classList.remove('header__burger-menu_click')
      body.classList.remove('scroll-off');
    }
  });
  if (menu.classList.value === 'menu-list show-menu') {
    menu.classList.remove('show-menu');
    btnBurger.classList.remove('header__burger-menu_click')
    body.classList.remove('scroll-off');
  } else {
    menu.classList.add('show-menu');
    btnBurger.classList.add('header__burger-menu_click')
    body.classList.add('scroll-off');
  }
});

function toogleStateBtns(active, disable1, disable2) {
  active.classList.add('menu__controls_btn_clicked');
  active.disabled = true;
  disable1.classList.remove('menu__controls_btn_clicked');
  disable1.disabled = false;
  disable2.classList.remove('menu__controls_btn_clicked');
  disable2.disabled = false;
}

function toogleStateBlocks(active, disable1, disable2) {
  disable1.classList.add('hide');
  setTimeout(()=>{ disable1.classList.add('unvisible'); }, 500);

  disable2.classList.add('hide');
  setTimeout(()=>{ disable2.classList.add('unvisible'); }, 500);

  setTimeout(()=>{
    active.classList.add('show');
    active.classList.remove('unvisible');
    disable1.classList.remove('hide');
    disable2.classList.remove('hide');
  }, 500);
}

function resetProducts() {
  if (showQuantityProduct > 4) {
    const productsCoffee = document.getElementsByClassName('product__coffee');
    Array.from(productsCoffee).forEach(product => product.classList.add('product__coffee-hide'));
    const productsDessert = document.getElementsByClassName('product__dessert');
    Array.from(productsDessert).forEach(product => product.classList.add('product__dessert-hide'));
    showQuantityProduct = 4;
    if (checkedBlock === 'coffee' || checkedBlock === 'dessert') btnRefresh.classList.remove('unvisible');
  }
}

btnTea.addEventListener('click', ()=>{
  toogleStateBtns(btnTea, btnCoffee, btnDessert);
  toogleStateBlocks(blockTea, blockCoffee, blockDessert);
  checkedBlock = 'tea';
  btnRefresh.classList.add('unvisible');
});

btnCoffee.addEventListener('click', ()=>{
  toogleStateBtns(btnCoffee, btnTea, btnDessert);
  toogleStateBlocks(blockCoffee, blockTea, blockDessert);
  resetProducts();
  checkedBlock = 'coffee';
  btnRefresh.classList.remove('unvisible');
});

btnDessert.addEventListener('click', ()=>{
  toogleStateBtns(btnDessert, btnTea, btnCoffee);
  toogleStateBlocks(blockDessert, blockTea, blockCoffee);
  resetProducts();
  checkedBlock = 'dessert';
  btnRefresh.classList.remove('unvisible');
});

btnRefresh.addEventListener('click', ()=>{
  if (document.body.getBoundingClientRect().width <= 1330) {
    if (checkedBlock === 'coffee' && showQuantityProduct === 4) {
      const products = document.getElementsByClassName('product__coffee-hide');
      Array.from(products).forEach(product => product.classList.remove('product__coffee-hide'));
      showQuantityProduct = 8;
      btnRefresh.classList.add('unvisible');
    }
    if (checkedBlock === 'dessert' && showQuantityProduct === 4) {
      const products = document.getElementsByClassName('product__dessert-hide');
      Array.from(products).forEach(product => product.classList.remove('product__dessert-hide'));
      showQuantityProduct = 8;
      btnRefresh.classList.add('unvisible');
    }
  }
});

window.addEventListener('resize', () => {
  if (document.body.getBoundingClientRect().width <= 1330) resetProducts();
});

//-----------------Modal window

function closeModal() {
  modalWindow.classList.add('unvisible');
  modalOverlay.classList.add('unvisible');
}

function openModal() {
  modalWindow.classList.remove('unvisible');
  modalOverlay.classList.remove('unvisible');
}

modalOverlay.addEventListener('click', () => { closeModal(); });
btnModalClose.addEventListener('click', () => { closeModal(); });
