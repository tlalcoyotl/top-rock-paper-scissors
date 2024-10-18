// Set variables for score
let humanScore = 0;
let computerScore = 0;
let playerSelection = document.getElementById('player')
let buttons = document.querySelectorAll('button');
let gameStatus = document.querySelector('#gameStatus');
let score = document.getElementById('score');
playerSelection.addEventListener('click', playRound);
gameStatus.innerText = 'Play Rock Paper Scissors!';

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
    if (e.target.classList.contains('btn')) {
        playerChoice = e.target.parentNode.id;
        roundResult(playerChoice, computerChoice);
    };
    }
// Get round result
function roundResult(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
            // If player wins increase humanScore
            gameStatus.textContent = `You win this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
            humanScore++;
            getScore();
        } else if (playerChoice === computerChoice) {
            // If there's a tie don't increase anything
            gameStatus.textContent = "That's a tie!";
            getScore();
        } else {
            // If player loses increase computerScore
            gameStatus.textContent = `You lose this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} loses against ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
            computerScore++;
            getScore();
            };
    if (humanScore === 5 || computerScore ===5) {
        getWinner();
    }
}

// Function to show score
function getScore() {
    score.textContent = "Player: " + humanScore + '  Computer: ' + computerScore;
}

// Function to create a console.log that will show who is the winner
function getWinner() {
    if (humanScore > computerScore) {
        gameStatus.textContent = "You win this game!"
    } else {
        gameStatus.textContent = "You lose this game!"
    }
    score.textContent = "Play Again?";
    humanScore = 0;
    computerScore = 0;
}