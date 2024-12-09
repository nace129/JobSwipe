const users = [
    {
        name: "John Doe",
        place: "New York",
        jobs: "Frontend Developer",
        email: "john.doe@example.com",
        phone: "+1234567890",
        bio: "Passionate about coding and design.",
        skills: "React, Python",
        experience: "3 years as a software developer",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        profilePic: "https://via.placeholder.com/100",
    },
    {
        name: "Jane Smith",
        place: "San Francisco",
        jobs: "Data Scientist",
        email: "jane.smith@example.com",
        phone: "+9876543210",
        bio: "Loves working with data and AI.",
        skills: "Python, Machine Learning",
        experience: "5 years in data science",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/janesmith",
        profilePic: "https://via.placeholder.com/100",
    },
    {
        name: "Michael Brown",
        place: "Chicago",
        jobs: "Backend Engineer",
        email: "michael.brown@example.com",
        phone: "+1122334455",
        bio: "Expert in server-side applications.",
        skills: "Node.js, Express.js",
        experience: "4 years as a backend developer",
        linkedin: "https://linkedin.com/in/michaelbrown",
        github: "https://github.com/michaelbrown",
        profilePic: "https://via.placeholder.com/100",
    },
];

let currentIndex = 0;

// Retrieve saved profiles from localStorage
const likedProfiles = JSON.parse(localStorage.getItem("likedProfiles")) || [];
const dislikedProfiles = JSON.parse(localStorage.getItem("dislikedProfiles")) || [];
const superlikedProfiles = JSON.parse(localStorage.getItem("superlikedProfiles")) || [];

// Function to render a flashcard
function renderFlashcard(index) {
    const flashcard = document.getElementById("flashcard");
    const user = users[index];

    flashcard.innerHTML = `
        <img src="${user.profilePic}" alt="${user.name}'s Profile Picture">
        <h2>${user.name}</h2>
        <p><strong>Place:</strong> ${user.place}</p>
        <p><strong>Interested Job Positions:</strong> ${user.jobs}</p>
        <p><strong>Bio:</strong> ${user.bio}</p>
        <p><strong>Skills:</strong> ${user.skills}</p>
        <p><strong>Experience:</strong> ${user.experience}</p>
    `;
}

// Like profile
function likeProfile() {
    const user = users[currentIndex];
    likedProfiles.push(user);
    localStorage.setItem("likedProfiles", JSON.stringify(likedProfiles));
    moveNext();
}

// Dislike profile
function dislikeProfile() {
    const user = users[currentIndex];
    dislikedProfiles.push(user);
    localStorage.setItem("dislikedProfiles", JSON.stringify(dislikedProfiles));
    moveNext();
}

// Superlike profile
function superlikeProfile() {
    const user = users[currentIndex];
    superlikedProfiles.push(user);
    localStorage.setItem("superlikedProfiles", JSON.stringify(superlikedProfiles));

    // Show superlike message
    const superlikeMessage = document.getElementById("superlike-message");
    superlikeMessage.textContent = `You Superliked ${user.name}!`;
    superlikeMessage.classList.add("show");
    setTimeout(() => {
        superlikeMessage.classList.remove("show");
    }, 1500);

    moveNext();
}

// Move to the next profile
function moveNext() {
    if (currentIndex < users.length - 1) {
        currentIndex += 1;
        renderFlashcard(currentIndex);
    } else {
        alert("No more profiles to show.");
    }
}

// Event listeners for actions
document.getElementById("left-arrow").addEventListener("click", dislikeProfile);
document.getElementById("right-arrow").addEventListener("click", likeProfile);

document.getElementById("flashcard").addEventListener("dblclick", superlikeProfile);

// Initial render
renderFlashcard(currentIndex);
