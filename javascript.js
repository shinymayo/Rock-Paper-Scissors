let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(playerSelection, computerSelection) {
  userScore++;
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  result_p.innerHTML = `${playerSelection}  beats ${computerSelection}. You win!`;
}

function lose(playerSelection, computerSelection) {
  computerScore++;
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
  result_p.innerHTML = `${playerSelection} loses to ${computerSelection}!`;
}

function draw(playerSelection, computerSelection) {
  result_p.innerHTML = `${playerSelection} against ${computerSelection}. It's a draw!`;
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  switch (playerSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scisscorspaper":
      win(playerSelection, computerSelection);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(playerSelection, computerSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(playerSelection, computerSelection);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });
  paper.addEventListener("click", function () {
    game("paper");
  });
  scissors.addEventListener("click", function () {
    game("scissors");
  });
}
main();
