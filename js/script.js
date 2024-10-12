function getComputerChoice() {
    let computerChoice = '';
    let computerSeed = Math.floor((Math.random() * 3) + 1);
    if (computerSeed === 1)  {
        return computerChoice = "rock";
    } else if (computerSeed === 2 ) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scrissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Select rock, paper, or scissors!").toLowerCase();
    
    while (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        humanChoice = prompt("Please type the word 'rock', 'paper', or 'scissors'.").toLowerCase();
    }

    return humanChoice;
}