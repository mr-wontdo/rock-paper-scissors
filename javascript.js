let playerScore = 0;
let computerScore = 0;
game();

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        playRound();
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    getFinalResult(playerScore, computerScore);
}

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(getRoundResult(playerSelection, computerSelection));
}

function getRoundResult(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        return 'You lose! Paper beats rock!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        return 'You win! Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        return 'You win! Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        return 'You lose! Scissors beat paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return 'You lose! Rock beats scissors!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        return 'You win! Scissors beat paper!'
    } else {
        return 'Tied!'
    }
}

function getFinalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('You won the game!');
    } else if (computerScore > playerScore) {
        console.log('You lost the game! The computer won!');
    } else {
        console.log('It is a tied game!')
    }
}

function getPlayerChoice() {
    return prompt('Rock, paper, or scissors?').toLowerCase();
}

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < .33) {
        return 'rock';
    } else if (randomNumber > .66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}