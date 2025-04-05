import Swiper from 'swiper';
import 'swiper/css';

const nextBtnEl = document.querySelector(".swiper-btn-next");
const prevBtnEl = document.querySelector(".swiper-btn-prev");

const swiperOptions = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    allowTouchMove: true,
    grabCursor: true,
};

const swiper = new Swiper('.swiper', swiperOptions);

const slideFoward = (event) => {
    swiper.slideNext()
};
const slideBack = (event) => {
    swiper.slidePrev();
};

nextBtnEl.addEventListener("click", slideFoward);
prevBtnEl.addEventListener("click", slideBack);
