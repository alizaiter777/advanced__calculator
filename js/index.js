
let n1;
let n2;
let log;
let box;
let rslt;
let boxes;
let screen;
let final=[];


rslt=document.getElementById('result');
rslt.addEventListener('click',Pri);

box=document.getElementsByClassName('.box')
boxes = document.querySelectorAll('.in-row:not(.exclude)');
screen = document.getElementById('screen');

const erase = document.getElementById('delete');
erase.addEventListener("click",Delete)

log = document.getElementById('log');
log.innerHTML = 0;


    boxes.forEach(box => {
        box.addEventListener('click', () => {
            screen.innerHTML += box.textContent ;
            final.push(box.textContent);
            console.log(final);
            });
        });

     

function Delete(){
    final.pop();
    screen.innerHTML=final.join(' ');
    log.innerHTML = 0;
    console.log(final);       
    }

function Post() {
    let stack = [];
    console.log(final);

    for (let i = 0; i < final.length; i++) {
        let index= final[i];

        if (!isNaN(index)) {
        stack.push(parseFloat(index));
    } 

    else {
        let b = stack.pop();
        console.log(b)
        let a = stack.pop();
        let result;

        if (index=== '+') {
        result = a + b;
        } 
        else if (index=== '-') {
        result = a - b;
        }
        else if (index=== 'x') {
        result = a * b;
        }
        else if (index=== '/') {
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
            if(isNaN(stack[0])){
                log.innerHTML = "error"
            }
            else
            {
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
            if(isNaN(stack2[0])){
               log.innerHTML = "error"
            }

            else{
               log.innerHTML = stack2[0]
            }
        } 
        else {
           log.innerHTML = "error";
        }
}
    
    