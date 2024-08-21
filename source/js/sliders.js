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
    bulletElement: 'button type="button"',
  },

  breakpoints: {
    1440: {
      simulateTouch: false,
    },
  },
});

// Слайдер туров
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
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
      simulateTouch: false,
    },
  },
});

// Слайдер инструкторов
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
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
      simulateTouch: false,
    },
  },
});

// Слайдер отзывов
new Swiper('.reviews-slider', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: "auto",
      spaceBetween: 120,
      simulateTouch: false,
    },
  },
});

// Слайдер преимуществ
const advantagesSlider = new Swiper('.advantages-slider', {
  modules: [Navigation],
  loop: true,
  simulateTouch: false,

  breakpoints: {
    1440: {
      slidesPerView: "auto",
      spaceBetween: 30,
    },
  },
});

// Переключение слайдера приемуществ по 2 слайда за раз
let AdvantageSlides = document.querySelectorAll('.advantage');
const numberOfAdvantageSlides = AdvantageSlides.length;
const nextAdvantageSlideButton = document.querySelector('.advantages__button--next');
const prevAdvantageSlideButton = document.querySelector('.advantages__button--prev');
let currentAdvantageSlide = 0;

nextAdvantageSlideButton.addEventListener('click', () => {
  currentAdvantageSlide = (currentAdvantageSlide + 2) % numberOfAdvantageSlides;
  if (currentAdvantageSlide < 0) {
    currentAdvantageSlide += numberOfAdvantageSlides;
  }
  advantagesSlider.slideToLoop(currentAdvantageSlide);
});

prevAdvantageSlideButton.addEventListener('click', () => {
  currentAdvantageSlide = (currentAdvantageSlide - 2) % numberOfAdvantageSlides;
  if (currentAdvantageSlide < 0) {
    currentAdvantageSlide += numberOfAdvantageSlides;
  }
  advantagesSlider.slideToLoop(currentAdvantageSlide);
});


// Слайдер галереи
const gallerySlider = new Swiper('.gallery-slider', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.gallery__button--next',
    prevEl: '.gallery__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 3,
    },
    1440: {
      slidesPerView: "auto",
      simulateTouch: false,
    },
  },
});

if (window.matchMedia("(min-width: 1440px)").matches) {
  advantagesSlider.enable();
  gallerySlider.disable();
} else {
  advantagesSlider.disable();
  gallerySlider.enable();
}
