var startButton = document.querySelector(".start-button");
var startPage = document.querySelector(".starter-page");
var firstQuestion = document.querySelector(".questions")
var secondsLeft = parseInt(5);
var timer = document.querySelector(".seconds-left");
var endPage = document.querySelector(".end-game");
var playAgainButton = document.querySelector(".pg-button");
var firstAnswer = document.querySelectorAll("#f-question li");
var correctAnswer = document.querySelector(".correct");
var wrongAnswer = document.querySelector(".wrong")

function startGame() {
    startPage.style.display = 'none';
    firstQuestion.style.display = 'block';
    // Is this necessary?
    secondsLeft = parseInt(5);
    setTimer();
    fQuestion();
}

function setTimer() {
    var intervaId = setInterval(function() {
        timer.textContent = secondsLeft;
        if(--secondsLeft < 0) {
            // Why we have to clear the interval?
            clearInterval(intervaId);
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

function fQuestion() {
    var selected = firstAnswer.item(0);
    firstAnswer.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer === selected) {
                selected = null;
                correctAnswer.style.display = 'none';
                wrongAnswer.style.display = 'none';
            } else {
                selected = answer;
                if(selected.dataset.correct === 'true') {
                    correctAnswer.style.display = 'block';
                    wrongAnswer.style.display = 'none';
                } else {
                    correctAnswer.style.display = 'none';
                    wrongAnswer.style.display = 'block';
                }
            }
           
        });
    }) ;
}


// firstCorrect.addEventListener("click", vCorrect);
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", playAgain);

