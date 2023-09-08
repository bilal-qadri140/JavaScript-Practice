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