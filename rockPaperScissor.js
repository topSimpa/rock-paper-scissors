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




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const selectionOptions = document.querySelectorAll("button");
    const result = document.querySelector("#result");
    const game = document.createElement("div");
    const body = document.querySelector("body");
    

    body.appendChild(game);

    function playRound(humanChoice, computerChoice) {
        if ((humanScore + computerScore) == 0) //to start a newgame
            game.textContent = "";

        if (computerChoice === "paper") {
            if (humanChoice === "rock") {
                computerScore += 1;
                result.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
                result.style.color = "red";
            } else if (humanChoice === "scissors") {
                humanScore += 1;
                result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
                result.style.color = "green";
            } else 
                result.textContent = "Tie!"  
        } else if (computerChoice === "rock") {
            if (humanChoice === "scissors") {
                computerScore += 1;
                result.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
                result.style.color = "red";
            } else if (humanChoice === "paper") {
                humanScore += 1;
                result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
                result.style.color = "green";
            } else 
                result.textContent = "Tie!"    
        } else {
            if (humanChoice === "paper") {
                computerScore += 1;
                result.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
                result.style.color = "red";
            } else if (humanChoice === "rock") {
                humanScore +=1
                result.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;    
                result.style.color = "green";
            } else
                console.log("Tie");
        }

        //To End a game
        if (humanScore == 5) {
            game.textContent = `You won the game ${humanScore} to ${computerScore}`;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            game.textContent = `Computer wins ${computerScore} to ${humanScore}`
            humanScore = 0;
            computerScore = 0;
        }
    }
    

    selectionOptions.forEach((button) => {
        button.addEventListener('click', () => {           
            playRound(button.id, getComputerChoice());
        });
    
    });

}

playGame();