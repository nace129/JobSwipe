document.getElementById("profile-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Gather form data
    const userData = {
        fullName: document.getElementById("full-name").value,
        place: document.getElementById("place").value,
        interestedJobs: document.getElementById("interested-jobs").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        bio: document.getElementById("bio").value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,
    };

    // Handle profile picture
    const profilePictureInput = document.getElementById("profile-picture");
    if (profilePictureInput.files[0]) {
        userData.profilePicture = URL.createObjectURL(profilePictureInput.files[0]);
    } else {
        userData.profilePicture = "https://via.placeholder.com/100"; // Default profile picture
    }

    // Handle resume upload
    const resumeInput = document.getElementById("resume");
    if (resumeInput.files[0]) {
        userData.resume = URL.createObjectURL(resumeInput.files[0]);
    } else {
        alert("Please upload a resume!");
        return;
    }

    // Save user data to localStorage
    localStorage.setItem("userProfile", JSON.stringify(userData));

    // Redirect to profile view page
    window.location.href = "profile-view.html";
});
