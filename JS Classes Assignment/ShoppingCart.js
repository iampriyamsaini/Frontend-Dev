"use strict";

class CartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getItemTotal() {
        return this.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        const newItem = new CartItem(name, price, quantity);
        this.items.push(newItem);
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.getItemTotal(), 0);
    }
    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(\d{2})$/;
        const match = coupon.match(couponRegex);
        if (match) {
            const discountPercent = parseInt(match[2], 10);
            const total = this.getTotal();
            const discountAmount = (total * discountPercent) / 100;
            return total - discountAmount;
        } else {
            throw new Error("Invalid coupon code.");
        }
    }
}
const myCart = new Cart();
myCart.addItem("Laptop", 1000, 1);
myCart.addItem("Headphones", 200, 2);
console.log("Total before discount: $" + myCart.getTotal());
