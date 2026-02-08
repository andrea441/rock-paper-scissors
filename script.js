let humanScore = 0;
let computerScore = 0;

let gameOver = false;

const gamePara = document.querySelector('#game');
const resultPara = document.querySelector('#result');
const winnerPara = document.querySelector('#winner');
const humanScorePara = document.querySelector('#human-score');
const computerScorePara = document.querySelector('#computer-score');
const endScreen = document.querySelector('#end-screen');
const endMessage = document.querySelector('#end-message');
const restart = document.querySelector('#restart');
const buttons = document.querySelectorAll('.button button');


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    const random = getRandomInt(1, 3);
    return (random == 1) ? 'rock' : (random == 2) ? 'paper' : 'scissors';
}

function checkWinner() {
    if (humanScore == 5) {
        endMessage.textContent = 'You won! Congratulations.'
        endScreen.classList.remove('hidden')
        gameOver = true;
    } else if (computerScore == 5) {
        endMessage.textContent = 'The computer won! Good luck next time';
        endScreen.classList.remove('hidden')
        gameOver = true;
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    humanScorePara.textContent = 'Human Score: 0';
    computerScorePara.textContent = 'Computer Score: 0';

    gamePara.textContent = '';
    resultPara.textContent = '';

    endScreen.classList.add('hidden');
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
        humanScorePara.textContent = `Human Score: ${humanScore}`;
    } else if (
        (humanChoice == 'rock' && computerChoice === 'paper') ||
        (humanChoice == 'paper' && computerChoice === 'scissors') ||
        (humanChoice == 'scissors' && computerChoice === 'rock')
    ) {
        computerScore += 1;
        resultPara.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
        computerScorePara.textContent = `Computer Score: ${computerScore}`;
    } else {
        resultPara.textContent = 'It is a tie.';
    }

    checkWinner();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (gameOver) return;
        playRound(button.id, getComputerChoice());
    })
})

restart.addEventListener('click', () => {
    restartGame();
})