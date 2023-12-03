const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const btnBurger = document.getElementById('btn-burger-menu');

btnBurger.addEventListener('click', () => {
  if (menu.classList.value === 'menu-list show-menu') {
    setTimeout(()=>{nav.classList.remove('nav-height');}, 990);
    menu.classList.remove('show-menu');
  } else {
    nav.classList.add('nav-height');
    menu.classList.add('show-menu');
  }
});