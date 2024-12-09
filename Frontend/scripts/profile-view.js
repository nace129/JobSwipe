document.addEventListener("DOMContentLoaded", () => {
    const profileView = document.getElementById("profile-view");
    const userData = JSON.parse(localStorage.getItem("userProfile"));

    if (!userData) {
        profileView.innerHTML = "<p>No profile found. Please create your profile first.</p>";
        return;
    }

    // Render the profile
    profileView.innerHTML = `
        <img src="${userData.profilePicture}" alt="${userData.fullName}'s Profile Picture">
        <h2>${userData.fullName}</h2>
        <p><strong>Place:</strong> ${userData.place}</p>
        <p><strong>Interested Job Positions:</strong> ${userData.interestedJobs}</p>
        <p><strong>Bio:</strong> ${userData.bio}</p>
        <p><strong>Skills:</strong> ${userData.skills}</p>
        <p><strong>Experience:</strong> ${userData.experience}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Phone:</strong> ${userData.phone}</p>
        <p><strong>LinkedIn:</strong> <a href="${userData.linkedin}" target="_blank">Visit Profile</a></p>
        <p><strong>GitHub:</strong> <a href="${userData.github}" target="_blank">Visit Repository</a></p>
        <p><strong>Resume:</strong> <a href="${userData.resume}" target="_blank">Download Resume</a></p>
    `;

    // Handle the edit button functionality
    document.getElementById("edit-profile").addEventListener("click", () => {
        window.location.href = "profile.html"; // Redirect to the profile creation form
    });
});
