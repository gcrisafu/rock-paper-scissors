console.log("Hello World")
// gets computer's choice
function computerChoice(){
    let computer = Math.random();
    if (computer < 1/3)
        {return "Rock"}
    else if (computer > 1/3 && computer < 2/3 )
        {return "Paper"}
    else (computer > 2/3)
        {return "Scissors"}
    }

let compChoice = computerChoice();

let userChoice = prompt();

function convertUserInput (userChoice){
    return userChoice.toLowerCase()
}

let convertedUserChoice = convertUserInput(userChoice)
console.log(convertedUserChoice)






