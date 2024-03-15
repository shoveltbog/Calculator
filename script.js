// operator functions
const add = function(a,b) {
    return a + b;
}

const subtract = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

// function to calculate two numbers with an operator
const operate = function(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            return "Error: Invalid operator";
    }
}

// Variables to store numbers for calculation
let firstNum = "";
let secondNum = "";

// Variable to store the operator
let operator = "";

// Flag to indicate whether an operator is selected
let operatorSelected = false;

let displayValue = "";

let intermediateResult = '';

// handle number button clicks to display numbers and store values
const numButtons = document.querySelectorAll(".button");

numButtons.forEach(function(button) {
    button.addEventListener("click", (event) => {
        console.log("Clicked button text content:", button.textContent);
        let buttonText = button.textContent;
        if (operatorSelected && !secondNum && displayValue !== '0.') {
            displayValue = ""; // Clear the display for the second number if it's not set and the display value is not '0.'
        }
        if (!isNaN(parseInt(buttonText))) {
            console.log("Condition met: It's a number");
            const displayElement = document.querySelector(".display");
            displayValue += buttonText;
            if (operator === "") {
                firstNum = parseFloat(displayValue); // Update firstNum
            } else {
                secondNum = parseFloat(displayValue); // Update secondNum
            }
            displayElement.textContent = displayValue; // Update display with displayValue
            console.log("display value:", displayValue);
            console.log("firstNum:", firstNum);
            console.log("secondNum:", secondNum);
            console.log("Type of firstNum:", typeof firstNum);
            console.log("Type of secondNum:", typeof secondNum);
        }
    });
});

// handle operator button clicks
const operatorButtons = document.querySelectorAll(".operator");


operatorButtons.forEach(function(operatorButton) { 
    operatorButton.addEventListener("click", (event) => {
        if (firstNum !== "" && operatorSelected && secondNum !== "") {
            intermediateResult = operate(firstNum, secondNum, operator);
            const displayElement = document.querySelector(".display");
            displayElement.textContent = intermediateResult;
            firstNum = intermediateResult;
            secondNum = "";
        }
        
        operatorSelected = true;
        operator = operatorButton.textContent;
        displayValue = ""; // Clear displayValue after clicking an operator
        const displayElement = document.querySelector(".display");
        displayElement.textContent = intermediateResult !== '' ? intermediateResult : firstNum;
    });
});

// handle equal button clicks to use operate function
const equalButton = document.querySelector('.equals');

equalButton.addEventListener("click", (event) => {
    displayValue = "";
    equalValue = operate(firstNum, secondNum, operator);
    const displayElement = document.querySelector(".display");
    displayElement.textContent = equalValue;
    // check if end of operation between two numbers and if so calculate next number based of the operations of the first 2
    if (operatorSelected && secondNum) {
        intermediateResult = operate(firstNum, secondNum, operator);
        console.log("intermediateResult:", intermediateResult);
        console.log("Type of intermediateResult:", typeof intermediateResult);
        firstNum = intermediateResult;
        displayElement.textContent = firstNum;
        secondNum = '';
        operatorSelected = true;
    }
});

// handle clear button click to clear all stored values and reset
const clearButton = document.querySelector('.clear');

clearButton.addEventListener("click", (event) => {
     firstNum = "";
     secondNum = "";
     operator = "";
     operatorSelected = false;
     displayValue = "";
     intermediateResult = '';
     const displayElement = document.querySelector(".display");
     displayElement.textContent = displayValue;
});

// handle decimal button click
const decimalButton = document.querySelector('.decimal');


decimalButton.addEventListener('click', () => {
    if (!displayValue || (displayValue === '0.' && !operatorSelected)) {
        // If no number has been entered before or if it's "0." and no operator has been selected,
        // set displayValue to "0."
        displayValue = '0.';
    } else if (!displayValue.includes('.')) {
        // If there's no decimal point already, append it to displayValue
        displayValue += '.';
    }
    // Update the display
    const displayElement = document.querySelector(".display");
    displayElement.textContent = displayValue;
});