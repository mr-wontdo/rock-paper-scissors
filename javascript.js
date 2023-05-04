function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    console.log(getRoundResult(playerSelection, computerSelection));
}

function getRoundResult(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper!"
    } else {
        return "Tied!"
    }
}

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < .33) {
        return "rock";
    } else if (randomNumber > .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Prompt the player to input 'rock', 'paper', or 'scissors'
// Convert the input to lower case and assign to variable playerSelection

// Invoke a function to randomly return 'rock', 'paper', 'scissors', and assign the value to variable computerSelection
//   Invoke a random number generator for a number between 0 and 1
//       If the number is less than .33, return 'rock'
//       Else if the number is greater than .66, return 'paper'
//       Else return 'scissors'

// If playerSelection is 'rock' and computerSelection is 'paper', declare that the computer won.
// Else if playerSelection is 'rock' and computerSelection is 'scissors', declare that the player won.

// Else if playerSelection is 'paper' and computerSelection is 'rock', declare that the player won.
// Else if playerSelection is 'paper' and computerSelection is 'scissors', declare that the computer won.

// Else if playerSelection is 'scissors' and computerSelection is 'rock', declare that the computer won.
// Else if playerSelection is 'scissors' and computerSelection is 'paper', declare that the player won.

// Else return that the game is tied.