const bordersObj = {
  6: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  7: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  8: [5, 6, 18, 19],
  9: [5, 6, 18, 19],
  10: [5, 6, 18, 19],
  11: [5, 6, 18, 19],
  13: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  14: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  15: [5, 6, 18, 19],
  16: [5, 6, 18, 19],
  17: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  18: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  20: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  21: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  22: [5, 6, 18, 19],
  23: [5, 6, 18, 19],
  24: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  25: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  27: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  28: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  29: [5, 6, 11, 12, 13, 18, 19],
  30: [5, 6, 11, 12, 13, 18, 19],
  31: [5, 6, 11, 12, 13, 18, 19],
  32: [5, 6, 11, 12, 13, 18, 19],
  35: [5, 6, 7, 8, 9],
  36: [10, 11, 12, 13, 14],
  37: [15, 16, 17, 18, 19],
  38: [15, 16, 17, 18, 19],
  39: [10, 11, 12, 13, 14],
  40: [5, 6, 7, 8, 9],
  42: [5, 6, 18, 19],
  43: [5, 6, 18, 19],
  44: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  45: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  46: [5, 6, 18, 19],
  47: [5, 6, 18, 19],
  49: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  50: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  51: [5, 6, 18, 19],
  52: [5, 6, 18, 19],
  53: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  54: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  56: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  57: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  58: [5, 6, 11, 12, 13, 18, 19],
  59: [5, 6, 11, 12, 13, 18, 19],
  60: [5, 6, 11, 12, 13, 18, 19],
  61: [5, 6, 11, 12, 13, 18, 19],
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
const areasWithExtraPoints = {
  24: { 5: 'cherry', 19: 'cherry' },
  53: { 5: 'lemon', 19: 'lemon' },
  65: { 17: 'grape' },
  66: { 14: 'lemon' },
}
const areasWithGhostEatingAttributes = {
  3: [3, 21],
  8: [7, 17],
  46: [7, 17],
  56: [7, 17],
  71: [3, 21],
}
const moveSpeedMs = 200
const possibleDirections = ['up', 'right', 'down', 'left']
const mainGrid = document.querySelector('.main-grid')
const pointsEl = document.getElementById('points')
pointsEl.textContent = 0
const livesEl = document.getElementById('lives')
const highestScoreEl = document.getElementById('high-score')
const secondsLeft = document.getElementById('seconds-left')
if (!localStorage.getItem('highScore')) {
  localStorage.setItem('highScore', 0)
}
highestScoreEl.textContent = Number(localStorage.getItem('highScore'))
const modal = document.querySelector('.modal')

const modalYes = document.getElementById('modal-yes')
const modalNo = document.getElementById('modal-no')
modalYes.addEventListener('click', modalYesFunction)
modalNo.addEventListener('click', modalNoFunction)

let pacmanInterval
let ghostsInterval
let timerInterval
let secondsToEatGhosts = 20
class Pacman {
  constructor() {
    this.direction = 'left'
    this.x = 37
    this.y = 12
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
  constructor(name, direction, color, x, y, isSmart) {
    this.name = name
    this.direction = direction
    this.x = x
    this.y = y
    this.originalDirection = direction
    this.originalX = x
    this.originalY = y
    this.isEatable = false
    this.color = color
    this.smart = isSmart
  }
  resetPosition() {
    this.direction = this.originalDirection
    this.x = this.originalX
    this.y = this.originalY
  }
}
const pacmanObj = new Pacman()

const ghosts = [
  new Ghost('Ghost1', 'left', 'red', 36, 21, true),
  new Ghost('Ghost2', 'up', 'purple', 37, 21, false),
  new Ghost('Ghost3', 'up', 'green', 38, 21, true),
  new Ghost('Ghost4', 'right', 'cyan', 39, 21, false),
]
livesEl.textContent = pacmanObj.lives
function createGrid() {
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 75; j++) {
      const child = document.createElement('div')
      child.classList.add('square')
      child.dataset.x = j
      child.dataset.y = i
      if (i == pacmanObj.y && j == pacmanObj.x) {
        child.classList.add('pacman')
      } else if (i == 21 && j >= 36 && j <= 39) {
        child.classList.add('ghost')
        assignGhostId(j, i, child)
      }
      if (i < 3 || i > 21 || j < 3 || j > 71 || bordersObj[j]?.includes(i)) {
        child.classList.add('square', 'border')
      } else if (j in areasWithExtraPoints && i in areasWithExtraPoints[j]) {
        child.classList.add(areasWithExtraPoints[j][i])
      } else if (
        j in areasWithGhostEatingAttributes &&
        areasWithGhostEatingAttributes[j].includes(i)
      ) {
        child.classList.add('special-square')
      } else if (i == pacmanObj.y && j == pacmanObj.x) {
        child.classList.add('square')
      } else if (
        !(j in areasWhereNotToPutPoints) ||
        !areasWhereNotToPutPoints[j].includes(i)
      ) {
        child.classList.add('square', 'point')
      }
      mainGrid.appendChild(child)
    }
  }
}
createGrid()
document.addEventListener('keydown', function (e) {
  if (['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'].includes(e.key)) {
    if (!pacmanObj.hasStarted) {
      pacmanObj.isMoving = true
      pacmanObj.hasStarted = true
      startPacmanMovement()
      startGhostsMovement()
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
    stopGhostsMovement()
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
function startPacmanMovement() {
  pacmanInterval = setInterval(() => {
    const pm = document.querySelector('.pacman')
    let nextBlock = findNextBlock(pacmanObj)
    if (nextBlock && nextBlock.classList.contains('border')) {
      stopPacmanMovement()
    } else {
      if (nextBlock.classList.contains('point') || isExtraPoint(nextBlock)) {
        pointAdder(nextBlock)
      }
      if (nextBlock.classList.contains('special-square')) {
        nextBlock.classList.remove('special-square')
        startGhostEatingTimer()
      }
      if (nextBlock.classList.contains('ghost')) {
        let currGhost
        if (ghosts[0].isEatable) {
          currGhost = ghosts.find(
            (ghost) =>
              ghost.x == nextBlock.dataset.x && ghost.y == nextBlock.dataset.y
          )
          eatGhost(currGhost)
        } else {
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
      }
      pacmanStyleSwapper(pm, nextBlock)
    }
  }, moveSpeedMs)
}
function stopPacmanMovement() {
  if (pacmanInterval) {
    pacmanObj.isMoving = false
    clearInterval(pacmanInterval)
  }
}
function moveGhost(ghost) {
  const nextBlock = determineGhostMove(ghost)

  if (nextBlock.classList.contains('pacman')) {
    if (!ghost.isEatable) {
      handleCollision()
    }
  } else {
    const g = document.getElementById(ghost.name.toLowerCase())
    ghostAttributeSwapper(g, nextBlock, ghost)
  }
}
function determineGhostMove(ghost) {
  if (ghost.smart) {
    ghost.direction = smartChase(ghost, pacmanObj)
  }

  let nextBlock = findNextBlock(ghost)

  if (
    !nextBlock ||
    nextBlock.classList.contains('border') ||
    nextBlock.classList.contains('ghost')
  ) {
    const availableDirections = possibleDirections.filter((direction) => {
      const testBlock = findNextBlock({ ...ghost, direction })
      return (
        testBlock &&
        !testBlock.classList.contains('border') &&
        !testBlock.classList.contains('ghost')
      )
    })

    if (availableDirections.length > 0) {
      ghost.direction =
        availableDirections[
          Math.floor(Math.random() * availableDirections.length)
        ]
      nextBlock = findNextBlock(ghost)
    } else {
      nextBlock = document.querySelector(
        `.square[data-x="${ghost.x}"][data-y="${ghost.y}"]`
      )
    }
  }

  return nextBlock
}

function smartChase(ghost, pacman) {
  let bestDirection = ghost.direction
  let optimalDistance = ghost.isEatable ? -Infinity : Infinity

  possibleDirections.forEach((direction) => {
    let nextX = ghost.x
    let nextY = ghost.y

    switch (direction) {
      case 'up':
        nextY--
        break
      case 'down':
        nextY++
        break
      case 'left':
        nextX--
        break
      case 'right':
        nextX++
        break
    }

    const nextBlock = document.querySelector(
      `.square[data-x="${nextX}"][data-y="${nextY}"]`
    )
    if (
      nextBlock &&
      !nextBlock.classList.contains('border') &&
      !nextBlock.classList.contains('ghost')
    ) {
      const distance = Math.abs(pacman.x - nextX) + Math.abs(pacman.y - nextY)
      if (
        ghost.isEatable
          ? distance > optimalDistance
          : distance < optimalDistance
      ) {
        optimalDistance = distance
        bestDirection = direction
      }
    }
  })

  return bestDirection
}

function startGhostsMovement() {
  ghostsInterval = setInterval(() => {
    ghosts.forEach((ghost) => moveGhost(ghost))
  }, moveSpeedMs * 1.25)
}
function stopGhostsMovement() {
  if (ghostsInterval) {
    clearInterval(ghostsInterval)
    ghostsInterval = null
  }
}
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
  stopGhostsMovement()
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
  stopGhostsMovement()
  pointsEl.textContent = pacmanObj.points
  livesEl.textContent = pacmanObj.lives
  createGrid()
}
function findNextBlock(object) {
  let nextX = object.x
  let nextY = object.y
  switch (object.direction) {
    case 'up':
      nextY--
      break
    case 'down':
      nextY++
      break
    case 'left':
      nextX--
      break
    case 'right':
      nextX++
      break
  }
  return document.querySelector(`.square[data-x="${nextX}"][data-y="${nextY}"]`)
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
    `.square[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y}"]`
  )
  basePosition.classList.add('pacman')
}
document.addEventListener('keydown', function (e) {
  if (modal.open) {
    if (e.key === 'Escape') {
      startPacmanMovement()
      startGhostsMovement()
    }
  }
})
function assignGhostId(x, y, child) {
  switch (x) {
    case 36:
      child.setAttribute('id', 'ghost1')
      ghosts[0].x = x
      ghosts[0].y = y
      break
    case 37:
      child.setAttribute('id', 'ghost2')
      ghosts[1].x = x
      ghosts[1].y = y
      break
    case 38:
      child.setAttribute('id', 'ghost3')
      ghosts[2].x = x
      ghosts[2].y = y
      break
    case 39:
      child.setAttribute('id', 'ghost4')
      ghosts[3].x = x
      ghosts[3].y = y
      break
  }
}
function pacmanStyleSwapper(current, next) {
  next.style.transform = current.style.transform
  pacmanObj.x = Number(next.dataset.x)
  pacmanObj.y = Number(next.dataset.y)
  current.classList.remove('pacman')
  next.classList.add('pacman')
  current.style.transform = ''
}
function ghostAttributeSwapper(current, next, ghost) {
  if (!current) {
    return
  }
  if (current.getAttribute('eatable') == 'true') {
    current.removeAttribute('eatable')
  }
  current.removeAttribute('id')
  current.classList.remove('ghost')
  ghost.x = Number(next.dataset.x)
  ghost.y = Number(next.dataset.y)
  next.setAttribute('id', ghost.name.toLowerCase())
  if (ghost.isEatable) {
    next.setAttribute('eatable', 'true')
  }
  next.classList.add('ghost')
}
function checkIsNotCollision(ghost, pacman) {
  if (
    !(pacman.direction == 'left' && ghost.direction == 'right') &&
    !(pacman.direction == 'right' && ghost.direction == 'left') &&
    !(pacman.direction == 'up' && ghost.direction == 'down') &&
    !(pacman.direction == 'down' && ghost.direction == 'up')
  ) {
    return true
  }
  return false
}
function isExtraPoint(el) {
  return (
    el.classList.contains('cherry') ||
    el.classList.contains('grape') ||
    el.classList.contains('lemon')
  )
}
function pointAdder(el) {
  if (isExtraPoint(el)) {
    el.classList = ''
    el.classList.add('square')
    pacmanObj.points += 25
    pointsEl.textContent = pacmanObj.points
  } else {
    el.classList.remove('point')
    pacmanObj.points++
    pointsEl.textContent = pacmanObj.points
  }
  isThereAnyPointsLeft()
}
function startGhostEatingTimer() {
  stopGhostEatingTimer()
  const ghostValues = document.querySelectorAll('.ghost')
  ghostValues.forEach((g) => g.setAttribute('eatable', 'true'))
  ghostValues.forEach((g) => g.getAttribute('eatable'))
  ghosts.forEach((ghost) => {
    ghost.isEatable = true
  })
  secondsToEatGhosts = 20
  secondsLeft.textContent = `${secondsToEatGhosts} seconds left`
  timerInterval = setInterval(() => {
    secondsToEatGhosts--
    secondsLeft.textContent = `${secondsToEatGhosts} seconds left`
    if (secondsToEatGhosts <= 0) {
      stopGhostEatingTimer()
    }
  }, 1000)
}
function stopGhostEatingTimer() {
  secondsLeft.textContent = ''
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  ghosts.forEach((ghost) => {
    ghost.isEatable = false
    document
      .querySelectorAll('.ghost')
      .forEach((g) => g.removeAttribute('eatable'))
  })
}
function eatGhost(ghost) {
  pacmanObj.points += 100
  pointsEl.textContent = pacmanObj.points
  secondsToEatGhosts -= 5
  if (secondsToEatGhosts < 1) {
    stopGhostEatingTimer()
    secondsLeft.textContent = ''
  } else {
    secondsLeft.textContent = `${secondsToEatGhosts} seconds left`
  }
  const currentGhostElement = document.getElementById(ghost.name.toLowerCase())
  currentGhostElement.classList.remove('ghost')
  currentGhostElement.removeAttribute('id')
  ghost.resetPosition()
  const newGhostPosition = document.querySelector(
    `.square[data-x="${ghost.x}"][data-y="${ghost.y}"]`
  )
  newGhostPosition.classList.add('ghost')
  newGhostPosition.setAttribute('id', ghost.name.toLowerCase())
}

function isThereAnyPointsLeft() {
  const pointsOnField =
    document.querySelectorAll('.point').length +
    document.querySelectorAll('.cherry').length +
    document.querySelectorAll('.lemon').length +
    document.querySelectorAll('.grape').length
  if (pointsOnField === 0) {
    stopGhostsMovement()
    stopPacmanMovement()
    won()
  }
}

function modalYesFunction() {
  playAgain()
  modal.close()
}

function modalNoFunction() {
  modal.close()
  startPacmanMovement()
  startGhostsMovement()
}

function startGhostsMovementAfterThreeSeconds() {
  setTimeout(startGhostsMovement, 3000)
}
