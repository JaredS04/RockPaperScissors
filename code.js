console.log(computerScore,playerScore)

let choice = ["rock", "paper", "scissors"];
function getComputerChoice() 
  {
    return choice[Math.floor(Math.random() * choice.length)] //randomly lets computer generate a choice
  }

  //score
  var computerScore = 0;
  var playerScore = 0;

function round (playerSelection, computerSelection)
{
  console.log (playerSelection, computerSelection);

  if (playerSelection === computerSelection)
  {
    return `it's a tie you both picked ${playerSelection}`; // tie
  }
  else if (playerSelection == "rock" && computerSelection == "scissors") //rock beats scissors
  {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else if (playerSelection === "paper" && computerSelection=== "rock"){ //paper beats rock
    playerScore ++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }

  else if (playerSelection === "scissors" && computerSelection=== "paper"){ // scissors beats paper
   playerScore ++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }

  else {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`; // you lose
  }

}


  const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  const computerSelection = getComputerChoice(choice);

  //shows what was passed
  console.log(round(playerSelection,computerSelection));

  while (computerScore<4 && playerScore<4)
  {
    for (let i = 0; i < 10; i++) {
      const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
      const computerSelection = getComputerChoice(choice);
      //call round func
      console.log(round(playerSelection, computerSelection));
      console.log(playerScore, computerScore)
      
    }
  }
  
round()

console.log(computerScore, playerScore)
