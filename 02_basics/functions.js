//--------------arrow functions-------------

// const fun = (a, b) => {  //must be write return statement for return something
//     return a + b;
// }

// const addTwoNumber = (a,b) => (a+b) // return by default

// console.log(addTwoNumber(12, 32))



//-----------------Immediately Invoked Function Expressions IIFE-------------------

(
    function muFunction(msg) {
        console.log("function Invok", msg);
    }
)("Successfuly!");

(
    (para) => { console.log("function Invok", para); }
)("para")