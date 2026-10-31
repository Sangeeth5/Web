
// Mobile navigation menu

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

// Close menu after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Tax enquiry form

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;

    const response = document.getElementById("response");

    response.textContent =
        "Thank you " + name +
        "! Your enquiry form is working. Connect a backend to receive this enquiry.";

    quoteForm.reset();
});
