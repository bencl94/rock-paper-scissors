const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    if (button.getAttribute("id") === 'rock') {
        button.addEventListener("click", callPlayRoundWithRock)
    }

    if (button.getAttribute("id") === 'paper') {
        button.addEventListener("click", callPlayRoundWithPaper)
    }

    if (button.getAttribute("id") === 'scissors') {
        button.addEventListener("click", callPlayRoundWithScissors)
    }
})

function callPlayRoundWithRock() {
    console.log(playRound('Rock', getComputerChoice()));
}

function callPlayRoundWithPaper() {
    console.log(playRound('Paper', getComputerChoice()));
}

function callPlayRoundWithScissors() {
    console.log(playRound('Scissors', getComputerChoice()));
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
    function getLoserMsg() {
        return `You Lose! ${computersChoice} beats ${playersChoice}`
    }
    function getWinnerMsg() { return 'You Win!'; }
    function getTieMsg() { return "It's a Tie!"; }
    function formatPlayersChoice(choice) {
        return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    }

    if (!playersChoice) {
        return 'Choose to play';
    }

    playersChoice = formatPlayersChoice(playersChoice);

    if (playersChoice == computersChoice) {
        return getTieMsg();
    }

    if (playersChoice == 'Rock') {
        if (computersChoice == 'Paper') {
            return getLoserMsg();
        } else {
            return getWinnerMsg();
        }
    }

    if (playersChoice == 'Paper') {
        if (computersChoice == 'Rock') {
            return getWinnerMsg();
        } else {
            return getLoserMsg();
        }
    }

    if (playersChoice == 'Scissors') {
        if (computersChoice == 'Rock') {
            return getLoserMsg();
        }
        else {
            return getWinnerMsg();
        }
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let choice;
    let result;

    function getScores() {
        return `You: ${playerScore} vs. Computer: ${computerScore}`
    }

    for (let i = 0; i < 5; i++) {
        choice = prompt('Choose wisly! (Rock, Paper, Scissors)');

        result = playRound(choice, getComputerChoice());
        // console.log(result);

        if (result.startsWith('You Win')) {
            playerScore++;
        }

        if (result.startsWith('You Lose')) {
            computerScore++;
        }

        console.log(result + ' ' + getScores());
    }

    if (playerScore > computerScore) {
        console.log('Game Over! You have won! ' + getScores());
    } else {
        console.log('Game Over! You have lost! ' + getScores());
    }
}