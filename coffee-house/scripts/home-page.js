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
let timerIndicator = null;
let widthIndicator = 0;

function throttle(func, time) {
  let timer = null
  return function(...args) {
    if (timer) return
    timer = setTimeout(() => {
      func(...args)
      clearTimeout(timer)
      timer = null
    }, time)
  }
}

function resetIndicator(slide) {
  clearInterval(timerIndicator);
  sliderIndicator[slide - 1].style.width = 0;
  widthIndicator = 0;
}

function startIndicator(slide) {
  timerIndicator = setInterval(()=>{
    widthIndicator += 4;
    if (sliderIndicator[slide - 1].style.width !== '40px') sliderIndicator[slide - 1].style.width = widthIndicator + 'px';
  }, 550);
}

startIndicator(1);

function startTimer() {timerSlider = setInterval(() => {
    switch (sliderSlides.classList.length) {
      case 1:
        btnSliderRight.disabled = true; setTimeout(()=>{ btnSliderRight.disabled = false; }, 1000);
        sliderSlides.classList.add('slide2');
        resetIndicator(1); startIndicator(2);
        break;
      case 2:
        btnSliderRight.disabled = true; setTimeout(()=>{ btnSliderRight.disabled = false; }, 1000);
        sliderSlides.classList.add('slide3');
        resetIndicator(2); startIndicator(3);
        break;
      case 3:
        btnSliderRight.disabled = true; setTimeout(()=>{ btnSliderRight.disabled = false; }, 1000);
        sliderSlides.classList.remove('slide2'); sliderSlides.classList.remove('slide3'); 
        resetIndicator(3); startIndicator(1);
        break;
      default:
        break;
    }
  }, 6000)
}

startTimer();

btnSliderLeft.addEventListener('click', () => {
  switch (sliderSlides.classList.length) {
    case 1:
      btnSliderLeft.disabled = true; setTimeout(()=>{btnSliderLeft.disabled = false;},1000);
      clearInterval(timerSlider); startTimer();
      sliderSlides.classList.add('slide3'); sliderSlides.classList.add('slide2');
      resetIndicator(1); startIndicator(3);
      break;
    case 2:
      btnSliderLeft.disabled = true; setTimeout(()=>{btnSliderLeft.disabled = false;},1000);
      clearInterval(timerSlider); startTimer();
      sliderSlides.classList.remove('slide2');
      resetIndicator(2); startIndicator(1);
      break;
    case 3:
      btnSliderLeft.disabled = true; setTimeout(()=>{btnSliderLeft.disabled = false;},1000);
      clearInterval(timerSlider); startTimer();
      sliderSlides.classList.remove('slide3');
      resetIndicator(3); startIndicator(2);
      break;
    default:
      break;
  }
});

btnSliderRight.addEventListener('click', () => {
  switch (sliderSlides.classList.length) {
    case 1:
      btnSliderRight.disabled = true; setTimeout(()=>{btnSliderRight.disabled = false;},1000);
      clearInterval(timerSlider); startTimer();
      sliderSlides.classList.add('slide2');
      resetIndicator(1); startIndicator(2);
      break;
    case 2:
      btnSliderRight.disabled = true; setTimeout(()=>{btnSliderRight.disabled = false;},1000);
      clearInterval(timerSlider); startTimer();
      sliderSlides.classList.add('slide3');
      resetIndicator(2); startIndicator(3);
      break;
    case 3:
      btnSliderRight.disabled = true; setTimeout(()=>{btnSliderRight.disabled = false;},1000);
      clearInterval(timerSlider); startTimer();
      sliderSlides.classList.remove('slide2'); sliderSlides.classList.remove('slide3');
      resetIndicator(3); startIndicator(1);
      break;
    default:
      break;
  }
});

let mouseInsideSlide = false;

sliderSlides.addEventListener('mouseover', throttle(()=>{
  if (mouseInsideSlide === false) {
    mouseInsideSlide = true;
    const slide = sliderSlides.classList.length;
    const pos = (sliderIndicator[slide - 1].style.width === 0) ? sliderIndicator[slide - 1].style.width : sliderIndicator[slide - 1].style.width.slice(0, -2);
    clearInterval(timerIndicator);
    clearInterval(timerSlider);

    console.log('Вошел')
    
    sliderSlides.addEventListener('mouseout', throttle(()=>{
      if (mouseInsideSlide === true) {
        mouseInsideSlide = false;
        console.log('Вышел')
      }
    }, 250));
    
  }
}, 250));


