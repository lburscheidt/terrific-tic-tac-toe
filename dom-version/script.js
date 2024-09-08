//create game board
const gameboard = (function () {
  let makeBoard = document.querySelector(".gameboard")
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const newCell = document.createElement("div")
      newCell.classList.add("cell")
      newCell.setAttribute("id", `${i}${j}`)
      newCell.addEventListener("click", function () {
        move(newCell.id)
      })

      makeBoard.appendChild(newCell)
    }
  }
  return { makeBoard }
})()

//create players
function createPlayer(name, token) {
  return { name, token }
}
let firstPlayer = createPlayer("Max", "<i class='fa-solid fa-x fa-10x'></i>")
let secondPlayer = createPlayer("Otto", "<i class='fa-solid fa-o fa-10x'></i>")
let currentPlayer = firstPlayer
//game flow

function hasWon(currentPlayer) {
  if (document.getElementById("00").innerHTML === currentPlayer.token) {
    return true
  } else {
    return false
  }
}

function isTied() {
  if (document.getElementById("01").innerHTML === secondPlayer.token) {
    return true
  } else {
    return false
  }
}

function move(cellId) {
  while (hasWon(firstPlayer) === false && hasWon(secondPlayer) === false) {
    let cell = document.getElementById(cellId)
    cell.innerHTML = currentPlayer.token
    if (hasWon(firstPlayer) || hasWon(secondPlayer)) {
      if (hasWon(firstPlayer)) {
        console.log(`${firstPlayer.name} has won`)
      } else if (hasWon(secondPlayer)) {
        console.log(`${secondPlayer.name} has won`)
        break
      }
      if (currentPlayer === firstPlayer) {
        currentPlayer = secondPlayer
        break
      } else if (currentPlayer === secondPlayer) {
        currentPlayer = firstPlayer
        break
      }
    }
  }
}
