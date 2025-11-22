class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Dataset empty");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(d => d.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce((sum, d) => sum + d.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(d => `${d.user}: ${d.steps} steps, ${d.calories} calories`);
    }
}

const dataset = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const fa = new FitnessAnalytics(dataset);

    console.log("Active Users:", fa.getActiveUsers());
    console.log("Average Calories:", fa.getAverageCalories());
    console.log("Summary:", fa.getUserSummary());

} catch (err) {
    console.error("Error:", err.message);
}
