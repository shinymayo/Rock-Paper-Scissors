//Function to get computer's choice
let choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
  console.log(choice[Math.floor(Math.random() * choice.length)]);
}
getComputerChoice();
//Function to get player's choice.
function playerSelection() {
    let selection = prompt("Rock, paper, scissors - what do you choose?");
    return `You chose ${selection}`;
}
//setting up variable for the gameRound function
const computer = getComputerChoice();
const player = playerSelection();
