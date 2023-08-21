document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");

  registrationForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = registrationForm.querySelector("#email").value;
    const username = registrationForm.querySelector("#username").value;

    try {
      const isEmailValid = await validateEmail(email);
      const isUsernameAvailable = await checkUsernameAvailability(username);

      if (!isEmailValid) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!isUsernameAvailable) {
        alert("Username is already taken. Please choose another.");
        return;
      }

      // Proceed with form submission here (you can add your logic here)
      alert("Registration successful!");
      registrationForm.reset();
    } catch (error) {
      console.error("Error:", error);
    }
  });

  async function validateEmail(email) {
    const response = await fetch("YOUR_EMAIL_VALIDATION_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    return data.isValid;
  }

  async function checkUsernameAvailability(username) {
    const response = await fetch("YOUR_USERNAME_AVAILABILITY_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    return data.isAvailable;
  }

  const genreButtons = document.querySelectorAll(".genre-button");

  genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
    });
  });
});
