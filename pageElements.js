import { stopGhostsMovement } from './Ghost.js'
import { createGrid } from './helperFunctions.js'
import { pacmanObj, stopPacmanMovement } from './Pacman.js'

export const mainGrid = document.querySelector('.main-grid')
export const pointsEl = document.getElementById('points')
export const livesEl = document.getElementById('lives')
export const highestScoreEl = document.getElementById('high-score')
export const secondsLeft = document.getElementById('seconds-left')

export const modalYes = document.getElementById('modal-yes')
export const modalNo = document.getElementById('modal-no')


const playAgainButton = document.createElement('button')
playAgainButton.textContent = 'Play Again'
playAgainButton.addEventListener('click', playAgain)

export function won() {
  mainGrid.innerHTML = ''
  mainGrid.classList.remove('main-grid')
  mainGrid.classList.add('main-grid-win-lose')
  const youWonText = document.createElement('h3')
  youWonText.setAttribute('id', 'won')
  youWonText.textContent = 'You won :)'
  mainGrid.appendChild(youWonText)
  mainGrid.appendChild(playAgainButton)
}
export function lost() {
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