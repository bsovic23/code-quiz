
questionTracker = 0;
answerTracker = [];
timeTracker = [];

// Button

startBtn = document.querySelector("#start-quiz");
nextBtn = document.querySelector("#nextQuestion");

// Button Functions

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

// Questions Object

var quizFull = {
    questionOne : {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionTwo : {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionThree : {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionFour : {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
    questionFive : {
        question: "question1",
        choiceOne: "choice1",
        choiceTwo: "choice2",
        choiceThree: "choice3",
        choiceFour: "choice4"
    },
};

// Initital Question Start Function
function startQuiz() {
    questionTracker++;
    console.log(questionTracker);
};

function nextQuestion() {



    questionTracker++;
    console.log(questionTracker);
};


