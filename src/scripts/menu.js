import { tablet } from "./utils";
import { createOverlay } from "./utils";

export const pageMenu = document.querySelector('.menu');

const showMenuBtn = document.querySelector('.header__menu');
const closeMenuBtn = document.querySelector('.menu__close');

showMenuBtn.addEventListener('click', function() {
    pageMenu.classList.add('visible');
    document.body.style.overflow = 'hidden';

    if (tablet.matches) {
        createOverlay();
    }
});

closeMenuBtn.addEventListener('click', function() {
    pageMenu.classList.remove('visible');
    document.body.style.overflow = 'auto';
    
    if (document.querySelector('.overlay')) {
        document.querySelector('.overlay').remove();
    }
});