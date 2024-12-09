// document.getElementById("profile-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form from refreshing the page

//     // Gather form data
//     const userData = {
//         fullName: document.getElementById("full-name").value,
//         place: document.getElementById("place").value,
//         interestedJobs: document.getElementById("interested-jobs").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         bio: document.getElementById("bio").value,
//         skills: document.getElementById("skills").value,
//         experience: document.getElementById("experience").value,
//         linkedin: document.getElementById("linkedin").value,
//         github: document.getElementById("github").value,
//     };

//     // Handle profile picture
//     const profilePictureInput = document.getElementById("profile-picture");
//     if (profilePictureInput.files[0]) {
//         userData.profilePicture = URL.createObjectURL(profilePictureInput.files[0]);
//     } else {
//         userData.profilePicture = "https://via.placeholder.com/100"; // Default profile picture
//     }

//     // Handle resume upload
//     const resumeInput = document.getElementById("resume");
//     if (resumeInput.files[0]) {
//         userData.resume = URL.createObjectURL(resumeInput.files[0]);
//     } else {
//         alert("Please upload a resume!");
//         return;
//     }

//     // Save user data to localStorage
//     localStorage.setItem("userProfile", JSON.stringify(userData));

//     // Redirect to profile view page
//     window.location.href = "profile-view.html";
// });

// Get the form element
// Import Firebase Modules
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6Clgianf9pp0BJrAuDtU3Z1KflH9OTzk",
    authDomain: "jobswipe-1b358.firebaseapp.com",
    projectId: "jobswipe-1b358",
    storageBucket: "jobswipe-1b358.firebasestorage.app",
    messagingSenderId: "48978805128",
    appId: "1:48978805128:web:7b53e4597076c02518fa3d",
    measurementId: "G-1ED38XB580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById("profile-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById("full-name").value;
    const place = document.getElementById("place").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bio = document.getElementById("bio").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;

    // File inputs
    const profilePicture = document.getElementById("profile-picture").files[0];
    const resume = document.getElementById("resume").files[0];

    try {
        // Upload profile picture
        let profilePicURL = "";
        if (profilePicture) {
            const profilePicRef = storageRef(storage, `profilePictures/${profilePicture.name}`);
            const profilePicSnapshot = await uploadBytes(profilePicRef, profilePicture);
            profilePicURL = await getDownloadURL(profilePicSnapshot.ref);
        }

        // Upload resume
        let resumeURL = "";
        if (resume) {
            const resumeRef = storageRef(storage, `resumes/${resume.name}`);
            const resumeSnapshot = await uploadBytes(resumeRef, resume);
            resumeURL = await getDownloadURL(resumeSnapshot.ref);
        }

        // Save data to Firestore
        const userProfileDoc = doc(db, "profiles", email.replace(".", "_"));
        await setDoc(userProfileDoc, {
            fullName,
            place,
            email,
            phone,
            bio,
            skills,
            experience,
            linkedin,
            github,
            profilePicURL,
            resumeURL
        });

        alert("Profile saved successfully!");
        window.location.href = "profile-view.html";
    } catch (error) {
        console.error("Error saving profile:", error);
        alert("An error occurred while saving your profile. Please try again.");
    }
});

