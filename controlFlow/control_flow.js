// if else
let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("AccessLevel =",accessLevel);

// nested if
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message:", userMessage);

// switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case  "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Ternary operator
isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);

// Practice task
function checkAccess(role) {
    switch (role.toLowerCase()) {
      case "employee":
        console.log("You are authorized to access 'Dietary Services'.");
        break;
      case "enrolled member":
        console.log("You are authorized to access 'Dietary Services' and enjoy one-on-one interaction with a dietician.");
        break;
      case "subscriber":
        console.log("You have partial access to facilitate 'Dietary Services'.");
        break;
      case "non-subscriber":
        console.log("Please enroll or subscribe first to avail this facility.");
        break;
      default:
        console.log("Invalid role. Please specify a valid designation.");
    }
  }
  
  //  Example usage:
  checkAccess("employee");         // Output: You are authorized to access 'Dietary Services'.
  checkAccess("enrolled member"); // Output: You are authorized to access 'Dietary Services' and enjoy one-on-one interaction with a dietician.
  checkAccess("subscriber");      // Output: You have partial access to facilitate 'Dietary Services'.
  checkAccess("non-subscriber");  // Output: Please enroll or subscribe first to avail this facility.