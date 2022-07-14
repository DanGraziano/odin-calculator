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

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.

function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };

  console.log(operate(1, 4, "*"))

// Number button clicking

const numSeven = document.querySelector(".row-two-7")
numSeven.addEventListener('click', () => {
    console.log("7")
});

const numEight = document.querySelector(".row-two-8")
numEight.addEventListener('click', () => {
    console.log("8")
});

const numNine = document.querySelector(".row-two-9")
numNine.addEventListener('click', () => {
    console.log("9")
});

const numFour = document.querySelector(".row-three-4")
numFour.addEventListener('click', () => {
    console.log("4")
});

const numFive = document.querySelector(".row-three-5")
numFive.addEventListener('click', () => {
    console.log("5")
});

const numSix = document.querySelector(".row-three-6")
numSix.addEventListener('click', () => {
    console.log("6")
});

const numOne = document.querySelector(".row-four-1")
numOne.addEventListener('click', () => {
    console.log("1")
});

const numTwo = document.querySelector(".row-four-2")
numTwo.addEventListener('click', () => {
    console.log("2")
});

const numThree = document.querySelector(".row-four-3")
numThree.addEventListener('click', () => {
    console.log("3")
});

const numZero = document.querySelector(".zero")
numZero.addEventListener('click', () => {
    console.log("0")
});

const decimal = document.querySelector(".row-five-decimal")
decimal.addEventListener('click', () => {
    console.log(".")
});
