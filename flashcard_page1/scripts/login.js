document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const usernameOrEmail = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem("registeredUsername");
    const storedEmail = localStorage.getItem("registeredEmail");
    const storedPassword = localStorage.getItem("registeredPassword");

    // Validate credentials
    if (
        (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) &&
        password === storedPassword
    ) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        usernameError.textContent = "Invalid username or email.";
        passwordError.textContent = "Invalid password.";
    }
});

// Handle SSO button clicks
document.querySelector(".google-button").addEventListener("click", function () {
    alert("Redirecting to Google Login...");
    window.location.href = "https://accounts.google.com/o/oauth2/auth"; // Example Google OAuth URL
});

document.querySelector(".linkedin-button").addEventListener("click", function () {
    alert("Redirecting to LinkedIn Login...");
    window.location.href = "https://www.linkedin.com/oauth/v2/authorization"; // Example LinkedIn OAuth URL
});

document.querySelector(".email-button").addEventListener("click", function () {
    alert("Redirecting to Email Login...");
    // Add custom email SSO logic or redirect to your email login page
    window.location.href = "/email-login.html";
});
