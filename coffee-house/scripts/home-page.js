const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const body = document.body;
const btnBurger = document.getElementById('btn-burger-menu');
const sliderSlides = document.getElementById('slider-slides');
const btnSliderLeft = document.getElementById('btn-slider-left');
const btnSliderRight = document.getElementById('btn-slider-right');
const sliderIndicator = document.getElementsByClassName('slider__bottom_position_time');

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

let timerSlider = null;
setTimeout(()=>{sliderIndicator[0].classList.add('fill-indicator');}, 10);
function startTimer() {timerSlider = setInterval(() => {
    switch (sliderSlides.classList.length) {
      case 1: sliderSlides.classList.add('slide2'); sliderIndicator[0].classList.remove('fill-indicator'); sliderIndicator[1].classList.add('fill-indicator'); break;
      case 2: sliderSlides.classList.add('slide3'); sliderIndicator[1].classList.remove('fill-indicator'); sliderIndicator[2].classList.add('fill-indicator'); break;
      case 3: sliderSlides.classList.remove('slide2'); sliderSlides.classList.remove('slide3'); sliderIndicator[2].classList.remove('fill-indicator'); sliderIndicator[0].classList.add('fill-indicator'); break;
      default: break;
    }
  }, 6000)
}

startTimer();

btnSliderLeft.addEventListener('click', () => {
  switch (sliderSlides.classList.length) {
    case 1: break;
    case 2: sliderSlides.classList.remove('slide2'); sliderIndicator[1].classList.remove('fill-indicator'); sliderIndicator[0].classList.add('fill-indicator'); clearInterval(timerSlider); setInterval(timerSlider); startTimer(); break;
    case 3: sliderSlides.classList.remove('slide3'); sliderIndicator[2].classList.remove('fill-indicator'); sliderIndicator[1].classList.add('fill-indicator'); clearInterval(timerSlider); setInterval(timerSlider); startTimer(); break;
    default: break;
  }
});

btnSliderRight.addEventListener('click', () => {
  switch (sliderSlides.classList.length) {
    case 1: sliderSlides.classList.add('slide2'); sliderIndicator[0].classList.remove('fill-indicator'); sliderIndicator[1].classList.add('fill-indicator'); clearInterval(timerSlider); setInterval(timerSlider); startTimer(); break;
    case 2: sliderSlides.classList.add('slide3'); sliderIndicator[1].classList.remove('fill-indicator'); sliderIndicator[2].classList.add('fill-indicator'); clearInterval(timerSlider); setInterval(timerSlider); startTimer(); break;
    case 3: break;
    default: break;
  }
});