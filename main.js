let playerScore = 0;
let computerScore = 0;

updateScores();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    let btnId = button.getAttribute("id");

    if (['rock', 'paper', 'scissors'].includes(btnId)) {
        button.addEventListener("click",
            () => {
                let playersChoice = formatPlayersChoice(btnId);
                let computersChoice = getComputerChoice()
                let result = playRound(playersChoice, computersChoice);

                switch (result) {
                    case -1:
                        setCommentText(getLoserMsg(computersChoice, playersChoice));
                        break;
                    case 0:
                        setCommentText(getTieMsg());
                        break;
                    case 1:
                        setCommentText(getWinnerMsg());
                        break;
                }

                if (result !== 0) {
                    updateScores();
                }

                if (playerScore == 5 || computerScore == 5) {
                    disableButtons();
                    addResetButton();

                    let finishText = playerScore > computerScore ?
                        'Congratulations! You have won!' :
                        'Game Over! You have lost!';

                    setCommentText(finishText);
                }
            })
    }
})

function disableButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.disabled = false;
    });
}

function addResetButton() {
    const resetBtn = document.createElement("button");

    resetBtn.textContent = 'RESET';

    resetBtn.addEventListener("click", () => {

        playerScore = 0;
        computerScore = 0;
        updateScores();

        setCommentText('');

        enableButtons();

        resetBtn.remove();
    })

    document.querySelector("body").appendChild(resetBtn);
}

function setCommentText(commentText) {
    const commentDiv = document.querySelector('.comment');
    commentDiv.textContent = commentText;
}

function updateScores() {
    const scoresDiv = document.querySelector('.scores');
    scoresDiv.textContent = getScores();
}

function getComputerChoice() {
    let randomNum = Math.random();

    if (randomNum < 0.33) {
        return 'Rock'
    } else if (randomNum < 0.66) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playersChoice, computersChoice) {

    playersChoice = formatPlayersChoice(playersChoice);

    if (playersChoice == computersChoice) {
        return 0;
    }

    if (playersChoice == 'Rock') {
        if (computersChoice == 'Paper') {
            computerScore++;
            return -1;
        } else {
            playerScore++
            return 1;
        }
    }

    if (playersChoice == 'Paper') {
        if (computersChoice == 'Rock') {
            playerScore++;
            return 1;
        } else {
            computerScore++;
            return -1;
        }
    }

    if (playersChoice == 'Scissors') {
        if (computersChoice == 'Rock') {
            computerScore++;
            return -1;
        }
        else {
            playerScore++;
            return 1;
        }
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let choice;
    let result;


    for (let i = 0; i < 5; i++) {
        choice = prompt('Choose wisly! (Rock, Paper, Scissors)');

        result = playRound(choice, getComputerChoice());

        if (result.startsWith('You Win')) {
            playerScore++;
        }

        if (result.startsWith('You Lose')) {
            computerScore++;
        }

        console.log(result + ' ' + getScores());
    }

}

function getLoserMsg(computersChoice, playersChoice) {
    return `You Lose! ${computersChoice} beats ${playersChoice}`
}
function getWinnerMsg() { return 'You Win!'; }
function getTieMsg() { return "It's a Tie!"; }
function formatPlayersChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}
function getScores() {
    return `You: ${playerScore} vs. Computer: ${computerScore}`
}
