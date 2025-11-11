let currentSalary = 50000; 
let incrementRate = 10;
let projectionTable = [];
for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100;
  let roundedSalary = Math.round(currentSalary);
  projectionTable.push({
    Year: `Year ${year}`,
    "Projected Salary (₹)": roundedSalary,
  });
}
console.log(" 5-Year Salary Projection");
console.log("--------------------------------");
console.table(projectionTable);
