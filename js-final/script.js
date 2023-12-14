// Phone numbers
let phoneNum1 = document.getElementById("phoneNum1");
let phoneNum2 = document.getElementById("phoneNum2");
let phoneNum3 = document.getElementById("phoneNum3");
let phoneNum4 = document.getElementById("phoneNum4");
let phoneNum5 = document.getElementById("phoneNum5");
let phoneNum6 = document.getElementById("phoneNum6");
let phoneNum7 = document.getElementById("phoneNum7");
let phoneNum8 = document.getElementById("phoneNum8");
let phoneNum9 = document.getElementById("phoneNum9");
let phoneNum10 = document.getElementById("phoneNum10");
let numbers = [phoneNum1, phoneNum2, phoneNum3, phoneNum4, phoneNum5, phoneNum6, phoneNum7, phoneNum8, phoneNum9, phoneNum10]

// Sliders and their # values
// #1
let slider1 = document.getElementById("bar1");
let value1 = document.getElementById("num1");
let range1 = document.getElementById("range1");
// #2
let slider2 = document.getElementById("bar2");
let value2 = document.getElementById("num2");
let range2 = document.getElementById("range2");
// #3
let slider3 = document.getElementById("bar3");
let value3 = document.getElementById("num3");
let range3 = document.getElementById("range3");
// #4
let slider4 = document.getElementById("bar4");
let value4 = document.getElementById("num4");
let range4 = document.getElementById("range4");
// #5
let slider5 = document.getElementById("bar5");
let value5 = document.getElementById("num5");
let range5 = document.getElementById("range5");
// #6
let slider6 = document.getElementById("bar6");
let value6 = document.getElementById("num6");
let range6 = document.getElementById("range6");
// #7
let slider7 = document.getElementById("bar7");
let value7 = document.getElementById("num7");
let range7 = document.getElementById("range7");
// #8
let slider8 = document.getElementById("bar8");
let value8 = document.getElementById("num8");
let range8 = document.getElementById("range8");
// #9
let slider9 = document.getElementById("bar9");
let value9 = document.getElementById("num9");
let range9 = document.getElementById("range9");
// #10
let slider10 = document.getElementById("bar10");
let value10 = document.getElementById("num10");
let range10 = document.getElementById("range10");

// Slider, value, and range arrays for changing all the others when one bar is interacted with
let sliders = document.querySelectorAll(".slider");
let values = document.querySelectorAll(".value");
let rangeFills = document.querySelectorAll('.rangefill');

// Randomizer variables
let randomizerNum = 0;
let randomizerSign = 0;

// Populates value HTML
for (var v = 0; v < values.length; v++) {
    values[v].innerHTML = Math.floor(sliders[v].value / 10);
}

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
    value1.innerHTML = Math.floor(this.value / 10) - 1;
    range1.style.width = slider1.value + "%";
    slider1.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[0].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider2.oninput = function () {
    value2.innerHTML = Math.floor(this.value / 10) - 1;
    range2.style.width = slider2.value + "%";
    slider2.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[1].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider3.oninput = function () {
    value3.innerHTML = Math.floor(this.value / 10) - 1;
    range3.style.width = slider3.value + "%";
    slider3.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[2].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider4.oninput = function () {
    value4.innerHTML = Math.floor(this.value / 10) - 1;
    range4.style.width = slider4.value + "%";
    slider4.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[3].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider5.oninput = function () {
    value5.innerHTML = Math.floor(this.value / 10) - 1;
    range5.style.width = slider5.value + "%";
    slider5.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[4].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider6.oninput = function () {
    value6.innerHTML = Math.floor(this.value / 10) - 1;
    range6.style.width = slider6.value + "%";
    slider6.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[5].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider7.oninput = function () {
    value7.innerHTML = Math.floor(this.value / 10) - 1;
    range7.style.width = slider7.value + "%";
    slider7.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[6].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider8.oninput = function () {
    value8.innerHTML = Math.floor(this.value / 10) - 1;
    range8.style.width = slider8.value + "%";
    slider8.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[7].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider9.oninput = function () {
    value9.innerHTML = Math.floor(this.value / 10) - 1;
    range9.style.width = slider9.value + "%";
    slider9.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[8].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}

slider10.oninput = function () {
    value10.innerHTML = Math.floor(this.value / 10) - 1;
    range10.style.width = slider10.value + "%";
    slider10.value = Math.floor(parseInt(this.value)/10) - 1;
    numbers[9].innerHTML = parseInt(this.value);
    // Check for if slider value is valid
    // I love parseInt()!11!!!!1!
    for (var i = 0; i < sliders.length; i++) {
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1);
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }

        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != this.id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%";
            values[i].innerHTML = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10);
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum);
            numbers[i].innerHTML = Math.floor(parseInt(sliders[i].value));
        }
    }
}