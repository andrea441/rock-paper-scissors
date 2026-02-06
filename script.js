function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    const random = getRandomInt(1, 3);
    return (random == 1) ? 'rock' : (random == 2) ? 'paper' : 'scissors';
}

function getHumanChoice() {
    return prompt('Enter your selected choice (rock, paper or scissor): ');
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(`Game: ${humanChoice} vs ${computerChoice}.`)

        if (
            (humanChoice == 'rock' && computerChoice === 'scissors') ||
            (humanChoice == 'paper' && computerChoice === 'rock') ||
            (humanChoice == 'scissors' && computerChoice === 'paper')
        ) {
            humanScore += 1;
            console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
        } else if (
            (humanChoice == 'rock' && computerChoice === 'paper') ||
            (humanChoice == 'paper' && computerChoice === 'scissors') ||
            (humanChoice == 'scissors' && computerChoice === 'rock')
        ) {
            computerScore += 1;
            console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log('It is a tie.');
        }
    }

    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log(`Human final score: ${humanScore}`);
    console.log(`Computer final score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You won! Congrats!');
    } else if (humanScore < computerScore) {
        console.log('You lose! Better luck next time!');
    } else {
        console.log('It is a tie! No winner!');
    }
}

playGame();