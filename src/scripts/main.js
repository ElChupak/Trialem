window.addEventListener('DOMContentLoaded', ()=>{
  
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

  if(window.scrollY > 100) {
    headerEl.classList.add('scrolled');
  }


  //Loader 

  // const loader = document.querySelector('.loader')

  // window.addEventListener('load', () => {
  //   setTimeout(() => {
  //     loader.style.display = 'none';
  //   }, 600)

  // })


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

  const burgerBtnEl = document.getElementById('burger');

  const handleBurgerClick = () => {
    burgerBtnEl.classList.toggle('active');
  };

  document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('burger')) {
      handleBurgerClick();
    }
  });


  // Subscribe Sent

  const subscribe = document.querySelector('.subscribe-form');
  const subscribeBtn = document.querySelector('#subscribe-btn');

  subscribe.addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    subscribeBtn.style.maskImage = 'var(--icon-check)';
    

    subscribe.reset();
    setTimeout(function iconBack() {
      subscribeBtn.style.maskImage = '';
      subscribeBtn.style.backgroundColor = '';

    }, 4000);
  }

  // Request Sent

  const form = document.querySelector('#form');
  const requestBtn = document.querySelector('.request-form__btn');

  form?.addEventListener('submit', sent);

  function sent(e) {
    e.preventDefault();
    requestBtn.classList.add('sent');
    form.reset();
    setTimeout(function resetBtn() {
      requestBtn.classList.remove('sent');

    }, 4000);
  }


  // Subscribe attention

  const subscrBtn = document.getElementById('subscribe-click'),
        subscrInput = document.querySelector('.subscribe-form__group');

  subscrBtn?.addEventListener('click', ()=>{
    setTimeout(()=>{
      subscrInput.style.transition = 'all 0.5s';
      subscrInput.style.boxShadow = '0px 0px 30px var(--c-pink)';
      setTimeout(()=>{
        subscrInput.style.boxShadow = '';
      }, 4000)
    }, 1000);
  });


  // Modal

  function bindModal(trigger, modal, close) {
    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if(e.target) {
          e.preventDefault();
        }

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        header.style.marginRight = `${scroll}px`;
        burgerBtnEl.classList.remove('active');
      });
    });

    close?.addEventListener('click', ()=>{
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      header.style.marginRight = `0px`;
    
    });

    modal?.addEventListener('click', (e)=>{
      if(e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        header.style.marginRight = `0px`;

      }
    });

  }

  const  openModal = document.querySelectorAll('.bikes .modal-btn'),
        modalWindow = document.querySelector('.modal-wrapper'),
        closeModal = document.querySelector('.modal-close'),
        header = document.querySelector('.header'),
        scroll = calcScroll();

        
  bindModal(openModal, modalWindow, closeModal);

  const sentBtn = document.getElementById('send-btn');

  sentBtn?.addEventListener('click', ()=>{
    modalWindow.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
    header.style.marginRight = `0px`;
  });

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }


  // Header Highlight

  const links = document.querySelectorAll('.menu__link'),
        bodyId = document.querySelector('body').id;

  for(let link of links){
    if(link.dataset.active == bodyId) {
      link.classList.add('active');
    }
  }

});  



