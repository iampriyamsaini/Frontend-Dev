const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error(`Invalid item: ${item}`);
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        console.log("Bill Amount:", total);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

calculateBill(["pizza", "burger"]);
calculateBill(["pasta", "icecream"]);
