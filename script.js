const gameboard = (function () {
  let makeBoard = [[]];
  for (let r = 0; r < 3; ++r) {
    makeBoard[r] = [];
    for (let c = 0; c < 3; ++c) {
      makeBoard[r][c] = '0';
    }
  }
  return { makeBoard };
})();
let board = gameboard.makeBoard;
console.table(board);

function createPlayer(name, token) {
  return { name, token };
}

let firstPlayer = createPlayer('Max', 'x');
let secondPlayer = createPlayer('Otto', 'o');
console.log(firstPlayer);
console.log(firstPlayer.token);

function move(player) {
  let board = gameboard.makeBoard;
  let moveRow = prompt(`${player.name}, pick a row`);
  let moveColumn = prompt(`${player.name}, pick a column`);
  board[moveRow][moveColumn] = player.token;
  console.table(board);
  console.log(board[moveRow][moveColumn]);
}

function hasWon(player) {
  let token = player.token;
  console.table(board);
  if (
    (board[0][0] === token && board[0][1] === token && board[0][2] === token) ||
    (board[1][0] === token && board[1][1] === token && board[1][2] === token) ||
    (board[2][0] === token && board[2][1] === token && board[2][2] === token) ||
    (board[0][0] === token && board[1][0] === token && board[2][0] === token) ||
    (board[1][0] === token && board[1][1] === token && board[1][2] === token) ||
    (board[2][0] === token && board[2][1] === token && board[2][2] === token) ||
    (board[0][0] === token && board[1][1] === token && board[2][2] === token) ||
    (board[0][2] === token && board[1][1] === token && board[2][0] === token)
  ) {
    return true;
  } else {
    return false;
  }
}

function displayController() {
  while (hasWon(firstPlayer) === false && hasWon(secondPlayer) === false);
  move(firstPlayer);
  move(secondPlayer);
}

displayController();
