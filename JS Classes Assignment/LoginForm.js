"use strict";
function validateUsername(username) {
    const usernameRegex = /^.{5,}$/;
    return usernameRegex.test(username);
}
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
}
function handleLoginSubmit(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    let isValid = true;
    if (!validateUsername(usernameInput.value)) {
        isValid = false;
        usernameInput.style.border = "2px solid red";
        showError(usernameInput, "Username must be at least 5 characters long.");
    } else {
        usernameInput.style.border = "2px solid green";
        clearError(usernameInput);
    }
    if (!validatePassword(passwordInput.value)) {
        isValid = false;
        passwordInput.style.border = "2px solid red";
        showError(passwordInput, "Password must be at least 8 characters long and include a number, uppercase letter, lowercase letter, and special character.");
    } else {
        passwordInput.style.border = "2px solid green";
        clearError(passwordInput);
    }
    if (isValid) {
        alert("Login successful!");
    }
}