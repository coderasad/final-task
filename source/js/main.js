//TOGGLE SIDE BAR
const handleToggleSideBar = (name) => document.querySelector(name).addEventListener('click', () => {
    document.body.classList.toggle("show");
})

handleToggleSideBar('.side-bar-toggle-remove')
handleToggleSideBar('.backdrop')
handleToggleSideBar('.side-bar-toggle')

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

window.addEventListener('click',(event)=>{
    let target = event.target;
    let targetDiv = document.querySelectorAll('.dropdown-toggle');
    targetDiv.forEach(item =>{
        if(!item.contains(target)){
            item.nextElementSibling.classList.remove('show');
        }
    })
})
