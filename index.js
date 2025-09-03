let pers = document.querySelector('.pers');
let count = document.querySelector('.count');
let auto = document.querySelector('#auto');
let upgrade = document.querySelector('#upgrade');
let sellUpgrade = document.querySelector('.sell-upgrade');
let sellAuto = document.querySelector('.sell-auto');
let a = 1;
let b = 1;
count.textContent = 0;
sellUpgrade.textContent = 10;
sellAuto.textContent = 10;

function setImage() {
        pers.src = './image/scale_2000.png';
    }

pers.addEventListener('click', () => {
    count.textContent = +count.textContent + a;
    if (+count.textContent > 100) {
        setImage();
    }
});

upgrade.addEventListener('click', () => {
    if (+count.textContent >= a * 10) {
        count.textContent = +count.textContent - (a * 10);
        a += 1;
        sellUpgrade.textContent = a * 10;
    }
    else {
        alert('Недостаточно очков');
    }
})

function sum() {
    count.textContent = +count.textContent + b;
}

// function eventAuto() {
    
// }

let timerId = null;

auto.addEventListener('click', () => {
    if (+count.textContent >= b * 10) {
        if (timerId) {
            clearInterval(timerId);
        }
        count.textContent = +count.textContent - (b * 10);
        b += 1;
        sellAuto.textContent = 10 * b;
        timerId = setInterval(() => sum(), 1000);
    } else {
        alert('Недостаточно очков');
    }
})


tung.addEventListener('click', () => {
    count.textContent = +count.textContent + 50;
    tungSound.play();
});


function setImage() {
    if (+count.textContent >= 1000) {
        pers.src = './image/scale_2000.png';
    }
}

