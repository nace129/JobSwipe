// Sample job data
const jobs = [
    {
        title: "Frontend Developer",
        company: "TechCorp",
        location: "New York, NY",
        description: "We are looking for a skilled frontend developer with experience in React.js.",
    },
    {
        title: "Data Scientist",
        company: "DataWorks",
        location: "San Francisco, CA",
        description: "Join our team to work on cutting-edge AI and ML projects.",
    },
    {
        title: "Backend Engineer",
        company: "CodeBase",
        location: "Austin, TX",
        description: "Seeking a backend engineer proficient in Node.js and database management.",
    },
];

// Dynamically render job listings
document.addEventListener("DOMContentLoaded", () => {
    const jobListings = document.getElementById("job-listings");

    if (jobs.length === 0) {
        jobListings.innerHTML = "<p>No jobs available at the moment.</p>";
        return;
    }

    jobs.forEach((job) => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <button class="apply-button">Apply</button>
        `;

        const applyButton = jobCard.querySelector(".apply-button");
        applyButton.addEventListener("click", () => {
            alert(`You applied for ${job.title} at ${job.company}!`);
        });

        jobListings.appendChild(jobCard);
    });
});
