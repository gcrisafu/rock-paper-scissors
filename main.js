console.log("Rock, Paper, Scissors")
// gets computer's choice
function computerChoice(){
    let computer = Math.random();
    if (computer < 1/3)
        {return "rock"}
    else if (computer > 1/3 && computer < 2/3 )
        {return "paper"}
    else (computer > 2/3)
        {return "scissors"}
    }

let compChoice = computerChoice();

// get user input and converts to lower case

let userChoice = prompt();

function convertUserInput (userChoice){
    return userChoice.toLowerCase()
}

let convertedUserChoice = convertUserInput(userChoice)

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

let game = round(convertedUserChoice,compChoice)






