"use strict";


const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];   
const invalidLog = []; 
const under18 = [];   
const debugMode = false;

function auditJSONLines(dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    const raw = dataArray[i];
    const line = i + 1; 

    try {
      if (debugMode) {
        debugger;
      }
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (parseErr) {
        throw new Error(`Invalid JSON (parse error): ${parseErr.message}`);
      }
      if (!parsed.hasOwnProperty("user") && !parsed.hasOwnProperty("age")) {
        throw new Error("Missing required keys: user, age");
      }
      if (!parsed.hasOwnProperty("user")) {
        throw new Error("Missing required key: user");
      }
      if (!parsed.hasOwnProperty("age")) {
        throw new Error("Missing required key: age");
      }

      const numericAge = Number(parsed.age);

      if (Number.isNaN(numericAge)) {
        throw new Error(`Invalid age value: cannot convert "${parsed.age}" to Number`);
      }
      const normalized = {
        user: String(parsed.user),
        age: numericAge,
        __rawLine: line
      };

      cleanData.push(normalized);
      if (numericAge < 18) {
        under18.push(normalized);
      }

    } catch (err) {
      invalidLog.push({
        line: line,
        raw: raw,
        error: err.message
      });
    }
  }
}
auditJSONLines(rawData);
console.log("\n===== JSON AUDIT REPORT =====\n");

console.log("Raw input:");
rawData.forEach((r, idx) => console.log(`  ${idx + 1}: ${r}`));
console.log("\n--- Results ---\n");
console.log(`Valid entries (cleanData) [count: ${cleanData.length}]:`);
cleanData.forEach((obj, idx) => {
  console.log(`  ${idx + 1} | line ${obj.__rawLine} | user: ${obj.user} | age: ${obj.age}`);
});
if (cleanData.length === 0) console.log("  (none)");
console.log(`\nUnder-18 users (bonus) [count: ${under18.length}]:`);
under18.forEach((u, idx) => {
  console.log(`  ${idx + 1} | line ${u.__rawLine} | user: ${u.user} | age: ${u.age}`);
});
if (under18.length === 0) console.log("  (none)");
console.log(`\nInvalid entries (errors) [count: ${invalidLog.length}]:`);
invalidLog.forEach((e) => {
  console.log(`  Line ${e.line}: "${e.raw}" => Error: ${e.error}`);
});
if (invalidLog.length === 0) console.log("  (none)");

console.log("\n===== END OF REPORT =====\n");
