
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Contact form
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  // Replace this address with your real business email.
  const businessEmail = "yourbusiness@example.com";

  const subject = encodeURIComponent("Website enquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  formStatus.textContent =
    "Opening your email app. Please review and send your message.";

  window.location.href =
    "mailto:" + businessEmail +
    "?subject=" + subject +
    "&body=" + body;
});
