"use strict";

console.log("=== ORIGINAL VERSION WITH NORMAL FUNCTION ===");
function outer() {
    debugger;   
    console.log(count);
    var count = 5;     
    function inner() {
        debugger;  
        console.log(count); 
        var count = 10;    
    }

    inner();
}

outer();


console.log("\n=== INNER ARROW FUNCTION VERSION ===");

function outerArrow() {
    debugger;

    console.log(count); 
    var count = 5;
    const inner = () => {
        debugger;

        console.log(count); 
        var count = 20;
    };

    inner();
}

outerArrow();
console.log("\n=== END OF Q10 ===");
