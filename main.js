// cursor effects
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
});


// carousel effect
const carousel = document.querySelector('.carousel-items');
let interval = null;
let step = 1;
let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

// starting the scroll
const start = () => {
    interval = setInterval(() => {

        carousel.scrollLeft = carousel.scrollLeft + step;
        // doing loop carousel
        if(carousel.scrollLeft === maxScrollLeft){
            step = -1;
        } else if(carousel.scrollLeft === 0){
            step = 1;
        }

    }, 10);
}

// when there will a hover effect above an image
const stop = () =>{
    clearInterval(interval);
}
// adding an event to stop the carousel
carousel.addEventListener('mouseover', () => {
    stop();
});

carousel.addEventListener('mouseout', () => {
    start();
});

start();