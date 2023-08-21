document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = contactForm.querySelector("#name").value;
    const email = contactForm.querySelector("#email").value;
    const message = contactForm.querySelector("#message").value;

    // Basic validation (you can customize this according to your needs)
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Send the message using an API endpoint
    try {
      const response = await sendMessage(name, email, message);
      if (response.status === 200) {
        alert("Message sent successfully!");
        contactForm.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });

  async function sendMessage(name, email, message) {
    const data = {
      name: name,
      email: email,
      message: message,
    };

    const response = await fetch("YOUR_API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response;
  }
});
