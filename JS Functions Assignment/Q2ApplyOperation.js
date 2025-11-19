function applyOperation(arr, op) {
    return arr.map(op);
}

console.log(applyOperation([1,2,3,4], n => n * 2));
console.log(applyOperation([1,2,3,4], n => n * n));