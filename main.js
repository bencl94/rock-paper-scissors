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
            getLoserMsg();
        }
    }

    if (playersChoice == 'Scissors') {
        if (computersChoice == 'Rock') {
            return getLoserMsg();
        }
        else {
            getWinnerMsg();
        }
    }
}