const container = document.getElementById('scroll-container');
let isMouseDown = false;
let startX, scrollLeft;

container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

container.addEventListener('mouseup', () => {
    isMouseDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    container.scrollLeft = scrollLeft - walk;
});