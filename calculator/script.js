let expression = "";

function appendToDisplay(value) {
    expression += value;
    document.getElementById("display").value = expression;
}

function appendOperator(operator) {
    if (expression.length === 0) return;
    const lastChar = expression[expression.length - 1];
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        expression = expression.slice(0, -1);
    }
    appendToDisplay(operator);
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    expression = "";
    document.getElementById("display").value = "";
}

function removeLast() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value = expression;
}
