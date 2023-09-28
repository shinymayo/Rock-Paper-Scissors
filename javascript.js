let choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  console.log(choice[Math.floor(Math.random() * choice.length)]);
}
getComputerChoice();

function playerSelect() {
    let selection = prompt("Rock, paper, scissors - what do you choose?");
    return selection;
}
