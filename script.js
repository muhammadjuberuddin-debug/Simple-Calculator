const display = document.getElementById('display');
const buttons = document.querySelector('.button-container');

let currentInput = '0';
let previousValue = null;
let operator = null;
let waitingForOperand = false;

function updateDisplay() {
    display.value = currentInput;
}

function showError() {
    currentInput = 'Error';
    previousValue = null;
    operator = null;
    waitingForOperand = true;
    updateDisplay();
}

function formatResult(num) {
    if (!isFinite(num)) return null;
    return parseFloat(num.toPrecision(12)).toString();
}

function compute(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '−': return a - b;
        case '×': return a * b;
        case '÷': return b === 0 ? null : a / b;
        default: return b;
    }
}

function inputDigit(digit) {
    if (currentInput === 'Error') {currentInput = '0'}
    if (waitingForOperand) {
        currentInput = digit;
        waitingForOperand = false;
    } else {
        currentInput = currentInput === '0' ? digit : currentInput + digit;
    }
    updateDisplay();
}