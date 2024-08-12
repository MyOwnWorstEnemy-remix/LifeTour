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
