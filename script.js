new Swiper(".card-wrapper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    720: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});