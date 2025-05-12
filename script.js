function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
};

const playerChoice = prompt("Enter your choice: 0 rock 1 paper 2 scissors")

function playRound(playerSelection, computerSelection) {
    if (playerChoice === computerChoice){
        return "tie";
    } else if (playerChoice === 0 && computerChoice == 1) {
        return "lose, paper kill rok"
    } else if (playerChoice == 0 && computerChoice ==2) {
        return "win, rock crush scissors"   
    } else if (playerChoice == 1 && computerChoice == 0) {
        return "win, paper kill rock"
    }
    else if (playerChoice == 1 && computerChoice == 2) {
        return "lose, scissors cut paper"
    } else if (playerChoice == 2 && computerChoice == 0) {
        return "lose, rock crush scissors"
    } else if (playerChoice == 2 && computerChoice == 1) {
        return "win, scissors cut paper"
    }
}

let computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));