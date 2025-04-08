import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';
import 'swiper/css/keyboard';

const prjtsSwiperBtns = document.querySelector(".slider-btns-wrapper");
const nextPrjBtnEl = document.querySelector(".prjts-next-btn-js");
const prevPRJBtnEl = document.querySelector(".prjts-back-btn-js");

prevPRJBtnEl.disabled = true;
nextPrjBtnEl.disabled = false;

const swiperOptions = {
    modules: [Keyboard],
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    allowTouchMove: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: false,
    },
};

const projectsSwiper = new Swiper('.projects-swiper', swiperOptions);

const updatePrjSwiperBtns = (event) => {
    if (projectsSwiper.isBeginning) {
        prevPRJBtnEl.disabled = true;
        nextPrjBtnEl.disabled = false;
    } else if (projectsSwiper.isEnd) {
        prevPRJBtnEl.disabled = false;
        nextPrjBtnEl.disabled = true;
    } else {
        prevPRJBtnEl.disabled = false;
        nextPrjBtnEl.disabled = false;
    }
};
const navigateSlides = (event) => {
    event.preventDefault();
    if (event.target.closest(".prjts-next-btn-js")) {
    projectsSwiper.slideNext();
    } else if (event.target.closest(".prjts-back-btn-js")) {
    projectsSwiper.slidePrev();
    }
};

prjtsSwiperBtns.addEventListener("click", navigateSlides);
projectsSwiper.on("slideChange", updatePrjSwiperBtns	);