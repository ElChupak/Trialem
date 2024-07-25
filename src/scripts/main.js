// Fixed Header 

const headerEl = document.querySelector('.header');
window.addEventListener('scroll', ()=>{

let scroll = window.scrollY;

  if(scroll * 2 > headerEl.offsetHeight) {
      headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
});


// Swiper Slider

const swiper = new Swiper('.feedback .swiper', {
    slidesPerViev: 2,
  
    navigation: {
      nextEl: '.slider-btn--next',
      prevEl: '.slider-btn--prev',
    },
  
  });