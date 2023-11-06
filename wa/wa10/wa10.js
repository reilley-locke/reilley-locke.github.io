// HTML references (should be const because you don't wanna break anything lol)

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


// Random value
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


// Variable declarations

// Old story
// let storyText = "It was 94 fahrenheit outside, so :insertName: went for a walk. When they got to :insertPlace:, they stared in horror for a few moments, then :insertAction:. Bob saw the whole thing, but was not surprised — :insertName: weighs 300 pounds, and it was a hot day."
// const insertName = ["Willy the Goblin","Big Daddy","Father Christmas"];
// const insertPlace = ["the soup kitchen","Disneyland","the White House"];
// const insertAction = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

// New story
let storyText = "There are many ways to cook :insertFood:. :insertName: has the best recipe. First, they grab a 30 pound chicken sourced from :insertPlace:. They cut it into :insertShape: and combine it with the other ingedients, such as :insertIng1: and :insertIng2:. Finally, they put everything into a 500 degree oven. With a successful dish made, the almighty chef :insertName: :insertAction:. Bob gives it three thumbs up."
const insertFood = ["chili","a massive pot of soup","exactly 17 golf-ball sized chicken nuggets","dubiously flavored pot pie"];
const insertIng1 = ["a few rocks","9 different herbs and spices of your choice","several cans of stock","golden carrots"];
const insertIng2 = ["frog's eyes","vegetables","golden apples","spiders eyes","3 ghost peppers"];
const insertName = ["Tax Frog","Maxwell the Cat","Steve from Minecraft","Your Mom","Jake from Statefarm"];
const insertPlace = ["Boulder campus","the Backrooms","the void beyond our understanding","the abandoned mall","a liminal space","your mom's house"];
const insertShape = ["octohedrons","mobius strips","chunks","17 spheres"];
const insertAction = ["straight up blew up","caught on fire","whipped and naenae'd","fornite danced on the spot","no clipped out of reality"];


// Event (click)
randomize.addEventListener('click', result);


// Methods/Functions
function result() {

    let newStory = storyText; // Keeps base as is
    const foodNew = randomValueFromArray(insertFood);
    const nameNew = randomValueFromArray(insertName);
    const placeNew = randomValueFromArray(insertPlace);
    const shapeNew = randomValueFromArray(insertShape);
    const ing1New = randomValueFromArray(insertIng1);
    const ing2New = randomValueFromArray(insertIng2);
    const actionNew = randomValueFromArray(insertAction);

    newStory = newStory.replaceAll(":insertFood:", foodNew);
    newStory = newStory.replaceAll(":insertName:", nameNew);
    newStory = newStory.replaceAll(":insertPlace:", placeNew);
    newStory = newStory.replaceAll(":insertShape:", shapeNew);
    newStory = newStory.replaceAll(":insertIng1:", ing1New);
    newStory = newStory.replaceAll(":insertIng2:", ing2New);
    newStory = newStory.replaceAll(":insertName:", nameNew);
    newStory = newStory.replaceAll(":insertAction:", actionNew);

    if(customName.value !== '') { // If the inputted name is not empty
      const name = customName.value;
      newStory = newStory.replaceAll('Bob', name)
    }
  
    if(document.getElementById("uk").checked) {  // Metric users; go into this element and get this value
      const weight = Math.round(30/2.205) + " kilogram";
      const temperature =  Math.round(94*(5/9)) + " celsius";
      //const temperature =  `${Math.round(500*(5/9))} " celsius`;
      newStory = newStory.replaceAll('30 pound', weight)
      newStory = newStory.replaceAll('500 degree', temperature)
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }