// var src = document.getElementsByClassName("cell");
let board = ["", "", "", "", "", "", "", "", ""];
// let players = ["X", "O"];
let currentPlayer = "X"; //players[0];
let gameActive = true;

const statusDisplay = document.querySelector(".game--status");
const winMsg = () => `${currentPlayer} wins!`;
const tieMsg = () => `No one wins!`;
const currentPlayerTurn = () => `${currentPlayer}'s turn!`;
statusDisplay.innerHTML = currentPlayerTurn();

// function img1() {
//   document.getElementsByClassName("cell").src = "radiant_ancient.png";
// }
// function img2() {
//   document.getElementsByClassName("cell").src = "dire_ancient.png";
// }
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Horizon-tal(__)
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Vertical( | )
  [0, 4, 8],
  [2, 4, 6], // Diagonal
];

function nextTurn() {
  // Ternary Operator(shortcut to if statement) ':' is else [(if)?[true(else):false]]
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleClickedCell(clickedCell, clickedCellIndex) {
  board[clickedCellIndex] = currentPlayer;
  if (currentPlayer === "X") {
    clickedCell.innerHTML = '<img src="Dire_logo.png"/>';
  } else {
    clickedCell.innerHTML = '<img src="Radiant_logo.png"/>';
  }
}

function onclickCell(clickedCellEvent) {
  console.log(clickedCellEvent);

  const clickedCell = clickedCellEvent.target;
  console.log(clickedCell);
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));
  console.log(clickedCell.getAttribute("data-cell-index"));
  if (board[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  handleClickedCell(clickedCell, clickedCellIndex);
  checkWinner();
}

function checkWinner() {
  let finish = false;
  for (let i = 0; i < 8; i++) {
    const winner = win[i];
    let a = board[winner[0]];
    let b = board[winner[1]];
    let c = board[winner[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      finish = true;
      break;
    }
  }
  if (finish) {
    statusDisplay.innerHTML = winMsg();
    gameActive = false;
    return;
  }
  let tie = !board.includes("");
  if (tie) {
    statusDisplay.innerHTML = tieMsg();
    gameActive = false;
    return;
  }

  nextTurn();
}

function restart() {
  gameActive = true;
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

document.querySelectorAll(".cell").forEach((cell) => cell.addEventListener("click", onclickCell));
document.querySelector(".game--restart").addEventListener("click", restart);
