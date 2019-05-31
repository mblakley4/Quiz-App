"use strict";

let questionNumber = 0;
let userScore = 0;

//function to render quiz page
function renderQuizPage() {
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
            <form class="answers"><fieldset>
            <div>
            <input type="radio" id="choice1OBJ" name="answer" value="${STORE[questionNumber].choice1OBJ.choice1}" required>
            ${STORE[questionNumber].choice1OBJ.choice1}<br>
            <input type="radio" id="choice2OBJ" name="answer" value="${STORE[questionNumber].choice2OBJ.choice2}" required>
            ${STORE[questionNumber].choice2OBJ.choice2}<br>
            <input type="radio" id="choice3OBJ" name="answer" value="${STORE[questionNumber].choice3OBJ.choice3}" required>
            ${STORE[questionNumber].choice3OBJ.choice3}<br>
            <input type="radio" id="choice4OBJ" name="answer" value="${STORE[questionNumber].choice4OBJ.choice4}" required>
            ${STORE[questionNumber].choice4OBJ.choice4}
            </div>
            <button type="submit" class="submitAnswer">Submit Answer</button>
            </fieldset></form>`);
    }
    else {
        renderScorePage();
    }
}

function getUserAnswer(){
    //listens in the DOM for clicks to the submit button 
    $('.js-quizPage').on('click', `.submitAnswer`, function() {
        event.preventDefault();
        console.log('you submitted this answer:');
        //get the value of clicked radio
         let radios = document.getElementsByName('answer');
         console.log(radios);
         for (let i = 0; i < radios.length; i++) {
             if (radios[i].checked) {
                let userAnswer = radios[i].id;
                console.log(`userAnswer is ${userAnswer}`)
            }
        }
    });
}

//function to check answer
function checkAnswer() {
    console.log('`checkAnswer` ran');
    
        //determine what answer the user selected
        //getUserAnswer();
        //take user answer, check if correctChoice is 'true'
//checks if answer is correct
//calls correctAnswerDisplay() or incorrectAnswerDisplay
//calls scoreIncrementer() if correct;
//advanced functionality: store user response in array
}



//function to render display for correct answer
function correctAnswerDisplay() {
    console.log('`correctAnswerDisplay` ran');
//keeps HTML to the <header> element
//keeps HTML to display question
//adds container box w/ 'got it correct' text and a 'next button'
}


//function to render display for incorrect answer
function incorrectAnswerDisplay() {
    console.log('`incorrectAnswerDisplay` ran');
//keeps HTML to the <header> element
//keeps HTML to display question
//adds container box w/ 'got it wrong' text and a 'next button'
}

//function to move the quiz to the next question or score page
function advanceQuizPage() {
    console.log('`advanceQuizPage` ran');
//actively listens for clicks to 'next button'
//calls progressIncrementer()

}

//function to increment userProgress through quiz, 
function progressIncrementer() {
//i.e. what is the current question number
    console.log('`progressIncrementer` ran');
//increments variable questionNumber
//calls renderQuizPage()
} 


//function to increment the user score
function scoreIncrementer() {
    console.log('`scoreIncrementer` ran');
//increment variable userScore 
}


//function to render the score page
function renderScorePage() {
    console.log('`renderScorePage` ran');
//keeps HTML to the <header> element
//adds container HTML for passing score %
//adds container HTML for pass or fail text
//adds button to Restart the Quiz
}

//function to start the quiz 
function runQuiz() {
    getUserAnswer();
    checkAnswer();
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
