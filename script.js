const display = document.getElementById('display');
const buttons = document.querySelector('.button-container');

let currentInput = '0';
let previousValue = null;
let operator = null;
let waitingForOperand = false;

