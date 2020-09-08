let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

document.querySelectorAll('.box').forEach(box => box.addEventListener('click', handleBoxClick));

function handleBoxClick(click) {
    const clickedBox = click.target;

    const boxIndex = parseInt(clickedBox.getAttribute('box-index'));

    if(gameState[boxIndex] !== "" || !gameActive){
        return;
    }

    gameState[boxIndex] = currentPlayer;
    clickedBox.textContent = currentPlayer;
}