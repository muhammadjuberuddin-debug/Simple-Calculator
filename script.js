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

