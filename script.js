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

console.table(gameboard.makeBoard);

/*
function move(token) {
  let board = createGameboard();
  console.table(board);
  let moveRow = prompt('Row');
  let moveColumn = prompt('Column');
  board[moveRow][moveColumn] = token;
  console.table(board);
}

function createPlayer(name, token) {
  return { name, token };
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
createPlayer('Max', 'x');
createPlayer('Otto', 'o');
/*move('x');*/
