const bordersObj = {
  // C
  6: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  7: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  8: [5, 6, 18, 19],
  9: [5, 6, 18, 19],
  10: [5, 6, 18, 19],
  11: [5, 6, 18, 19],

  // O
  13: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  14: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  15: [5, 6, 18, 19],
  16: [5, 6, 18, 19],
  17: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  18: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],

  // D
  20: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  21: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  22: [5, 6, 18, 19],
  23: [5, 6, 18, 19],
  24: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  25: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],

  // E
  27: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  28: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  29: [5, 6, 11, 12, 13, 18, 19],
  30: [5, 6, 11, 12, 13, 18, 19],
  31: [5, 6, 11, 12, 13, 18, 19],
  32: [5, 6, 11, 12, 13, 18, 19],

  // V
  35: [5, 6, 7, 8, 9],
  36: [10, 11, 12, 13, 14],
  37: [15, 16, 17, 18, 19],
  38: [15, 16, 17, 18, 19],
  39: [10, 11, 12, 13, 14],
  40: [5, 6, 7, 8, 9],

  // I
  42: [5, 6, 18, 19],
  43: [5, 6, 18, 19],
  44: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  45: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  46: [5, 6, 18, 19],
  47: [5, 6, 18, 19],

  // D
  49: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  50: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  51: [5, 6, 18, 19],
  52: [5, 6, 18, 19],
  53: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  54: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],

  // E
  56: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  57: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  58: [5, 6, 11, 12, 13, 18, 19],
  59: [5, 6, 11, 12, 13, 18, 19],
  60: [5, 6, 11, 12, 13, 18, 19],
  61: [5, 6, 11, 12, 13, 18, 19],

  // R
  63: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  64: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  65: [5, 6, 11, 12, 13, 14, 15, 16],
  66: [5, 6, 11, 12, 13, 15, 16, 17],
  67: [5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17, 18],
  68: [5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19],
}
const areasWhereNotToPutPoints = {
  15: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  16: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  22: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  23: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  51: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  52: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  65: [7, 8, 9, 10],
  66: [7, 8, 9, 10],
}
const moveSpeedMs = 250
const possibleDirections = ['up', 'right', 'down', 'left']

// Page Elements
const mainGrid = document.querySelector('.main-grid')
const pointsEl = document.getElementById('points')
pointsEl.textContent = 0
const livesEl = document.getElementById('lives')

// modal is displayed only if you press n
const modal = document.querySelector('.modal');
const modalYes = document.getElementById("modal-yes")
const modalNo = document.getElementById("modal-no")

modalYes.addEventListener("click", function(){
  playAgain()
  modal.close()
})
modalNo.addEventListener("click", function(){
  modal.close()
  startPacmanMovement()
})



let totalPoints = 0

// Class definitions
class Pacman {
  constructor() {
    this.direction = 'left'
    this.x = 37
    this.y = 12
    this.hasMoved = false
    this.isMoving = false
    this.lives = 3
    this.points = 0
  }

  resetAll() {
    this.direction = 'left'
    this.x = 37
    this.y = 12
    this.hasMoved = false
    this.isMoving = false
    this.lives = 3
    this.points = 0
  }
}

class Ghost {
  constructor(name, direction, color, x, y) {
    this.name = name
    this.direction = direction
    this.x = x
    this.y = y
    this.isEatable = false
    this.color = color
  }
}

// Objects creation
const pacmanObj = new Pacman()
const opp1 = new Ghost('Marvin', 'left', 'red', 36, 22)
const opp2 = new Ghost('Albi', 'up', 'purple', 37, 22)
const opp3 = new Ghost('Daisy', 'up', 'green', 38, 22)
const opp4 = new Ghost('Georgia', 'right', 'cyan', 39, 22)

// Grid Creator
function createGrid() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 75; j++) {
      const child = document.createElement('div')
      child.classList.add('block')
      child.dataset.x = j
      child.dataset.y = i

      if (i == pacmanObj.y && j == pacmanObj.x) {
        child.classList.add('square', 'pacman')
        child.style.transform = 'rotate("0deg")'
        livesEl.textContent = pacmanObj.lives
      } else if (i == 22 && j >= 36 && j <= 39) {
        child.classList.add('opp')
        switch (j) {
          case 36:
            child.setAttribute('id', 'opp1')
            opp1.x = j
            opp1.y = i
            break
          case 37:
            child.setAttribute('id', 'opp2')
            opp2.x = j
            opp2.y = i
            break
          case 38:
            child.setAttribute('id', 'opp3')
            opp3.x = j
            opp3.y = i
            break
          case 39:
            child.setAttribute('id', 'opp4')
            opp4.x = j
            opp4.y = i
            break
        }
      }

      if (i < 2 || i > 22 || j < 3 || j > 71 || bordersObj[j]?.includes(i)) {
        child.classList.add('square', 'border')
      } else if (i == pacmanObj.y && j == pacmanObj.x) {
        child.classList.add('square')
      } else if (
        !(j in areasWhereNotToPutPoints) ||
        !areasWhereNotToPutPoints[j].includes(i)
      ) {
        child.classList.add('square', 'point')
        totalPoints++
      }

      mainGrid.appendChild(child)
    }
  }
}

