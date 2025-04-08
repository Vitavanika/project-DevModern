import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.covers-container');

    const swiperForwardProp = {
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        speed: 12000,
        loop: true,
        slidesPerView: 3.3,
        slidesPerGroup: 1,
        freeMode: false,
        effect: 'slide',
    }

    const swiperBackwardProp = {
        ...swiperForwardProp,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    }

    const firstCoverSwiper = new Swiper('.cover-swiper-first', { ...swiperForwardProp, wrapperClass: 'swiper-wrapper-first', slideClass: 'first-swiper-slide', });
    const secondCoverSwiper = new Swiper('.cover-swiper-second', { ...swiperBackwardProp, wrapperClass: 'swiper-wrapper-second', slideClass: 'second-swiper-slide', });
    const thirdCoverSwiper = new Swiper('.cover-swiper-third', { ...swiperForwardProp, wrapperClass: 'swiper-wrapper-third', slideClass: 'third-swiper-slide', });
    const fourthCoverSwiper = new Swiper('.cover-swiper-fourth', { ...swiperBackwardProp, wrapperClass: 'swiper-wrapper-fourth', slideClass: 'fourth-swiper-slide', });
    const fifthCoverSwiper = new Swiper('.cover-swiper-fifth', { ...swiperForwardProp, wrapperClass: 'swiper-wrapper-fifth', slideClass: 'fifth-swiper-slide', });

    const swiperInstances = [
        firstCoverSwiper,
        secondCoverSwiper,
        thirdCoverSwiper,
        fourthCoverSwiper,
        fifthCoverSwiper
    ];

    swiperInstances.forEach(swiper => swiper.autoplay.stop());

    const coversObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.target === carouselContainer) {
                if (entry.isIntersecting) {
                    swiperInstances.forEach(swiper => {
                        swiper.autoplay.start();
                    });
                } else {
                    swiperInstances.forEach(swiper => {
                        swiper.autoplay.stop();
                    });
                }
            }
        });
    }, {
        root: null,
        threshold: 0.5
    });

    coversObserver.observe(carouselContainer);
});
