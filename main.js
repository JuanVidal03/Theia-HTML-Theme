// cursor effects
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
});