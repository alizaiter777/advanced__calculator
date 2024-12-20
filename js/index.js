
let n1;
let n2;
let log;
let box;
let rslt;
let mode;
let boxes;
let screen;
let moon;
let final = [];
let container;
let C_box;
let restart;
let dark;


mode = document.getElementById('mode');
postmode = document.getElementById('postfix');
postmode.addEventListener('click', PostTitle);

primode = document.getElementById('prifix');
primode.addEventListener('click', PriTitle);

rslt = document.getElementById('result');
rslt.addEventListener('click', Mode);

box = document.getElementsByClassName('.box')
boxes = document.querySelectorAll('.in-row:not(.exclude)');
screen = document.getElementById('screen');

const erase = document.getElementById('delete');
erase.addEventListener("click", Delete)

log = document.getElementById('log');
log.innerHTML = 0;

restart = document.getElementById('restart');
restart.addEventListener('click', Restart);

dark=document.getElementById('dark');
dark.addEventListener('click',LightMode)


moon = document.getElementById('moon');
document.addEventListener("DOMContentLoaded", () => {
    moon = false;
    mode.innerHTML = 'PostFix';
});

C_box = document.getElementsByClassName('C_box');
container = document.getElementsByClassName('container');
moon.addEventListener('click', LightMode);
let Lightmoon = document.getElementsByClassName('Lightmoon')
function LightMode(){
    moon = !moon;
    if (moon) {
        container[0].style.background = 'black';
        C_box[0].style.background = 'black';
        console.log(C_box);
        screen.style.color = 'white';
        log.style.color = 'white';
        dark.style.display='block';
        Lightmoon[0].style.display='none';
        console.log("moon", Lightmoon);
    }
    else {
        container[0].style.background = 'white';
        C_box[0].style.background = 'white';
        console.log(C_box);
        screen.style.color = 'black';
        log.style.color = 'black';
        dark.style.display='none';
        Lightmoon[0].style.display='block';

       

    }
}




boxes.forEach(box => {
    box.addEventListener('click', () => {
        screen.innerHTML += box.textContent;
        final.push(box.textContent);
        console.log(final);
    });
});

function Restart() {
    final = [];
    log.innerHTML = 0;
    screen.innerHTML = '';
}
function PostTitle() {
    mode.innerHTML = 'PostFix';
}

function PriTitle() {
    mode.innerHTML = 'PriFix';
}

function Mode() {
    if (mode.innerHTML == "PostFix") {
        Post();
    }
    else {
        Pri();
    }
}

function Delete() {
    final.pop();
    screen.innerHTML = final.join(' ');
    log.innerHTML = 0;
    console.log(final);
}

function Post() {
    let stack = [];
    console.log(final);

    for (let i = 0; i < final.length; i++) {
        let index = final[i];

        if (!isNaN(index)) {
            stack.push(parseFloat(index));
        }

        else {
            let b = stack.pop();
            console.log(b)
            let a = stack.pop();
            let result;

            if (index === '+') {
                result = a + b;
            }
            else if (index === '-') {
                result = a - b;
            }
            else if (index === 'x') {
                result = a * b;
            }
            else if (index === '/') {
                if (b === 0) {
                    console.error("division by zero");
                    log.innerHTML = "error";
                    return;
                }
                result = a / b;
            }

            stack.push(result);
        }
    }

    if (stack.length === 1) {
        if (isNaN(stack[0])) {
            log.innerHTML = "error"
        }
        else {
            log.innerHTML = stack[0]
        }
    }
    else {
        log.innerHTML = "error";
    }
}


function Pri() {
    let stack2 = [];
    console.log(final);

    for (let i = final.length - 1; i >= 0; i--) {
        let index2 = final[i];

        if (!isNaN(index2)) {
            stack2.push(parseFloat(index2));
        }
        else {
            let a = stack2.pop();
            let b = stack2.pop();
            let result;

            if (index2 === '+') {
                result = a + b;
            }
            else if (index2 === '-') {
                result = a - b;
            }
            else if (index2 === 'x') {
                result = a * b;
            }
            else if (index2 === '/') {
                if (b === 0) {
                    console.error("division by zero");
                    log.innerHTML = "error";
                    return;
                }
                result = a / b;
            }
            stack2.push(result);
        }
    }

    if (stack2.length === 1) {
        if (isNaN(stack2[0])) {
            log.innerHTML = "error"
        }

        else {
            log.innerHTML = stack2[0]
        }
    }
    else {
        log.innerHTML = "error";
    }
}

