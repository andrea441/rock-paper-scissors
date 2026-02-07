let humanScore = 0;
let computerScore = 0;

const gamePara = document.querySelector('#game');
const resultPara = document.querySelector('#result');
const scorePara = document.querySelector('#score');
const winnerPara = document.querySelector('#winner');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    const random = getRandomInt(1, 3);
    return (random == 1) ? 'rock' : (random == 2) ? 'paper' : 'scissors';
}

function checkWinner() {
    if (humanScore == 5) {
        winnerPara.textContent = 'You won! Congratulations'
    } else if (computerScore == 5) {
        winnerPara.textContent = 'The computer won! Good luck next time';
    }
    // Logic to block the ongoing game, restart it or whatever.
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    gamePara.textContent = `Game: ${humanChoice} vs ${computerChoice}.`;

    if (
        (humanChoice == 'rock' && computerChoice === 'scissors') ||
        (humanChoice == 'paper' && computerChoice === 'rock') ||
        (humanChoice == 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        resultPara.textContent = `You win, ${humanChoice} beats ${computerChoice}.`;
    } else if (
        (humanChoice == 'rock' && computerChoice === 'paper') ||
        (humanChoice == 'paper' && computerChoice === 'scissors') ||
        (humanChoice == 'scissors' && computerChoice === 'rock')
    ) {
        computerScore += 1;
        resultPara.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
    } else {
        resultPara.textContent = 'It is a tie.';
    }
    scorePara.textContent = `Human score: ${humanScore}, Computer Score: ${computerScore}`

    checkWinner();
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
})