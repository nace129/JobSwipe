document.getElementById("register-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const confirmPasswordError = document.getElementById("confirm-password-error");

  // Clear error messages
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  // Define email and password validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validate email
  if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format. Please enter a valid email address.";
      return;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
      passwordError.textContent =
          "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
      return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match. Please try again.";
      return;
  }

  // Store credentials in localStorage
  localStorage.setItem("registeredUsername", fullName);
  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("registeredPassword", password);

  alert(`Welcome, ${fullName}! Your account has been created.`);
  window.location.href = "login.html"; // Redirect to login page
});
