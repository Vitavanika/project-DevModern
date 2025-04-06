import Swiper from 'swiper';
import 'swiper/css';

const nextBtnEl = document.querySelector(".swiper-btn-next");
const prevBtnEl = document.querySelector(".swiper-btn-prev");
const slideEl = document.querySelector(".swiper-slide")
const lastSlideEl = document.querySelector(".swiper-slide:last-child");
prevBtnEl.disabled = true;
nextBtnEl.disabled = false;

const swiperOptions = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    allowTouchMove: true,
    grabCursor: true,
};

const swiper = new Swiper('.swiper', swiperOptions);
const slideFoward = (event) => {
    event.preventDefault(); 
    swiper.slideNext()
    prevBtnEl.disabled = false;
    if (swiper.isEnd) {
        nextBtnEl.disabled = true;
    }
};

const slideBack = (event) => {
    event.preventDefault();
    swiper.slidePrev();
    nextBtnEl.disabled = false;

    if (swiper.isBeginning) {
        prevBtnEl.disabled = true;
    }
};

nextBtnEl.addEventListener("click", slideFoward);
prevBtnEl.addEventListener("click", slideBack);
nextBtnEl.addEventListener("touchstart", slideFoward);
prevBtnEl.addEventListener("touchstart", slideBack);

