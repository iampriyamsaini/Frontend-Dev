"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        const bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
    }
}

const employees = [
    new Employee(1, "Alice", "Engineering", 5000),
    new Employee(2, "Bob", "Marketing", 4500),
    new Employee(3, "Charlie", "Sales", 4000),
    new Employee(4, "David", "HR", 3500),
    new Employee(5, "Eve", "Finance", 6000),
];

