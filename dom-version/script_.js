const gameFlow = (function () {
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

  function createPlayer(name, token) {
    return { name, token }
  }
  let firstPlayer = createPlayer("Max", "<i class='fa-solid fa-x fa-10x'></i>")
  let secondPlayer = createPlayer(
    "Otto",
    "<i class='fa-solid fa-o fa-10x'></i>",
  )
  let currentPlayer = firstPlayer

  function hasWon(player) {
    if (document.getElementById("00").innerHTML === player.token) {
      return true
    } else {
      return false
    }
  }
  function move(cellId) {
    while (hasWon(firstPlayer) === false && hasWon(secondPlayer) === false) {
      let cell = document.getElementById(cellId)
      console.log(cell.id)
      cell.innerHTML = currentPlayer.token
      console.log(cell.innerHTML)
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
})()
/*
function move(cellid) {
    while (
      hasWon(firstPlayer) === false &&
      hasWon(secondPlayer) === false /*&&
      isTied() === false*/
/*  ) {
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
    if (hasWon(firstPlayer) || hasWon(secondPlayer) /*|| isTied()) */ /*) {
  /* if (isTied()) {
    console.log("It's a tie.")
  } else {*/ /*
console.log(`${player.name} has won.`)



/*const gameFlow = (function () {


  function hasWon(player) {
    if (document.getElementById("00").innerHTML === player.token) {
      return true
    } else {
      return false
    }
  }
  /*
    let doc = document.getElementById
    if (
      (("00").innerHTML === player.token &&
        doc("01").innerHTML === player.token &&
        doc("02").innerHTML === player.token) ||
      (doc("10").innerHTML === player.token &&
        doc("11").innerHTML === player.token &&
        doc("12").innerHTML === player.token) ||
      (doc("20").innerHTML === player.token &&
        doc("21").innerHTML === player.token &&
        doc("22").innerHTML === player.token) ||
      (doc("00").innerHTML === player.token &&
        doc("10").innerHTML === player.token &&
        doc("20").innerHTML === player.token) ||
      (doc("10").innerHTML === player.token &&
        doc("11").innerHTML === player.token &&
        doc("12").innerHTML === player.token) ||
      (doc("20").innerHTML === player.token &&
        doc("21").innerHTML === player.token &&
        doc("22").innerHTML === player.token) ||
      (doc("00").innerHTML === player.token &&
        doc("11").innerHTML === player.token &&
        doc("22").innerHTML === player.token) ||
      (doc("02").innerHTML === player.token &&
        doc("11").innerHTML === player.token &&
        doc("20").innerHTML === player.token)
    ) {
      return true
    } else {
      return false
    }
  }*/

/*function isTied() {
    if (
      (doc("01").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("01").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token) ||
      (doc("01").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("01").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("01").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token) ||
      (doc("02").innerHTML === firstPlayer.token &&
        doc("01").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("01").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token) ||
      (doc("01").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("01").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("20").innerHTML === firstPlayer.token) ||
      (doc("00").innerHTML === firstPlayer.token &&
        doc("02").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("12").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token) ||
      (doc("02").innerHTML === firstPlayer.token &&
        doc("10").innerHTML === firstPlayer.token &&
        doc("11").innerHTML === firstPlayer.token &&
        doc("21").innerHTML === firstPlayer.token &&
        doc("22").innerHTML === firstPlayer.token)
    ) {
      return true
    } else {
      return false
    }
  }*/
/*
  function move(cellid) {
    while (
      hasWon(firstPlayer) === false &&
      hasWon(secondPlayer) === false /*&&
      isTied() === false*/
/*  ) {
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
    if (hasWon(firstPlayer) || hasWon(secondPlayer) /*|| isTied()) */ /*) {
  /* if (isTied()) {
    console.log("It's a tie.")
  } else {*/ /*
console.log(`${player.name} has won.`)
}
}
})()*/
