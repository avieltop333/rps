function getComputerChoice () {
    return Math.floor(Math.random() * 3);
};

let playerChoice = 99;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "tie";
    } else if (playerSelection === 0 && computerSelection == 1) {
        return "lose, paper kill rok"
    } else if (playerSelection == 0 && computerSelection ==2) {
        return "win, rock crush scissors"   
    } else if (playerSelection == 1 && computerSelection == 0) {
        return "win, paper kill rock"
    }
    else if (playerSelection == 1 && computerSelection == 2) {
        return "lose, scissors cut paper"
    } else if (playerSelection == 2 && computerSelection == 0) {
        return "lose, rock crush scissors"
    } else if (playerSelection == 2 && computerSelection == 1) {
        return "win, scissors cut paper"
    }
}


let buttons = document.querySelectorAll("button")

let optionsDiv = document.querySelector(".option");

let result = document.createElement("div");

buttons.forEach((button) => {
    button.addEventListener("click", () =>{
        const playerSelection = button.textContent;
        let computerChoice = getComputerChoice();

        switch (playerSelection) {
            case "rock":
                playerChoice = 0;
                console.log(playRound(playerChoice, computerChoice));
                result.textContent = playRound(playerChoice, computerChoice);
                optionsDiv.appendChild(result);
                break;
            case "paper":
                playerChoice = 1;
                console.log(playRound(playerChoice, computerChoice));
                playRound(playerChoice, computerChoice)
                                result.textContent = playRound(playerChoice, computerChoice);
                optionsDiv.appendChild(result);
                break;
            case "scissors":
                playerChoice = 2;
                console.log(playRound(playerChoice, computerChoice));
                playRound(playerChoice, computerChoice)
                                result.textContent = playRound(playerChoice, computerChoice);
                optionsDiv.appendChild(result);
                break;
            default:
                console.log("Invalid choice");
                break;
        }
    })
})
