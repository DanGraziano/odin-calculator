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
let result = ""
let tempNum1Array = []
let tempNum2Array = []
let tempOperatorArray = []

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
    let percentResult = (num1 / 100).toString()
    displayValue.innerText = percentResult
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
                    console.log("Temp Num1 Array includes", tempNum1Array)
                    num1 = tempNum1Array.join("");
                    displayValue.innerText = num1;
                } 

                else {

                // Get second number after operator has been clicked
                    tempNum2Array.push(savedNumber);
                    console.log("Temp Num2 Array includes", tempNum2Array)
                    num2 = tempNum2Array.join("");
                    displayValue.innerText = num2;
                }
            });
        });
    }    
    // Register which operator has been clicked
    function getOperator() {   
        operatorButtons.forEach(operatorButtons => {
            operatorButtons.addEventListener('click', () => {
                operator = operatorButtons.value
                console.log("Operator selected is:", operator)
                displayValue.innerText = operator
                tempOperatorArray.push(operator);

                if ((tempNum1Array != "") && (tempNum2Array != "")) {
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
                    console.log("Running STRING calculation now!");
                    result = operate(num1, num2, tempOperator);
                    displayValue.innerText = result
                    tempNum1Array = [];
                    tempNum2Array = [];
                    num1 = 0;
                    num2 = 0;
                    console.log("~~Temp Num1 Array includes:", tempNum1Array)
                    tempNum1Array.push(result);
                    console.log("~~Temp Num1 Array NOW includes:", tempNum1Array)
                    num1 = tempNum1Array.join("");
                }
            });
        });
    }

    function runCalculation() {
        equalsButton.addEventListener('click', function() {
            console.log("Num2 Array has been cleared")
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            displayValue.innerText = operate(num1, num2, operator);
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

