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