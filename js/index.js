
let n1;
let n2;
let log;
let box;
let mode;
let moon;
let rslt;
let dark;
let boxes;
let C_box;
let screen;
let example;
let restart;
let Lightmoon;
let container;
let final = [];
let dropdownContent;

example=document.getElementById('example');

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

dark = document.getElementById('dark');
dark.addEventListener('click', LightMode)


moon = document.getElementById('moon');
moon.addEventListener('click', LightMode);

document.addEventListener("DOMContentLoaded", () => {
    moon = false;
    mode.innerHTML = 'PostFix';
});

C_box = document.getElementsByClassName('C_box');
container = document.getElementsByClassName('container');
dropdownContent=document.getElementsByClassName('dropdown-content');

Lightmoon = document.getElementsByClassName('Lightmoon')

//
function LightMode() {
    //initialize moon = false 
    //onclick moon = true 
    moon = !moon;
    //if moon true enter (if) :click to dark mode
    if (moon) {
        container[0].style.background = 'black';
        C_box[0].style.background = 'black';
        console.log(C_box);
        screen.style.color = 'white';
        log.style.color = 'white';
        dark.style.display = 'block';
        Lightmoon[0].style.display = 'none';
        console.log("moon", Lightmoon);
        dropdownContent[0].style.background='white';
        example.style.color='white';
    }
    //light mode
    else {
        container[0].style.background = 'white';
        C_box[0].style.background = 'white';
        console.log(C_box);
        screen.style.color = 'black';
        log.style.color = 'black';
        dark.style.display = 'none';
        Lightmoon[0].style.display = 'block';
        example.style.color='black';




    }
}
//add click event for every box
boxes.forEach(box => {
    box.addEventListener('click', () => {
        //display on screen the box value
        screen.innerHTML += box.textContent;
        //add to stack box value
        final.push(box.textContent);
        console.log(final);
    });
});
//restart by sending empty stack
function Restart() {
    final = [];
    log.innerHTML = 0;
    screen.innerHTML = '';
}
//click on postfix dropbtn ,replace the text with postfix
function PostTitle() {
    mode.innerHTML = 'PostFix';
    example.innerHTML=" Example  </br> Exprission :9 2 3 * + </br>Steps</br>1. Start with the first operator *: 2 * 3=6</br>2.Add 9 + 6=15 "
}
//click on prifix dropbtn,replace the text with prifix
function PriTitle() {
    mode.innerHTML = 'PriFix';
    example.innerHTML=" Example prifix </br> Exprission :+9*23 </br>Steps</br>1. Start with the rightmost operand 9 and * 2 3</br>2. *2 3 = 2*3=6 </br>3. Add 9+6=15  "

}
// select the stack direction with respect for which mode selected
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
    //after delete ,redisplay the final stack on screen with space btwn
    screen.innerHTML = final.join(' ');
    log.innerHTML = 0;
    console.log(final);
}

function Post() {
    let stack = [];
    console.log(final);
    //loop to execute all stack items 
    for (let i = 0; i < final.length; i++) {
        let index = final[i];
        //if normal nb add to stack
        if (!isNaN(index)) {
            stack.push(parseFloat(index));
        }

        else {
            //b = removed index
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
                //don't let the dominator = 0
                if (b === 0) {
                    console.error("can't division by zero");
                    log.innerHTML = "error";
                    return;
                }
                result = a / b;
            }
            //add result to stack
            stack.push(result);
        }
    }
    //if stack contain more than 1 index then there is an error since after calculation should return 1 result
    if (stack.length === 1) {
        //after check stack length is 1 we check if the 1 index is not a nmbr else dispaly result
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
     //excute all stack items in reversed way 
    for (let i = final.length - 1; i >= 0; i--) {
        let index2 = final[i];
        //check if index is number then add to stack
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
                    console.error("can't division by zero");
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

