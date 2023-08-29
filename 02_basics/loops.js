// for loop

for (let i = 1; i <= 10; i++) {
    // console.log(`Value of i in for loop is ${i}`);
}

// while loop
let i = 1
while (i <= 10) {
    // console.log(`Value of i in while loop is ${i}`);
    i++
}

// do while loop
let j = 1;
do {
    // console.log("value in do while loop ", j);
    j++
} while (j <= 10);

// forEach

const arr = [1, 2, 3, 4, 4, 5]

arr.forEach((item) => {
    // console.log(item);
})

const myCoding = [
    {
        java: "java",
        py: "python",
        js: "javascript"
    },
    {
        firstName: "bilal",
        lastName: "qadri",
        address: "sahiwal"
    },
    {
        java: "java",
        py: "python",
        js: "javascript"
    }
]

myCoding.forEach((item)=>{
    
    console.log(item[Object.keys(item)])
    // console.log(item.py)
})
