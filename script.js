// VARIABLES
// Variable for storing a list of the questions and answers.
        var questions = [
            {
                Question: 'What color are apples?',
                possibleAnswers: [
                      { text: 'Red/Green'},
                      { text: 'Purple'},
                      { text: 'Orange'},
                      { text: 'Teal'}
                  ],
                correctAnswer: 'Red/Green'

            },

            {
                Question: 'What color are Bananas?',
                possibleAnswers: [
                      { text: 'Green'},
                      { text: 'Brown'},
                      { text: 'Yellow'},
                      { text: 'Orange'}
                  ],
                correctAnswer: 'Yellow'
            },

            {
                Question: 'What color are strawberries?',
                possibleAnswers: [
                      { text: 'Red'},
                      { text: 'Purple'},
                      { text: 'Orange'},
                      { text: 'Yellow'}
                  ],
                correctAnswer: 'Red'
            },
        ];

// Variable for the user's score during the game
var score = ''
// Variable for an array displaying the game's high scores
var highScores = []
// Variable to hold select the timer element
var timeEl = document.querySelector(".timer");
// Variable to hold the question element
var questionEl = document.querySelector(".display1")
// Variables to hold the answer buttons
var instructionsEl = document.querySelector(".display2")
var startBtn = document.querySelector(".start-button")
var button0 = document.querySelector(".button0")
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2")
var button3 = document.querySelector(".button3")
var endGameInput = document.querySelector(".endGameInput")
var displayAnswer = document.querySelector(".displayAnswer")
var finalScoreText = document.querySelector(".finalScoreText")
var finalScore = ''

// Variable to hold the time remaining
var secondsLeft = 60;
// Variable to hold the current question
var i = 0
// var questionsShuffled = questions.sort(() => Math.random() - 0.5);

// Variable that holds the user answer
var userAnswer = ""



// On window load, Hides the four answer buttons when the page loads 
window.onload = function(){
    // Hides the four answer buttons when the page loads
    button0.style.display= "none";
    button1.style.display= "none";
    button2.style.display= "none";
    button3.style.display= "none";
    endGameInput.style.display= "none"
    

    // User clicks the start button and calls the startGame function.
    document.querySelector(".start-button").addEventListener("click", 
    function(){setTime()})

}


// Main game function
// function startGame(){
// Calling internal functions
    


//  A timer is printed to the screen and starts counting down 
    function setTime() {
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
    
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver()
            // sendMessage();
        }
    
        }, 1000);
        setupScreen()
    }

// The instructions and start button hide, and the answer buttons unhide. 

    function setupScreen (){
        // Hides the start button
        startBtn.style.display= "none";
        // Hides the instructions
        instructionsEl.style.display= "none";
        // Unhides the four answer buttons
        button0.style.display= "block";
        button1.style.display= "block";
        button2.style.display= "block";
        button3.style.display= "block";
        askQuestion()
    
    }

    // function startQuestions(){
        console.log('startQuestions')
        console.log(questionEl.textContent)

        function askQuestion (){
            questionEl.textContent = questions[i].Question
            button0.textContent = questions[i].possibleAnswers[0].text
            button1.textContent = questions[i].possibleAnswers[1].text
            button2.textContent = questions[i].possibleAnswers[2].text
            button3.textContent = questions[i].possibleAnswers[3].text
            
        }


// Adds even listeners for all the answer buttons
button0.addEventListener("click", function(){assignAnswer(button0.textContent)})
button1.addEventListener("click", function(){assignAnswer(button1.textContent)})
button2.addEventListener("click", function(){assignAnswer(button2.textContent)})
button3.addEventListener("click", function(){assignAnswer(button3.textContent)})

// Assigned the text answer from the button selected into a variable. 
function assignAnswer (answer) {
    console.log(answer)
    checkAnswer(answer) 
}

// Checks the users answer to see if it is true, then calls the function to ask the next question
console.log(i)
function checkAnswer (answer) {
    if (answer == questions[i].correctAnswer){
        displayAnswer.textContent = "You are correct"

        // FIXME:
        // displayAnswer.show();
        // setTimeout(function() { (displayAnswer).hide(); }, 5000);
        
        i++
        console.log(i)
            if (i === 3){
                gameOver()
            }
            else{
                askQuestion()
            }
    } 
    else {
        displayAnswer.textContent = "You are WRONG!"
        secondsLeft-10
        
        i++
        console.log(i)
            if (i === 3){
                gameOver()
            }
            else{
                askQuestion()
            }
    }
    
    

}  

    function gameOver(){
        questionEl.textContent = "All done!"
        button0.style.display= "none";
        button1.style.display= "none";
        button2.style.display= "none";
        button3.style.display= "none";
        displayAnswer.style.display= "none";

        instructionsEl.style.display= "block";
        instructionsEl.textContent = "Enter Initials";

        endGameInput.style.display= "block";


        finalScore = secondsLeft
        finalScoreText.textContent = "Your final score is " + finalScore
        //  

        if (secondsLeft > 0){
            highScores.push(secondsLeft)
            secondsLeft = 1
        }
        // FIXME: This console.log is logging twice and I have no idea why
        console.log(highScores)

        

        
    }

    // Try to use .value to reference the text in the button
 
// After the user clicks on an answer, it displays whether the answer was correct or not.
// It then displays the next quesiton. 



// }



// FUNCTIONS


// EVENT LISTENERS
















// https://www.youtube.com/watch?v=LQGTb112N_c

// https://www.youtube.com/watch?v=riDzcEQbX6k

