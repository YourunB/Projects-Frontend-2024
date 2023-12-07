const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const body = document.body;
const btnBurger = document.getElementById('btn-burger-menu');
const btnCoffee = document.getElementById('btn-coffee');
const btnTea = document.getElementById('btn-tea');
const btnDessert = document.getElementById('btn-dessert');

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

btnTea.addEventListener('click', ()=>{
  toogleStateBtns(btnTea, btnCoffee, btnDessert);
});

btnCoffee.addEventListener('click', ()=>{
  toogleStateBtns(btnCoffee, btnTea, btnDessert);
});

btnDessert.addEventListener('click', ()=>{
  toogleStateBtns(btnDessert, btnTea, btnCoffee);
});