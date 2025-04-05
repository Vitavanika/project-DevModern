import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";


import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


new Accordion(".accordion-container", {
    duration: 400,
    openOnInit: [0],
});


const faqs = document.querySelectorAll(".faq");

if (faqs.length > 0) {
    faqs[0].classList.add("active");
}

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(item => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,       
  loop: true,
  navigation: {
    nextEl: '.custom-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});