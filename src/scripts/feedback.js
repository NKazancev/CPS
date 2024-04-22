import { tablet, desktop } from "./utils";
import { pageMenu } from "./menu";
import { createOverlay } from "./utils";

export const feedbackForm = document.querySelector('.feedback');

const showFeedbackBtn = document.querySelector('.header__feedback');
const showFeedbackMenuBtn = document.querySelector('.menu__feedback');
const closeFeedbackBtn = document.querySelector('.feedback__close');

showFeedbackBtn.addEventListener('click', function() {
    feedbackForm.classList.add('visible');
    document.body.style.overflow = 'hidden';

    if (tablet.matches) {
        createOverlay();
    }
});

showFeedbackMenuBtn.addEventListener('click', function() {
    if (desktop.matches) {
        feedbackForm.classList.add('visible');
        document.body.style.overflow = 'hidden';
        createOverlay();
        const overlay = document.querySelector('.overlay');
        overlay.style.zIndex = 130;
    } 
    else {
        feedbackForm.classList.add('visible');
        document.body.style.overflow = 'hidden';
        const overlay = document.querySelector('.overlay');
        overlay.remove();
        pageMenu.classList.remove('visible');
        createOverlay();
    }
});

closeFeedbackBtn.addEventListener('click', function() {
    feedbackForm.classList.remove('visible');
    document.body.style.overflow = 'auto';
    
    if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove();
    }
});