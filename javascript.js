//To get computer's choice
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    console.log(choices[Math.floor(Math.random() * choices.length)]);
};
//Check winner
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
//The rock-paper-scissor game
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return("You are the winner!");
    } else {
        return("You lose!");
    }
}
//Gets player's choice
function getPlayerChoice() {
    let validatedInput = "";
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
//function to play the game in 5 rounds
function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        } else if(checkWinner(playerSelection, computerSelection) == "Computer") {
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
// Function to play the game one more time
const play = document.querySelector("#play");
play.addEventListener("click", asking);

function asking() {
  game();
}

game();
// create 3 buttons for each selection
// addEventListener to btns that call playRound with playerSelection



// const btnRock = document.querySelector(".btn-rock");
// btnRock.addEventListener("click", () => {
//     console.log("rock is chosen");
//     playRound();
// });
// const btnPaper = document.querySelector(".btn-paper");
// btnPaper.addEventListener("click", () => {
//     console.log("paper is chosen");
//     playRound();
// });
// const btnScissors = document.querySelector(".btn-scissors");
// btnScissors.addEventListener("click", () => {
//     console.log("scissors are chosen");
//     playRound();
// });
