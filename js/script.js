function getComputerChoice() {
    let computerChoice = '';
    let computerSeed = Math.floor((Math.random() * 3) + 1);
    if (computerSeed === 1)  {
        return computerChoice = "Rock";
    } else if (computerSeed === 2 ) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scrissors";
    }
}