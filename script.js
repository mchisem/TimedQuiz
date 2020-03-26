//variables//
var start = document.querySelector("#start-button");
var exit = document.querySelector("#exit");
var next = document.querySelector("#next");
var highScore = document.querySelector("#score");
var timer = document.querySelector("#timer");
var navbar = document.querySelector("#nav");
var intro = document.querySelector("#intro");
var questionContainer = document.querySelector(".questions-container");

let score = 0;

//start game event listener//
start.addEventListener('click', function(){
    setTime();
    nextQuestion();
})

//timer function//
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
            endGame();
            console.log("Game Over!");
        }
    }, 1000);
}

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
        choices: ["Arrays","JSON.parse","Booleans","Conditionals"],
        answer: "Conditionals"
    },
    {
        title: "This function allows a short syntax for writing function expressions.",
        choices: ["Expression","Super","Arrow","Declaration"],
        answer: "Arrow"
    },
    {
        title: "Function parameters are:",
        choices: ["Names listed in a function's definition","Values",
        "Conditionals","Operations"],
        answer: "Names listed in the function definition"
    }
]

var question = document.querySelector(".title");
var answerOne = document.querySelector("#one");
var answerTwo = document.querySelector("#two");
var answerThree = document.querySelector("#three");
var answerFour = document.querySelector("#four");

var questionCounter = 0;
var currentQuestion;
var hasAnswered = false;


function nextQuestion() {
    for(i = 0; i < questions.length; i++) {
        question.innerHTML = questions.title;

        // if (questionCounter < questions.length) {
        //     // currentQuestion = questions[questionCounter];
        //     question.innerHTML = questions.title;
        // }

        // else {
        //     console.log("else");
        // }
    }
    
}

// score increases with right answer
function right() {
    score += 20;
    nextQuestion();
  }

// decreases time for wrong answer
function wrong() {
    secondsLeft -= 20;
    nextQuestion(); 
}

//end game screen//
function endGame() {
    clearInterval(timer);
  
    var gameOver =
      `
      <h3>Game Over!</h3>
      <div class="answers-container">
        You got ${score}/100
      <div>

      `
    document.querySelector(".questions-container").innerHTML = gameOver;
  }

// to bring up input after quiz
var createInput;
function inputName () {
    quizButton.textContent = "Submit";
    quizQuestion.textContent = "Input your name";
    quizAnswerContainer.classList.remove("active");

    createInput = document.createElement('input');
    quizContentContainer.appendChild(createInput);


    quizButton.addEventListener("click", submitName)
}

function submitName () {
    var name = createInput.value;
    localStorage.setItem("name", name);
    localStorage.setItem("score", score)
    window.location.href = "highscores.html";

}

//exit the game//
exit.addEventListener('click', function(){
    clearInterval(timer);
    navbar.classList.add("hide");
    intro.classList.remove("hide");
    questionContainer.classList.add("hide");
})