let userName = "Nakul";                
let userAge = 21;                      
let isActive = true;                   
let hobbies = ["reading", "coding"];   
let userDetails = { city: "Delhi", country: "India" }; 
let lastLogin = null;                 
let nextAppointment;                  
let dataSummary = [
  { Label: "User Name", Value: userName, Type: typeof userName },
  { Label: "User Age", Value: userAge, Type: typeof userAge },
  { Label: "Active Status", Value: isActive, Type: typeof isActive },
  { Label: "Hobbies", Value: hobbies, Type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { Label: "User Details", Value: userDetails, Type: Array.isArray(userDetails) ? "array" : typeof userDetails },
  { Label: "Last Login", Value: lastLogin, Type: typeof lastLogin }, 
  { Label: "Next Appointment", Value: nextAppointment, Type: typeof nextAppointment }
];

console.table(dataSummary);
