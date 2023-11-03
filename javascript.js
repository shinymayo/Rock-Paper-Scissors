//Function to get computer's choice
const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
};
//check winner
function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock")) {
        return "Player";
    } else {
        return "Computer";
    }
}
//play a round of game
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection};`
    }
}
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock, paper or scissors?");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        } else if(checkWinner(playerSelection, computerSelection)) {
            scoreComputer++;
        }
    }
    console.log("GAME FINISHED");
    if(scorePlayer > scoreComputer) {
        console.log("Player is the winner");
    } else {
        console.log("Computer has won!");
    }
}
game();
// selecting buttons
// const btnRock = document.querySelector(".btn-rock");
// btnRock.addEventListener("click", () => {
//     console.log("rock is chosen");
// });
// const btnPaper = document.querySelector(".btn-paper");
// btnPaper.addEventListener("click", () => {
//     console.log("paper is chosen");
// });
// const btnScissors = document.querySelector(".btn-scissors");
// btnScissors.addEventListener("click", () => {
//     console.log("scissors are chosen");
// });
