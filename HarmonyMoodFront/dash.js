//uncomment these line to allow JWT authentication
// document.addEventListener("DOMContentLoaded", async function () {
//   try {
//     // Simulated JWT authentication (replace with actual implementation)
//     const token = localStorage.getItem("jwtToken");
//     if (!token) {
//       window.location.href = "log.html"; // Redirect to login page if not authenticated
//       return;
//     }

//     const userData = await fetchUserData(); // Replace with actual API endpoint
//     updateUserInfo(userData);

//     const moodSentiment = await fetchMoodSentiment(); // Replace with actual API endpoint
//     updateMoodIndicator(moodSentiment);

//     const musicRecommendations = await fetchMusicRecommendations(); // Replace with actual API endpoint
//     updateMusicRecommendations(musicRecommendations);
//   } catch (error) {
//     console.error("Error:", error);
//   }

//   document.getElementById("logout").addEventListener("click", function () {
//     localStorage.removeItem("jwtToken");
//     window.location.href = "log.html";
//   });
// });

async function fetchUserData() {
  // Simulate fetching user data from API
  return {
    username: "John Doe",
    avatar:
      "https://images.pexels.com/photos/17807545/pexels-photo-17807545/free-photo-of-man-taking-a-photo-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };
}

async function fetchMoodSentiment() {
  // Simulate fetching mood sentiment from API
  return "😄"; // Replace with actual sentiment data
}

async function fetchMusicRecommendations() {
  // Simulate fetching music recommendations from API
  return [
    {
      image:
        "https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Happy Vibes",
      artist: "Various Artists",
      description: "A collection of upbeat songs to brighten your day.",
      listenLink: "#",
    },
    {
      image:
        "https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Chill Out",
      artist: "Various Artists",
      description: "Relax and unwind with these soothing tracks.",
      listenLink: "#",
    },
    // ...more recommendation objects
  ];
}

function updateUserInfo(userData) {
  const usernameElement = document.getElementById("username");
  const avatarElement = document.querySelector(".user-avatar");

  usernameElement.textContent = userData.username;
  avatarElement.src = userData.avatar;
}

function updateMoodIndicator(sentiment) {
  const moodIndicator = document.getElementById("moodIndicator");
  moodIndicator.textContent = sentiment;
}

function updateMusicRecommendations(recommendations) {
  const recommendationsContainer = document.getElementById(
    "musicRecommendations"
  );

  recommendations.forEach((recommendation) => {
    const card = createRecommendationCard(recommendation);
    recommendationsContainer.appendChild(card);
  });
}

function createRecommendationCard(recommendation) {
  const card = document.createElement("div");
  card.classList.add("music-card");

  const image = document.createElement("img");
  image.src = recommendation.image;
  image.alt = recommendation.title;
  card.appendChild(image);

  const title = document.createElement("h3");
  title.classList.add("music-title");
  title.textContent = recommendation.title;
  card.appendChild(title);

  const artist = document.createElement("p");
  artist.classList.add("music-artist");
  artist.textContent = recommendation.artist;
  card.appendChild(artist);

  const description = document.createElement("p");
  description.textContent = recommendation.description;
  card.appendChild(description);

  const listenButton = document.createElement("a");
  listenButton.href = recommendation.listenLink;
  listenButton.textContent = "Listen Now";
  listenButton.classList.add("listen-button");
  card.appendChild(listenButton);

  return card;
}

async function initializeDashboard() {
  const userData = await fetchUserData();
  updateUserInfo(userData);

  const moodSentiment = await fetchMoodSentiment();
  updateMoodIndicator(moodSentiment);

  const musicRecommendations = await fetchMusicRecommendations();
  updateMusicRecommendations(musicRecommendations);
}

document.addEventListener("DOMContentLoaded", () => {
  initializeDashboard();
});
document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", generatePlaylist);
});

function generatePlaylist() {
  const searchInput = document.getElementById("searchInput").value;

  // Simulate generating playlist based on search input (replace with actual implementation)
  const playlistName = `Playlist for ${searchInput}`;
  const playlistLink = "#"; // Replace with actual playlist link

  // Display generated playlist info (you can modify this based on your actual implementation)
  alert(`Generated playlist: ${playlistName}\nListen here: ${playlistLink}`);
}

document.addEventListener("DOMContentLoaded", function () {
  const generateRemixButton = document.getElementById("generateRemixButton");
  generateRemixButton.addEventListener("click", generateRemixOptions);
});

async function generateRemixOptions() {
  const songInput = document.getElementById("songInput").value;

  // Replace with actual API endpoint for generating remix options
  const apiUrl = "YOUR_API_URL_HERE";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ song: songInput }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch remix options");
    }

    const remixOptions = await response.json();
    updateRemixOptions(remixOptions);
  } catch (error) {
    console.error("Error:", error);
  }
}

function updateRemixOptions(remixOptions) {
  const remixList = document.getElementById("remixList");
  remixList.innerHTML = ""; // Clear previous options

  remixOptions.forEach((option) => {
    const optionItem = document.createElement("p");
    optionItem.textContent = option;
    remixList.appendChild(optionItem);
  });
}
