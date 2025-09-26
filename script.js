function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if(!b) return NaN;
    return a / b;
}

function operate(a, b, func) {
    switch(func) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
    }
    return divide(a, b);
}

let num1 = "";
let num2 = "";
let operator = "";

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");

numbers.forEach(item => item.addEventListener("click", (e) => {
    if(operator) {
        num2 += e.target.textContent;
        display.textContent = num2;
    }
    else {
        num1 += e.target.textContent;
        display.textContent = num1;
    }
}))

operators.forEach(item => item.addEventListener("click", (e) => {
    if(num2) {
        num1 = String(operate(+num1, +num2, operator));
        num2 = "";
        display.textContent = num1;
    }
    operator = e.target.textContent;
}))

equal.addEventListener("click", (e) => {
    num2 ? display.textContent = operate(+num1, +num2, operator)
        : display.textContent = num1;
    num1 = "";
    num2 = "";
    operator = "";
})

clear.addEventListener("click", (e) => {
    display.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
})