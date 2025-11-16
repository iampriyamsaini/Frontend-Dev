"use strict";

function demo(a, b) {
    let total = 10;
    const obj = { value: total };
    delete obj.value;     

    console.log("Function ran successfully");
}

demo(5, 10);
