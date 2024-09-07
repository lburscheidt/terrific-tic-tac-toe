/*function createGameboard() {
  var num = '123456789';
  var row = 3; // Known at run time
  var col = 3; // Known at run time
  var i = 0;


    }
  }*/
let i = 0;
let num = '123456789';
let gameboard = [[]];
for (let r = 0; r < 3; ++r) {
  gameboard[r] = [];
  for (let c = 0; c < 3; ++c) {
    gameboard[r][c] = num[i++];
  }
}

console.table(gameboard);

function move(token) {
  let moveRow = prompt('Row');
  let moveColumn = prompt('Column');
  gameboard[moveRow][moveColumn] = token;
  console.table(gameboard);
}

move('x');

function createPlayer() {}

function createDisplayController() {
  /*if (
      gameboard[moveRow][moveColumn] !== 'o' &&
      gameboard[moveRow][moveColumn] !== 'x'
    ) {
      gameboard[moveRow][moveColumn] = token;
    }
    else{

    }*/
}
