const calculator = document.getElementById("calculator");
const result = document.getElementById("result");

let previousOperand = "";
let currentOperand = "";
let operation;

function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand += number;
}

function chooseOperation(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case "+":
            computation = prev + current;
            break;
        case "-":
            computation = prev - current;
            break;
        case "X":
            computation = prev * current;
            break;
        case "/":
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation.toFixed(2).toString();
    operation = undefined;
    previousOperand = "";
}

function clear() {
    previousOperand = "";
    currentOperand = "";
    operation = undefined;
}

const numberButtons = document.querySelectorAll(".numeric");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
        updateDisplay();
    });
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        chooseOperation(button.textContent);
        updateDisplay();
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    compute();
    updateDisplay();
});

document.querySelector(".no-right-radius").addEventListener("click", () => {
    if (currentOperand.length === 0) return;
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
});

document.querySelector(".operation:nth-of-type(1)").addEventListener("click", () => {
    clear();
    updateDisplay();
});

function updateDisplay() {
    result.value = currentOperand === "" ? "0" : currentOperand;
}

