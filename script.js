function createGameboard() {
  var num = '123456789';
  var row = 3; // Known at run time
  var col = 3; // Known at run time
  var i = 0;

  var array2D = [[]];
  for (var r = 0; r < row; ++r) {
    array2D[r] = [];
    for (var c = 0; c < col; ++c) {
      array2D[r][c] = num[i++];
    }
  }
  console.log(array2D);
}
createGameboard();

function createPlayer() {}

function createDisplayController() {}
