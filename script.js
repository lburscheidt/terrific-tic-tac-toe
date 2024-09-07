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

function hasWon(token) {
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

/*
function move(token) {
  let board = createGameboard();
  console.table(board);
  let moveRow = prompt('Row');
  let moveColumn = prompt('Column');
  board[moveRow][moveColumn] = token;
  console.table(board);
}


}

/*function createDisplayController() {
  /*if (
      gameboard[moveRow][moveColumn] !== 'o' &&
      gameboard[moveRow][moveColumn] !== 'x'
    ) {
      gameboard[moveRow][moveColumn] = token;
    }
    else{

    }
}
*/ /*

/*move('x');*/
