let velocity = 2;
let position = 0;
let moveRight = true;
const cabezas = ['./pics/arist.png', './pics/frege.png']
let focus = 0;

function move() {                    
    let pageWidth = window.innerWidth;
    let img = document.getElementById('arist');
    let aristWidth = arist.width;
                        
    img.src = cabezas[focus];          
    if (moveRight) {
        position = position + velocity;
        arist.style.left = position + 'px';
    
        if (position + aristWidth >= pageWidth) {
            moveRight = false;
            focus = (focus + 1) % 2;
            img.src = cabezas[focus];
        }
    }

    else {
        position = position - velocity;
        arist.style.left = position + 'px';
        
        if (position <= 0) {
            moveRight = true;
            focus = (focus + 1) % 2;
            img.src = cabezas[focus];
        }
    }
}

setInterval(move, 2);