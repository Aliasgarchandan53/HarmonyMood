document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = contactForm.querySelector("#name").value;
    const email = contactForm.querySelector("#email").value;
    const message = contactForm.querySelector("#message").value;

    // Basic validation (you can customize this according to your needs)
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate sending the message (you can replace this with actual AJAX call)
    setTimeout(function () {
      alert("Message sent successfully!");
      contactForm.reset();
    }, 1000);
  });
});
