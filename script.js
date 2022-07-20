// DOM Elements
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const displayValue = document.querySelector('.display');
const percentButton = document.querySelector('.percent')
const equalsButton = document.querySelector('.equals');

// Global variables

let num1 = ""
let num2 = ""
let operator = ""
let savedNumber = ""
let tempNum1Array = []
let tempNum2Array = []
let result = null

// Math functions for adding, subtracting, multiplying, and dividing

const add = function(num1, num2)  {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    if( num2 == 0 ){
        return "Error: Try again"
    } else {
        return num1 / num2
    }
}

// Overall function to choose proper math function

function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
        break;
      case "-":
        return subtract(num1, num2);
        break;
      case "x":
        return multiply(num1, num2);
        break;
      case "/":
        return divide(num1, num2);
    }
  };

allClearButton.addEventListener('click', function() {
    location.reload()
});

function inputPercent() {
    displayValue.innerHTML = (num1 / 100)
}

percentButton.addEventListener('click', function() {
    inputPercent()
})


function runCalculator() {
     // Register which number has been clicked
    function getNumbersClicked() {
        numberButtons.forEach(numberButtons => {
            numberButtons.addEventListener('click', () => {
                savedNumber = numberButtons.value
                console.log("Saved number is", savedNumber)
                // Get first number before operator has been clicked
                if (operator === "") {
                    tempNum1Array.push(savedNumber);
                    console.log("Temp Num1 Array included", tempNum1Array)
                    num1 = tempNum1Array.join("");
                    displayValue.innerHTML = num1;
                } 
                
                else {

                // Get second number after operator has been clicked
                    tempNum2Array.push(savedNumber);
                    console.log("Temp Num2 Array included", tempNum2Array)
                    num2 = tempNum2Array.join("");
                    displayValue.innerHTML = num2;
                }

            });
        });
    }    
    // Register which operator has been clicked
    function getOperator() {   
        operatorButtons.forEach(operatorButtons => {
            operatorButtons.addEventListener('click', () => {
                operator = operatorButtons.value
                displayValue.innerHTML = operator
            });
        });
    }

    function runCalculation() {
        equalsButton.addEventListener('click', function() {
            tempNum2Array = []
            num2 = parseFloat(num2);
            if (result != null) { 
                num1 = result
            }
            else {
                num1 = parseFloat(num1);
            }
            result = operate(num1, num2, operator);
            displayValue.innerHTML = result
        })
    }



    getNumbersClicked();
    getOperator();
    runCalculation(); 

}
runCalculator();





/*
if(displayValue.length > 10) {
    display.innerText = displayValue.substring(0, 10);
    */