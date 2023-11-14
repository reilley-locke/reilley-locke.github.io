// const newBtn = document.querySelector('#js-new-quote')   // Both work
//const newQuote = document.getElementById('js-new-quote')
const endPoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// Using separate function
const newQuote = document.getElementById('js-new-quote').addEventListener('click', getQuote);
async function getQuote() {     // async runs in parallel to other parts of the JS
    // console.log("Button works :)");
    document.getElementById('js-answer-text').style.visibility = "hidden";
    try {   // Code we want to try to run
        const response = await fetch(endPoint);
        if (!response.ok) {     // If not status 200 (so 404, 303, etc.)
            throw Error(response.statusText);   //Catch bad response and throw an error
        }
        const json = await response.json();     // If response is good, then get the json data
        // console.log(json['question']);  // Looks for question keyword; start with just json to see what it'll return
        displayQuote(json['question'], json['answer']);
    }
    catch(err) {    // Code to run if something goes run
        console.log(err);
        alert('Failed to fetch new quote');
    }
};

const newAnswer = document.getElementById('js-tweet').addEventListener('click', displayAnswer);

function displayQuote(question, answer) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}

function displayAnswer() {
    document.getElementById('js-answer-text').style.visibility = "visible";
}

getQuote();     // Runs the function once when the page loads
