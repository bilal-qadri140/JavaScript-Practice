# PROJECTS RELATED TO DOM (JS solutions)

## Project 1 (Background color changer)

```javascript
let buttons = document.querySelectorAll('.buttons');
let body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'green') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'pink') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```
## Project 2 (BMI Calculator)
```javascript
// select full form
const form = document.querySelector('form')

// adding eventListener
form.addEventListener('submit', (event) => {
    event.preventDefault() // stop sending value to server 
    // getting height and weight
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)

    let result = document.querySelector('.result') // select result element for showing result

    // checks for validity of data
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Enter valid height`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Enter valid weight`
    }
    else {
        let bmi = ((weight) / ((height * height) / 10000)).toFixed(2)
        let guide = ''
        if (bmi < 18.6)
            guide = "You are under weight"
        else if (bmi < 24.9)
            guide = "You are in normal range"
        else
            guide = "You are over weight"
        result.innerHTML = `<span>Result is: ${bmi}<br>${guide}</span>`
    }
})
```
## Project 3 (Digital Clock)
```javascript
let clock = document.querySelector('.clock')


setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    clock.innerHTML = date
},1000)
```
## Project 4 (Guess random number)
```javascript
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
```