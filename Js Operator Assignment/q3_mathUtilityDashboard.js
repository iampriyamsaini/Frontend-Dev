let x = 16.75;
let rounded = Math.round(x);
let sqrtVal = Math.sqrt(x);
let powerCubed = Math.pow(x, 3);
let randomBetween10and50 = Math.floor(Math.random() * 41) + 10;
let summary = `
Math Dashboard for x = ${x}
- Rounded value: ${rounded}
- Square root: ${sqrtVal}
- x^3: ${powerCubed}
- Random number (10–50): ${randomBetween10and50}
`.trim();
console.log(summary);
