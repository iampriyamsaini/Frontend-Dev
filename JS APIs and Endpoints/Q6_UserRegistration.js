const API_URL = 'http://localhost:3006/users';
const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');
const registerBtn = document.getElementById('register-btn');

function showMessage(text, type) {
    messageDiv.textContent = text;
    messageDiv.className = '';
    messageDiv.classList.add(type);
    messageDiv.style.display = 'block';
}

function hideMessage() {
    messageDiv.style.display = 'none';
}

async function checkEmailDuplicate(email) {
    try {
        const response = await axios.get(`${API_URL}?email=${email}`);
        return response.data.length > 0;
    } catch (error) {
        console.error("Error checking email:", error);
        throw new Error('Failed to check email availability.');
    }
}

async function registerUser(userData) {
    try {
        const response = await axios.post(API_URL, userData);
        console.log("Registration successful:", response.data);
        showMessage('Registration Successful!', 'success');
        form.reset();
    } catch (error) {
        console.error("Error during registration:", error);
        showMessage('Registration failed. Server error.', 'error');
    }
}

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    hideMessage();
    registerBtn.disabled = true;
    registerBtn.textContent = 'Processing...';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {
        const isDuplicate = await checkEmailDuplicate(email);

        if (isDuplicate) {
            showMessage('Email already registered.', 'error');
        } else {
            const userData = { name, email, password };
            await registerUser(userData);
        }
    } catch (error) {
        showMessage(error.message || 'An unexpected error occurred.', 'error');
    } finally {
        registerBtn.disabled = false;
        registerBtn.textContent = 'Register';
    }
});