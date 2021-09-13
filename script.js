const d20Dice = document.getElementById('d20')
const d12Dice = document.getElementById('d12')
const d10Dice = document.getElementById('d10')
const d8Dice = document.getElementById('d8')
const d6Dice = document.getElementById('d6')
const d4Dice = document.getElementById('d4')

const d20Btn = document.getElementById('d20-btn')
const d12Btn = document.getElementById('d12-btn')
const d10Btn = document.getElementById('d10-btn')
const d8Btn = document.getElementById('d8-btn')
const d6Btn = document.getElementById('d6-btn')
const d4Btn = document.getElementById('d4-btn')
const resetBtn = document.getElementById('reset')

function rollDice(dice, sides) {
    dice.textContent = Math.floor(Math.random()*sides) + 1
}

d20Btn.addEventListener('click', function(){
    rollDice(d20Dice, 20)
    d20Dice.classList.add('active')
    d12Dice.classList.remove('active')
    d10Dice.classList.remove('active')
    d8Dice.classList.remove('active')
    d6Dice.classList.remove('active')
    d4Dice.classList.remove('active')
})


d12Btn.addEventListener('click', function() {
    rollDice(d12Dice, 12)
    d20Dice.classList.remove('active')
    d12Dice.classList.add('active')
    d10Dice.classList.remove('active')
    d8Dice.classList.remove('active')
    d6Dice.classList.remove('active')
    d4Dice.classList.remove('active')
})

d10Btn.addEventListener('click', function() {
    rollDice(d10Dice, 10)
    d20Dice.classList.remove('active')
    d12Dice.classList.remove('active')
    d10Dice.classList.add('active')
    d8Dice.classList.remove('active')
    d6Dice.classList.remove('active')
    d4Dice.classList.remove('active')
})

d8Btn.addEventListener('click', function() {
    rollDice(d8Dice, 8)
    d20Dice.classList.remove('active')
    d12Dice.classList.remove('active')
    d10Dice.classList.remove('active')
    d8Dice.classList.add('active')
    d6Dice.classList.remove('active')
    d4Dice.classList.remove('active')
})

d6Btn.addEventListener('click', function() {
    rollDice(d6Dice, 6)
    d20Dice.classList.remove('active')
    d12Dice.classList.remove('active')
    d10Dice.classList.remove('active')
    d8Dice.classList.remove('active')
    d6Dice.classList.add('active')
    d4Dice.classList.remove('active')
})

d4Btn.addEventListener('click', function() {
    rollDice(d4Dice, 4)
    d20Dice.classList.remove('active')
    d12Dice.classList.remove('active')
    d10Dice.classList.remove('active')
    d8Dice.classList.remove('active')
    d6Dice.classList.remove('active')
    d4Dice.classList.add('active')
})

resetBtn.addEventListener('click', function() {
    d20Dice.classList.remove('active')
    d12Dice.classList.remove('active')
    d10Dice.classList.remove('active')
    d8Dice.classList.remove('active')
    d6Dice.classList.remove('active')
    d4Dice.classList.remove('active')

    d20Dice.textContent = 0
    d12Dice.textContent = 0
    d10Dice.textContent = 0
    d8Dice.textContent = 0
    d6Dice.textContent = 0
    d4Dice.textContent = 0
})

