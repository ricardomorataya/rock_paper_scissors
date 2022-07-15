const computerPlay = ["Rock", "Paper", "Scissors"];
 
const computerSelection = computerPlay[Math.floor(Math.random() * computerPlay.length)];

console.log(computerSelection);

//End of Computer Part


//Player Selection

const playerSelection = "rock";

console.log(playerSelection);

//End of Player Selecction



     if(playerSelection = computerSelection) {
        result = "It is a draw";
     }
     else {
        result = "At least it's working...";
     }
console.log(result)
