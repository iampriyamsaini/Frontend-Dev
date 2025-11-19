function makeMultiplier(multiplier) {
    return function(n) {
        return n * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5));