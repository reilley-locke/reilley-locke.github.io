let slider1 = document.getElementById("bar1");
let value1 = document.getElementById("num1");
let slider2 = document.getElementById("bar2");
let value2 = document.getElementById("num2");
let randomizerNum = 0;
let randomizerSign = 0;

value1.innerHTML = slider1.value; // Display the default slider value
value2.innerHTML = slider2.value;

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
    randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
    console.log(randomizerSign);
    value1.innerHTML = this.value;
    if (randomizerSign == 1) {
        randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        console.log(randomizerNum);
    }
    else {
        randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
    }
    if (slider2.value + randomizerNum <= 9 || slider2.value + randomizerNum >= 0) {

        value2.innerHTML = parseInt(slider2.value) + parseInt(randomizerNum);
        slider2.value = slider2.value + randomizerNum;
    }

}