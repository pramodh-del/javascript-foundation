var currentUser = null;
var balance = 0;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication here (e.g., check against a predefined list of users)

    if (username === "user" && password === "password") {
        currentUser = username;
        showDashboard();
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function showDashboard() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user").textContent = currentUser;
    document.getElementById("balance").textContent = balance;
    document.getElementById("transaction-container").style.display = "block";
}

function logout() {
    currentUser = null;
    balance = 0;
    document.getElementById("login-container").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("transaction-container")
}