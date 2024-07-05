import {
  bordersObj,
  areasWhereNotToPutPoints,
  areasWithExtraPoints,
  areasWithGhostEatingAttributes,
} from './constants.js'
import { ghosts } from './Ghost.js'
import { pacmanObj, resetPacmanPosition, stopPacmanMovement } from './Pacman.js'
import { livesEl, lost, mainGrid, pointsEl, secondsLeft } from './pageElements.js'

export const gameConfig = {
  secondsToEatGhosts: 20
}


export function createGrid() {
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

export function styleSwapper(current, next, ghost = null) {
  if (!ghost) {
    next.style.transform = current.style.transform
    pacmanObj.x = Number(next.dataset.x)
    pacmanObj.y = Number(next.dataset.y)
    current.classList.remove('pacman')
    next.classList.add('pacman')
    current.style.transform = ''
  } else {
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
}

export function findNextBlock(object) {
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

export function pointAdder(el) {
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

export function isExtraPoint(el) {
  return (
    el.classList.contains('cherry') ||
    el.classList.contains('grape') ||
    el.classList.contains('lemon')
  )
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

// export function checkIsNotCollision(ghost, pacman) {
//   if (
//     !(pacman.direction == 'left' && ghost.direction == 'right') &&
//     !(pacman.direction == 'right' && ghost.direction == 'left') &&
//     !(pacman.direction == 'up' && ghost.direction == 'down') &&
//     !(pacman.direction == 'down' && ghost.direction == 'up')
//   ) {
//     return true
//   }
//   return false
// }

export function handleCollision() {
  pacmanObj.lives--
  livesEl.textContent = pacmanObj.lives
  if (pacmanObj.lives === 0) {
    lost()
    return
  }
  resetPacmanPosition()
  stopPacmanMovement()
}

let timerInterval

export function startGhostEatingTimer() {
  stopGhostEatingTimer()
  const ghostValues = document.querySelectorAll('.ghost')
  ghostValues.forEach((g) => g.setAttribute('eatable', 'true'))
  ghostValues.forEach((g) => g.getAttribute('eatable'))
  ghosts.forEach((ghost) => {
    ghost.isEatable = true
  })
  gameConfig.secondsToEatGhosts = 20
  secondsLeft.textContent = `${gameConfig.secondsToEatGhosts} seconds left`
  timerInterval = setInterval(() => {
    gameConfig.secondsToEatGhosts--
    secondsLeft.textContent = `${gameConfig.secondsToEatGhosts} seconds left`
    if (gameConfig.secondsToEatGhosts <= 0) {
      stopGhostEatingTimer()
    }
  }, 1000)
}
export function stopGhostEatingTimer() {
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


export function playAgain() {
  mainGrid.innerHTML = ''
  mainGrid.classList = ''
  mainGrid.classList.add('main-grid')
  pacmanObj.resetAll()
  stopGhostsMovement()
  pointsEl.textContent = pacmanObj.points
  livesEl.textContent = pacmanObj.lives
  createGrid()
}