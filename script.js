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
        let number = parseInt(buttonText);
        console.log("Parsed number:", number);
        if (operatorSelected && !secondNum) {
            // Start inputting the second number
            // Clear the display and set operatorSelected back to false for next input
            displayValue = ""; // Clear the display
        }
        if (!isNaN(number)) {
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

