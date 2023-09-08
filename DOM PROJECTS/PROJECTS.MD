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


```