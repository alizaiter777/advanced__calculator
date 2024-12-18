let nb=[];
let screen;
let boxes;
let box;
box=document.getElementsByClassName('.box')
const erase = document.getElementById('delete');
erase.addEventListener("click",Delete)
 boxes = document.querySelectorAll('.inner-row:not(.exclude)');
screen = document.getElementById('screen');

        boxes.forEach(box => {
            box.addEventListener('click', () => {
                screen.innerHTML += box.textContent ;
                nb.push(box.textContent);
            });

console.log(nb)
        });
   
    function Delete(){
        nb.pop();
        screen.innerHTML=nb.join(' ');
       
    }
