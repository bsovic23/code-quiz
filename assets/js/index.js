// Code Quiz Variables
questionTracker = 0;
choice = 0;
answerTracker = [];
timeTracker = [];
finalScore = 0;

// Elements
questionBox = document.querySelector("#question-box");

titleEl = document.querySelector("#question-title");
answerOneBtnEl = document.querySelector("#answerOneText");
answerTwoBtnEl = document.querySelector("#answerTwoText");
answerThreeBtnEl = document.querySelector("#answerThreeText");
answerFourBtnEl = document.querySelector("#answerFourText");

answerOneEl = document.querySelector("#answerOneText");
answerTwoEl = document.querySelector("#answerTwoText");
answerThreeEl = document.querySelector("#answerThreeText");
answerFourEl = document.querySelector("#answerFourText");
answerFiveEl = document.querySelector("#answerFiveText");

// Buttons
startBtn = document.querySelector("#start-quiz");
startBtn.addEventListener("click", startQuiz);

highScoreBtn = document.querySelector("#high-score-btn");
highScoreBtn.addEventListener("click", seeAllScores);

playerNameBtn = document.querySelector("#player-name-btn");
playerNameBtn.addEventListener("click", addScore);

// Questions Object
var quizFull = [
    questionOne = {
        question: "The symbols ->   [ ]   in JavaScipt are used to create a(n):",
        choiceOne: "Array",
        choiceTwo: "Object",
        choiceThree: "Variable",
        choiceFour: "Function"
    },
    questionTwo = {
        question: "How do you link your JS file in your HTML document",
        choiceOne: "<link></link>",
        choiceTwo: "<script></script>",
        choiceThree: "relsheet",
        choiceFour: "require('<sheetname>')"
    },
    questionThree = {
        question: "Which is not a type of JavaScript Variable Syntax used",
        choiceOne: "Var <var>",
        choiceTwo: "Item <var>",
        choiceThree: "Const <var>",
        choiceFour: "Let <var>"
    },
    questionFour = {
        question: "What type of symbol is typically used at the end of a function/statement in JavaScript",
        choiceOne: "+",
        choiceTwo: "-",
        choiceThree: ";",
        choiceFour: ":"
    },
    questionFive = {
        question: "Why would you use === instead of == in a javscript function",
        choiceOne: "To make extra sure the answer is correct",
        choiceTwo: "This is not a real javascript option",
        choiceThree: "To just make sure its the same value",
        choiceFour: "To ensure the same type and value"
    },
];

var quizAnswers = [1, 2, 2, 3, 4];

// Initital Question Start Function
function startQuiz() {
    console.log(questionTracker);
    nextQuestion();
};

function nextQuestion() {
    
    if (questionTracker < 5 ) {

    // Question Box Field
    var qNumber = questionTracker;

    titleEl.textContent = quizFull[qNumber].question;

    p1El = document.createElement('p');
    p2El = document.createElement('p');
    p3El = document.createElement('p');
    p4El = document.createElement('p');

    p1El.textContent = quizFull[qNumber].choiceOne
    p2El.textContent = quizFull[qNumber].choiceTwo
    p3El.textContent = quizFull[qNumber].choiceThree
    p4El.textContent = quizFull[qNumber].choiceFour
    
    answerOneBtnEl.appendChild(p1El);
    answerTwoBtnEl.appendChild(p2El);
    answerThreeBtnEl.appendChild(p3El);
    answerFourBtnEl.appendChild(p4El);

    // questionTracker variable
    questionTracker++;
    }

    else {
        window.alert("the quiz is now over. Please enter your name to be added to the high scores list");
        scoreQuiz();
    } 
};

// Button control
answerOneBtnEl.addEventListener("click", answerOne);
answerTwoBtnEl.addEventListener("click", answerTwo);
answerThreeBtnEl.addEventListener("click", answerThree);
answerFourBtnEl.addEventListener("click", answerFour);

// Determining which button clicked
function answerOne() {
    choice = 1;
    answerClicked();
};

function answerTwo() {
    choice = 2;
    answerClicked();
};

function answerThree() {
    choice = 3;
    answerClicked();
};

function answerFour() {
    choice = 4;
    answerClicked();
};

// Create a function that stores the answer and clears the buttons
function answerClicked() {

    answerTracker.push([questionTracker, choice]);    

    titleEl.textContent = "";
    p1El.textContent = "";
    p2El.textContent = "";
    p3El.textContent = "";
    p4El.textContent = "";

    choice = 0;

    nextQuestion();
};

// Scoring the quiz
function scoreQuiz() {
    console.log(answerTracker);

    answerResultEl = document.querySelector("#answerResult");
    
    for (i = 0; i < 5; i++ ) {
        if (answerTracker[i][1] === quizAnswers[i]) {
            finalScore+=1;
            answerLi = document.createElement('li');
            answerLi.textContent = "Question" + [i+1] + " is CORRECT!";
            answerResultEl.appendChild(answerLi);
        } else {
            finalScore == finalScore;
            answerLi = document.createElement('li');
            answerLi.textContent = "Question" + [i+1] + " is WRONG!";
            answerResultEl.appendChild(answerLi);
        }
    };

    scoreEl = document.querySelector("#score");
    scoreEl.textContent = finalScore;
};

// Add Name to Score and add to the high score list
function addScore() {
    var playerNameEl = document.querySelector("#player-name");
    var playerName = playerNameEl.value.trim();
    
    scoreSubmit = [playerName, finalScore];

    submitScore(scoreSubmit);
};

// Submitting the score to the high score list
function submitScore(scoreSubmit) {

    console.log(scoreSubmit);

    if (!scoresArray) {
        scoresArray = [];
        scoresArray.push(scoreSubmit);
    } else {
        scoresArray.push(scoreSubmit);
    };

    localStorage.setItem("scores", JSON.stringify(scoresArray));
};

// See Scores List Button -> Grabbing the scores from local storage and creating a list

function seeAllScores() {

    const $highScoreList = document.querySelector("#high-score-list");

    $highScoreList.innerHTML = "";

    for (i = 0; i < scoresArray.length; i++) {
        const nameEl = scoresArray[i][0];
        const scoreEl = scoresArray[i][1];

        const highScoreEl =
        `
        <div>
            <h2>Player Name: ${nameEl}</h2>
            <p>Player Score: ${scoreEl}</p>
        </div>
        `

        $highScoreList.innerHTML += highScoreEl;
    };
};


// Timer
//var time = 60;

const $timeEl = document.querySelector("#timer");

function countdown() {
    var time = 60;
  
    var timeInterval = setInterval(function () {
      if (time > 1) {
        $timeEl.innerHTML = time;
        time--;
      } 
      else if (time === 1) {
        $timeEl.innerHTML = time;
        time--;
      }
      else {
        $timeEl.innerHTML = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  };

countdown();


// Immediately Grab Local Storage Scores
function getScores() {
    var storedScores = localStorage.getItem("scores");
    scoresArray = JSON.parse(storedScores);
    console.log(scoresArray);
};

getScores();


// Function that ranks the scores from high to low


