"use strict";

let questionNumber = 0;
let userScore = 0;
let userAnswerID = '';
let userAnswerVal = '';

//function to render quiz page
function renderQuizPage() {
    //add class .hidden to "homePage" elements
    $('.homePage').addClass('hidden');
    if (questionNumber < STORE.length) {
    //adds HTML to <header> for .js-userProgress
        $('.statusBar').removeClass('hidden');
        $('.js-userProgress').html(
            `<span>QUESTION<br>${questionNumber+1} of ${STORE.length}</span>`);
        //adds HTML to <header> for .js-userScore
        $('.js-userScore').html(
            `<span>${userScore} of ${questionNumber}<br>CORRECT</span>`);
        //adds HTML to <main> to populate the form, radio, and submit buttons
        $('.js-quizPage').html(
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
        //get the value of clicked radio to determine user selected answer
         let radios = document.getElementsByName('answer');
         console.log(radios);
         for (let i = 0; i < radios.length; i++) {
             if (radios[i].checked) {
                userAnswerID = radios[i].id;
                userAnswerVal = radios[i].value;
                console.log(`userAnswerVal is ${userAnswerVal}`)
                //store user answer
                STORE[questionNumber][userAnswerID].userAnswer = true;
            }
        }
        checkAnswer();
    });
}

//function to check if userAnswer is correct or not
function checkAnswer() {
    console.log('`checkAnswer` ran');
    //console.log(`correct choice is ${STORE[questionNumber][userAnswer].correctChoice}`);
    if (STORE[questionNumber][userAnswerID].correctChoice) {
        console.log('you got it right');
        scoreIncrementer();
        correctAnswerDisplay();
    }
    else {
        console.log('you got it wrong')
        incorrectAnswerDisplay();
    }
}



//function to render display for correct answer
function correctAnswerDisplay() {
    console.log('`correctAnswerDisplay` ran');
    $('.answers').addClass('hidden');
    $('h2').append(
        `<div class="correctAnswer">
        <h4>Nice Work!</h4>
        <p>'${userAnswerVal}' was correct!</p>
        <button class="nextQuestionButton">Next Question</button>
        </div>`
    );
}


//function to render display for incorrect answer
function incorrectAnswerDisplay() {
    console.log('`incorrectAnswerDisplay` ran');
    $('.answers').addClass('hidden');
    $('h2').append(
        `<div class="incorrectAnswer">
        <h4>Not quite</h4>
        <p>'${userAnswerVal}' was the correct answer</p>
        <button class="nextQuestionButton">Next Question</button>
        </div>`
    );
}

//function to move the quiz to the next question or score page
function advanceQuizPage() {
    console.log('`advanceQuizPage` ran');
    //actively listens for clicks to 'next button'
    $('.js-quizPage').on('click', `.nextQuestionButton`, function() {
        event.preventDefault();
        progressIncrementer();
        renderQuizPage();
    });
}

//function to increment userProgress through quiz, 
function progressIncrementer() {
    console.log('`progressIncrementer` ran');
    questionNumber++;
} 


//function to increment the user score
function scoreIncrementer() {
    userScore++;
    console.log("userScore is " + userScore);
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
    advanceQuizPage();
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
