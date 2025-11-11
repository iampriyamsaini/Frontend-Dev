let totalAmount = 7600;
let discountPercent = 0;
if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}
let discountAmount = (totalAmount * discountPercent) / 100;
let finalPrice = totalAmount - discountAmount;
totalAmount = Math.round(totalAmount);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);
console.log("Progressive Discount System");
console.log("--------------------------------");
console.log(`Original Total: ₹${totalAmount}`);
console.log(`Discount: ${discountPercent}%`);
console.log(`Final Price After Discount: ₹${finalPrice}`);
