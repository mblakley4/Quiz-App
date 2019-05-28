function renderQuizPage() {
//function to render quiz page
console.log('`renderQuizPage` ran');
//add class .hidden to "homePage" elements
//if questionNumber > 10, call renderScorePage(), else show next question
//adds HTML to <header> for .js-userProgress from progressIncrementer()
    //use <progress> element for this
//adds HTML to <header> for .js-userScore from scoreIncrementer()
//adds HTML to <main> to populate the form, radio, and submit buttons
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
//increments variable questionNumber  --can I avoid a global here?--
//calls renderQuizPage()
} 


function scoreIncrementer() {
//function to increment the user score
    console.log('`scoreIncrementer` ran');
//increment variable userScore  --can I avoid a global here?--
}


function renderScorePage() {
//function to render the score page
    console.log('`renderScorePage` ran');
//keeps HTML to the <header> element
//adds container HTML for passing score %
//adds container HTML for pass or fail text
//adds button to Restart the Quiz
}

function runQuiz() {
//function to start the quiz 
    renderQuizPage();
    checkAnswer();
    correctAnswerDisplay();
    incorrectAnswerDisplay();
    advanceQuizPage();
    progressIncrementer();
    scoreIncrementer();
    renderScorePage();
//actively listens for startQuizButton clicks
//sets userScore and questionNumber back to zero
//calls renderQuizPage()
}

$(runQuiz);