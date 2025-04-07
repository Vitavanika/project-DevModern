import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const swiperCoverSettings = {
    wrapperClass: 'swiper-wrapper-covers',
    slideClass: 'swiper-slide-covers',
    autoplay: {
        delay: 10,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    speed: 4000,
    loop: true,
    slidesPerView: 2.85,
    slidesPerGroup: 'auto',
    freeMode: true,
    freeModeMomentum: false,
    spaceBetween: 10,
    effect: 'slide',
};

const swiperCoverReverseSettings = {
    ...swiperCoverSettings,
    autoplay: {
        ...swiperCoverSettings.autoplay,
        reverseDirection: false,
    },
};


const firstCoverSwiper = new Swiper('.cover-swiper-first', { ...swiperCoverSettings, slideClass: 'first-swiper-slide' });
console.log("🚀 ~ firstSwiper:", firstCoverSwiper)

const secondCoverSwiper = new Swiper('.cover-swiper-second', swiperCoverReverseSettings);
console.log("🚀 ~ secondSwiper:", secondCoverSwiper)

const thirdCoverSwiper = new Swiper('.cover-swiper-third', { ...swiperCoverSettings, slideClass: 'third-swiper-slide' });
console.log("🚀 ~ thirdSwiper:", thirdCoverSwiper)

const fourthCoverSwiper = new Swiper('.cover-swiper-fourth', swiperCoverReverseSettings);
console.log("🚀 ~ fourthSwiper:", fourthCoverSwiper)

const fifthCoverSwiper = new Swiper('.cover-swiper-fifth', swiperCoverSettings);
console.log("🚀 ~ fifthSwiper:", fifthCoverSwiper)
