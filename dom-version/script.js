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
//game flow
