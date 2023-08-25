/*HORIZONTAL SCROLL CONTAINER*/
const container = document.getElementById('scroll-container');
let isMouseDown = false;
let startX, scrollLeft;

container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX      = e.pageX - container.offsetLeft;
    scrollLeft  = container.scrollLeft;
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
    const x              = e.pageX - container.offsetLeft;
    const walk           = (x - startX) * 3;
    container.scrollLeft = scrollLeft - walk;
});

// DROPDOWN SHOW HIDE
let navLink = document.querySelectorAll('.dropdown-toggle');
navLink.forEach(ele => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        if (ele.nextElementSibling.className === 'dropdown-item show') {
            ele.nextElementSibling.classList.remove('show')
        } else {
            navLink.forEach(item => {
                item.nextElementSibling.classList.remove('show');
            })
            ele.nextElementSibling.classList.add('show');
        }
    });
})

//TOGGLE SIDE BAR
document.querySelector('.side-bar-toggle').addEventListener('click',()=>{
    document.body.classList.add("show");
})
document.querySelector('.side-bar-toggle-remove').addEventListener('click',()=>{
    document.body.classList.remove("show");
})