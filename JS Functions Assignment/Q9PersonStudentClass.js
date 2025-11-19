class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    getBranch() {
        console.log(this.branch);
    }
}

const st = new Student("Shubh", "CSE");
st.getName();
st.getBranch();