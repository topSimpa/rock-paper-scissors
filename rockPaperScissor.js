console.log("Hello World")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice);
    
    if (computerChoice === 0)
        return "rock";
    else if (computerChoice === 1)
        return "paper";
    else if (computerChoice === 2)
        return "scissors";

}


function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase()
    // console.log(humanChoice);
    return humanChoice;
}

getHumanChoice()

function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                computerScore += 1;
                console.log( `You loose! ${computerChoice} beats ${humanChoice}`);
            } else if (humanChoice === "scissors") {
                humanScore += 1;
                console.log( `You Win! ${humanChoice} beats ${computerChoice}`);
            } else 
                console.log("Tie")   
        } else if (computerChoice === "rock") {
            if (humanChoice === "scissors") {
                computerScore += 1;
                console.log( `You loose! ${computerChoice} beats ${humanChoice}`);
            } else if (humanChoice === "paper") {
                humanScore += 1;
                console.log( `You Win! ${humanChoice} beats ${computerChoice}`);
            } else 
                console.log("Tie")     
        } else {
            if (humanChoice === "paper") {
                computerScore += 1;
                console.log( `You loose! ${computerChoice} beats ${humanChoice}`);
            } else if (humanChoice === "rock") {
                humanScore +=1
                console.log( `You Win! ${humanChoice} beats ${computerChoice}`);    
            } else
                console.log("Tie");
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore)
        console.log("Champion! You Won!");
    else 
        console.log("Game lost! Computer Won")
}

playGame();