console.log("Hello World")

function computerChoice(){
    let computer = Math.random();
    if (computer < 1/3)
        {return "Rock"}
    else if (computer > 1/3 && computer < 2/3 )
        {return "Paper"}
    else (computer > 2/3)
        {return "Scissors"}
    }

let compChoice = computerChoice()
console.log(compChoice)




