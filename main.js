// Variables
const guess = document.querySelector('.guess')
const result = document.querySelector('.result')
const buttonTry = document.querySelector('#buttonTry')
const buttonPlayAgain = document.querySelector('#buttonPlayAgain')
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

// Events
buttonTry.addEventListener('click', handleTryClick)
buttonPlayAgain.addEventListener('click', handlePlayAgain)

// Callback Functions
function toggleScreen() {
  guess.classList.toggle('hide')
  result.classList.toggle('hide')
}

function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    result.querySelector('h2').innerText = `You guessed in ${attempts} attempts`
  }

  inputNumber.value = ''
  attempts++
}

function handlePlayAgain() {
  toggleScreen()
  attempts = 1
}
﻿