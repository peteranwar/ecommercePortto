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
    },
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

//
// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   }
// });

// $('#zoom_05').elevateZoom( {
//   zoomType				: "inner",
//   cursor: "crosshair"
// });
// $('#zoom_06').elevateZoom( {
//   zoomType				: "inner",
//   cursor: "crosshair"
// });
// $('#zoom_07').elevateZoom( {
//   zoomType				: "inner",
//   cursor: "crosshair"
// });
// $('#zoom_08').elevateZoom( {
//   zoomType				: "inner",
//   cursor: "crosshair"
// });

// Focus.init({
//   elementID: '#zoomzo',
//   zoomFactor: '250%'
// });
// let config = {
//   imageSrc: './imgs/product-1-big.jpg',
//   parentElement: 'demo',
//   zoomFactor: '250%',
//   smoother: true,
//   width: '100%', // Scale to parent component by default
//   height: '66.7%', // Scale to percent of height by default
//   cursor: '', // Leave blank for default cursor
//   displayLoc: true,
//   displayZoom: true,
//   zoomOnScroll: true,
// };
// new FocusImage(config);

// var options = {
//   width: 600,
//   height:400,
//   zoomWidth: 400,
//   offset: {vertical: 0, horizontal: 10}
// };
// new ImageZoom(document.getElementById("img-container"), options);
$(function () {
  $("#exzoom").exzoom({
    autoPlay: false,
  });
});

var swiper_2 = new Swiper(".swiper-container_2", {
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper_3 = new Swiper(".swiper-container_3", {
  slidesPerView: 4,
  spaceBetween: 40,
  // init: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
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
    },
  },
});
