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

let pacmanInterval
let points = 0
let pointsTotal
const pointsEl = document.getElementById('points')
const livesEl = document.getElementById('lives')
pointsEl.textContent = 0

class Pacman {
  constructor() {
    this.hasMoved = false
    this.direction = 'left'
    this.x = 37
    this.y = 12
    this.canMove = false
    this.lives = 3
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

const pacmanObj = new Pacman()
const opp1 = new Ghost('Marvin', 'left', 'red', 36, 22)
const opp2 = new Ghost('Albi', 'up', 'purple', 37, 22)
const opp3 = new Ghost('Daisy', 'up', 'green', 38, 22)
const opp4 = new Ghost('Georgia', 'right', 'cyan', 39, 22)

const oppsArray = [opp1, opp2, opp3, opp4]

const mainGrid = document.querySelector('.main-grid')

// Grid creator
const gridCreator = () => {
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
      }
      if (i == 22 && j > 35 && j < 40) {
        child.classList.add('opp')
        if (i === 22 && j >= 36 && j <= 39) {
          child.classList.add('opp')
          switch (j) {
            case 36:
              child.setAttribute('id', 'marvin')
              opp1.x = j
              opp1.y = i
              break
            case 37:
              child.setAttribute('id', 'albi')
              opp2.x = j
              opp2.y = i
              break
            case 38:
              child.setAttribute('id', 'daisy')
              opp3.x = j
              opp3.y = i
              break
            case 39:
              child.setAttribute('id', 'georgia')
              opp4.x = j
              opp4.y = i
              break
          }
        }
      }

      if (i < 2 || i > 22 || j < 3 || j > 71) {
        child.classList.add('square', 'border')
      }

      if (Object.keys(bordersObj).includes(j.toString())) {
        if (bordersObj[j].includes(i)) {
          child.classList.add('square', 'border')
        }
      }

      if (
        !child.classList.contains('border') &&
        !child.classList.contains('pacman')
      ) {
        if (Object.keys(bordersObj).includes(j.toString())) {
          if (
            !(j in areasWhereNotToPutPoints) ||
            !areasWhereNotToPutPoints[j].includes(i)
          ) {
            child.classList.add('square', 'point')
            pointsTotal++
          }
        } else {
          child.classList.add('square', 'point')
          pointsTotal++
        }
      }

      mainGrid.appendChild(child)
    }
  }
}
gridCreator()

pointsEl.textContent = points

// Direction change
document.addEventListener('keydown', (e) => {
  const pm = document.querySelector('.pacman')
  let nextBlock

  if (!pacmanObj.hasMoved) {
    pacmanObj.hasMoved = true
  }

  switch (e.key) {
    case 'ArrowDown':
      if (pacmanObj.direction === 'down') {
        break
      }
      pacmanObj.direction = 'down'
      pm.style.transform = 'rotate(90deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y + 1}"]`
      )
      break
    case 'ArrowLeft':
      if (pacmanObj.direction === 'left') {
        break
      }
      pacmanObj.direction = 'left'
      pm.style.transform = 'rotate(180deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${pacmanObj.x - 1}"][data-y="${pacmanObj.y}"]`
      )

      break
    case 'ArrowUp':
      if (pacmanObj.direction === 'up') {
        break
      }
      pacmanObj.direction = 'up'
      pm.style.transform = 'rotate(-90deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y + 1}"]`
      )
      break
    case 'ArrowRight':
      if (pacmanObj.direction === 'right') {
        break
      }
      pacmanObj.direction = 'right'
      pm.style.transform = 'rotate(0deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${pacmanObj.x + 1}"][data-y="${pacmanObj.y}"]`
      )
      break
  }
  if (nextBlock && !nextBlock.classList.contains('border') && !pacmanInterval) {
    startInterval()
  }
})

