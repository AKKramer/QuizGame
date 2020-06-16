// VARIABLES
// Variable for storing a list of the questions and answers.
        var questions = [
            {
                Question: 'What color are apples?',
                answers: [
                      { text: 'Red/Green', correct: true},
                      { text: 'Purple', correct: false},
                      { text: 'Orange', correct: false},
                      { text: 'Teal', correct: false}
                  ]
            },

            {
                Question: 'What color are Bananas?',
                answers: [
                      { text: 'Green', correct: false},
                      { text: 'Brown', correct: false},
                      { text: 'Yellow', correct: false},
                      { text: 'Orange', correct: true}
                  ]
            },

            {
                Question: 'What color are strawberries?',
                answers: [
                      { text: 'Red', correct: true},
                      { text: 'Purple', correct: false},
                      { text: 'Orange', correct: false},
                      { text: 'Yellow', correct: false}
                  ]
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
            button0.textContent = questions[i].answers[0].text
            button1.textContent = questions[i].answers[1].text
            button2.textContent = questions[i].answers[2].text
            button3.textContent = questions[i].answers[3].text
            
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
    // FIXME: This is not finding the "true" answer
    if (answer == questions[i].answer){
        
        i++
        console.log(i)
        // FIXME: I'm sure there is a better way to do this...
            if (i === 3){
                gameOver()
            }
            else{
                askQuestion()
            }
    } 
    else {
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

        instructionsEl.style.display= "block";
        instructionsEl.textContent = "Enter Initials";

        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("value", "Initials");

        var submit = document.createElement("BUTTON");
        var text = document.createTextNode("Submit");
        submit.appendChild(text);
        
        // FIXME: Can't get append child to attach to the "display2" element. Don't know why it's displaying twice. 
        document.body.appendChild(input)
        document.body.appendChild(submit)

        highScores.push(secondsLeft)
        console.log(highScores)

        secondsLeft = 1



        
    }

    // Try to use .value to reference the text in the button
 
// After the user clicks on an answer, it displays whether the answer was correct or not.
// It then displays the next quesiton. 



// }



// FUNCTIONS


// EVENT LISTENERS
















// https://www.youtube.com/watch?v=LQGTb112N_c

// https://www.youtube.com/watch?v=riDzcEQbX6k

