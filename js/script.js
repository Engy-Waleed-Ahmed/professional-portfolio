/* Engy Waleed | Portfolio scripts (vanilla JavaScript) */

// ---------- Settings you can edit ----------
// Put your real email here to make the contact form open your email app.
// While it is empty, the form only validates and shows a demo notice.
const RECIPIENT_EMAIL = "";

// ---------- 1. Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- 2. Navbar: shadow on scroll + back-to-top button ----------
const navbar = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");

function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  backToTop.classList.toggle("show", window.scrollY > 400);
}
window.addEventListener("scroll", handleScroll);
handleScroll();

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- 3. Smooth scrolling + close mobile menu ----------
// (Smooth scrolling itself is done in CSS; here we just close the mobile menu.)
const menu = document.getElementById("navMenu");
document.querySelectorAll("#navMenu .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// ---------- 4. Active navigation highlighting ----------
// Bootstrap ScrollSpy (set on <body>) adds the "active" class automatically.

// ---------- 5. Scroll reveal animation ----------
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(function (item) { observer.observe(item); });
} else {
  revealItems.forEach(function (item) { item.classList.add("visible"); });
}

// ---------- 6. Contact form validation ----------
// Only runs on the main page (the project pages have no form).
const form = document.getElementById("contactForm");
if (form) {
  const statusBox = document.getElementById("formStatus");

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showStatus(type, text) {
    statusBox.className = "form-status " + type;
    statusBox.textContent = text;
  }

  function validateField(field) {
    const value = field.value.trim();
    let valid = value !== "";
    if (field.type === "email") valid = isValidEmail(value);
    if (field.id === "message") valid = value.length >= 10;
    field.classList.toggle("is-invalid", !valid);
    field.classList.toggle("is-valid", valid);
    return valid;
  }

  const fields = form.querySelectorAll("input, textarea");
  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      if (field.classList.contains("is-invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let allValid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      showStatus("error", "Please fix the highlighted fields and try again.");
      return;
    }

    if (!RECIPIENT_EMAIL) {
      // Demo mode: nothing is sent, and we say so honestly.
      showStatus("info", "Demo mode: your details look valid, but no message was sent. " +
        "Add your email to RECIPIENT_EMAIL in js/script.js to enable sending.");
      return;
    }

    // mailto approach: opens the visitor's email app with the message filled in.
    const subject = encodeURIComponent(form.subject.value.trim());
    const body = encodeURIComponent(
      "Name: " + form.name.value.trim() + "\n" +
      "Email: " + form.email.value.trim() + "\n\n" +
      form.message.value.trim()
    );
    window.location.href = "mailto:" + RECIPIENT_EMAIL + "?subject=" + subject + "&body=" + body;
    showStatus("info", "Your email app should open with the message ready. Please press send there to deliver it.");
  });
}
