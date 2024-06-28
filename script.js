// Constants
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

const highestScoreEl = document.getElementById('high-score')

if (!localStorage.getItem('highScore')) {
  localStorage.setItem('highScore', 0)
}

highestScoreEl.textContent = Number(localStorage.getItem('highScore'))

console.log(typeof localStorage.getItem('highScore'))

// modal is displayed only if you press n
const modal = document.querySelector('.modal')
const modalYes = document.getElementById('modal-yes')
const modalNo = document.getElementById('modal-no')

modalYes.addEventListener('click', function () {
  playAgain()
  modal.close()
})
modalNo.addEventListener('click', function () {
  modal.close()
  startPacmanMovement()
  startGhostMovement()
})

// intervals for movement
let pacmanInterval
let ghostsInterval

let totalPoints = 0

// Class definitions
class Pacman {
  constructor() {
    this.direction = 'left'
    // this.x = 37
    // this.y = 12
    this.x = 35
    this.y = 22
    this.hasStarted = false
    this.isMoving = false
    this.lives = 3
    this.points = 0
  }

  resetAll() {
    this.direction = 'left'
    this.x = 37
    this.y = 12
    this.hasStarted = false
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
const ghost1 = new Ghost('Ghost1', 'left', 'red', 36, 22)
const ghost2 = new Ghost('Ghost2', 'up', 'purple', 37, 22)
const ghost3 = new Ghost('Ghost3', 'up', 'green', 38, 22)
const ghost4 = new Ghost('Ghost4', 'right', 'cyan', 39, 22)

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
        child.classList.add('ghost')
        switch (j) {
          case 36:
            child.setAttribute('id', 'ghost1')
            ghost1.x = j
            ghost1.y = i
            break
          case 37:
            child.setAttribute('id', 'ghost2')
            ghost2.x = j
            ghost2.y = i
            break
          case 38:
            child.setAttribute('id', 'ghost3')
            ghost3.x = j
            ghost3.y = i
            break
          case 39:
            child.setAttribute('id', 'ghost4')
            ghost4.x = j
            ghost4.y = i
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

// Direction changer
document.addEventListener('keydown', function (e) {
  if (['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].includes(e.key)) {
    if (!pacmanObj.hasStarted) {
      pacmanObj.isMoving = true
      pacmanObj.hasStarted = true
      startPacmanMovement()
      startGhostMovement()
    }
    e.key == 'ArrowUp'
      ? changePacmanDirection('up')
      : e.key == 'ArrowRight'
      ? changePacmanDirection('right')
      : e.key == 'ArrowDown'
      ? changePacmanDirection('down')
      : e.key == 'ArrowLeft'
      ? changePacmanDirection('left')
      : pass
  }
  if (e.key.toLowerCase() == 'n') {
    modal.showModal()
    stopPacmanMovement()
    stopGhostMovement()
  }
})

function changePacmanDirection(direction) {
  const pm = document.querySelector('.pacman')
  if (!possibleDirections.includes(direction)) {
    return
  }
  pacmanObj.direction = direction
  if (!pacmanObj.isMoving) {
    pacmanObj.isMoving = true
    startPacmanMovement()
  }
  switch (direction) {
    case 'up':
      pacmanObj.direction = 'up'
      pm.style.transform = 'rotate(-90deg)'
      break
    case 'right':
      pacmanObj.direction = 'right'
      pm.style.transform = 'rotate(0deg)'
      break
    case 'down':
      pacmanObj.direction = 'down'
      pm.style.transform = 'rotate(90deg)'
      break
    case 'left':
      pacmanObj.direction = 'left'
      pm.style.transform = 'rotate(180deg)'
      break
  }
}

// creating a function for pacman to move through an interval and putting it to the pacman variable (that will be its id)
function startPacmanMovement() {
  pacmanInterval = setInterval(() => {
    console.log('I am moving')
    let nextBlock
    const pm = document.querySelector('.pacman')

    nextBlock = findNextBlock(pacmanObj)

    if (nextBlock && nextBlock.classList.contains('border')) {
      pacmanObj.isMoving = false
      stopPacmanMovement()
    } else {
      if (nextBlock.classList.contains('point')) {
        nextBlock.classList.remove('point')
        pacmanObj.points++
        pointsEl.textContent = pacmanObj.points
      }
      if (nextBlock.classList.contains('ghost')) {
        pacmanObj.lives--
        livesEl.textContent = pacmanObj.lives
        if (pacmanObj.lives === 0) {
          lost()
          return
        }
        resetPacmanPosition()
        stopPacmanMovement()
        return
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

// Clearing the interval
function stopPacmanMovement() {
  if (pacmanInterval) {
    clearInterval(pacmanInterval)
  }
}

function moveGhost(ghost) {
  let nextBlock
  const g = document.getElementById(ghost.name.toLowerCase())
  ghost.direction =
    possibleDirections[Math.floor(Math.random() * possibleDirections.length)]

  nextBlock = findNextBlock(ghost)
  if (
    nextBlock &&
    !nextBlock.classList.contains('border') &&
    !nextBlock.classList.contains('ghost')
  ) {
    if (nextBlock.classList.contains('pacman')) {
      if (
        !(pacmanObj.direction == 'left' && ghost.direction == 'right') &&
        !(pacmanObj.direction == 'right' && ghost.direction == 'left') &&
        !(pacmanObj.direction == 'up' && ghost.direction == 'down') &&
        !(pacmanObj.direction == 'down' && ghost.direction == 'up')
      ) {
        handleCollision()
      }
    }
    g.removeAttribute('id')
    g.classList.remove('ghost')
    nextBlock.setAttribute('id', ghost.name.toLowerCase())
    nextBlock.classList.add('ghost')
  }
}

function startGhostMovement() {
  ghostsInterval = setInterval(() => {
    moveGhost(ghost1)
    moveGhost(ghost2)
    moveGhost(ghost3)
    moveGhost(ghost4)
  }, moveSpeedMs)
}

function stopGhostMovement() {
  if (ghostsInterval) {
    clearInterval(ghostsInterval)
  }
}

// win / lose logic
const playAgainButton = document.createElement('button')
playAgainButton.textContent = 'Play Again'
playAgainButton.addEventListener('click', playAgain)

function won() {
  mainGrid.innerHTML = ''
  mainGrid.classList.remove('main-grid')
  mainGrid.classList.add('main-grid-win-lose')

  const youWonText = document.createElement('h3')
  youWonText.setAttribute('id', 'won')
  youWonText.textContent = 'You won :)'

  mainGrid.appendChild(youWonText)
  mainGrid.appendChild(playAgainButton)
}

function lost() {
  stopPacmanMovement()
  stopGhostMovement()

  if (Number(localStorage.getItem('highScore') < pacmanObj.points)) {
    highestScoreEl.textContent = pacmanObj.points
    localStorage.setItem('highScore', pacmanObj.points)
  }
  mainGrid.innerHTML = ''
  mainGrid.classList.remove('main-grid')
  mainGrid.classList.add('main-grid-win-lose')

  const youWonText = document.createElement('h3')
  youWonText.setAttribute('id', 'lost')
  youWonText.textContent = 'You lost :('

  mainGrid.appendChild(youWonText)
  mainGrid.appendChild(playAgainButton)
}

function playAgain() {
  mainGrid.innerHTML = ''
  mainGrid.classList = ''
  mainGrid.classList.add('main-grid')
  pacmanObj.resetAll()
  pointsEl.textContent = pacmanObj.points
  createGrid()
}

// helper functions
function findNextBlock(object) {
  let el
  if (['up', 'down'].includes(object.direction)) {
    el = document.querySelector(
      `.block[data-x="${object.x}"][data-y="${
        object.direction == 'up' ? object.y - 1 : object.y + 1
      }"]`
    )
  } else {
    el = document.querySelector(
      `.block[data-x="${
        object.direction == 'left' ? object.x - 1 : object.x + 1
      }"][data-y="${object.y}"]`
    )
  }
  return el
}

function handleCollision() {
  pacmanObj.lives--
  livesEl.textContent = pacmanObj.lives
  if (pacmanObj.lives === 0) {
    lost()
    return
  }
  resetPacmanPosition()
  stopPacmanMovement()
}

function resetPacmanPosition() {
  const currentPacman = document.querySelector('.pacman')
  currentPacman.classList.remove('pacman')
  currentPacman.style = ''

  pacmanObj.x = 37
  pacmanObj.y = 12
  pacmanObj.isMoving = false

  const basePosition = document.querySelector(
    `.block[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y}"]`
  )
  basePosition.classList.add('pacman')
}

document.addEventListener('keydown', function (e) {
  console.log(e.key)
  if (modal.open) {
    if (e.key === 'Escape') {
      startPacmanMovement()
      startGhostMovement()
    }
  }
})
