// DOM Elements
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
const displayValue = document.querySelector('.display');
const deleteButton = document.querySelector('.delete')
const equalsButton = document.querySelector('.equals');

// Global variables

let num1 = ""
let num2 = ""
let operator = ""
let savedFirstNumber = ""
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
        return "Error: You can't divide by 0. Press AC and try again"
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
    console.log("All clear");
    location.reload()
});

deleteButton.addEventListener('click', function() {
    console.log("Delete");
    // Needs ability to delete previous number only
});


function runCalculator() {
     // Number button click that returns the number
    function getNumbersClicked() {
        numberButtons.forEach(numberButtons => {
            numberButtons.addEventListener('click', () => {
                savedFirstNumber = numberButtons.value
                // Get first number before operator has been clicked
                if (operator == "")  {
                    tempNum1Array.push(savedFirstNumber);
                    num1 = tempNum1Array.join("");
                    displayValue.innerHTML = num1;
                } 
                
                else {

                // Get second number after operator has been clicked
                    tempNum2Array.push(savedFirstNumber);
                    num2 = tempNum2Array.join("");
                    displayValue.innerHTML = num2;
                }

            });
        });
    }    
// Operator button click return the operator
    function getOperator() {   
        operatorButtons.forEach(operatorButtons => {
            operatorButtons.addEventListener('click', () => {
                operator = operatorButtons.value
                displayValue.textContent = operatorButtons.value
                tempOperatorArray.push(operator);
            });
        });
    }

    function runCalculation() {
        equalsButton.addEventListener('click', function() {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            displayValue.textContent = operate(num1, num2, operator);
        })
    }

    getNumbersClicked();
    getOperator();
    runCalculation(); 

}
runCalculator();












 /*
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function () {
        console.log(this.innerHTML)
    });
}
*/