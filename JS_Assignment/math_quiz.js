let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ['+', '-', '*', '/'];
let randomIndex = Math.floor(Math.random() * operators.length);
let operator = operators[randomIndex];
let correctAnswer;

switch (operator) {
  case '+':
    correctAnswer = num1 + num2;
    break;

  case '-':
    correctAnswer = num1 - num2;
    break;

  case '*':
    correctAnswer = num1 * num2;
    break;

  case '/':
    correctAnswer = (num1 / num2).toFixed(2); 
    break;

  default:
    console.log("Invalid operator!");
}
console.log("Random Math Quiz Generator");
console.log("--------------------------------");
console.log(`Question: What is ${num1} ${operator} ${num2}?`);
console.log(`Correct Answer: ${correctAnswer}`);
