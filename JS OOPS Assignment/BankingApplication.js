class BankAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
        console.log("Withdrawn:", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

try {
    const acc = new BankAccount();
    acc.deposit(1000);
    acc.withdraw(500);
    console.log("Balance:", acc.getBalance());

    acc.withdraw(1000); 
} catch (err) {
    console.error("Error:", err.message);
}
