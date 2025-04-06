import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const firstSwiper = new Swiper('.away-swiper-first', {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 1,
    slidesPerGroup: 2,
});
const secondSwiper = new Swiper('.away-second', {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 1,
    slidesPerGroup: 2,
});
const thirdSwiper = new Swiper('.away-third', {
    swiperWrapperClass: 'swiper-wrapper-first',
    sviperClass: 'carousel-picture-first',
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 500,
    effect: 'slide',
    slidesPerView: 1,
    slidesPerGroup: 2,
});
const fourthSwiper = new Swiper('.away-fourth', {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 1,
    slidesPerGroup: 2,
});
const fifthSwiper = new Swiper('.away-fifth', {
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 3000,
    loop: true,
    slidesPerView: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 1,
    slidesPerGroup: 2,
});