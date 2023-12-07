const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const body = document.body;
const btnBurger = document.getElementById('btn-burger-menu');
const btnCoffee = document.getElementById('btn-coffee');
const btnTea = document.getElementById('btn-coffee');
const btnDessert = document.getElementById('btn-coffee');

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