createGrid()
console.log(totalPoints)

document.addEventListener('keydown', function (e) {
  if (!pacmanObj.isMoving) {
    pacmanObj.isMoving = true
    pacmanObj.hasMoved = true
    startPacmanMovement()
  }
  if (['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].includes(e.key)) {
    e.key == 'ArrowUp'
      ? changePacmanDirection('up')
      : e.key == 'ArrowRight'
      ? changePacmanDirection('right')
      : e.key == 'ArrowDown'
      ? changePacmanDirection('down')
      : changePacmanDirection('left')
  }
  if(e.key.toLowerCase() == "n" ){
    modal.showModal()
  stopPacmanMovement()

  }
})

function changePacmanDirection(direction) {
  const pm = document.querySelector('.pacman')
  if (!possibleDirections.includes(direction)) {
    return
  }
  pacmanObj.direction = direction
  switch (direction) {
    case 'up':
      pm.style.transform = 'rotate(-90deg)'
      break
    case 'right':
      pm.style.transform = 'rotate(0deg)'
      break
    case 'down':
      pm.style.transform = 'rotate(90deg)'
      break
    case 'left':
      pm.style.transform = 'rotate(180deg)'
      break
  }
}

let pacmanInterval

function startPacmanMovement() {
  pacmanInterval = setInterval(() => {
    console.log('I am moving')
    let nextBlock
    const pm = document.querySelector('.pacman')

    if (['up', 'down'].includes(pacmanObj.direction)) {
      nextBlock = document.querySelector(
        `.block[data-x="${pacmanObj.x}"][data-y="${
          pacmanObj.direction == 'up' ? pacmanObj.y - 1 : pacmanObj.y + 1
        }"]`
      )
    } else {
      nextBlock = document.querySelector(
        `.block[data-x="${
          pacmanObj.direction == 'left' ? pacmanObj.x - 1 : pacmanObj.x + 1
        }"][data-y="${pacmanObj.y}"]`
      )
    }

    if (nextBlock && nextBlock.classList.contains('border')) {
      pacmanObj.isMoving = false
      stopPacmanMovement()
    } else {
      if (nextBlock.classList.contains('point')) {
        nextBlock.classList.remove('point')
        pacmanObj.points++
        pointsEl.textContent = pacmanObj.points
      }
      nextBlock.style.transform = pm.style.transform
      pacmanObj.x = Number(nextBlock.dataset.x)
      pacmanObj.y = Number(nextBlock.dataset.y)

      pm.classList.remove('pacman')
      nextBlock.classList.add('pacman')
      pm.style.transform = ''
    }
  }, moveSpeedMs)
}

function stopPacmanMovement(){
  if(pacmanInterval){
    clearInterval(pacmanInterval)
  }
}

const playAgainButton = document.createElement('button')
playAgainButton.textContent = "Play Again"
playAgainButton.addEventListener('click', playAgain)

function won() {
  mainGrid.innerHTML = ''
  mainGrid.classList.remove('main-grid')
  mainGrid.classList.add('main-grid-win-lose')

  const youWonText = document.createElement('h3')
  youWonText.setAttribute("id", "won")
  youWonText.textContent = 'You won :)'

  mainGrid.appendChild(youWonText)
  mainGrid.appendChild(playAgainButton)
}

function lost(){
  mainGrid.innerHTML = ''
  mainGrid.classList.remove('main-grid')
  mainGrid.classList.add('main-grid-win-lose')

  const youWonText = document.createElement('h3')
  youWonText.setAttribute("id", "lost")
  youWonText.textContent = 'You lost :('

  mainGrid.appendChild(youWonText)
  mainGrid.appendChild(playAgainButton)
}

function playAgain() {
  mainGrid.innerHTML = ""
  mainGrid.classList = ""
  mainGrid.classList.add("main-grid")
  pacmanObj.resetAll()
  createGrid()
}
