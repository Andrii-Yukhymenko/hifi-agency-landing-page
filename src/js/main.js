const burgerElement = document.querySelector('.menu__burger'),
  menuBody = document.querySelector('.menu__body'),
  menuList = menuBody.querySelector('.menu__list'),
  menuItems = menuBody.querySelectorAll('.menu__item'),
  body = document.querySelector('body'),
  siteHeader = document.querySelector('.header'),
  siteHeaderHeight = siteHeader.offsetHeight;

// Обработчики событий
burgerElement.addEventListener('click', () => {
  menuBody.classList.toggle('active');
  menuList.classList.toggle('active');
  burgerElement.classList.toggle('active');
  menuItems.forEach((item) => {
    item.classList.toggle('_mobile');
  });
  body.classList.toggle('not-scrollable');
});

window.addEventListener('scroll', () => {
  let scrolled = getBodyScrollTop();
  console.log(scrolled);
  if (scrolled >= siteHeaderHeight) {
    siteHeader.classList.add('header--fixed');
  } else {
    siteHeader.classList.remove('header--fixed');
  }
});


ibg();

// Слайдеры
const miniPortfolioSlider = new Swiper('.mini-portfolio__slider', {
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.mini-portfolio__controls-button--right',
    prevEl: '.mini-portfolio__controls-button--left',
  },
});
const reviewsImgSlider = new Swiper('.reviews-img-slider', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  navigation: {
    nextEl: '.reviews__controls-button--right',
    prevEl: '.reviews__controls-button--left',
  },
});

const reviewsTextSlider = new Swiper('.reviews-text-slider', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoHeight: true,

  navigation: {
    nextEl: '.reviews__controls-button--right',
    prevEl: '.reviews__controls-button--left',
  },
});

reviewsImgSlider.controller.control = reviewsTextSlider;
reviewsTextSlider.controller.control = reviewsImgSlider;

// Функции
function getBodyScrollTop() {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    (document.body && document.body.scrollTop)
  );
}

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
