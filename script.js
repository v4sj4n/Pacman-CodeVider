let points = 0
let pointsTotal = 0
const pointsEl = document.getElementById('points')
points.textContent = 0

class Pacman {
  constructor() {
    this.hasMoved = false
    this.direction = 'left'
    this.x = 37
    this.y = 12
  }
}
const pacmanObj = new Pacman()

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
const mainGrid = document.querySelector('.main-grid')

for (let i = 0; i < 25; i++) {
  for (let j = 0; j < 75; j++) {
    const child = document.createElement('div')
    child.classList.add('block')
    child.dataset.x = j
    child.dataset.y = i

    if (i == pacmanObj.y && j == pacmanObj.x) {
      child.classList.add('square', 'pacman')
      child.style.transform = 'rotate("0deg")'
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
        `.block[data-x="${pm.dataset.x}"][data-y="${Number(pm.dataset.y) + 1}"]`
      )
      break
    case 'ArrowLeft':
      if (pacmanObj.direction === 'left') {
        break
      }
      pacmanObj.direction = 'left'
      pm.style.transform = 'rotate(180deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${Number(pm.dataset.x) - 1}"][data-y="${pm.dataset.y}"]`
      )
      break
    case 'ArrowUp':
      if (pacmanObj.direction === 'up') {
        break
      }
      pacmanObj.direction = 'up'
      pm.style.transform = 'rotate(-90deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${pm.dataset.x}"][data-y="${Number(pm.dataset.y) - 1}"]`
      )
      break
    case 'ArrowRight':
      if (pacmanObj.direction === 'right') {
        break
      }
      pacmanObj.direction = 'right'

      pm.style.transform = 'rotate(0deg)'
      nextBlock = document.querySelector(
        `.block[data-x="${Number(pm.dataset.x) + 1}"][data-y="${pm.dataset.y}"]`
      )
      break
  }

  if (nextBlock && !nextBlock.classList.contains('border')) {
    if (nextBlock.classList.contains('point')) {
      nextBlock.classList.remove('point')
      pacmanObj.x = Number(nextBlock.dataset.x)
      pacmanObj.y = Number(nextBlock.dataset.y)
      console.log(pacmanObj)
      points++
      pointsEl.textContent = points
    } else {
      pacmanObj.x = Number(nextBlock.dataset.x)
      pacmanObj.y = Number(nextBlock.dataset.y)
      nextBlock.classList.add('pacman')
      nextBlock.style.transform = pm.style.transform
    }
    pm.classList.remove('pacman')
  }
})

setInterval(() => {
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
  console.log(nextBlock)

  if (nextBlock && !nextBlock.classList.contains('border')) {
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
    nextBlock.classList.add('pacman')
    pm.classList.remove('pacman')
  }
}, 250)
