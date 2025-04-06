import Swiper from 'swiper';
import 'swiper/css';
import { Keyboard } from 'swiper/modules';


const nextPrjBtnEl = document.querySelector(".prjts-next-btn-js");
const prevPRJBtnEl = document.querySelector(".prjts-back-btn-js");
const projectsListEl = document.querySelector(".projects-list");
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

const projectsSwiperEl = new Swiper('.projects-swiper', swiperOptions);

const slideFoward = (event) => {
    event.preventDefault(); 
    projectsSwiperEl.slideNext();
    prevPRJBtnEl.disabled = false;
    if (projectsSwiperEl.isEnd) {
        nextPrjBtnEl.disabled = true;
    }
};

const slideBack = (event) => {
    event.preventDefault();
    projectsSwiperEl.slidePrev();
    nextPrjBtnEl.disabled = false;

    if (projectsSwiperEl.isBeginning) {
        prevPRJBtnEl.disabled = true;
    }
};
// const keyboardNav = (event) => {
//     if (event.code === "ArrowLeft") {
//         slideBack();
//     } else if (event.code === "ArrowRight") {
//         slideFoward();
//     }
// };
// projectsListEl.addEventListener("keydown", keyboardNav);
nextPrjBtnEl.addEventListener("click", slideFoward);
prevPRJBtnEl.addEventListener("click", slideBack);

