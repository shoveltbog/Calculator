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
        return "Error: Division by zero";
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

// handle number button clicks to display numbers and store values
const numButtons = document.querySelectorAll(".button");

numButtons.forEach(function(button) {
    button.addEventListener("click", (event) => {
        console.log("Clicked button text content:", button.textContent);
        let buttonText = button.textContent;
        if (operatorSelected && !secondNum) {
            displayValue = ""; // Clear the display fro second number if not set
        }
        if (!isNaN(parseInt(buttonText))) {
            console.log("Condition met: It's a number");
            const displayElement = document.querySelector(".display");
            displayValue += button.textContent;
            if (!operatorSelected) {
                firstNum += button.textContent;
            } else {
                secondNum += button.textContent;
            };
            displayElement.textContent = displayValue
            console.log("display value:", displayValue);
            console.log("firsNum:", firstNum);
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
        operatorSelected = true;
        console.log("Clicked button text content:", operatorButton.textContent);
        let operatorText = operatorButton.textContent;
        console.log("Operator:", operatorText);
        const displayElement = document.querySelector(".display");
        operator = operatorText;
        displayElement.textContent = operatorText
        console.log(operatorText);
    });
});

// handle equal button clicks to use operate function
const equalButton = document.querySelector('.equals');

equalButton.addEventListener("click", (event) => {
    displayValue = "";
    firstNum = parseInt(firstNum);
    secondNum = parseInt(secondNum);
    equalValue = operate(firstNum, secondNum, operator);
    const displayElement = document.querySelector(".display");
    displayElement.textContent = equalValue;
    firstNum = '';
    secondNum = '';
    operatorSelected = false;
});

