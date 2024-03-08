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

// Variables to store numbers for calculation
let firstNum;
let secondNum;

// Variable to store the operator
let operator;

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



const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {
    button.addEventListener("click", (event) => {
        console.log("Clicked button text content:", button.textContent);
        let buttonText = button.textContent
        let number = parseInt(buttonText);
        console.log("Parsed number:", number);
        if (!isNaN(number)) {
            console.log("Condition met: It's a number");
            displayValue = "";
            const displayElement = document.querySelector(".display");
            displayValue = button.textContent;
            displayElement.textContent = displayValue
            console.log(displayValue);
        }
    });
});



// 434530