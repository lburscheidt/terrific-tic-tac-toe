const gameboard = (function () {
  let grid = document.querySelector(".gameboard")
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const newCell = document.createElement("div")
      newCell.classList.add("cell")
      newCell.setAttribute("id", `${i}${j}`)
      newCell.addEventListener("click", function () {
        move(newCell.id)
      })
      grid.appendChild(newCell)
    }
  }
  return grid
})()
let board = gameboard.grid

function createPlayer(name, token) {
  return { name, token }
}
let firstPlayer = createPlayer("Max", "x")
let secondPlayer = createPlayer("Otto", "o")

/*
const gameFlow = (function () {
  let board = gameboard.makeBoard
  let firstPlayer = createPlayer("Max", "<i class='fa-solid fa-x'></i>")
  let secondPlayer = createPlayer("Otto", "<i class='fa-solid fa-o'></i>")
  /*
  let firstPlayer = createPlayer("Max", "x")
  let secondPlayer = createPlayer("Otto", "o")*/
/*console.table(board)

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
})()*/
