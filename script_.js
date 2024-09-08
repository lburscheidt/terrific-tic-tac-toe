 function move(cellId) {
    let cell = document.getElementById(cellId)
    while (
      hasWon(firstPlayer) === false &&
      hasWon(secondPlayer) == false &&
      isTied() === false
    ) 
    
      cell.innerHTML = currentPlayer.token
      if (hasWon(currentPlayer) && currentPlayer === firstPlayer) {
        console.log("Winner")
        console.log(`${firstPlayer.name} has won`)
        break
      } else if (hasWon(currentPlayer) && currentPlayer === secondPlayer) {
        console.log(`${secondPlayer.name} has won`)
        break
      }
      if (currentPlayer === firstPlayer) {
        currentPlayer = secondPlayer
        break
      } else {
        currentPlayer = firstPlayer
        break}}