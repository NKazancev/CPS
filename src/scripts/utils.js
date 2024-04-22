export const tablet = window.matchMedia('(min-width: 0px) and (max-width: 1265px)');
export const desktop = window.matchMedia('(min-width: 1266px)');

export function createOverlay() {
    const overlay = document.createElement('div');
    
    overlay.classList.add('overlay');
    overlay.style.cssText = 
    `position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 50;`
    
    document.body.append(overlay);
}