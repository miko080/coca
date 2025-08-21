import Swiper from 'swiper';
import 'swiper/css';

export const useInsiderSlider = () => {
  new Swiper('.inside__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
