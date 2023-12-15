// Modal parts
let modal = document.querySelector(".confirm");
let submitbtn = document.getElementById("submit");
let closebtn = document.getElementsByClassName("close")[0];

// Clear button
let clearbtn = document.getElementById("clear");

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
// // #2
 let slider2 = document.getElementById("bar2");
// // #3
 let slider3 = document.getElementById("bar3");
// // #4
 let slider4 = document.getElementById("bar4");
// // #5
 let slider5 = document.getElementById("bar5");
// // #6
 let slider6 = document.getElementById("bar6");
// // #7
 let slider7 = document.getElementById("bar7");
// // #8
 let slider8 = document.getElementById("bar8");
// // #9
 let slider9 = document.getElementById("bar9");
// // #10
 let slider10 = document.getElementById("bar10");

// Slider, value, and range arrays for changing all the others when one bar is interacted with
let sliders = document.querySelectorAll(".slider");
let values = document.querySelectorAll(".value");
let rangeFills = document.querySelectorAll('.rangefill');

// Randomizer variables
let randomizerNum = 0;
let randomizerSign = 0;

// Populates value HTML
for (var v = 0; v < values.length; v++) {
    values[v].innerHTML = Math.floor(sliders[v].value / 11);
}

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function () {
    update(0);
}

slider2.oninput = function () {
    update(1);
}

slider3.oninput = function () {
    update(2);
}

slider4.oninput = function () {
    update(3);
}

slider5.oninput = function () {
    update(4);
}

slider6.oninput = function () {
    update(5);
}

slider7.oninput = function () {
    update(6);
}

slider8.oninput = function () {
    update(7);
}

slider9.oninput = function () {
    update(8);
}

slider10.oninput = function () {
    update(9);
}

function update(currentNum)
{
    // (Should) set the current slider's values
    values[currentNum].textContent = Math.floor(sliders[currentNum].value /11);
    rangeFills[currentNum].style.width = sliders[currentNum].value + "%";
    sliders[currentNum].value = Math.floor(parseInt(sliders[currentNum].value)/11);
    numbers[currentNum].textContent = sliders[currentNum].value;

    // Loop to set all other values besides the current slider's
    for (var i = 0; i < sliders.length; i++) { // For the total number of sliders
        randomizerSign = Math.round(Math.random() * (2 - 1) + 1); // Regenerate pos/neg sign for each slider to randomize movement
        if (randomizerSign == 1) { // If the randomizer reads 1, set the randomizer negative
            randomizerNum = -(Math.round(Math.random() * (3 - 1) + 1));
        }
        else { // Else, make the randomizer positive
            randomizerNum = Math.round(Math.random() * (3 - 1) + 1);
        }
        // Check for if the slider values are valid (0-9) and for if the slider is the clicked slider (don't want to modify it since it's already been modified)
        if (parseInt(sliders[i].value) + parseInt(randomizerNum) <= 9 && parseInt(sliders[i].value) + parseInt(randomizerNum) >= 0 && sliders[i].id != sliders[currentNum].id) {
            rangeFills[i].style.width = sliders[i].value * 10 + "%"; // Set the bar's width equal to a percentage
            values[i].textContent = Math.floor(parseInt(sliders[i].value) + parseInt(randomizerNum) / 10); // Set the value below the bar equal to the slider's current value plus the randomized number
            sliders[i].value = parseInt(sliders[i].value) + parseInt(randomizerNum); // Set the slider's value to the current value plus the randomized number
            numbers[i].textContent = parseInt(values[i].innerHTML); // Set the phone number's other numbers to the same value as the values below the bars
        }
        
    }
}

submitbtn.onclick = function() {
  if (numbers[0].textContent != "")
  {
    modal.style.display = "block";
  }
}
closebtn.onclick = function() {
  modal.style.display = "none";
  for (var i = 0; i < sliders.length; i++)
  {
      rangeFills[i].style.width = 0;
      values[i].textContent = 0;
      sliders[i].value = 0;
      numbers[i].textContent = "";
  }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

clearbtn.onclick = function() {
    for (var i = 0; i < sliders.length; i++)
    {
        rangeFills[i].style.width = 0;
        values[i].textContent = 0;
        sliders[i].value = 0;
        numbers[i].textContent = "";
    }
  }