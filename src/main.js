import './styles/settings/fonts.scss';
import 'swiper/css/bundle';
import './main.scss';

import { desktop } from './scripts/utils';
import { swiperMode } from './scripts/swiper';
import { pageMenu } from './scripts/menu';
import { feedbackForm } from './scripts/feedback';
import { callForm } from './scripts/call';
import { expandBtns } from './scripts/expand';

window.addEventListener('load', function() {
    swiperMode();
});

window.addEventListener('resize', function() {
    swiperMode();
    
    if (desktop.matches && pageMenu.classList.contains('visible')) {
        pageMenu.classList.remove('visible');
    }
    if (desktop.matches && feedbackForm.classList.contains('visible')) {
        feedbackForm.classList.remove('visible');
    }
    if (desktop.matches && callForm.classList.contains('visible')) {
        callForm.classList.remove('visible');
    }
    if (desktop.matches && document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove();
    }
});

document.body.addEventListener('click', function(event) {
    if (!event.target.matches('.overlay')) return;

    document.querySelector('.overlay')?.remove();
    document.body.style.overflow = 'auto';
    
    pageMenu.classList.remove('visible');
    feedbackForm.classList.remove('visible');
    callForm.classList.remove('visible');
});