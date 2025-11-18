"use strict";
function validateName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;
    return passwordRegex.test(password);
}
function handleFormSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    let isValid = true;
    if (!validateName(nameInput.value)) {
        isValid = false;
        nameInput.style.border = "2px solid red";
        showError(nameInput, "Name must contain only alphabets.");
    } else {
        nameInput.style.border = "2px solid green";
        clearError(nameInput);
    }
    if (!validateEmail(emailInput.value)) {
        isValid = false;
        emailInput.style.border = "2px solid red";
        showError(emailInput, "Invalid email format.");
    } else {
        emailInput.style.border = "2px solid green";
        clearError(emailInput);
    }   
    if (!validatePhone(phoneInput.value)) {
        isValid = false;
        phoneInput.style.border = "2px solid red";
        showError(phoneInput, "Phone must be exactly 10 digits.");
    } else {
        phoneInput.style.border = "2px solid green";
        clearError(phoneInput);
    }
    if (!validatePassword(passwordInput.value)) {
        isValid = false;
        passwordInput.style.border = "2px solid red";
        showError(passwordInput, "Password must contain 1 uppercase letter, 1 number, and 1 special character.");
    } else {
        passwordInput.style.border = "2px solid green";
        clearError(passwordInput);
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
}
function showError(inputElement, message) {
    let errorElement = inputElement.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains("error-message")) {
        errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
    }
    errorElement.textContent = message;
}
function clearError(inputElement) {
    let errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
        errorElement.textContent = "";
    }
}
document.getElementById("studentForm").addEventListener("submit", handleFormSubmit);