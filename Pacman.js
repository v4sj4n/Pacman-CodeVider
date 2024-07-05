import { moveSpeedMs } from './constants.js'
import { possibleDirections } from './constants.js'
import { ghosts } from './Ghost.js'
import {
  findNextBlock,
  handleCollision,
  isExtraPoint,
  pointAdder,
  startGhostEatingTimer,
  stopGhostEatingTimer,
  styleSwapper,
} from './helperFunctions.js'
import { pointsEl, secondsLeft } from './pageElements.js'
import {  gameConfig } from './helperFunctions.js'

let pacmanInterval

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

export const pacmanObj = new Pacman()

export function changePacmanDirection(direction) {
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
export function startPacmanMovement() {
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
          handleCollision()
          return
        }
      }
      styleSwapper(pm, nextBlock)
    }
  }, moveSpeedMs)
}
export function stopPacmanMovement() {
  if (pacmanInterval) {
    pacmanObj.isMoving = false
    clearInterval(pacmanInterval)
    pacmanInterval = null
  }
}

function eatGhost(ghost) {
  pacmanObj.points += 100
  pointsEl.textContent = pacmanObj.points
  gameConfig.secondsToEatGhosts -= 5
  if (gameConfig.secondsToEatGhosts < 1) {
    stopGhostEatingTimer()
    secondsLeft.textContent = ''
  } else {
    secondsLeft.textContent = `${gameConfig.secondsToEatGhosts} seconds left`
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


export function resetPacmanPosition() {
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