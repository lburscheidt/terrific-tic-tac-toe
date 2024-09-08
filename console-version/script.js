//store gameboard as array inside a Gameboard object
const gameboard = (function () {
  let makeBoard = [[]]
  for (let r = 0; r < 3; ++r) {
    makeBoard[r] = []
    for (let c = 0; c < 3; ++c) {
      makeBoard[r][c] = "-"
    }
  }
  return { makeBoard }
})()

function createPlayer(name, token) {
  return { name, token }
}

const gameFlow = (function () {
  let board = gameboard.makeBoard
  let firstPlayer = createPlayer("Max", "x")
  let secondPlayer = createPlayer("Otto", "o")
  console.table(board)

  function hasWon(player) {
    if (
      (board[0][0] === player.token &&
        board[0][1] === player.token &&
        board[0][2] === player.token) ||
      (board[1][0] === player.token &&
        board[1][1] === player.token &&
        board[1][2] === player.token) ||
      (board[2][0] === player.token &&
        board[2][1] === player.token &&
        board[2][2] === player.token) ||
      (board[0][0] === player.token &&
        board[1][0] === player.token &&
        board[2][0] === player.token) ||
      (board[1][0] === player.token &&
        board[1][1] === player.token &&
        board[1][2] === player.token) ||
      (board[2][0] === player.token &&
        board[2][1] === player.token &&
        board[2][2] === player.token) ||
      (board[0][0] === player.token &&
        board[1][1] === player.token &&
        board[2][2] === player.token) ||
      (board[0][2] === player.token &&
        board[1][1] === player.token &&
        board[2][0] === player.token)
    ) {
      return true
    } else {
      return false
    }
  }

  function isTied() {
    if (
      (board[0][1] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][1] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][1] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][1] === firstPlayer.token) ||
      (board[0][1] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[2][1] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][1] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[2][1] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][1] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][1] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[2][1] === firstPlayer.token) ||
      (board[0][2] === firstPlayer.token &&
        board[0][1] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][1] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][1] === firstPlayer.token) ||
      (board[0][1] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[2][0] === firstPlayer.token &&
        board[2][2] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][1] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][0] === firstPlayer.token) ||
      (board[0][0] === firstPlayer.token &&
        board[0][2] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[1][2] === firstPlayer.token &&
        board[2][1] === firstPlayer.token) ||
      (board[0][2] === firstPlayer.token &&
        board[1][0] === firstPlayer.token &&
        board[1][1] === firstPlayer.token &&
        board[2][1] === firstPlayer.token &&
        board[2][2] === firstPlayer.token)
    ) {
      return true
    } else {
      return false
    }
  }

  while (
    hasWon(firstPlayer) === false &&
    hasWon(secondPlayer) === false &&
    isTied() === false
  ) {
    move(firstPlayer)
    if (
      hasWon(firstPlayer) === true ||
      hasWon(secondPlayer === true || isTied() === true)
    ) {
      break
    }
    move(secondPlayer)
    if (
      hasWon(firstPlayer) === true ||
      hasWon(secondPlayer === true || isTied() === true)
    ) {
      break
    }
  }
  function move(player) {
    let moveRow = prompt(`${player.name}, pick a row`)
    let moveColumn = prompt(`${player.name}, pick a column`)
    console.clear()
    board[moveRow][moveColumn] = player.token
    console.table(board)
    if (hasWon(player)) {
      console.log(`${player.name} has won.`)
    }
    if (isTied()) {
      console.log("The game is over. It's a tie.")
    }
  }
})()
