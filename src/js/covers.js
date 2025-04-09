import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.covers-container');

    let swipersInit = false;
    let swiperFirstRun = false;
    let swiperInstances = [];
    let savedPositions = [];

    const coversObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            if (swipersInit) {
                swiperInstances.forEach((swiper, index) => {
                    swiper.setTranslate(savedPositions[index]);
                    swiper.setTransition(swiper.params.speed);
                    swiper.update();
                    swiper.autoplay.start();
                });
            }
            if (!swipersInit) {
                const swiperProp = {
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: false,
                    },
                    speed: 60000,
                    loop: true,
                    // loopedSlides: 8,
                    slidesPerView: 4,
                    slidesPerGroup: 6,
                    freeMode: false,
                    effect: 'slide',
                    spaceBetween: 24,
                };

                const swiperReverseProp = {
                    ...swiperProp,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    },
                }

                const firstCoverSwiper = new Swiper('.cover-swiper-first', { ...swiperProp, wrapperClass: 'swiper-wrapper-first', slideClass: 'first-swiper-slide' });
                const secondCoverSwiper = new Swiper('.cover-swiper-second', { ...swiperReverseProp, wrapperClass: 'swiper-wrapper-second', slideClass: 'second-swiper-slide' });
                const thirdCoverSwiper = new Swiper('.cover-swiper-third', { ...swiperProp, wrapperClass: 'swiper-wrapper-third', slideClass: 'third-swiper-slide' });
                const fourthCoverSwiper = new Swiper('.cover-swiper-fourth', { ...swiperReverseProp, wrapperClass: 'swiper-wrapper-fourth', slideClass: 'fourth-swiper-slide' });
                const fifthCoverSwiper = new Swiper('.cover-swiper-fifth', { ...swiperProp, wrapperClass: 'swiper-wrapper-fifth', slideClass: 'fifth-swiper-slide' });

                swiperInstances = [
                    firstCoverSwiper,
                    secondCoverSwiper,
                    thirdCoverSwiper,
                    fourthCoverSwiper,
                    fifthCoverSwiper
                ];

                swipersInit = true;
                swiperFirstRun = true;
            }
        } else {
            if (swipersInit) {
                swiperInstances.forEach((swiper, index) => {
                    savedPositions[index] = swiper.getTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(savedPositions[index]);
                    swiper.autoplay.stop();
                });
            }
        }
    }, {
        root: null,
        threshold: 0.1
    });

    coversObserver.observe(carouselContainer);
});

const goToTopButton = document.querySelector('.go-top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        goToTopButton.classList.remove('visually-hidden');
    } else {
        goToTopButton.classList.add('visually-hidden');
    }
});

goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});