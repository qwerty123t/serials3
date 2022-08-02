import Swiper from "swiper";

var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,


    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      // when window width is >= 320px
      100: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });