var firstOperand = null;
var operator = null;
var secondOperand = null;

function numberPressed(number) {
    var input = document.getElementById('input');
    input.value += number;
}

function operatorPressed(op) {
    var input = document.getElementById('input');
    firstOperand = parseFloat(input.value);
    operator = op;
    input.value = '';
}

function equalsPressed() {
    var input = document.getElementById('input');
    secondOperand = parseFloat(input.value);

    if (operator == '+') {
        input.value = firstOperand + secondOperand;
    } else if (operator == '-') {
        input.value = firstOperand - secondOperand;
    } else if (operator == '*') {
        input.value = firstOperand * secondOperand;
    } else if (operator == '/') {
        input.value = firstOperand / secondOperand;
    }

    firstOperand = null;
    operator = null;
    secondOperand = null;
}

function clearPressed() {
    var input = document.getElementById('input');
    input.value = '';
    firstOperand = null;
    operator = null;
    secondOperand = null;
}
