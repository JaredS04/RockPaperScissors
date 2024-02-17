var rock = "rock";
var paper = "paper";
var scissors = "scissors";

function getComputerChoice() 
  {
  return rock, paper, scissors;
  }

function playGame()
{
  function playRound(playerSelection, computerSelection)
  {
    // code here // scissors beats paper, paper beats rock, rock beats scissors
    
    // Get the user prompt
    let msg = prompt("pick rock, paper or scissors")
    // if the user prompt is rock and the computer is paper then the computer wins
    // if the user prompt is sciccors and the computer is paper then user wins
    // if the user prompt is rock and the computer is scissors then user wins
  }

}

const playerSelection = rock;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))