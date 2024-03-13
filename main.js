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