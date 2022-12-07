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

playerNameBtn = document.querySelector("#player-name-btn");
playerNameBtn.addEventListener("click", addScore);

// Questions Object
var quizFull = [
    questionOne = {
        question: "question1",
        choiceOne: "choice1-1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionTwo = {
        question: "question2",
        choiceOne: "choice1",
        choiceTwo: "choice2-2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionThree = {
        question: "question3",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3-3",
        choiceFour: "choice4"
    },
    questionFour = {
        question: "question4",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4-4"
    },
    questionFive = {
        question: "question5",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4-5"
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
    
    answerTracker.unshift(["player-name:", playerName]);

    console.log(answerTracker);

    submitScore(answerTracker);
};

// Submitting the score to the high score list
function submitScore(answerTracker) {
    console.log("this function works")
    console.log(answerTracker);
};

// When Question runs out or timer is up below pops up


// Local Storage 


