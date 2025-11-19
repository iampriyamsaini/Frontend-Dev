function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    console.log(this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.getBranch = function() {
    console.log(this.branch);
};

const s = new Student("Shubh", "CSE");
s.getName();
s.getBranch();