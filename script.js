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

