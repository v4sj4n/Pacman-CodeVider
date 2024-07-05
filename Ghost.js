import { moveSpeedMs, possibleDirections } from "./constants.js"
import { findNextBlock, handleCollision, styleSwapper } from "./helperFunctions.js"
import { pacmanObj } from "./Pacman.js"

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

  export const ghosts = [
    new Ghost('Ghost1', 'left', 'red', 36, 21, true),
    new Ghost('Ghost2', 'up', 'purple', 37, 21, false),
    new Ghost('Ghost3', 'up', 'green', 38, 21, true),
    new Ghost('Ghost4', 'right', 'cyan', 39, 21, false),
  ]

let ghostsInterval




function moveGhost(ghost) {
  const nextBlock = determineGhostMove(ghost)

  if (nextBlock && nextBlock.classList.contains('pacman')) {
    if (!ghost.isEatable) {
      handleCollision()
    }
  } else if (nextBlock) {
    const g = document.getElementById(ghost.name.toLowerCase())
    styleSwapper(g, nextBlock, ghost)
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
  
  export function startGhostsMovement() {
    ghostsInterval = setInterval(() => {
      ghosts.forEach((ghost) => moveGhost(ghost))
    }, moveSpeedMs * 1.25)
  }
  export function stopGhostsMovement() {
    if (ghostsInterval) {
      clearInterval(ghostsInterval)
      ghostsInterval = null
    }
  }