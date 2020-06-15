var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  // direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 30,
    }

  },
  // on: {
  //   resize: function () {
  //     swiper.changeDirection(getDirection());
  //   }
  // }
});

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//   return direction;
// }

const toTop = document.querySelector(".scrolltop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    nav.classList.add("nav__scroll");
  } else {
    nav.classList.remove("nav__scroll");
  }
});
