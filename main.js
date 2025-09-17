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


// ui elements added to the dom
const result = document.createElement("div");
result.id = "res";

const child = document.createElement("h1");
const roundCount = document.createElement ("h1")


const comChoice = document.createElement("h2");

result.appendChild(comChoice)
result.appendChild(child)
document.body.appendChild(result);

    let roundCounter = 0;
    let userScore = 0;
    let compScore = 0

// round function, compares convertedUserChoice and compChoice
function match (roundOutcome){
    if (userScore === 5){
        child.textContent = ("🎉 You win the match! Congratulations! 🎉")
    } else if (compScore === 5){
        child.textContent ("😝 You Lose, Better luck next time. 😝")
    } else if (roundOutcome === true){
        userScore++;
        roundCounter++;
    } else if (roundOutcome === false){
        compScore++;
        roundCounter++;
    } else if (roundOutcome === null){
        roundCounter++;
    }
}

function round (convertedUserChoice,compChoice){
    // User throws rock
    if ((convertedUserChoice === "rock") && (compChoice == "scissors")){
        comChoice.textContent = (compChoice)
        child.textContent = ("You win! Rock beats scissors")
        return true;
        
    } else if ((convertedUserChoice === "rock") && (compChoice === "paper")){
        comChoice.textContent = (compChoice)
        child.textContent = ("You lose... Paper beats rock")
        return false
        
    } else if ((convertedUserChoice === "rock") && (compChoice === "rock")){
        comChoice.textContent = (compChoice)
        child.textContent = ("Dang-it it's a Draw")
        return null
        
    // User throw paper
    } else if ((convertedUserChoice === "paper") && (compChoice === "rock")){
        comChoice.textContent = (compChoice)
        child.textContent = ("You win! Paper beats rock")
        return true
        
    } else if ((convertedUserChoice === "paper") && (compChoice === "scissors")){
        comChoice.textContent = (compChoice)
        child.textContent = ("You lose... Scissors beats paper")
        return false
         
     } else if ((convertedUserChoice === "paper") && (compChoice === "paper")){
        comChoice.textContent = (compChoice)
        child.textContent = ("Dang-it it's a Draw")
        return null

    // User throws scissors 
    } else if ((convertedUserChoice === "scissors") && (compChoice === "paper")){
        comChoice.textContent = (compChoice)
        child.textContent = ("You win! Scissors beats paper")
        return true
        
    } else if ((convertedUserChoice === "scissors") && (compChoice === "rock")){
        comChoice.textContent = (compChoice)
        child.textContent = ("You lose... Rock beats scissors")
        return false
         
     } else if ((convertedUserChoice === "scissors") && (compChoice === "scissors")){
        comChoice.textContent = (compChoice)
        child.textContent = ("Dang-it it's a Draw")
        return null
         
     } 
}


// displaying ui elements to the dom

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", function() {
    const result = round ("rock", computerChoice())
    match(result);
})
document.getElementById("container").appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", function() {
    const result = round ("paper", computerChoice())
    match(result);
})
document.getElementById("container").appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", function() {
    const result = round ("scissors", computerChoice())
    match(result);
})
document.getElementById("container").appendChild(scissors);

// match function





