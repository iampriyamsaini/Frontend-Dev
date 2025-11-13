const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];
departments.forEach(([name, score]) => {
  let level;
  if (score >= 90) level = 'Excellent';
  else if (score >= 75) level = 'Good';
  else if (score >= 60) level = 'Average';
  else level = 'Needs Improvement';
  console.log(`${name}: ${score} -> ${level}`);
});
