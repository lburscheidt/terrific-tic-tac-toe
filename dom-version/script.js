const tictactoe = (function () {
  const gameboard = (function () {
    let makeBoard = document.querySelector('.gameboard')
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const newCell = document.createElement('button')
        newCell.classList.add('cell')
        newCell.setAttribute(
          'id',
          /*('id', `${i}${j}`) */ `_${Number(i) * 3 + Number(j) + 1}`,
        )
        newCell.addEventListener('click', function () {
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

  function hasWon(player) {
    let t = player.token
    if (
      (_1.innerHTML === t && _2.innerHTML === t && _3.innerHTML === t) ||
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
      cell.disabled = true
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

  let x_token = '<i class="fa-solid fa-x fa-10x" aria-hidden="true"></i>'
  let o_token = '<i class="fa-solid fa-o fa-10x" aria-hidden="true"></i>'
  let firstPlayer = createPlayer('Max', x_token)
  let secondPlayer = createPlayer('Otto', o_token)
  let currentPlayer = firstPlayer

  function gameEnds() {
    if (hasWon(firstPlayer)) {
      alert(`${firstPlayer.name} has won`)
    } else if (hasWon(secondPlayer)) {
      alert(`${secondPlayer.name} has won`)
    } else if (isTied() === true) {
      alert("It's a tie")
    }
  }
})()
