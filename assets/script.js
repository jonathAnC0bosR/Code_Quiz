var startButton = document.querySelector(".start-button");
var startPage = document.querySelector(".starter-page");
var firstQuestion = document.querySelector(".first-question")
var secondQuestion = document.querySelector(".second-question");
var thirdQuestion = document.querySelector(".third-question");
var secondsLeft = parseInt(60);
var timer = document.querySelector(".seconds-left");
var cardTimer = document.querySelector(".card-timer");
var endPage = document.querySelector(".end-game");
var playAgainButton = document.querySelector(".pg-button");
var firstAnswer = document.querySelectorAll("#f-question li");
var secondAnswer = document.querySelectorAll("#s-question li");
var thirdAnswer = document.querySelectorAll("#t-question li");
var correctAnswer = document.querySelector(".correct");
var wrongAnswer = document.querySelector(".wrong");

function startGame() {
    startPage.style.display = 'none';
    firstQuestion.style.display = 'block';
    cardTimer.style.display = 'block';
    // Is this necessary?
    secondsLeft = parseInt(60);
    setTimer();
    fQuestion();
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
    endPage.style.display = 'block';
    cardTimer.style.display = 'none';
}

function playAgain() {
    endPage.style.display = 'none';
    startPage.style.display = 'block';
}

function fQuestion() {
    let itemVar = 0;
    firstAnswer.forEach(answer => {
      let iterate = firstAnswer.item(itemVar);
      console.log(iterate);
      itemVar++;
      answer.addEventListener('click', () => {
        if (answer.dataset.correct === "true") {
          correctAnswer.style.display = 'block';
          wrongAnswer.style.display = 'none';
          secondsLeft+= 10;
          
        } else {
            wrongAnswer.classList.add()
            correctAnswer.style.display = 'none';
            wrongAnswer.style.display = 'block';
            secondsLeft-= 10;
        }
        sQuestion();
      });
    });
  };
  

  function sQuestion() {
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'block';
    let itemVar = 0;
    secondAnswer.forEach(answer => {
      let iterate = secondAnswer.item(itemVar);
      console.log(iterate);
      itemVar++;
      answer.addEventListener('click', () => {
        if (answer.dataset.correct === "true") {
          correctAnswer.style.display = 'block';
          wrongAnswer.style.display = 'none';
          secondsLeft+= 30;
        } else {
            wrongAnswer.classList.add()
            correctAnswer.style.display = 'none';
            wrongAnswer.style.display = 'block';
            secondsLeft-= 30;
        }
        tQuestion();
      });
    });
  };


  function tQuestion() {
    secondQuestion.style.display = 'none';
    thirdQuestion.style.display = 'block';
    let itemVar = 0;
    thirdAnswer.forEach(answer => {
      let iterate = thirdAnswer.item(itemVar);
      console.log(iterate);
      itemVar++;
      answer.addEventListener('click', () => {
        if (answer.dataset.correct === "true") {
          correctAnswer.style.display = 'block';
          wrongAnswer.style.display = 'none';
          secondsLeft+= 30;
        } else {
            wrongAnswer.classList.add()
            correctAnswer.style.display = 'none';
            wrongAnswer.style.display = 'block';
            secondsLeft-= 30;
        }
      });
    });
  };

startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", playAgain);

