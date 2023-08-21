async function fetchUserData() {
  // Simulate fetching user data from API
  return {
    username: "John Doe",
    // ...
  };
}

function updateWelcomeMessage(userData) {
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `Welcome, ${userData.username}!`;
}

async function initializeWelcomeSection() {
  const userData = await fetchUserData();
  updateWelcomeMessage(userData);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeWelcomeSection();

  // Initialize preferred genres section
  const preferredGenresForm = document.getElementById("preferredGenresForm");
  preferredGenresForm.addEventListener("submit", updatePreferredGenres);

  // Add event listeners for genre buttons
  const genreButtons = document.querySelectorAll(".genre-button");
  genreButtons.forEach((button) => {
    button.addEventListener("click", toggleGenreButton);
  });
});

async function updatePreferredGenres(event) {
  event.preventDefault();

  const selectedGenres = Array.from(
    document.querySelectorAll("button.genre-button.active")
  ).map((button) => button.getAttribute("data-genre"));

  // Simulate API call to update preferred genres
  const response = await simulateUpdateGenresAPI(selectedGenres);

  const genresStatusMessage = document.getElementById("genresStatusMessage");
  if (response.success) {
    genresStatusMessage.textContent = "Preferred genres updated successfully.";
    genresStatusMessage.style.color = "#00a8e8";
  } else {
    genresStatusMessage.textContent = "Error updating preferred genres.";
    genresStatusMessage.style.color = "#e74c3c";
  }
}

function toggleGenreButton(event) {
  const genreButton = event.target;
  genreButton.classList.toggle("active"); // Toggle the active class
}
// Other functions

// Uncomment these lines to allow JWT authentication
// document.addEventListener("DOMContentLoaded", async function () {
//   try {
//     // Simulated JWT authentication (replace with actual implementation)
//     const token = localStorage.getItem("jwtToken");
//     if (!token) {
//       window.location.href = "log.html"; // Redirect to login page if not authenticated
//       return;
//     }

//     // Initialize account details section
//     const accountDetailsForm = document.getElementById("accountDetailsForm");
//     accountDetailsForm.addEventListener("submit", updateAccountDetails);
//   } catch (error) {
//     console.error("Error:", error);
//   }

//   document.getElementById("logout").addEventListener("click", function () {
//     localStorage.removeItem("jwtToken");
//     window.location.href = "log.html";
//   });
// });

const dummySentimentData = [
  { date: "2023-01-01", sentimentScore: 0.8 },
  { date: "2023-01-02", sentimentScore: 0.6 },
  { date: "2023-01-03", sentimentScore: 0.7 },
  // ... add more data points
];

function renderSentimentChart() {
  const labels = dummySentimentData.map((dataPoint) => dataPoint.date);
  const scores = dummySentimentData.map(
    (dataPoint) => dataPoint.sentimentScore
  );

  const ctx = document.getElementById("sentimentChart").getContext("2d");
  const sentimentChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Sentiment Score",
          data: scores,
          borderColor: "#0090b6",
          backgroundColor: "rgba(0, 144, 182, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
          ticks: {
            stepSize: 0.2,
          },
        },
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSentimentChart();
});

// Placeholder for API endpoint to delete account
async function deleteAccount() {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = Math.random() < 0.8; // Simulate success with 80% probability
      resolve({ success });
    }, 1500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.getElementById("deleteButton");
  const deleteStatusMessage = document.getElementById("deleteStatusMessage");

  deleteButton.addEventListener("click", async () => {
    const response = await deleteAccount();

    if (response.success) {
      deleteStatusMessage.textContent = "Account deleted successfully.";
      deleteStatusMessage.style.color = "#00a8e8";
    } else {
      deleteStatusMessage.textContent = "Error deleting account.";
      deleteStatusMessage.style.color = "#e74c3c";
    }
  });
});
