class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(from, to, distance) {
        this.from = from;
        this.to = to;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance");
        }
        return this.distance * 12;
    }
}

try {
    const trip = new Trip("A", "B", 10);
    console.log("Fare:", trip.calculateFare());

    const badTrip = new Trip("A", "B", -5);
    console.log(badTrip.calculateFare());
} catch (err) {
    console.error("Error:", err.message);
}
