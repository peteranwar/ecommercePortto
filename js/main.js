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
  
});


// show button to top by add class active
const toTop = document.querySelector(".scrolltop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 450) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});



// change nav when scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    nav.classList.add("nav__scroll");
  } else {
    nav.classList.remove("nav__scroll");
  }
});


// make zoom in product
$(function () {
  $("#exzoom").exzoom({
    autoPlay: false,
  });
});


// code swiper_2 
var swiper_2 = new Swiper(".swiper-container_2", {
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// code swiper_3 
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




// pop up add to cart 
const btnsAdd = document.querySelectorAll('.btn-add');
const popUp = document.querySelector('.pop-up');
const continu = document.querySelector('.continue');
const popUpContent = document.querySelector('.pop-up-content');

btnsAdd.forEach((btn)=> {
 btn.addEventListener("click", () => {
   popUp.style.display = "flex";
 })
});

continu.addEventListener("click", () => {
  popUp.style.display = "none";

});
popUp.addEventListener("click", () => {
  popUp.style.display = "none";
  
});
popUpContent.addEventListener("click", (e) => {
  e.stopPropagation();
  
})


// decrease and increase items

const decrease = document.querySelector('.minus');
const increase = document.querySelector('.plus');

increase.addEventListener('click', ()=> {
  let inpvalue = parseInt(document.querySelector('#value').value);

  inpvalue++;
  //  parseInt(inpvalue.value)  += count ;
  document.querySelector('#value').value = inpvalue;

})
decrease.addEventListener('click', ()=> {
  let inpvalue = parseInt(document.querySelector('#value').value);

  if (inpvalue > 1) {
    inpvalue--;
  // value.value = count;
  document.querySelector('#value').value = inpvalue

  }
})