// Set variables for score
let humanScore = 0;
let computerScore = 0;
let playerSelection = document.getElementById('player')
let buttons = document.querySelectorAll('button');
playerSelection.addEventListener('click', playRound);

function getComputerChoice() {
    let computerChoice = '';
    let computerSeed = Math.floor((Math.random() * 3) + 1);
    if (computerSeed === 1)  {
        return computerChoice = "rock";
    } else if (computerSeed === 2 ) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    };
}

function playRound(e) {
    let playerChoice;
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (e.target.classList.contains('btn')) {
        playerChoice = e.target.parentNode.id;
    }
    roundResult(playerChoice, computerChoice);
}
// Play a single round
function roundResult(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            // If player wins increase humanScore
            console.log(`You win this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
            humanScore++;
        } else if (playerChoice === computerChoice) {
            // If there's a tie don't increase anything
            console.log("That's a tie!")
        } else {
            // If player loses increase computerScore
            console.log(`You lose this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} loses against ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
            computerScore++;
            };
}

// Function to show score
function getScore() {
    console.log("Player: " + humanScore + '  Computer: ' + computerScore);
}

// Function to create a console.log that will show who is the winner
function getWinner() {
    if (humanScore === computerScore) {
        console.log("This game is a tie!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("You won the game!");
    }
}

