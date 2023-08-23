
// three types of errors we discuss
// 1. Syntax Error
// 2. Reference Error 
// 3. Type Error


// function addTwoNums(a, b) {
//     console.log(a+b);
// }
// addTwoNums() // NaN


// console.log("hello world); // SyntaxError: Invalid or unexpected token

// console.log(age); // ReferenceError: age is not defined

// "hello".pop() //TypeError: "hello".pop is not a function


// ------------------------Exception Handling-----------------------

function addition(a, b) {
    try {
        if (typeof a != "number") {
            throw new ReferenceError("First argument is not a number")
        }
        else if (typeof b != "number") {
            console.log("Before error");
            throw new Error("Second argument is not a number")
            console.log("After error");
        }
        else {
            console.log(a + b);
        }
    } catch (err) {
        console.log(err);
    }
}

addition("1", 2)