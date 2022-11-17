
questionTracker = 1;
answerTracker = [];
timeTracker = [];

// Button

startBtn = document.querySelector("#start-quiz");
nextBtn = document.querySelector("#nextQuestion");

// Button Functions

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

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
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2-2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionThree = {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3-3",
        choiceFour: "choice4"
    },
    questionFour = {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4-4"
    },
    questionFive = {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4-5"
    },
];

console.log(quizFull);

// Initital Question Start Function
function startQuiz() {
    questionTracker++;
    console.log(questionTracker);
};

function nextQuestion() {
    console.log("before: " + questionTracker);

    // Question Box Field

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

    var qNumber = questionTracker;

    liEl = document.createElement('li');

    liEl.textContent = quizFull[qNumber].question;
    titleEl.appendChild(liEl);

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

    questionTracker++;

    console.log("after: " + questionTracker);
};

// When Question runs out or timer is up below pops up


// Local Storage


