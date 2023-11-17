// const newBtn = document.querySelector('#js-new-quote')   // Both work
//const newQuote = document.getElementById('js-new-quote')

const colorEndPoint = 'https://x-colors.yurace.pro/api/random';

// Using separate function
let newColor = document.getElementById('single-color').addEventListener('click', getColor);
let newPalette = document.getElementById('palette').addEventListener('click', getPalette);
let colorBoxes = document.querySelectorAll('.colorBox');
let colorBoxesNames = document.querySelectorAll('.colorBoxName');

function stopAnimation() {
    let animationStop = document.getElementById('animation');
    if (animationStop.checked == true)
    {
        document.querySelector('body').style.animation = 'none';
    }
    else
    {
        document.querySelector('body').style.animation = 'colorRotate 10s linear 0s infinite';
    }
}

async function getColor() {     // async runs in parallel to other parts of the JS
    document.querySelector('.paletteBox').style.visibility = "hidden";
    document.querySelector('.paletteBoxNames').style.visibility = "hidden";
    document.querySelector('.singleColorBox').style.visibility = "visible";
    console.log("Button works :)");
    try {   // Code we want to try to run

        const response = await fetch(colorEndPoint);
        if (!response.ok) {     // If not status 200 (so 404, 303, etc.)
            throw Error(response.statusText);   //Catch bad response and throw an error
        }
        const json = await response.json();     // If response is good, then get the json data
        
        //console.log(json['hex']);  // Looks for question keyword; start with just json to see what it'll return
        displayColor(json['hex']);
        console.log(json);
    }
    catch(err) {    // Code to run if something goes run
        console.log(err);
        alert('Failed to fetch new quote');
    }
};
async function getPalette() {
    document.querySelector('.paletteBox').style.visibility = "visible";
    document.querySelector('.paletteBoxNames').style.visibility = "visible";
    document.querySelector('.singleColorBox').style.visibility = "hidden";
    console.log("Button works :)");
    try {   // Code we want to try to run
        const paletteEndPoint = 'https://corsproxy.io/?' + encodeURIComponent('https://www.colourlovers.com/api/palettes/random/new?format=json');
        const response = await fetch(paletteEndPoint);
        if (!response.ok) {     // If not status 200 (so 404, 303, etc.)
            throw Error(response.statusText);   //Catch bad response and throw an error
        }
        const json = await response.json();     // If response is good, then get the json data
        
        //console.log(json['hex']);  // Looks for question keyword; start with just json to see what it'll return
        for (let i = 0; i < json[0]['colors'].length; i++)
        {
            let color = '#' + json[0]['colors'][i];
            console.log(color);
            displayPalette(color, i);
            //colorBoxes[i].style.color = '#' + json[0]['colors'][i];
        }
        //console.log(document.querySelector('.colorBox'));
        //console.log(document.querySelectorAll('.colorBox')[0]);
        
        console.log(json);
    }
    catch(err) {    // Code to run if something goes run
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

// Single color function
function displayColor(hex) {
    const colorTxt = document.querySelector('#colorHex');
    const colorSwatch = document.querySelector('#oneColorBox');
    colorTxt.textContent = hex;
    colorTxt.style.color = hex;
    colorSwatch.style.backgroundColor = hex;
}
function displayPalette(color, i) {
    colorBoxes[i].style.backgroundColor = color;
    colorBoxesNames[i].textContent = color;
}
getColor();     // Runs the function once when the page loads
//getPalette();
