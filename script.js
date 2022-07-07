/*


Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key. 
Also needs a display and a clear button
*/ 


// Add function

const add = function(a, b)  {
    return a + b;
}

console.log(add(1, 5))

// Subtract function

const subtract = function(a, b) {
    return a - b;
}

console.log(subtract(5, 1))

// Multiply function

const multiply = function(a, b) {
    return a * b;
}

console.log(multiply(5, 5))

// Divide function

const divide = function(a, b) {
    return a / b;
}

console.log(divide(6, 2))

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = function(a, b) {
    return (add(a, b))
}

console.log(operate(10, 2))