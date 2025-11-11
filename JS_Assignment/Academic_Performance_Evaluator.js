let marks = [88, 72, 91, 65, 78]; 
let isFailed = marks.some(mark => mark < 35);
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}
let average = totalMarks / marks.length;
let percentage = average; 
let result;
if (isFailed) {
  result = "Detained (Failed in one or more subjects)";
} 
else if (percentage >= 85) {
  result = "Promoted with Distinction";
} 
else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} 
else {
  result = "Detained";
}
console.log(" Academic Performance Report");
console.log("--------------------------------");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average: ${average.toFixed(2)}%`);
console.log(`Result: ${result}`);
