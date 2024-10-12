// Set variables for score
let humanScore = 0;
let computerScore = 0;

// Create function for getting the computer choice
function getComputerChoice() {
    let computerChoice = '';
    let computerSeed = Math.floor((Math.random() * 3) + 1);
    if (computerSeed === 1)  {
        return computerChoice = "rock";
    } else if (computerSeed === 2 ) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

// Create function for getting player input
function getHumanChoice() {
    let humanChoice = prompt("Select rock, paper, or scissors!").toLowerCase();
    
    while (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
        humanChoice = prompt("Please type the word 'rock', 'paper', or 'scissors'!").toLowerCase();
    }

    return humanChoice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            // If player wins increase humanScore
            console.log(`You win this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
            humanScore++;
            getScore();
        } else if (playerChoice === computerChoice) {
            // If there's a tie don't increase anything
            console.log("That's a tie!")
            getScore();
        } else {
            // If player loses increase computerScore
            console.log(`You lose this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} loses against ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
            computerScore++;
            getScore();
        }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getScore() {
    console.log("Player: " + humanScore + '  Computer: ' + computerScore);
}