// pacman mover interval
function startInterval() {
  pacmanInterval = setInterval(() => {
    let nextBlock
    if (!pacmanObj.hasMoved) return

    const pm = document.querySelector('.pacman')

    switch (pacmanObj.direction) {
      case 'up':
        nextBlock = document.querySelector(
          `.block[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y - 1}"]`
        )
        nextBlock.style.transform = 'rotate(-90deg)'
        break
      case 'down':
        nextBlock = document.querySelector(
          `.block[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y + 1}"]`
        )
        nextBlock.style.transform = 'rotate(90deg)'
        break
      case 'left':
        nextBlock = document.querySelector(
          `.block[data-x="${pacmanObj.x - 1}"][data-y="${pacmanObj.y}"]`
        )
        nextBlock.style.transform = 'rotate(180deg)'
        break
      case 'right':
        nextBlock = document.querySelector(
          `.block[data-x="${pacmanObj.x + 1}"][data-y="${pacmanObj.y}"]`
        )
        nextBlock.style.transform = 'rotate(0deg)'

        break
    }

    if (nextBlock.classList.contains('opp')) {
      pacmanObj.lives--
      livesEl.textContent = pacmanObj.lives

      if (pacmanObj.lives <= 0) {
        gameOver()
      } else {
        points = Math.max(0, points - 1)
        pointsEl.textContent = points
        resetPacmanPosition()
      }
      return
    }
    if (nextBlock && !nextBlock.classList.contains('border')) {
      nextBlock.classList.add('pacman')
      pm.classList.remove('pacman')
      if (nextBlock.classList.contains('point')) {
        nextBlock.classList.remove('point')
        pacmanObj.x = Number(nextBlock.dataset.x)
        pacmanObj.y = Number(nextBlock.dataset.y)
        points++
        pointsEl.textContent = points
      } else {
        pacmanObj.x = Number(nextBlock.dataset.x)
        pacmanObj.y = Number(nextBlock.dataset.y)
      }
    }

    if (nextBlock.classList.contains('border')) {
      stopInterval()
    }

    if (points === pointsTotal) {
      mainGrid.innerHTML = ''
      mainGrid.classList.remove('main-grid')
      mainGrid.classList.add('won-play-again')
      const youWonText = document.createElement('h3')
      youWonText.classList.add('winner-text')
      const playAgainButton = document.createElement('button')
      playAgainButton.textContent = 'Play Again'
      playAgainButton.addEventListener('click', () => {
        points = 0
        pointsEl.textContent = 0

        pacmanObj.hasMoved = false
        pacmanObj.direction = 'left'
        pacmanObj.x = 37
        pacmanObj.y = 12
        pacmanObj.canMove = false
        pacmanObj.lives = 3
        mainGrid.innerHTML = ''
        gridCreator()
        mainGrid.classList.remove('won-play-again')
        mainGrid.classList.add('main-grid')
      })
      mainGrid.appendChild(youWonText)
      mainGrid.appendChild(playAgainButton)
    }
  }, 250)
}

function stopInterval() {
  if (pacmanInterval) {
    clearInterval(pacmanInterval)
    pacmanInterval = null
  }
}

function moveOpp(opp) {
  const possibleMoves = ['up', 'down', 'left', 'right']
  let nextBlock

  do {
    opp.direction =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

    switch (opp.direction) {
      case 'up':
        nextBlock = document.querySelector(
          `.block[data-x="${opp.x}"][data-y="${opp.y - 1}"]`
        )
        break
      case 'down':
        nextBlock = document.querySelector(
          `.block[data-x="${opp.x}"][data-y="${opp.y + 1}"]`
        )
        break
      case 'left':
        nextBlock = document.querySelector(
          `.block[data-x="${opp.x - 1}"][data-y="${opp.y}"]`
        )
        break
      case 'right':
        nextBlock = document.querySelector(
          `.block[data-x="${opp.x + 1}"][data-y="${opp.y}"]`
        )
        break
    }
  } while (nextBlock && nextBlock.classList.contains('border'))
  if (nextBlock.classList.contains('pacman')) {
    pacmanObj.lives--
    if (pacmanObj.lives <= 0) {
      gameOver()
    } else {
      livesEl.textContent = pacmanObj.lives
      resetPacmanPosition()
    }
  }

  if (nextBlock) {
    const currentBlock = document.querySelector(
      `.block[data-x="${opp.x}"][data-y="${opp.y}"]`
    )
    currentBlock.classList.remove('opp')
    currentBlock.removeAttribute('id')

    nextBlock.classList.add('opp')
    nextBlock.setAttribute('id', opp.name.toLowerCase())

    opp.x = Number(nextBlock.dataset.x)
    opp.y = Number(nextBlock.dataset.y)
  }
}

setInterval(() => {
  moveOpp(opp1)
  moveOpp(opp2)
  moveOpp(opp3)
  moveOpp(opp4)
}, 250)

function gameOver() {
  mainGrid.innerHTML = ''
  mainGrid.classList.remove('main-grid')
  mainGrid.classList.add('lost-play-again')
  const youWonText = document.createElement('h3')
  youWonText.classList.add('loser-text')
  const playAgainButton = document.createElement('button')
  playAgainButton.textContent = 'Play Again'
  playAgainButton.addEventListener('click', () => {
    points = 0
    pointsEl.textContent = 0

    pacmanObj.hasMoved = false
    pacmanObj.direction = 'left'
    pacmanObj.x = 37
    pacmanObj.y = 12
    pacmanObj.canMove = false
    pacmanObj.lives = 3
    mainGrid.innerHTML = ''
    gridCreator()
    mainGrid.classList.remove('lost-play-again')
    mainGrid.classList.add('main-grid')
  })
  mainGrid.appendChild(youWonText)
  mainGrid.appendChild(playAgainButton)
}

function resetPacmanPosition() {
  const currentPacmanPlacement = document.querySelector('.pacman')
  currentPacmanPlacement.classList.remove('pacman')

  pacmanObj.x = 37
  pacmanObj.y = 12
  pacmanObj.direction = 'left'

  const newPacmanPlacement = document.querySelector(
    `.block[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y}"]`
  )
  newPacmanPlacement.classList.add('pacman')
  newPacmanPlacement.style.transform = 'rotate(180deg)'

  stopInterval()
}
