document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = loginForm.querySelector("#username").value;
    const password = loginForm.querySelector("#password").value;

    // Replace with actual login logic and API call
    try {
      const loginResponse = await loginUser(username, password);

      if (loginResponse.success) {
        alert("Login successful!");
        window.location.href = "indexpostlog.html"; // Redirect to the desired page
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

  async function loginUser(username, password) {
    // Replace with actual API URL and POST request logic
    const response = await fetch("YOUR_LOGIN_API_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    return await response.json();
  }
});
