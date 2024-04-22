import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const breakpoint = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

let swiperBrands;
let swiperTech;
let swiperPrices;

let init = false;

export function swiperMode() {
    if (breakpoint.matches && !init) {
        init = true;
        swiperBrands = new Swiper('.brands__swiper', {
            loop: true,
            spaceBetween: 16,
            direction: 'horizontal',

            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            breakpoints: {
                300: {
                    slidesPerView: 1.2
                },
                360: {
                    slidesPerView: 1.4
                },
                420: {
                    slidesPerView: 1.7
                },
                480: {
                    slidesPerView: 2
                },
                550: {
                    slidesPerView: 2.2
                },
                600: {
                    slidesPerView: 2.4
                },
                660: {
                    slidesPerView: 2.6
                },
                720: {
                    slidesPerView: 2.9
                }
            }
        });

        swiperTech = new Swiper('.tech__swiper', {
            loop: true,
            spaceBetween: 16,
            direction: 'horizontal',

            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            breakpoints: {
                300: {
                    slidesPerView: 1.2
                },
                360: {
                    slidesPerView: 1.4
                },
                420: {
                    slidesPerView: 1.7
                },
                480: {
                    slidesPerView: 2
                },
                550: {
                    slidesPerView: 2.2
                },
                600: {
                    slidesPerView: 2.4
                },
                660: {
                    slidesPerView: 2.6
                },
                720: {
                    slidesPerView: 2.9
                }
            }
        });

        swiperPrices = new Swiper('.prices__swiper', {
            loop: true,
            spaceBetween: 16,
            direction: 'horizontal',

            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            breakpoints: {
                300: {
                    slidesPerView: 1.1
                },
                360: {
                    slidesPerView: 1.3
                },
                420: {
                    slidesPerView: 1.5
                },
                480: {
                    slidesPerView: 1.7
                },
                550: {
                    slidesPerView: 1.9
                },
                600: {
                    slidesPerView: 2.1
                },
                660: {
                    slidesPerView: 2.3
                },
                720: {
                    slidesPerView: 2.6
                }
            }
        });
    }
    if (!breakpoint.matches 
        && swiperBrands != undefined 
        && swiperTech != undefined 
        && swiperPrices != undefined) {
        swiperBrands.destroy();
        swiperTech.destroy();
        swiperPrices.destroy();
        init = false;
    }
}