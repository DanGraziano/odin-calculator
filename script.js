// DOM Elements
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const displayValue = document.querySelector('.display');
const deleteButton = document.querySelector('.delete')
const equalsButton = document.querySelector('.equals');



// Sum of a,b

const add = function(a, b)  {
    return a + b;
}

console.log(add(1, 5))

// Subtract a,b

const subtract = function(a, b) {
    return a - b;
}

console.log(subtract(5, 1))

// Multiply a,b

const multiply = function(a, b) {
    return a * b;
}

console.log(multiply(5, 5))

// Divide a,b

const divide = function(a, b) {
    if( b == 0 ){
        return NaN
    } else {
        return a / b
    }
}

console.log(divide(6, 2))

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.

function operate(a, b, operator) {
    switch (operator) {
      case "+":
        return add(a, b);
        break;
      case "-":
        return subtract(a, b);
        break;
      case "*":
        return multiply(a, b);
        break;
      case "/":
        return divide(a, b);
    }
  };

  console.log(operate(1, 4, "+"))


// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.
