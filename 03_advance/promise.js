
// // methode 1
const promiseOne = new Promise(function (resolve, reject) {
    // do async
    // DB call, Cryptographi, network call etc

    setTimeout(() => {
        resolve()
        console.log('Asyn are done');
    }, 1000);
})

promiseOne.then(function () {
    console.log('promise consumed!');
})


// //method 2

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('async 2 done');
        resolve()
    }, 1000);
}).then(function () {
    console.log('promise 2 consumed');
})


//method 3

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'bilal', email: 'bilal@example.com' })
    }, 1000)
})

promiseThree.then((data) => {
    console.log(data);
    console.log(data.name)
})

// method 4

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ name: 'bilal', email: 'bilal@gmail.com' })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally executed');
})

// method 5

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = false
        if (!error) {
            resolve({ email: 'bilal@gmail.com', password: '123' })
        }
        else {
            reject('Something went wrong!')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const data = await promiseFive
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// fetch 
async function getAllUser(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data.followers);
}
getAllUser()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((res)=>{
    // const data = res.json()
    // console.log(data);
    return res.json()
}).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
