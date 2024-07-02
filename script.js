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
  3: [2, 22],
  8: [7, 17],
  46: [7, 17],
  56: [7, 17],
  71: [2, 22],
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
modalYes.addEventListener('click', function () {
  playAgain()
  modal.close()
})
modalNo.addEventListener('click', function () {
  modal.close()
  startPacmanMovement()
  startGhostMovement()
})
let pacmanInterval
let ghostsInterval
let timerInterval
let secondsToEatGhosts = 20
class Pacman {
  constructor() {
    this.direction = 'left'
    this.x = 37
    this.y = 12
    this.hasStarted = !1
    this.isMoving = !1
    this.lives = 3
    this.points = 0
  }
  resetAll() {
    this.direction = 'left'
    this.x = 37
    this.y = 12
    this.hasStarted = !1
    this.isMoving = !1
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
    this.originDirection = direction
    this.originX = x
    this.originY = y
    this.isEatable = !1
    this.color = color
    this.smart = isSmart
  }
  resetPosition() {
    this.direction = this.originDirection
    this.x = this.originX
    this.y = this.originY
  }
}
const pacmanObj = new Pacman()
const ghost1 = new Ghost('Ghost1', 'left', 'red', 36, 22, !0)
const ghost2 = new Ghost('Ghost2', 'up', 'purple', 37, 22, !1)
const ghost3 = new Ghost('Ghost3', 'up', 'green', 38, 22, !1)
const ghost4 = new Ghost('Ghost4', 'right', 'cyan', 39, 22, !0)
const ghosts = [ghost1, ghost2, ghost3, ghost4]
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
      } else if (i == 22 && j >= 36 && j <= 39) {
        child.classList.add('ghost')
        assignGhostId(j, i, child)
      }
      if (i < 2 || i > 22 || j < 3 || j > 71 || bordersObj[j]?.includes(i)) {
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
      pacmanObj.isMoving = !0
      pacmanObj.hasStarted = !0
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
    pacmanObj.isMoving = !0
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
        if (ghost1.isEatable) {
          const currGhost = ghosts.filter(
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
    pacmanObj.isMoving = !1
    clearInterval(pacmanInterval)
  }
}
function moveGhost(ghost) {
  const path =
    ghost.smart === !0
      ? findSmartPath(ghost, pacmanObj)
      : moveGhostSimple(ghost)
  if (path && path.length > 1) {
    const [nextX, nextY] = path[1]
    const nextBlock = document.querySelector(
      `.square[data-x="${nextX}"][data-y="${nextY}"]`
    )
    if (nextBlock.classList.contains('pacman')) {
      if (ghost.isEatable) {
        eatGhost(ghost)
      } else if (checkIsNotCollision(ghost, pacmanObj)) {
        handleCollision()
      }
    } else {
      const g = document.getElementById(ghost.name.toLowerCase())
      ghostAttributeSwapper(g, nextBlock, ghost)
      if (nextX > ghost.x) ghost.direction = 'right'
      else if (nextX < ghost.x) ghost.direction = 'left'
      else if (nextY > ghost.y) ghost.direction = 'down'
      else if (nextY < ghost.y) ghost.direction = 'up'
    }
  }
}
function moveGhostSimple(ghost) {
  let nextBlock = findNextBlock(ghost)
  let attempts = 0
  const maxAttempts = 4
  while (
    (!nextBlock || nextBlock.classList.contains('border')) &&
    attempts < maxAttempts
  ) {
    ghost.direction = possibleDirections[Math.floor(Math.random() * 4)]
    nextBlock = findNextBlock(ghost)
    attempts++
  }
  if (
    nextBlock &&
    !nextBlock.classList.contains('border') &&
    !nextBlock.classList.contains('ghost')
  ) {
    if (nextBlock.classList.contains('pacman')) {
      if (ghost.isEatable) {
        eatGhost(ghost)
      } else if (checkIsNotCollision(ghost, pacmanObj)) {
        handleCollision()
      }
    } else {
      const g = document.getElementById(ghost.name.toLowerCase())
      ghostAttributeSwapper(g, nextBlock, ghost)
    }
  }
}
function findSmartPath(ghost, pacman) {
  const queue = [[ghost.x, ghost.y]]
  const visited = new Set()
  const parent = new Map()
  while (queue.length > 0) {
    const [x, y] = queue.shift()
    const key = `${x},${y}`
    if (x === pacman.x && y === pacman.y) {
      const path = []
      let current = key
      while (current) {
        const [cx, cy] = current.split(',').map(Number)
        path.unshift([cx, cy])
        current = parent.get(current)
      }
      return path
    }
    if (visited.has(key)) continue
    visited.add(key)
    const directions = [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ]
    for (const [dx, dy] of directions) {
      const newX = x + dx
      const newY = y + dy
      const newKey = `${newX},${newY}`
      if (!visited.has(newKey)) {
        const nextBlock = document.querySelector(
          `.square[data-x="${newX}"][data-y="${newY}"]`
        )
        if (
          nextBlock &&
          !nextBlock.classList.contains('border') &&
          !nextBlock.classList.contains('ghost')
        ) {
          queue.push([newX, newY])
          parent.set(newKey, key)
        }
      }
    }
  }
}
function startGhostMovement() {
  ghostsInterval = setInterval(() => {
    ghosts.forEach((ghost) => moveGhost(ghost))
  }, moveSpeedMs)
}
function stopGhostMovement() {
  if (ghostsInterval) {
    clearInterval(ghostsInterval)
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
  stopGhostMovement()
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
  const ghost =
    ghosts[ghosts.findIndex((g) => g.x === pacmanObj.x && g.y === pacmanObj.y)]
  ghost.resetPosition()
  const ghostElement = document.getElementById(ghost.name.toLowerCase())
  ghostElement.classList.add('ghost')
}
function resetPacmanPosition() {
  const currentPacman = document.querySelector('.pacman')
  currentPacman.classList.remove('pacman')
  currentPacman.style = ''
  pacmanObj.x = 37
  pacmanObj.y = 12
  pacmanObj.isMoving = !1
  const basePosition = document.querySelector(
    `.square[data-x="${pacmanObj.x}"][data-y="${pacmanObj.y}"]`
  )
  basePosition.classList.add('pacman')
}
document.addEventListener('keydown', function (e) {
  if (modal.open) {
    if (e.key === 'Escape') {
      startPacmanMovement()
      startGhostMovement()
    }
  }
})
function assignGhostId(x, y, child) {
  switch (x) {
    case 36:
      child.setAttribute('id', 'ghost1')
      ghost1.x = x
      ghost1.y = y
      break
    case 37:
      child.setAttribute('id', 'ghost2')
      ghost2.x = x
      ghost2.y = y
      break
    case 38:
      child.setAttribute('id', 'ghost3')
      ghost3.x = x
      ghost3.y = y
      break
    case 39:
      child.setAttribute('id', 'ghost4')
      ghost4.x = x
      ghost4.y = y
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
    return !0
  }
  return !1
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
    ghost.isEatable = !0
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
    ghost.isEatable = !1
  })
}
function eatGhost(ghost) {
  pacmanObj.points += 200
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
    won()
  }
}
