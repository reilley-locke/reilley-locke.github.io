const bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let num1 = document.getElementById('num1');
const barArea = document.querySelector('.bars');
let divisor = barArea.clientWidth/10;

bar2Width = bar2.clientWidth;

console.log(bar1.clientWidth)

bar1.addEventListener('mousedown', () => {
    console.log(bar1.clientWidth);
    console.log("yuh");
    console.log(bar2Width);
    if (bar1.clientWidth >= divisor*2)
    {
        console.log("yuh");
        num1.textContent = "2";
        bar2.style.width = bar2Width + 10 + "px"; // change 10 px to random number (and possibly random sign)
        bar2Width = bar2.clientWidth;
    }
})
bar1.addEventListener('mouseup', () => {
    
    bar2.style.width = bar2Width + 10 + "px";
    bar2Width = bar2.clientWidth;
    if (bar1.clientWidth >= divisor*2)
    {
        console.log("yuh");
        num1.textContent = "2";
        
    }
})

