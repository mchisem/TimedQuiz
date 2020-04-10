//variables//
const start = document.querySelector("#start-button");
var exit = document.querySelector("#exit");
var next = document.querySelector("#next");
var highScore = document.querySelector("#score");
var timer = document.querySelector("#timer");
var navbar = document.querySelector("#nav");
var intro = document.querySelector("#intro");
var questionContainer = document.querySelector(".questions-container");

let score = 0;
var secondsLeft = 75;

var shuffledQuestions;
var currentQuestion = 0;

//start game event listener//
start.addEventListener('click', function(){
    score = 0;
    currentQuestion = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setTime();
    nextShuffle();
})

//timer function//
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

//quiz question/answer array//
var questions = [
    {
        question: 'What is Javascript?',
        answers: [
            {text: "A scripting language used to create dynamic website content", correct: true},
            {text: "A form of CSS used to hardcode website styling", correct: false},
            {text: "A place for writers to drink coffee", correct: false},
            {text: "A conditional oriented programming language", correct: false}
        ]
    },
    {
        question: "Objects that let you communicate in JS",
        answers: [
            {text: "Document Object Modal", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Designed Object Model", correct: false},
            {text: "Data Object Modal", correct: false}
        ]
    },
    {
        question: "________ control behavior in JS and determines if pieces of code can run.",
        answers: [
            {text: "Arrays", correct: false},
            {text: "JSON.parse", correct: false},
            {text: "Booleans", correct: false},
            {text: "Conditionals", correct: true}
        ]
    },
    {
        question: "This function allows a short syntax for writing function expressions.",
        answers: [
            {text: "Expression", correct: false},
            {text: "Super", correct: false},
            {text: "Arrow", correct: true},
            {text: "Declaration", correct: false}
        ]
    },
    {
        question: "Function parameters are:",
        answers: [
            {text: "Names listed in a function's definition", correct: true},
            {text: "Values", correct: false},
            {text: "Conditionals", correct: false},
            {text: "Operations", correct: false}
        ]
    }
];

// display quesitons and answers // 
var questionTitle = document.querySelector(".title");
var answers = document.querySelector(".answer");

function showQuestion(question) {
    questionTitle.innerHTML = question.question;
    question.answers.forEach(function (answer) {
        var button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("answer");
        answers.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
          }
          button.addEventListener('click', pickAnswer)
    })
}

// 
function pickAnswer(e) {
    const selectedAnswer = e.target
    const correct = selectedAnswer.dataset.correct
    checkAnswer(document.body, correct)
    Array.from(answers.children).forEach(button => {
    checkAnswer(button, button.dataset.correct)
})
    if (shuffledQuestions.length > currentQuestion + 1) {
        console.log("done!");
    } else {
        endGame();
    }
}

function checkAnswer(button, correct) {
    if(correct) {
        button.classList.add("right");
        score+=10;
        highScore.textContent = 'Score: ' + score;

    } else {
        button.classList.add("wrong");
        secondsLeft -=5;
    }
}

// next button event listener//
next.addEventListener('click', function(){
    currentQuestion++;
    nextShuffle();
})

// randomly shuffles questions//
function nextShuffle() {
    clearAnswers();
    showQuestion(shuffledQuestions[currentQuestion]);
}

// clear out the previous answers//
function clearAnswers(){
    while(answers.firstChild) {
        answers.removeChild
        (answers.firstChild)
    }
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
            <input id="name" placeholder="Your Name"></input>
            <button class="button" id="submit">Submit</button>
        </div>
      <div>

      `
    document.querySelector(".questions-container").innerHTML = gameOver;
  }

// end quiz score/input name
var input =document.querySelector("#name");
var submit = document.querySelector("#submit");

function inputName () {
    submit.addEventListener("click", userInfo)
}

function userInfo(){
    var name = createInput.value;
    localStorage.setItem("name", name);
    localStorage.setItem("score", score);
    window.location.href = "highscores.html";
}