
import {
  pointsEl,
  highestScoreEl,
  modalYes,
  modalNo,
  livesEl,
  playAgain,
} from './pageElements.js'

import {
  pacmanObj,
  startPacmanMovement,
  changePacmanDirection,
  stopPacmanMovement,
} from './Pacman.js'
import { ghosts, startGhostsMovement, stopGhostsMovement } from './Ghost.js'
import {
  createGrid,
} from './helperFunctions.js'

pointsEl.textContent = 0
if (!localStorage.getItem('highScore')) {
  localStorage.setItem('highScore', 0)
}
highestScoreEl.textContent = Number(localStorage.getItem('highScore'))
const modal = document.querySelector('.modal')

modalYes.addEventListener('click', modalYesFunction)
modalNo.addEventListener('click', modalNoFunction)


livesEl.textContent = pacmanObj.lives

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





document.addEventListener('keydown', function (e) {
  if (modal.open) {
    if (e.key === 'Escape') {
      startPacmanMovement()
      startGhostsMovement()
    }
  }
})




function modalYesFunction() {
  playAgain()
  modal.close()
}

function modalNoFunction() {
  modal.close()
  startPacmanMovement()
  startGhostsMovement()
}

document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    stopPacmanMovement()
    stopGhostsMovement()
  } else {
    startPacmanMovement()
    startGhostsMovement()
  }
})
