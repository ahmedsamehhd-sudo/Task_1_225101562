document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const contactForm = document.getElementById("contactForm");
    const welcomeMessage = document.getElementById("welcomeMessage");

    // 1. Dark Mode Toggle functionality
    themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        // Update button text based on current mode
        if (document.body.classList.contains("dark")) {
            themeToggleBtn.textContent = "☀️ Toggle Light Mode";
        } else {
            themeToggleBtn.textContent = "🌙 Toggle Dark Mode";
        }
    });

    // 2. Creative interactive touch: Personal greeting when form is submitted
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const visitorNameInput = document.getElementById("visitorName");
        const visitorEmailInput = document.getElementById("email");

        const nameValue = visitorNameInput.value.trim();
        const emailValue = visitorEmailInput.value.trim();

        if (nameValue && emailValue) {
            welcomeMessage.textContent = `Welcome, ${nameValue}! Thanks for visiting Ahmed's profile.`;
            welcomeMessage.style.color = "var(--accent-color)";

            // Reset form
            contactForm.reset();

            // Scroll smoothly back to top to see the greeting
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});