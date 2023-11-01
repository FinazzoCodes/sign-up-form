function checkPasswordMatch() {
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("password_confirm");
  const messageElement = document.getElementById("message");

  confirmPasswordField.addEventListener("input", () => {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    if (confirmPassword === "") {
      messageElement.textContent = "";
      confirmPasswordField.classList.remove("password-not-match");
      confirmPasswordField.classList.remove("password-match");
    } else if (password === confirmPassword) {
      messageElement.textContent = "Password match!";
      messageElement.style.color = "#8bc34a";
      confirmPasswordField.classList.add("password-match");
      confirmPasswordField.classList.remove("password-not-match");
    } else {
      messageElement.textContent = "Passwords do not match!";
      messageElement.style.color = "#b92326";
      confirmPasswordField.classList.add("password-not-match");
      confirmPasswordField.classList.remove("password-match");
    }
  });

  passwordField.addEventListener("input", () => {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;
    if (confirmPassword.length != 0 && password != confirmPassword) {
      messageElement.textContent = "Passwords do not match!";
      messageElement.style.color = "#b92326";
      confirmPasswordField.classList.add("password-not-match");
      confirmPasswordField.classList.remove("password-match");
    } else if (password === confirmPassword) {
      messageElement.textContent = "Password match!";
      messageElement.style.color = "#8bc34a";
      confirmPasswordField.classList.add("password-match");
      confirmPasswordField.classList.remove("password-not-match");
    }
  });
}
checkPasswordMatch();
