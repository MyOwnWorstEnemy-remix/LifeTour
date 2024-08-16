import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";

new Swiper('.hero-slider', {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
    bulletClass: "hero__bullet",
    bulletActiveClass: "hero__bullet-active",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}" role="button" aria-label="Go to slide ${index + 1}" tabindex="0"></span>`;
      }
  },

  breakpoints: {
    1440: {
      simulateTouch: false,
    },
  },
});

new Swiper('.tours-slider', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 30,
      simulateTouch: false,
    },
  },
});

new Swiper('.training-slider', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
      simulateTouch: false,
    },
  },
});
