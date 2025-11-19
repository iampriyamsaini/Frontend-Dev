function greetUser(name, cb) {
    console.log("Hello " + name);
    cb();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}
greetUser("Shubh", showEndMessage);
