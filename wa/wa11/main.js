const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
/* EXAMPLE ASSETS 
const images = ["img/pic1[ex].jpg", "img/pic2[ex].jpg", "img/pic3[ex].jpg", "img/pic4[ex].jpg", "img/pic5[ex].jpg"]
*/
const images = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg", "img/pic5.jpg"]

/* Declaring the alternative text for each image file */
/* EXAMPLE ASSETS 
const alts = ["A picture of a human eye",
    "A swirly chunk of rock",
    "Purple and white flowers",
    "An ancient egyptian mural",
    "A brown butterfly on a leaf"]
*/
const alts = ["A picture of a human eye",
    "A swirly chunk of rock",
    "Purple and white flowers",
    "An ancient egyptian mural",
    "A brown butterfly on a leaf"]

/* Looping through images */
let i = 0;

while (i <= 4) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
    });

    i++;
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "light") {
        btn.setAttribute("class", "dark");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    
    else
    {
        btn.setAttribute("class", "light");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})

