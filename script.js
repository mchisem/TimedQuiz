//variables//
var start = document.querySelector("#start-button");
var score = document.querySelector("#score");
var timer = document.querySelector("#timer");
var navbar = document.querySelector("#nav");
var intro = document.querySelector("#intro");
var questionContainer = document.querySelector(".questions-container");

let score = 0;

//start game funtion//
var secondsLeft = 75;

 function setTime() {
     navbar.classList.remove("hide");
     intro.classList.add("hide");
     questionContainer.classList.remove("hide");

     var timerInterval = setInterval(function(){
         secondsLeft --;
         timer.textContent = 'Time: ' + secondsLeft;

         if(secondsLeft === 0) {
             clearInterval(timerInterval);
             console.log("Game Over!");
         }

     }, 1000); 
 }
 
 start.addEventListener('click', setTime);

//quiz question array//
var questions = [
    {
        title: "What is JavaScript?",
        choices: ["A scripting language used to create dynamic website content",
        "A form of CSS used to hardcode website styling","A place for writers to drink coffee",
        "A conditional oriented programming language"],
        answer: "A scripting language used to create dynamic website content"
    },
    {
        title: "Objects that let you communicate in JS",
        choices: ["Document Object Modal","Document Object Model",
        "Designed Object Model","Data Object Modal"],
        answer: "Document Object Model"
    },
    {
        title: "________ control behavior in JS and determines if pieces of code can run.",
        choices: ["Arrays","JSON.parse",,"Booleans","Conditionals"],
        answer: "Conditionals"
    },
    {
        title: "This function allows a short syntax for writing function expressions.",
        choices: ["Expression","Super","Arrow","Declaration"],
        answer: "Arrow"
    },
    {
        title: "Function parameters are:",
        choices: ["Names listed in the function definition","Values passed to, and received by the function",
        "",""],
        answer: "Names listed in the function definition"
    }
]

var hasAnswered = false;