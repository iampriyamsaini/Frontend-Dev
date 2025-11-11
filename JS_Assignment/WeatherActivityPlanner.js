let temperature = 28;  
let isRaining = false;  
let windSpeed = 12;
let activity;
if (isRaining) {
  activity = "Stay indoors with hot coffee.";
}
else if (temperature > 35) {
  activity = "Go swimming.";
}
else if (temperature < 15 && windSpeed > 20) {
  activity = "Too cold and windy — stay home.";
}
else {
  activity = "Perfect day for a walk.";
}
console.log("Weather Activity Planner");
console.log("--------------------------------");
console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggested Activity: ${activity}`);
