import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


const aboutAccordion = new Accordion(".about-ac-container", {
  duration: 500,
  openOnInit: [0],
});


// const faqs = document.querySelectorAll(".faq");

// if (faqs.length > 0) {
//     faqs[0].classList.add("active");
// }

// faqs.forEach(faq => {
//     faq.addEventListener("click", () => {
//         faqs.forEach(item => {
//             if (item !== faq) {
//                 item.classList.remove("active");
//             }
//         });
//         faq.classList.toggle("active");
//     });
// });

const aboutSwiper = new Swiper('.about-swiper', {
  spaceBetween: 0,  
  speed: 500,
  loop: true,
  initialSlide: 0,
  slidesPerView: 2, 
  navigation: {
    nextEl: '.custom-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6, 
    }
  }

});
