// Sliders and their # values
// #1
let slider1 = document.getElementById("bar1");
let value1 = document.getElementById("num1");
// #2
let slider2 = document.getElementById("bar2");
let value2 = document.getElementById("num2");

let sliders = document.querySelectorAll(".slider");
console.log(sliders);
for (var i = 0; i < sliders.length; i++) {
    let currentSlider = sliders[i];
    console.log(currentSlider);
}

let rangeFill = document.querySelector('.rangefill');

// Randomizer variables
let randomizerNum = 0;
let randomizerSign = 0;

value1.innerHTML = slider1.value; // Display the default slider value
value2.innerHTML = slider2.value;

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
    randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
    console.log(randomizerSign);
    value1.innerHTML = this.value;
    rangeFill.style.width = slider1.value + "%";

    if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
        randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
    }
    else { // Else, make the randomizer positive
        randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
    }

    console.log(randomizerNum + slider2.value);

    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    if (parseInt(slider2.value) + parseInt(randomizerNum) <= 9 && parseInt(slider2.value) + parseInt(randomizerNum) >= 0) {
        value2.innerHTML = parseInt(slider2.value) + parseInt(randomizerNum);
        slider2.value = parseInt(slider2.value) + parseInt(randomizerNum);
    }

}