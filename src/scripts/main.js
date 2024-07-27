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
    slidesPerView: 2,
    // loop: true,
  
    navigation: {
      nextEl: '.slider-btn--next',
      prevEl: '.slider-btn--prev',
    },
  
  });


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