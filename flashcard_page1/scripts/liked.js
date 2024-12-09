document.addEventListener("DOMContentLoaded", () => {
    const profileList = document.getElementById("profile-list");
    const likedProfiles = JSON.parse(localStorage.getItem("likedProfiles")) || [];

    if (likedProfiles.length === 0) {
        profileList.innerHTML = "<p>No liked profiles yet.</p>";
        return;
    }

    likedProfiles.forEach((profile) => {
        const profileCard = document.createElement("div");
        profileCard.classList.add("card");
        profileCard.innerHTML = `
            <img src="${profile.profilePic}" alt="${profile.name}'s Profile Picture">
            <h2>${profile.name}</h2>
            <p><strong>Place:</strong> ${profile.place}</p>
            <p><strong>Interested Job Positions:</strong> ${profile.jobs}</p>
            <p><strong>Bio:</strong> ${profile.bio}</p>
            <p><strong>Skills:</strong> ${profile.skills}</p>
            <p><strong>Experience:</strong> ${profile.experience}</p>
        `;
        profileList.appendChild(profileCard);
    });
});