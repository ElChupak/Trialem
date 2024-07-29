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


//Loader 

const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 600)

  // setTimeout(() => {
  //   container.classList.add('show')
  //   body.style.overflow = 'auto'
  // }, 5500)
})


// Swiper Slider

const swiper = new Swiper('.feedback .swiper', {
    slidesPerView: 2,
    // spaceBetween: 50,
    // centeredSlides: true,
  
    navigation: {
      nextEl: '.slider-btn--next',
      prevEl: '.slider-btn--prev',
    },
    breakpoints: {
      // when window width is >= 320px
      350: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      600: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 2,
      },
    }

  });


// Swiper Btn disabled
// const swiperWrapper = document.querySelector('.swiper-wrapper');
// const btnNext = document.querySelector('.slider-btn--next');

// document.addEventListener('click', ()=>{
//   if(swiperWrapper.style.transform == 'translate3d(-1800px, 0px, 0px)') {
//     btnNext.setAttribute('disabled', true)

//   }
// });



// Tabs 

const showTabs = (tabsNav, tabsContent) => {  
  tabsNav?.forEach((navLink, index) => {  //tabsNav? - чи існує елемет

    navLink?.addEventListener('click', () => {
      tabsNav.forEach(link => {
        link.classList.remove('active');
      })


    navLink.classList.add('active');

    let navIndex = index;

      tabsContent.forEach((contentItem, index) => {
        contentItem.classList.remove('active');

        if(index === navIndex) {
        contentItem.classList.add('active');
        }
      });
    });
  });
};

const tabsNav = document.querySelectorAll('.bikes .tabs-nav__link'),
      tabsContent = document.querySelectorAll('.bikes .tabs-content');

showTabs(tabsNav, tabsContent);


// Burger

const burgerBtnEl = document.querySelector('.burger');

const handleBurgerClick = () => {
  burgerBtnEl.classList.toggle('active');
};

document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('burger')) {
    handleBurgerClick();
  }
});