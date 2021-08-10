"use strict";

var burgerElement = document.querySelector('.menu__burger'),
    menuBody = document.querySelector('.menu__body'),
    menuList = menuBody.querySelector('.menu__list'),
    menuItems = menuBody.querySelectorAll('.menu__item'),
    body = document.querySelector('body'),
    siteHeader = document.querySelector('.header');
burgerElement.addEventListener('click', function () {
  menuBody.classList.toggle('active');
  menuList.classList.toggle('active');
  burgerElement.classList.toggle('active');
  menuItems.forEach(function (item) {
    item.classList.toggle('_mobile');
  });
  body.classList.toggle('not-scrollable');
});

function ibg() {
  var ibg = document.querySelectorAll('.ibg');

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg(); // Слайдеры

var miniPortfolioSlider = new Swiper('.mini-portfolio__slider', {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },
  navigation: {
    nextEl: '.mini-portfolio__controls-button--right',
    prevEl: '.mini-portfolio__controls-button--left'
  }
});
var reviewsImgSlider = new Swiper('.reviews-img-slider', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.reviews__controls-button--right',
    prevEl: '.reviews__controls-button--left'
  }
});
var reviewsTextSlider = new Swiper('.reviews-text-slider', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.reviews__controls-button--right',
    prevEl: '.reviews__controls-button--left'
  }
});
reviewsImgSlider.controller.control = reviewsTextSlider;
reviewsTextSlider.controller.control = reviewsImgSlider; // window.addEventListener("scroll", () => {
//   siteHeader.style =
//     "position: fixed;" + "  top: 0;" + "  left: 0;" + "  right: 0;";
// });
//# sourceMappingURL=main.js.map
