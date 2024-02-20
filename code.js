
let choice = ["rock", "paper", "scissors"];
function getComputerChoice() 
  {
    return choice[Math.floor(Math.random())] //randomly lets computer generate a choice
  }


  function playRound(playerSelection, computerSelection)
  {
    console.log(playRound(playerSelection, computerSelection))
    // code here // scissors beats paper, paper beats rock, rock beats scissors
    
    // Get the user prompt
    // Ai gets the user prompt and randomly picks 1/3 variables
    // if ai picks the same choice say draw
    if (playerSelection === computerSelection) // Displays player & computer choices and decides who wins. 
    {
      return `it's a tie! $[playerSelection]`; 
    }
    // if one picks rock and other picks scissors, rock wins
    else if (playerSelection === "rock" && computerSelection === "scissors")
    {
      return `You win! ${playerSelection} beats ${computerSelection}`; // Rock beats scissors
    }
    // if one picks scissors and the other picks paper, scissors wins
    else if (playerSelection === "scissors" && computerSelection === "paper")
    {
      return `You win! ${playerSelection} beats ${computerSelection}`; // Scissors beats paper
    }
    // if one picks paper and the other picks rock, paper wins
    else if (playerSelection === "paper" && computerSelection === "rock")
    {
      return `You win! ${playerSelection} beats ${computerSelection}`; // Paper beats rock
    }
    else
    {
      return `You lose! ${computerSelection} beats ${playerSelection}`; // Player loses
    }
  }
  const playerSelection = prompt("rock, paper, or scissors?").toUpperCase;
  const computerSelection = getComputerChoice(choice);
  

