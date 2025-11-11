let age = 19;   
let isCitizen = true; 
let message;
if (age >= 18) {
  if (isCitizen) {
    if (age >= 21) {
      message = " Eligible for all services.";
    } else {
      message = " Eligible to vote only.";
    }
  } else {
    message = " Only age criteria met.";
  }
} else {
  message = " Not eligible yet.";
}
console.log(" Citizen Eligibility Validator");
console.log("--------------------------------");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen}`);
console.log(`Result: ${message}`);
