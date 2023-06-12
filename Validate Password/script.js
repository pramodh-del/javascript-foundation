function validatePassword(password) {
    // Check if the password meets the criteria
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
    }

    if (!/\d/.test(password)) {
        return "Password must contain at least one digit";
    }

    // If all criteria are met, return null
    return null;
}

// Example usage
var password = "MyPassword123";
var validationError = validatePassword(password);

if (validationError) {
    console.log("Invalid password:", validationError);
} else {
    console.log("Valid password");
}
