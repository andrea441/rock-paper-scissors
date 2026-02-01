let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Get a random integer from 1 to 3, save it in a variable
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    const random = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // Map that integer to a choise and return it like a string
    return (random == 1) ? 'rock' : (random == 2) ? 'paper' : 'scissors';
}

function getHumanChoice() {
    // Prompt the user to enter their option, then return it
    return prompt('Enter your selected choise (rock, paper or scissor): ');
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (
        (humanChoice == 'rock' && computerChoice === 'scissors') ||
        (humanChoice == 'paper' && computerChoice === 'rock') ||
        (humanChoice == 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        (humanChoice == 'rock' && computerChoice === 'paper') ||
        (humanChoice == 'paper' && computerChoice === 'scissors') ||
        (humanChoice == 'scissors' && computerChoice === 'rock')
    ) {
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log('It is a tie.');
    }
}