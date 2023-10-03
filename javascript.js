//Function to get computer's choice
let choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
  console.log(choice[Math.floor(Math.random() * choice.length)]);
}
//Function to get player's choice.
function playerSelection() {
    let selection = prompt("Rock, paper, scissors - what do you choose?");
    console.log(`You chose ${selection}`);
}
//setting up variable for the gameRound function
const computer = getComputerChoice();
const player = playerSelection();

function gameRound(computer, player) {
    if (player == "rock" && computer == "paper") {
        return ("You lose! Paper beats rock!");
    } else if (player == "paper" && computer == "rock") {
        return ("You win! Paper beats rock!");
    } else if (player == "rock" && computer == "scissors") {
        return ("You win! Rock beats scissors!");
    } else if (player == "scissors" && computer == "rock") {
        return ("You lose! Rock beats scissors");
    } else if (player == "paper" && computer == "scissors") {
        return ("You lose! Scissors beat paper");
    } else if (player == "scissors" && computer == "paper") {
        return ("You win! Scissors beat paper");
    } else if (player == "rock" && computer == "rock") {
        return ("It's a tie!");
    } else if (player == "paper" && computer == "paper") {
        return ("It's a tie. Oh well...");
    } else if (player == "scissors" && computer == "scissors") {
        return ("It's a tie! Try again");
    }
}