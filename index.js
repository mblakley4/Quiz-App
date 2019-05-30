"use strict";

let questionNumber = 0;
let userScore = 0;

//function to render quiz page
function renderQuizPage() {
    console.log('`renderQuizPage` ran');
    //add class .hidden to "homePage" elements
    $('.homePage').addClass('hidden');
    if (questionNumber < STORE.length) {
    //adds HTML to <header> for .js-userProgress
        $('.statusBar').removeClass('hidden');
        $('.js-userProgress').append(
            `<span>QUESTION<br>${questionNumber} of ${STORE.length}</span>`);
        //adds HTML to <header> for .js-userScore
        $('.js-userScore').append(
            `<span>${userScore} of ${questionNumber}<br>CORRECT</span>`);
        //adds HTML to <main> to populate the form, radio, and submit buttons
        $('.js-quizPage').append(
            `<h2>${STORE[questionNumber].question}</h2>
            <form><fieldset>
            <div class="answers">
            <input type="radio" id="choice1" name="answer" value="${STORE[questionNumber].choice1OBJ.choice1}" required>
            ${STORE[questionNumber].choice1OBJ.choice1}<br>
            <input type="radio" id="choice2" name="answer" value="${STORE[questionNumber].choice2OBJ.choice2}" required>
            ${STORE[questionNumber].choice2OBJ.choice2}<br>
            <input type="radio" id="choice3" name="answer" value="${STORE[questionNumber].choice3OBJ.choice3}" required>
            ${STORE[questionNumber].choice3OBJ.choice3}<br>
            <input type="radio" id="choice4" name="answer" value="${STORE[questionNumber].choice4OBJ.choice4}" required>
            ${STORE[questionNumber].choice4OBJ.choice4}
            </div>
            <button type="submit" class="submitAnswer">Submit Answer</button>
            </fieldset></form>`);
    }
    else {
        renderScorePage();
    }
}


function checkAnswer() {
//function to check answer
    console.log('`checkAnswer` ran');
//listens in the DOM for clicks to the submit button 
//checks if answer is correct
//calls correctAnswerDisplay() or incorrectAnswerDisplay
//calls scoreIncrementer() if correct;
//advanced functionality: store user response in array
}


function correctAnswerDisplay() {
//function to render display for correct answer
    console.log('`correctAnswerDisplay` ran');
//keeps HTML to the <header> element
//keeps HTML to display question
//adds container box w/ 'got it correct' text and a 'next button'
}


function incorrectAnswerDisplay() {
//function to render display for incorrect answer
    console.log('`incorrectAnswerDisplay` ran');
//keeps HTML to the <header> element
//keeps HTML to display question
//adds container box w/ 'got it wrong' text and a 'next button'
}

function advanceQuizPage() {
//function to move the quiz to the next question or score page
    console.log('`advanceQuizPage` ran');
//actively listens for clicks to 'next button'
//calls progressIncrementer()

}

function progressIncrementer() {
//function to increment userProgress through quiz, 
//i.e. what is the current question number
    console.log('`progressIncrementer` ran');
//increments variable questionNumber
//calls renderQuizPage()
} 


function scoreIncrementer() {
//function to increment the user score
    console.log('`scoreIncrementer` ran');
//increment variable userScore 
}


function renderScorePage() {
//function to render the score page
    console.log('`renderScorePage` ran');
//keeps HTML to the <header> element
//adds container HTML for passing score %
//adds container HTML for pass or fail text
//adds button to Restart the Quiz
}

//function to start the quiz 
function runQuiz() {
    // renderQuizPage();
    // checkAnswer();
    // correctAnswerDisplay();
    // incorrectAnswerDisplay();
    // advanceQuizPage();
    // progressIncrementer();
    // scoreIncrementer();
    // renderScorePage();

    //actively listens for startQuizButton clicks
    $('.startQuizButton').click(function() {
        //sets userScore and questionNumber back to zero
        questionNumber = 0;
        userScore = 0;
        //sets userAnswers to false in STORE
        userAnswerReset();
        //calls renderQuizPage()
        renderQuizPage();
    });
}

//function to set userAnswers to 'false' in STORE
function userAnswerReset() {
    for (let i = 0; i < STORE.length; i++) {
    STORE[i].choice1OBJ.userAnswer = false;
    STORE[i].choice2OBJ.userAnswer = false;
    STORE[i].choice3OBJ.userAnswer = false;
    STORE[i].choice4OBJ.userAnswer = false;
    }
}

$(runQuiz);
