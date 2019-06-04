"use strict";

let questionNumber = 0;
let userScore = 0;
let userAnswerID = '';
let userAnswerVal = '';

function renderQuizPage() {
    //function to render quiz page
    $('.homePage').addClass('hidden');
    //add class .hidden to "homePage" elements
        $('.statusBar').removeClass('hidden');
        //adds HTML to <header> for .js-userScore
        $('.js-userScore').html(
            `<span>CORRECT<br>${userScore} of ${questionNumber}</span>`);
    if (questionNumber < STORE.length) {
        $('.js-userProgress').html(
            `<span>QUESTION<br>${questionNumber+1} of ${STORE.length}</span>`);
        //adds HTML to <main> to populate the form, radio, and submit buttons
        $('.js-quizPage').html(
            `<h3>${STORE[questionNumber].question}</h3>
            <form class="answers" method="post"><fieldset>
            <div class="radioButtons">
            <input type="radio" id="choice1OBJ" name="answer" value="${STORE[questionNumber].choice1OBJ.choice1}" required>
            <label for="choice1OBJ">${STORE[questionNumber].choice1OBJ.choice1}</label><br>
            <input type="radio" id="choice2OBJ" name="answer" value="${STORE[questionNumber].choice2OBJ.choice2}" required>
            <label for="choice2OBJ">${STORE[questionNumber].choice2OBJ.choice2}</lablel><br>
            <input type="radio" id="choice3OBJ" name="answer" value="${STORE[questionNumber].choice3OBJ.choice3}" required>
            <label for="choice3OBJ">${STORE[questionNumber].choice3OBJ.choice3}</label><br>
            <input type="radio" id="choice4OBJ" name="answer" value="${STORE[questionNumber].choice4OBJ.choice4}" required>
            <label for="choice4OBJ">${STORE[questionNumber].choice4OBJ.choice4}</label>
            </div>
            <button class="submitAnswer">Submit Answer</button>
            </fieldset></form>`);
    }
    else {
        renderScorePage();
    }
}

function getUserAnswer(){
    //listens in the DOM for clicks to the submit button 
    $('.js-quizPage').on('click', '.submitAnswer', function() {
            event.preventDefault();
             //get the value of clicked radio to determine user selected answer
             let radios = document.getElementsByName('answer');
             for (let i = 0; i < radios.length; i++) {
                 if (radios[i].checked) {
                    userAnswerID = radios[i].id;
                    userAnswerVal = radios[i].value;
                    //store user answer for future updates to app
                    STORE[questionNumber][userAnswerID].userAnswer = true;
                }
            }
            checkAnswer();
    });
}

function checkAnswer() {
    //function to check if userAnswer is correct or not
    if (STORE[questionNumber][userAnswerID].correctChoice) {
        scoreIncrementer();
        correctAnswerDisplay();
    }
    else {
        incorrectAnswerDisplay();
    }
}

function correctAnswerDisplay() {
    //function to render display for correct answer
    $('.answers').addClass('hidden');
    $('h3').append(
        `<div class="correctAnswer">
        <img class="scratchMetal" src="http://americanovirtual.com/pluginfile.php/13977/mod_folder/content/0/BATMANS/a7c63ab43ba164ed536556b278443bf1.jpg"
        alt="distressed sheet metal">
        <div class="questionFeedback">
        <h4>Nice Work!</h4>
        <p>'${userAnswerVal}' was correct!</p>
        <button class="nextQuestionButton">Next</button>
        </div></div>`
    );
}

function incorrectAnswerDisplay() {
    //function to render display for incorrect answer
    $('.answers').addClass('hidden');
    $('h3').append(
        `<div class="incorrectAnswer">
        <img class="scratchMetal" src="http://americanovirtual.com/pluginfile.php/13977/mod_folder/content/0/BATMANS/a7c63ab43ba164ed536556b278443bf1.jpg"
        alt="distressed sheet metal">
        <div class="questionFeedback">
        <h4>Not quite</h4>
        <p>'${userAnswerVal}' is <i>not</i> correct</p>
        <button class="nextQuestionButton">Next</button>
        </div></div>`
    );
}

//function to provide user feedback on what is the correct answer
//function getCorrectAnswer(items) {
    //iterate through array/object testing for correctChoice = true, then 
    //return the value of choice#
    // let checkThis = items.find(item => STORE.correctChoice === true);
    // console.log('checkThis is' + checkThis);
    //-------example code to find id key, for me id = correctChoice--------------
    //function findById(items, idNum) {
        //return items.find(item => item.id === idNum);
//}

function advanceQuizPage() {
    //function to move the quiz to the next question or score page\
    $('.js-quizPage').on('click', `.nextQuestionButton`, function() {
        event.preventDefault();
        progressIncrementer();
        renderQuizPage();
    });
}

function progressIncrementer() {
    //function to increment userProgress through quiz, 
    questionNumber++;
} 

function scoreIncrementer() {
    //function to increment the user score
    userScore++;
}

function renderScorePage() {
    //function to render the score page
    let didUserPass = (userScore/STORE.length >= 0.7) ? true : false;
    //determine if user passed the quiz
    if (didUserPass === true) {
        $('.js-quizPage').html(
            `<div class="finalMessage">
            <img class="diamondPlate" src="https://i.pinimg.com/originals/96/6a/7b/966a7b0fa51a0e145aa6b2fe8cd56923.jpg"
            alt="black diamond plate">
            <div class="finalScore">
            <h4>Here's the roll-up:</h4>
            <p>You got ${userScore} / ${STORE.length} correct.</p><hr />
            <h4>Congratulations!</h4>
            <p>Now go get busy in the gym!</p>
            <button class="restartQuizButton">Take the Quiz Again</button></div></div>`
        );
    }
    else {
        $('.js-quizPage').html(
            `<div class="finalMessage">
            <img class="diamondPlate" src="https://i.pinimg.com/originals/96/6a/7b/966a7b0fa51a0e145aa6b2fe8cd56923.jpg"
            alt="black diamond plate">
            <div class="finalScore">
            <h4>Here's the roll-up:</h4>
            <p>You got ${userScore} / ${STORE.length} correct.</p>
            <div class="h_line"></div>
            <p>Study up and try again!</p>
            <button class="restartQuizButton">Take the Quiz Again</button></div></div>`
        );
    }
}

function handleQuizEvents() {
    //function to start the quiz 
    beginQuiz();
    getUserAnswer();
    advanceQuizPage();
}

function beginQuiz() {
    //actively listens for startQuizButton clicks
    $('.startQuizButton').click(function() {
        quizReset();
        renderQuizPage();
    });
    //actively listens for restartQuiz button
    $('.js-quizPage').on('click', '.restartQuizButton', function() {
        quizReset();
        renderQuizPage();
    })
}

function quizReset() {
    //function to set userAnswers to 'false' in STORE
    questionNumber = 0;
    userScore = 0;
    for (let i = 0; i < STORE.length; i++) {
    STORE[i].choice1OBJ.userAnswer = false;
    STORE[i].choice2OBJ.userAnswer = false;
    STORE[i].choice3OBJ.userAnswer = false;
    STORE[i].choice4OBJ.userAnswer = false;
    }
}

$(handleQuizEvents);


$.fn.preload = function() {
    //function to preload images for the DOM
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
//array of images to preload 
$(['http://americanovirtual.com/pluginfile.php/13977/mod_folder/content/0/BATMANS/a7c63ab43ba164ed536556b278443bf1.jpg'],
['https://i.pinimg.com/originals/96/6a/7b/966a7b0fa51a0e145aa6b2fe8cd56923.jpg']).preload();

