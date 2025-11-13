let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce((s, v) => s + v, 0);
let average = total / scores.length;
let passed = scores.filter(s => s >= 50).length;
let summary = `
Scores: ${scores.join(', ')}
Highest score: ${highest}
Lowest score: ${lowest}
Average score: ${average.toFixed(2)}
Passed (>=50): ${passed}
`.trim();
console.log(summary);
