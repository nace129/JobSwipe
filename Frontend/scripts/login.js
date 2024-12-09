// document.getElementById("login-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form submission
//     console.log("Login button clicked");

//     const usernameOrEmail = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const usernameError = document.getElementById("username-error");
//     const passwordError = document.getElementById("password-error");

//     // Clear previous error messages
//     usernameError.textContent = "";
//     passwordError.textContent = "";

//     // Retrieve stored credentials from localStorage
//     // const storedUsername = localStorage.getItem("registeredUsername");
//     // const storedEmail = localStorage.getItem("registeredEmail");
//     // const storedPassword = localStorage.getItem("registeredPassword");

//     // // Validate credentials
//     // if (
//     //     (usernameOrEmail === storedUsername || usernameOrEmail === storedEmail) &&
//     //     password === storedPassword
//     // ) {
//     //     alert("Login successful!");
//     //     window.location.href = "profile-view.html"; // Redirect to dashboard
//     // } else {
//     //     usernameError.textContent = "Invalid username or email.";
//     //     passwordError.textContent = "Invalid password.";
//     // }

//     // Access the database and validate the user
//     firebase.database().ref("users").once("value", (snapshot) => {
//         let userFound = false;
//         snapshot.forEach((childSnapshot) => {
//             const userData = childSnapshot.val();

//             console.log("Entered username/email:", usernameOrEmail);
//             console.log("Entered password:", password);

//             // Check if username or email matches and password is correct
//             if (
//                 (usernameOrEmail === userData.username || usernameOrEmail === userData.email) &&
//                 password === userData.password
//             ) {
//                 userFound = true;
//                 alert("Login successful!");
//                 window.location.href = "profile-view.html"; // Redirect to dashboard
//             }
//         });

//         if (!userFound) {
//             usernameError.textContent = "Invalid username or email.";
//             passwordError.textContent = "Invalid password.";
//         }
//     });
// });

// // // Handle SSO button clicks
// // document.querySelector(".google-button").addEventListener("click", function () {
// //     alert("Redirecting to Google Login...");
// //     window.location.href = "https://accounts.google.com/o/oauth2/auth"; // Example Google OAuth URL
// // });

// // document.querySelector(".linkedin-button").addEventListener("click", function () {
// //     alert("Redirecting to LinkedIn Login...");
// //     window.location.href = "https://www.linkedin.com/oauth/v2/authorization"; // Example LinkedIn OAuth URL
// // });

// // document.querySelector(".email-button").addEventListener("click", function () {
// //     alert("Redirecting to Email Login...");
// //     // Add custom email SSO logic or redirect to your email login page
// //     window.location.href = "/email-login.html";
// // });

// Ensure Firebase is initialized
document.addEventListener("DOMContentLoaded", function () {
    const firebaseConfig = {
        apiKey: "AIzaSyD6Clgianf9pp0BJrAuDtU3Z1KflH9OTzk",
        authDomain: "jobswipe-1b358.firebaseapp.com",
        databaseURL: "https://jobswipe-1b358-default-rtdb.firebaseio.com",
        projectId: "jobswipe-1b358",
        storageBucket: "jobswipe-1b358.firebasestorage.app",
        messagingSenderId: "48978805128",
        appId: "1:48978805128:web:7b53e4597076c02518fa3d",
        measurementId: "G-1ED38XB580"
    };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Get references to DOM elements
    const loginForm = document.getElementById("login-form");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    // Add event listener to login form
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent default form submission

        const usernameOrEmail = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Clear previous error messages
        usernameError.textContent = "";
        passwordError.textContent = "";

        // Retrieve user data from Firebase Realtime Database
        const dbRef = firebase.database().ref("users"); // Reference to the users node in the Realtime Database

        dbRef.once("value", function (snapshot) {
            let userFound = false;

            snapshot.forEach(function (childSnapshot) {
                const user = childSnapshot.val();
                if (
                    (usernameOrEmail === user.username || usernameOrEmail === user.email) &&
                    password === user.password
                ) {
                    userFound = true;
                    alert("Login successful!");
                    window.location.href = "profile-view.html"; // Redirect to dashboard
                    return true;  // Stop further iteration
                }
            });

            // If user not found or invalid credentials
            if (!userFound) {
                usernameError.textContent = "Invalid username or email.";
                passwordError.textContent = "Invalid password.";
            }
        });
    });
});
