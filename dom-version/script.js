const tictactoe = (function () {
  const gameboard = (function () {
    let makeBoard = document.querySelector(".gameboard")
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const newCell = document.createElement("button")
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
  let _1 = document.getElementById("00")
  let _2 = document.getElementById("01")
  let _3 = document.getElementById("02")
  let _4 = document.getElementById("10")
  let _5 = document.getElementById("11")
  let _6 = document.getElementById("12")
  let _7 = document.getElementById("20")
  let _8 = document.getElementById("21")
  let _9 = document.getElementById("22")

  function createPlayer(name, token) {
    return { name, token }
  }

  function hasWon(player) {
    let t = player.token
    if (
      (_1.innerHTML === player.token &&
        _2.innerHTML === player.token &&
        _3.innerHTML === player.token) ||
      (_4.innerHTML === t && _5.innerHTML === t && _6.innerHTML === t) ||
      (_7.innerHTML === t && _8.innerHTML === t && _9.innerHTML === t) ||
      (_1.innerHTML === t && _4.innerHTML === t && _7.innerHTML === t) ||
      (_2.innerHTML === t && _5.innerHTML === t && _8.innerHTML === t) ||
      (_3.innerHTML === t && _6.innerHTML === t && _9.innerHTML === t) ||
      (_1.innerHTML === t && _5.innerHTML === t && _9.innerHTML === t) ||
      (_3.innerHTML === t && _5.innerHTML === t && _7.innerHTML === t)
    ) {
      return true
    } else {
      return false
    }
  }
  function isTied() {
    let t = firstPlayer.token
    if (
      (_2.innerHTML === t &&
        _4.innerHTML === t &&
        _6.innerHTML === t &&
        _7.innerHTML === t &&
        _9.innerHTML === t) ||
      (_1.innerHTML === t &&
        _2.innerHTML === t &&
        _6.innerHTML === t &&
        _7.innerHTML === t &&
        _8.innerHTML === t) ||
      (_1.innerHTML === t &&
        _3.innerHTML === t &&
        _4.innerHTML === t &&
        _6.innerHTML === t &&
        _8.innerHTML === t) ||
      (_2.innerHTML === t &&
        _3.innerHTML === t &&
        _4.innerHTML === t &&
        _8.innerHTML === t &&
        _9.innerHTML === t) ||
      (_1.innerHTML === t &&
        _3.innerHTML === t &&
        _6.innerHTML === t &&
        _7.innerHTML === t &&
        _8.innerHTML === t) ||
      (_1.innerHTML === t &&
        _3.innerHTML === t &&
        _4.innerHTML === t &&
        _8.innerHTML === t &&
        _9.innerHTML === t) ||
      (_2.innerHTML === t &&
        _3.innerHTML === t &&
        _4.innerHTML === t &&
        _7.innerHTML === t &&
        _9.innerHTML === t) ||
      (_1.innerHTML === t &&
        _2.innerHTML === t &&
        _6.innerHTML === t &&
        _7.innerHTML === t &&
        _9.innerHTML === t) ||
      (_1.innerHTML === t &&
        _3.innerHTML === t &&
        _4.innerHTML === t &&
        _5.innerHTML === t &&
        _8.innerHTML === t) ||
      (_2.innerHTML === t &&
        _3.innerHTML === t &&
        _4.innerHTML === t &&
        _5.innerHTML === t &&
        _9.innerHTML === t) ||
      (_2.innerHTML === t &&
        _4.innerHTML === t &&
        _5.innerHTML === t &&
        _7.innerHTML === t &&
        _9.innerHTML === t) ||
      (_1.innerHTML === t &&
        _5.innerHTML === t &&
        _6.innerHTML === t &&
        _7.innerHTML === t &&
        _8.innerHTML === t) ||
      (_2.innerHTML === t &&
        _4.innerHTML === t &&
        _5.innerHTML === t &&
        _7.innerHTML === t &&
        _9.innerHTML === t) ||
      (_1.innerHTML === t &&
        _2.innerHTML === t &&
        _5.innerHTML === t &&
        _6.innerHTML === t &&
        _8.innerHTML === t) ||
      (_1.innerHTML === t &&
        _3.innerHTML === t &&
        _5.innerHTML === t &&
        _6.innerHTML === t &&
        _8.innerHTML === t) ||
      (_3.innerHTML === t &&
        _4.innerHTML === t &&
        _5.innerHTML === t &&
        _8.innerHTML === t &&
        _9.innerHTML === t)
    ) {
      return true
    } else {
      return false
    }
  }

  function move(cellId) {
    let cell = document.getElementById(cellId)
    while (
      hasWon(firstPlayer) === false &&
      hasWon(secondPlayer) == false &&
      isTied() === false
    ) {
      cell.innerHTML = currentPlayer.token
      cell.removeEventListener("click", function () {
        move(cell.id)
      })
      cell.disabled = true
      console.log(cell.innerHTML)
      if (currentPlayer === firstPlayer) {
        currentPlayer = secondPlayer
        break
      } else {
        currentPlayer = firstPlayer
        break
      }
    }
    gameEnds()
  }

  let x_token = "x"
  let o_token = "o"
  let firstPlayer = createPlayer("Max", x_token)
  let secondPlayer = createPlayer("Otto", o_token)
  let currentPlayer = firstPlayer

  function gameEnds() {
    if (hasWon(firstPlayer)) {
      console.log(`${firstPlayer.name} has won`)
    } else if (hasWon(secondPlayer)) {
      console.log(`${secondPlayer.name} has won`)
    } else if (isTied() === true) {
      console.log("It's a tie")
    }
  }
})()
