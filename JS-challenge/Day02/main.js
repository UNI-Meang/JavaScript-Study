const body = document.querySelector('body');

function resizing() {
    const innerWidth = window.innerWidth;

    if(innerWidth <= 800){
        body.classList.add('green');
    } else if(800 < innerWidth && innerWidth <= 1200){
        body.classList.remove('green');
        body.classList.add('purple');
    } else if(1200 < innerWidth){
        body.classList.remove('purple');
        body.classList.add('yellow');
    }
}

window.addEventListener('resize', resizing);