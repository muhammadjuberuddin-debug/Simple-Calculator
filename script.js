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

function inputDecimel() {
    if (currentInput === 'Error') {currentInput = '0'};
    if (waitingForOperand) {
        currentInput = '0.';
        waitingForOperand = false;
    } else if (!currentInput.includes('.')) {
       currentInput += '.';
    }
    updateDisplay();
}

function chooseOperator(nextOp) {
    if (currentInput === 'Error') return;

    const inputValue = parseFloat(currentInput);

    if (operator && waitingForOperand) {
        operator = nextOp;
        return;
    }

    if (previousValue === null) {
        previousValue = inputValue;
    } else if (operator) {
        const result = compute(previousValue, inputValue, operator);
        const formatted = result === null ? null : formatResult(result);
        if (formatted === null) return showError();
        currentInput = formatted;
        previousValue = result;
        updateDisplay();       
    }

    operator = nextOp;
    waitingForOperand = true;
}

