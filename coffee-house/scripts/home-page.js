const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const body = document.body;
const btnBurger = document.getElementById('btn-burger-menu');
const sliderSlides = document.getElementById('slider-slides');
const btnSliderLeft = document.getElementById('btn-slider-left');
const btnSliderRight = document.getElementById('btn-slider-right');

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

btnSliderLeft.addEventListener('click', () => {
  switch (sliderSlides.classList.length) {
    case 2: sliderSlides.classList.remove('slide2'); break;
    case 3: sliderSlides.classList.remove('slide3'); break;
    default: break;
  }
});

btnSliderRight.addEventListener('click', () => {
  switch (sliderSlides.classList.length) {
    case 1: sliderSlides.classList.add('slide2'); break;
    case 2:sliderSlides.classList.add('slide3'); break;
    default: break;
  }
});