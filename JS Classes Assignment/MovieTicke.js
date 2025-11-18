"use strict";
function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateSeats(seats) {
    const seatsRegex = /^(?:[1-9]|10)$/;
    return seatsRegex.test(seats);
}
function handleBookingSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const seatsInput = document.getElementById("seats");
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
    if (!validateSeats(seatsInput.value)) {
        isValid = false;
        seatsInput.style.border = "2px solid red";
        showError(seatsInput, "Seats must be between 1 and 10.");
    } else {
        seatsInput.style.border = "2px solid green";
        clearError(seatsInput);
    }
    if (isValid) {
        const bookingInfo = {
            name: nameInput.value,
            email: emailInput.value,
            seats: parseInt(seatsInput.value, 10)
        };
        displayTicketDetails(bookingInfo);
    }
}
