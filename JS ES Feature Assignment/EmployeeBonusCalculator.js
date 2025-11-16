"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    if (!emp.name || emp.salary === undefined || emp.years === undefined) {
      throw new Error(`Missing property in employee at index ${i}`);
    }
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error(`Invalid number format for employee ${emp.name}`);
    }
    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
    console.log(`
-----------------------------------------
Employee: ${emp.name}
Salary: ₹${salary}
Years of Experience: ${years}
Bonus Earned: ₹${bonus.toFixed(2)}
-----------------------------------------
    `);

  } catch (error) {
    console.log(`Error for employee index ${i}: ${error.message}`);
  }
}
