let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
const whoTurn = document.querySelector('.who-turn')
whoTurn.textContent = `${currentPlayer} turn to play!`

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', handleBoxClick));
document.querySelector('.restart-game').addEventListener('click',restartGame);

function handleBoxClick(click) {
    const clickedBox = click.target;

    const boxIndex = parseInt(clickedBox.getAttribute('box-index'));

    if(gameState[boxIndex] !== "" || !gameActive){
        return;
    }

    gameState[boxIndex] = currentPlayer;
    clickedBox.textContent = currentPlayer;
    winnerCheck();
}

function playerChange() {
    if(currentPlayer === "X"){
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    whoTurn.textContent = `${currentPlayer} turn to play!`
}

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

console.log(winConditions[0])

function winnerCheck() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        whoTurn.textContent = `${currentPlayer} has won the round!`
        gameActive = false;
        return;
    } else {
        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            whoTurn.textContent = `It's a tie! Please restart the game`
            gameActive = false;
            return;
        } else {
            playerChange();
        }
    }
}

function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    whoTurn.textContent=`${currentPlayer} turn to play!`;
    document.querySelectorAll('.box').forEach(box=>box.textContent="");
}