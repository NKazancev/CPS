export const expandBtns = document.querySelectorAll('.expand-button');

expandBtns.forEach( btn => {
    btn.addEventListener('click', function(event) {
        if (event.target.closest('div').querySelector('.swiper-wrapper')) {
            const slider = event.target.closest('div').querySelector('.swiper-wrapper');
            const button = event.target.closest('div').querySelector('.expand-button');

            button.textContent = button.textContent === 'Свернуть' ? 'Показать все' : 'Свернуть';
            button.classList.toggle('rotated');
            slider.classList.toggle('expanded');
        }
        
        if (event.target.closest('div').querySelector('.text')) {
            const text = event.target.closest('div').querySelector('.text');
            const button = event.target.closest('div').querySelector('.expand-button');

            button.textContent = button.textContent === 'Свернуть' ? 'Читать далее' : 'Свернуть';
            button.classList.toggle('rotated');
            text.classList.toggle('expanded');
        }
    });
});