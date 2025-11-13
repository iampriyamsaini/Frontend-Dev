const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
let originalTotal = cart.reduce((s, i) => s + i.price, 0);
let discountedItems = cart.map(i => {
  let r = 0;
  if (i.category === 'electronics') r = 0.10;
  else if (i.category === 'fashion') r = 0.05;
  return { ...i, discountedPrice: i.price * (1 - r), discountRate: r };
});
let subtotal = discountedItems.reduce((s, i) => s + i.discountedPrice, 0);
let final = originalTotal > 50000 ? subtotal * 0.95 : subtotal;
console.log('Original Total:', originalTotal);
discountedItems.forEach(i =>
  console.log(`- ${i.item}: ${i.price} - ${i.discountRate * 100}% = ${i.discountedPrice}`)
);
console.log('Subtotal:', subtotal);
console.log('Final Total:', final);
