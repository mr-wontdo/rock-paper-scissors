// Prompt the user to input rock, paper, scissors
// Convert the input to lower case and assign to variable userInput
// Invoke a random number generator for a number between 0 and 1.
// If the number is less than .33, then assign a 




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

