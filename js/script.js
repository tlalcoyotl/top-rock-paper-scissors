// Set variables for score
let humanScore = 0;
let computerScore = 0;

// Create function for getting the computer choice
function getComputerChoice() {
    let computerChoice = '';
    let computerSeed = Math.floor((Math.random() * 3) + 1);
    //Get a different choice according to the random integer x 3
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
        // Prompt again if input was not rock, paper, or scissors
        humanChoice = prompt("Please type the word 'rock', 'paper', or 'scissors'!").toLowerCase();
    }

    return humanChoice;
}

// Play a single round
function playRound(playerChoice, computerChoice) {
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
            }
}

let humanSelection;
let computerSelection;

// Function to change humanSelection and computerSelection each round
function getChoices () {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
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

// // Play a game of 5 rounds
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         getChoices();
//         playRound(humanSelection, computerSelection);
//         getScore();
//     }
//     getWinner();
//     console.log("Play again by entering playAgain() in the console!")
// }

// playGame();

// // Function to play again
// function playAgain() {
//     humanScore = 0;
//     computerScore = 0;
//     playGame();
// }