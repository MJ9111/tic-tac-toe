
let board = ['','','','','','','','',''];
let turn = 'X';
let winner = false;
let tie = false;


const squareEls = document.querySelectorAll('.cell');
const messageEl = document.getElementById('status');
const resetBtnEl = document.getElementById('resetBtn');


function init() {
  console.log('Game initialized!');
  board = new Array(9).fill('');
  turn = 'X';
  winner = false;
  tie = false;
  render();
}

init();


function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  squareEls.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}


function updateMessage() {
  if (winner) {
    messageEl.textContent = `Player ${turn === 'X'? 'O' : 'X'} wins!`;
  } else if (tie) {
    messageEl.textContent = 'It\'s a tie!';
  } else {
    messageEl.textContent = `Player ${turn}'s turn`;
  }
}


const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function handleClick(event) {
  const squareIndex = parseInt(event.target.getAttribute('data-cell'));
  if (board[squareIndex]!== '' || winner) return;
  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

squareEls.forEach((cell) => {
  cell.addEventListener('click', handleClick);
});

function placePiece(index) {
  board[index] = turn;
  console.log(board);
}

function checkForWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    if (board[combo[0]] === turn && board[combo[1]] === turn && board[combo[2]] === turn) {
      winner = true;
      console.log(`Player ${turn} wins!`);
      return;
    }
  }
}

function checkForTie() {
  if (winner) return;
  if (!board.includes('')) {
    tie = true;
    console.log('It\'s a tie!');
  }
}

function switchPlayerTurn() {
  if (winner) return;
  turn = turn === 'X'? 'O' : 'X';
  console.log(`Player ${turn}'s turn`);
}


resetBtnEl.addEventListener('click', init);