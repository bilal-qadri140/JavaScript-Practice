let random = parseInt(Math.random() * 5 + 1)
// console.log(random);
let input = document.querySelector('.input')
let submit = document.querySelector('#btn')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true

if (playGame) {
    console.log('hello');
    submit.addEventListener('click', function (event) {
        console.log('event');
        event.preventDefault()
        let guess = parseInt(input.value)
        validateGuess(guess)
    });
}

function validateGuess(guess) {
    console.log(random);
    if (isNaN(guess)) {
        alert('Please enter a valid number.')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    } else if (guess > 5) {
        alert('Please enter a number less than 6')
    } else {
        prevGuess.push(guess)
        if (numGuess === 5) {
            displayGuess(guess);
            displayMessage('Game over.')
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage('You guessed right')
        endGame()
    } else if (guess < random) {
        displayMessage('You guessed TOO low')
    } else if (guess > random) {
        displayMessage('You guessed TOO high')
    }
}

function displayGuess(guess) {
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${6 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame() {
    input.value = ''
    input.setAttribute('disabled', '')
    submit.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', () => {
        lowOrHi.innerHTML = ''
        input.value = ''
        guessSlot.innerHTML = ''
        prevGuess = []
        numGuess = 1
        remaining.innerHTML = `${6 - numGuess}`
        input.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}