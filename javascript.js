let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  console.log(choice[Math.floor(Math.random() * choice.length)]);
}
getComputerChoice();

function playerSelect() {
    let selection = prompt("Rock, paper, scissors - what do you choose?");
    return selection;
}

const one = "paper" > "rock";
const two = "rock" > "scissors";
const three = "scissors" > "paper";

function test() {
    if ( choice > selection ) {
        alert("You lose!");
    } else {
        alert("You win!");
    }
}