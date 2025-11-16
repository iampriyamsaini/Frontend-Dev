const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
let validNumbers = [];
let invalidNumbers = [];

console.log("=== CONVERSION REPORT ===\n");

for (let i = 0; i < apiData.length; i++) {
    const item = apiData[i];
    const numValue = Number(item);
    const boolValue = Boolean(item);
    const stringValue = String(item);
    console.log(`Index ${i}:`);
    console.log(`  Original:`, item);
    console.log(`  Number:`, numValue);
    console.log(`  Boolean:`, boolValue);
    console.log(`  String: "${stringValue}"`);
    if (!isNaN(numValue) && item !== " " && item !== null && item !== undefined) {
        validNumbers.push(numValue);
    } else {
        invalidNumbers.push(item);
    }

    console.log("-----------------------------------");
}

console.log("\n=== SUMMARY REPORT ===");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
