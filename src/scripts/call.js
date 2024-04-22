import { tablet, desktop } from "./utils";
import { pageMenu } from "./menu";
import { createOverlay } from "./utils";

export const callForm = document.querySelector('.call');

const showCallBtn = document.querySelector('.header__call');
const showCallMenuBtn = document.querySelector('.menu__call');
const closeCallBtn = document.querySelector('.call__close');

showCallBtn.addEventListener('click', function() {
    callForm.classList.add('visible');
    document.body.style.overflow = 'hidden';

    if (tablet.matches) {
        createOverlay();
    }
});

showCallMenuBtn.addEventListener('click', function() {
    if (desktop.matches) {
        callForm.classList.add('visible');
        document.body.style.overflow = 'hidden';
        createOverlay();
        const overlay = document.querySelector('.overlay');
        overlay.style.zIndex = 130;
    } 
    else {
        callForm.classList.add('visible');
        document.body.style.overflow = 'hidden';
        const overlay = document.querySelector('.overlay');
        overlay.remove();
        pageMenu.classList.remove('visible');
        createOverlay();
    }
});

closeCallBtn.addEventListener('click', function() {
    callForm.classList.remove('visible');
    document.body.style.overflow = 'auto';
    
    if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove();
    }
});
