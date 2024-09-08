let currentPlayer = ""

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

function createPlayer(name, token) {
  return { name, token }
}

let firstPlayer = createPlayer("Max", "<i class='fa-solid fa-x fa-10x'></i>")
let secondPlayer = createPlayer("Otto", "<i class='fa-solid fa-o fa-10x'></i>")

function move(cellid) {
  if (currentPlayer === "") {
    currentPlayer = firstPlayer
  }
  let cell = document.getElementById(cellid)
  console.log(cell.id)
  cell.innerHTML = currentPlayer.token
  if (currentPlayer === firstPlayer) {
    currentPlayer = secondPlayer
  } else if (currentPlayer === secondPlayer) {
    currentPlayer = firstPlayer
  }
}
/*  if (currentPlayer === "") {
    currentPlayer = firstPlayer
  }
  let cell = document.getElementById(cellid)
 
  cell.innerHTML = currentPlayer.token
  if (currentPlayer === firstPlayer) {
    currentPlayer = secondPlayer
  } else if (currentPlayer === secondPlayer) {
    currentPlayer = firstPlayer
  }
}

let board = gameboard.grid
move()
/*const gameFlow = (function () {
  let board = gameboard.grid

  function hasWon(player) {
   if (
      (cell.id="00".innerHTML === player.token &&
        cell.id="01".innerHTML === player.token &&
        cell.id="02".innerHTML === player.token) ||
      (cell.id="10".innerHTML === player.token &&
        cell.id="11".innerHTML === player.token &&
        cell.id="12".innerHTML === player.token) ||
      (cell.id="20".innerHTML === player.token &&
        cell.id="21".innerHTML === player.token &&
        cell.id="22".innerHTML === player.token) ||
      (cell.id="00".innerHTML === player.token &&
        cell.id="10".innerHTML === player.token &&
        cell.id="20".innerHTML === player.token) ||
      (cell.id="10".innerHTML === player.token &&
        cell.id="11".innerHTML === player.token &&
        cell.id="12".innerHTML === player.token) ||
      (cell.id="20".innerHTML === player.token &&
        cell.id="21".innerHTML === player.token &&
        cell.id="22".innerHTML === player.token) ||
      (cell.id="00".innerHTML === player.token &&
        cell.id="11".innerHTML === player.token &&
        cell.id="22".innerHTML === player.token) ||
      (cell.id="02".innerHTML === player.token &&
        cell.id="11".innerHTML === player.token &&
        cell.id="20".innerHTML === player.token)
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
