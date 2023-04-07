var startButton = document.querySelector(".start-button");
var startPage = document.querySelector(".starter-page");
var firstQuestion = document.querySelector(".questions")
var secondsLeft = parseInt(5);
var timer = document.querySelector(".seconds-left");
var endPage = document.querySelector(".end-game");
var playAgainButton = document.querySelector(".pg-button");

function startGame() {
    startPage.style.display = 'none';
    firstQuestion.style.display = 'block';
    setTimer();
}

function setTimer() {
    setInterval(function() {
        timer.textContent = secondsLeft;
        if(--secondsLeft < 0) {
            clearInterval(secondsLeft);
            endGame();
        }
    }, 1000);
}

function endGame() {
    firstQuestion.style.display = 'none';
    endPage.style.display = 'block';
}

function playAgain() {
    endPage.style.display = 'none';
    startPage.style.display = 'block';
}

startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", playAgain);