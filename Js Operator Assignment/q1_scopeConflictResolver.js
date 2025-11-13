let bonus = 5000;
function calculateSalary(isPermanent) {
  let salary = 40000;
  let totalSalary = isPermanent ? salary + bonus : salary;
  console.log(`Inside function -> isPermanent: ${isPermanent} | totalSalary: ${totalSalary}`);
  console.log(`Inside function -> global bonus (unchanged): ${bonus}`);
}
console.log('Global bonus before calls:', bonus);
calculateSalary(true);
calculateSalary(false);
console.log('Global bonus after calls:', bonus);
function modifyGlobalBonus(newBonus, modify) {
  if (modify) {
    bonus = newBonus;
    console.log('Global bonus has been modified inside function to:', bonus);
  } else {
    console.log('Global bonus left unchanged:', bonus);
  }
}
modifyGlobalBonus(8000, false);
console.log('Global bonus still:', bonus);
modifyGlobalBonus(2000, true);
console.log('Global bonus now:', bonus);
