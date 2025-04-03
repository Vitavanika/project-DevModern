import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const swiperOptions = {
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
};

const swiper = new Swiper('.swiper', swiperOptions, {
  module: Navigation,
});
