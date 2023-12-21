// This function takes in two colors and returns the color that results when they are mixed.
function mixColors(color1, color2) {
    // Convert the colors to lowercase to make the code case-insensitive.
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();

    // Check the first color and the second color using nested switch statements.
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    return "purple";
                case "yellow":
                    return "orange";
                default:
                    return "Invalid color combination";
            }
        case "blue":
            switch (color2) {
                case "red":
                    return "purple";
                case "yellow":
                    return "green";
                default:
                    return "Invalid color combination";
            }
        case "yellow":
            switch (color2) {
                case "red":
                    return "orange";
                case "blue":
                    return "green";
                default:
                    return "Invalid color combination";
            }
        default:
            return "Invalid color combination";
    }
}

// Example usage:
console.log(mixColors("red", "blue")); // Output: "purple"
console.log(mixColors("BLUE", "yellow")); // Output: "green"
console.log(mixColors("red", "purple")); // Output: "Invalid color combination"
