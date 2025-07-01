// Toggle password visibility
function togglePassword() {
  const passwordField =
    document.getElementById("password") ||
    document.getElementById("signup-password");
  const toggleButton = event.target;

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "Show";
  }
}

// Password validation for signup page
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("signup-password");

  if (passwordInput) {
    const lowercaseReq = document.getElementById("req-lowercase");
    const uppercaseReq = document.getElementById("req-uppercase");
    const numberReq = document.getElementById("req-number");
    const lengthReq = document.getElementById("req-length");
    const requirementsBox = document.getElementById("password-requirements");

    // Show requirements when password field is focused
    passwordInput.addEventListener("focus", function () {
      requirementsBox.style.display = "block";
    });

    // Hide requirements when field loses focus (if not all requirements are met)
    passwordInput.addEventListener("blur", function () {
      const allValid =
        lowercaseReq.classList.contains("valid") &&
        uppercaseReq.classList.contains("valid") &&
        numberReq.classList.contains("valid") &&
        lengthReq.classList.contains("valid");

      if (!allValid) {
        requirementsBox.style.display = "none";
      }
    });

    // Validate as user types
    passwordInput.addEventListener("input", function () {
      const value = this.value;

      // Validate lowercase letters
      if (/[a-z]/.test(value)) {
        lowercaseReq.classList.add("valid");
        lowercaseReq.classList.remove("invalid");
      } else {
        lowercaseReq.classList.add("invalid");
        lowercaseReq.classList.remove("valid");
      }

      // Validate uppercase letters
      if (/[A-Z]/.test(value)) {
        uppercaseReq.classList.add("valid");
        uppercaseReq.classList.remove("invalid");
      } else {
        uppercaseReq.classList.add("invalid");
        uppercaseReq.classList.remove("valid");
      }

      // Validate numbers
      if (/[0-9]/.test(value)) {
        numberReq.classList.add("valid");
        numberReq.classList.remove("invalid");
      } else {
        numberReq.classList.add("invalid");
        numberReq.classList.remove("valid");
      }

      // Validate length
      if (value.length >= 8) {
        lengthReq.classList.add("valid");
        lengthReq.classList.remove("invalid");
      } else {
        lengthReq.classList.add("invalid");
        lengthReq.classList.remove("valid");
      }
    });
  }
});
