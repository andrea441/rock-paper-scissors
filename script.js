function getComputerChoice() {
    // Get a random integer from 1 to 3, save it in a variable
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    const random = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    // Map that integer to a choise and return it like a string
    return (random == 1) ? 'rock' : (random == 2) ? 'paper' : 'scissors';
}

function getHumanChoice() {
    return prompt('Enter your selected choise (rock, paper or scissor): ');
}