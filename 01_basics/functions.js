// function is block of code that is executes when some one is invoke them

function myFunction(a, b) {
    return a * b;
}


console.log("Output from my Function is ", myFunction(12, 5)); //60


// Function Expressions

let x = function (a, b) { return a * b };

console.log(x(11,3)); //33




// javaScript arguments 
function findMax()
{
    let max = -Infinity;
    for(let i = 0; i<arguments.length; i++)
    {
        if(arguments[i] > max)
            max = arguments[i];
    }
    return max;
}

console.log("Maximum from all ",findMax(12,11,10,5,12,32,3,55)); // 55