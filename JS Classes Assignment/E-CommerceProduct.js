"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(discountPercent) {
        const discountAmount = (this.price * discountPercent) / 100;
        this.price -= discountAmount;
    }
    displayDetails() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 1500, "Electronics"),
    new Product(2, "Smartphone", 800, "Electronics"),
    new Product(3, "Refrigerator", 1200, "Appliances"),
    new Product(4, "Book", 20, "Literature"),
];
console.log("=== Products with price > 1000 ===");
const expensiveProducts = products.filter(product => product.price > 1000); 
expensiveProducts.forEach(product => {
    console.log(product.displayDetails());
});