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
  active.classList.remove('unvisible');
  disable1.classList.add('unvisible');
  disable2.classList.add('unvisible');
}

btnTea.addEventListener('click', ()=>{
  toogleStateBtns(btnTea, btnCoffee, btnDessert);
  toogleStateBlocks(blockTea, blockCoffee, blockDessert);
});

btnCoffee.addEventListener('click', ()=>{
  toogleStateBtns(btnCoffee, btnTea, btnDessert);
  toogleStateBlocks(blockCoffee, blockTea, blockDessert);
});

btnDessert.addEventListener('click', ()=>{
  toogleStateBtns(btnDessert, btnTea, btnCoffee);
  toogleStateBlocks(blockDessert, blockTea, blockCoffee);
});