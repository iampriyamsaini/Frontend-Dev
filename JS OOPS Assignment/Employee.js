class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} works in ${this.department}`);
    }
}

class Manager extends Employee {
    work() {
        console.log(`${this.name} manages the ${this.department}`);
    }
}

const e1 = new Employee("John", "Sales");
const m1 = new Manager("Rita", "IT");

e1.work();
m1.work(); 
