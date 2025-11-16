"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}
function calculate(op, a, b) {
    switch (op) {
        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "divide":
            if (b === 0) {
                throw new Error("DivideByZeroError: Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("NegativeRootError: Cannot take root of negative number");
            }
            return Math.sqrt(a);

        default:
            throw new InvalidOperationError(`Invalid operation: ${op}`);
    }
}
for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    try {
        const result = calculate(op, num1, num2);

        console.log(`
-----------------------------------------
Operation: ${op}
Input: num1 = ${num1}, num2 = ${num2}
Result: ${result}
Status: SUCCESS ✓
-----------------------------------------
        `);

    } catch (err) {
        console.log(`
-----------------------------------------
Operation: ${op}
Input: num1 = ${num1}, num2 = ${num2}
Error: ${err.name} - ${err.message}
Status: FAILED ✗
-----------------------------------------
        `);
    }
}
