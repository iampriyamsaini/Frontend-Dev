let expenses = [12000, 3000, 15000, 4000, 2500]; 
let totalExpense = 0;
for (let i = 0; i < expenses.length; i++) {
  totalExpense += expenses[i];
}
let averageExpense = totalExpense / expenses.length;
let taxRate = 0.10;
let finalAmount = totalExpense; 
finalAmount += finalAmount * taxRate; 
totalExpense = totalExpense.toFixed(2);
averageExpense = averageExpense.toFixed(2);
finalAmount = finalAmount.toFixed(2);
console.log("Monthly Expense Summary");
console.log("---------------------------");
console.log(`Total Expense: ₹${totalExpense}`);
console.log(`Average per Category: ₹${averageExpense}`);
console.log(`Final Amount (with 10% tax): ₹${finalAmount}`);
