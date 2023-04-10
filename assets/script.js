var startButton = document.querySelector(".start-button");
var startPage = document.querySelector(".starter-page");
var firstQuestion = document.querySelector(".first-question")
var secondQuestion = document.querySelector(".second-question");
var thirdQuestion = document.querySelector(".third-question");
var fourthQuestion = document.querySelector(".fourth-question");
var secondsLeft = parseInt(59);
var timer = document.querySelector(".seconds-left");
var cardTimer = document.querySelector(".card-timer");
var endPage = document.querySelector(".end-game");
var playAgainButton = document.querySelector(".pg-button");
var firstAnswer = document.querySelectorAll("#f-question li");
var secondAnswer = document.querySelectorAll("#s-question li");
var thirdAnswer = document.querySelectorAll("#t-question li");
var fourthAnswer = document.querySelectorAll("#c-question li");
var correctAnswer = document.querySelector(".correct");
var wrongAnswer = document.querySelector(".wrong");
var score = parseInt(0);
var totalScore = document.querySelector(".total-score");
var finalPage = document.querySelector(".end-page");

function startGame() {
    startPage.style.display = 'none';
    firstQuestion.style.display = 'block';
    cardTimer.style.display = 'block';
    // Is this necessary?
    setTimer();
    questions();
}

function setTimer() {   
    var intervaId = setInterval(function() {
        timer.textContent = secondsLeft;
        if(--secondsLeft <= 0) {
            // Why we have to clear the interval?
            clearInterval(intervaId);
            endGame();
        }
    }, 1000);
}

function endGame() {
    firstQuestion.style.display = 'none';
    finalPage.style.display = 'block';
    cardTimer.style.display = 'none';
    secondQuestion.style.display = 'none';
    thirdQuestion.style.display = 'none';
    fourthQuestion.style.display = 'none';
    correctAnswer.style.display = 'none';
    wrongAnswer.style.display = 'none';
    totalScore.textContent = score;
}

function playAgain() {
    finalPage.style.display = 'none';
    startPage.style.display = 'block';
    secondsLeft = parseInt(59);
    score = parseInt(0);
}

function questions() {
    startPage.style.display = 'none';
    firstQuestion.style.display = 'block';
    firstAnswer.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer.dataset.correct === 'true') {
                correctAnswer.style.display = 'block';
                wrongAnswer.style.display = 'none';
                secondsLeft += 10;
                score += 11;
                secondQuestion.style.display = 'block';
            } else {
                wrongAnswer.style.display = 'block';
                correctAnswer.style.display = 'none';
                secondsLeft -= 10;
                secondQuestion.style.display = 'block';
            }
        })
    })
    secondAnswer.forEach(answer => {
        answer.addEventListener('click', () => {
            if(answer.dataset.correct === 'true') {
                correctAnswer.style.display = 'block';
                wrongAnswer.style.display = 'none';
                secondsLeft += 10;
                score += 11;
                thirdQuestion.style.display = 'block';
            } else {
                wrongAnswer.style.display = 'block';
                correctAnswer.style.display = 'none';
                secondsLeft -= 10;
                thirdQuestion.style.display = 'block';
            }
        })
    })
    thirdAnswer.forEach(answer => {
        answer.addEventListener('click', () => {
            if(answer.dataset.correct === 'true') {
                correctAnswer.style.display = 'block';
                wrongAnswer.style.display = 'none';
                secondsLeft += 10;
                score += 11;
                fourthQuestion.style.display = 'block';
            } else {
                wrongAnswer.style.display = 'block';
                correctAnswer.style.display = 'none';
                secondsLeft -= 10;
                fourthQuestion.style.display = 'block';
            }
        })
    })
    fourthAnswer.forEach(answer => {
        answer.addEventListener('click', () => {
            if(answer.dataset.correct === 'true'){
                correctAnswer.style.display = 'block';
                wrongAnswer.style.display = 'none';
                secondsLeft += 10;
                score += 11;
                endGame();
            } else {
                wrongAnswer.style.display = 'block';
                correctAnswer.style.display = 'none';
                secondsLeft -= 10;
                endGame();
            }
        })
    })
}



startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", playAgain);

