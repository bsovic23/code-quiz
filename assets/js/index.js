// Code Quiz
questionTracker = 0;
choice = 0;
answerTracker = [];
timeTracker = [];

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

// Button
startBtn = document.querySelector("#start-quiz");

// Button Functions
startBtn.addEventListener("click", startQuiz);

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

console.log(quizFull);

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
        console.log(answerTracker);
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

// When Question runs out or timer is up below pops up


// Local Storage 


