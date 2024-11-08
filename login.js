function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous error messages
    errorMessage.textContent = '';

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false; // Prevent form submission
    }

    // Example: Check if the username and password are correct
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // You can redirect to the homepage or another page after successful login
        window.location.href = "index.html";  // Redirect to home page (index.html)
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password.";
        return false; // Prevent form submission
    }
}
