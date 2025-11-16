"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const tx = transactions[i];

    if (tx === null) {
      throw new Error("Null transaction entry");
    }
    if (tx.id === undefined || tx.amount === undefined) {
      throw new Error(`Missing property (id or amount) in transaction index ${i}`);
    }
    if (tx.amount < 0) {
      throw new Error(`Negative transaction amount at id ${tx.id}`);
    }
    valid.push(tx);

  } catch (err) {
    invalid.push({ index: i, error: err.message });
  }
}

console.log("===== TRANSACTION VALIDATION REPORT =====\n");

console.log(" Valid Transactions:");
console.log(valid);
console.log(`Total Valid: ${valid.length}\n`);

console.log(" Invalid Transactions:");
console.log(invalid);
console.log(`Total Invalid: ${invalid.length}\n`);

console.log("==========================================");
