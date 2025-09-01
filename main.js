console.log("Rock, Paper, Scissors")
// gets computer's choice
function computerChoice(){
    let computer = Math.random();
    if (computer < 1/3)
        {return "rock"}
    else if (computer > 1/3 && computer < 2/3 )
        {return "paper"}
    else 
        {return "scissors"}
    }

// get user input and converts to lower case


function convertUserInput (userChoice){
    return userChoice.toLowerCase()
}

// round function, compares convertedUserChoice and compChoice

function round (convertedUserChoice,compChoice){
    // User throws rock
    if ((convertedUserChoice === "rock") && (compChoice == "scissors")){
        console.log(compChoice)
        console.log("You win! Rock beats scissors")
        return true
    } else if ((convertedUserChoice === "rock") && (compChoice === "paper")){
        console.log(compChoice)
        console.log("You lose... Paper beats rock")
        return false
    } else if ((convertedUserChoice === "rock") && (compChoice === "rock")){
        console.log(compChoice)
        console.log("Draw")
        return null
    // User throw paper
    } else if ((convertedUserChoice === "paper") && (compChoice === "rock")){
        console.log(compChoice)
        console.log("You win! Paper beats rock")
        return true
    } else if ((convertedUserChoice === "paper") && (compChoice === "scissors")){
        console.log(compChoice)
        console.log("You lose... Scissors beats paper")
        return false 
     } else if ((convertedUserChoice === "paper") && (compChoice === "paper")){
        console.log(compChoice)
        console.log("Draw")
        return null
    // User throws scissors 
    } else if ((convertedUserChoice === "scissors") && (compChoice === "paper")){
        console.log(compChoice)
        console.log("You win! Scissors beats paper")
        return true
    } else if ((convertedUserChoice === "scissors") && (compChoice === "rock")){
        console.log(compChoice)
        console.log("You lose... Rock beats scissors")
        return false 
     } else if ((convertedUserChoice === "scissors") && (compChoice === "scissors")){
        console.log(compChoice)
        console.log("draw")
        return null 
     } 
}
// Match Function 
function match(){
    let roundCounter = 0;
    let userScore = 0;
    let compScore = 0;
    while (roundCounter < 5){
        let userChoice = prompt("Rock, paper, or scissors?");
        let convertedUserChoice = convertUserInput(userChoice);
        let compChoice = computerChoice();
        let game = round(convertedUserChoice, compChoice);
        
        if (game === true) {
            userScore++;
        } else if (game === false){
            compScore++;
        }
        roundCounter++;
        }
           
        // chat gpt helped with these last two
        
        console.log("Final Score - You:", userScore, "Computer:", compScore);
    if (userScore > compScore) {
        console.log("🎉 You won the match!");
    } else if (compScore > userScore) {
        console.log("😢 You lost the match...");
    } else {
        console.log("🤝 It’s a draw overall!");
    } // ─── end final result if ───
    }


match();





