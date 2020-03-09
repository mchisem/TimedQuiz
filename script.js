//variables//
var start = document.querySelector("#start-button");
var highScore = document.getElementById('score');
var timer = document.querySelector("#timer");
var navbar = document.querySelector("#nav");
var intro = document.querySelector("#intro");
var questionContainer = document.querySelector(".questions-container");

var secondsLeft = 75;

let score = 0;

//timer coundown funtion//
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
             console.log("over!");
         }

     }, 1000); 
 }
 
 start.addEventListener('click', setTime);


