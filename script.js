// script.js
function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function calculateResult() {
    const display = document.getElementById('display');
    let expression = display.value;
    
    // Replace '%' with '/100' for percentage calculation
    expression = expression.replace(/%/g, '/100');

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
