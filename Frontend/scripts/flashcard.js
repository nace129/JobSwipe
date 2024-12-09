const users = [
    {
        job_title: "Frontend Developer",
        company_name: "Web Innovations",
        location: "San Francisco, CA",
        start_date: "2024-03-15",
        salary: "$105,000"
    },
    {
        job_title: "Product Manager",
        company_name: "InnovateTech",
        location: "Seattle, WA",
        start_date: "2024-04-01",
        salary: "$130,000"
    },
    {
        job_title: "Backend Developer",
        company_name: "Code Masters",
        location: "Austin, TX",
        start_date: "2024-02-20",
        salary: "$110,000"
    },
];

let currentIndex = 0;

// Function to render a flashcard
function renderFlashcard(index) {
    const flashcard = document.getElementById("flashcard");
    const user = users[index];

    flashcard.innerHTML = `
        <p><strong>Job Title:</strong> ${user.job_title}</p>
        <p><strong>Company:</strong> ${user.company_name}</p>
        <p><strong>Location:</strong> ${user.location}</p>
        <p><strong>Start Date:</strong> ${user.start_date}</p>
        <p><strong>Salary:</strong> ${user.salary}</p>
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
    superlikeMessage.textContent = `You Superliked ${user.job_title}!`;
    superlikeMessage.classList.add("show");
    setTimeout(() => {
        superlikeMessage.classList.remove("show");
    }, 1500);

    moveNext();
}

// Move to the next profile
function moveNext() {
    if (currentIndex < users.length - 1) {
        currentIndex ++;
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
