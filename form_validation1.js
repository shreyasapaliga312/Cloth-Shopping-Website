// Attach real-time input event listeners to clear errors as user types
    document.getElementById("name").addEventListener("input", validateName);
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("password").addEventListener("input", validatePassword);
    document.getElementById("password1").addEventListener("input", validateConfirmPassword);

// Main form validation function called on submit
function validation() {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    return isNameValid && isPhoneValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
}

function validateName() {
    const name = document.getElementById("name").value.trim(); 
    //using trim is a good practise as it avoids any leading or trailing white spaces
    const patName = /^[A-Za-z\s]+$/;
    if (name === "") {
        showError("name", "Name is required.");
        return false;
    }
    if (!patName.test(name)) {
        showError("name", "Invalid name! Only letters and spaces are allowed.");
        return false;
    }
    clearError("name");
    return true;
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const patPhone = /^[6-9]\d{9}$/;
    if (phone === "") {
        showError("phone", "Phone number is required.");
        return false;
    }
    if (!patPhone.test(phone)) {
        showError("phone", "Invalid phone number! Must be a 10-digit number starting with 6-9.");
        return false;
    }
    clearError("phone");
    return true;
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const patEmail = /^(\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)$/;
    if (email === "") {
        showError("email", "Email is required.");
        return false;
    }
    if (!patEmail.test(email)) {
        showError("email", "Email must end with @manipal.edu or a subdomain like @anything.manipal.edu");
        return false;
    }
    clearError("email");
    return true;
}

function validatePassword() {
    const password = document.getElementById("password").value.trim();
    const patPassword = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-+]).{8,})$/;
    if (password === "") {
        showError("password", "Password is required.");
        return false;
    }
    if (!patPassword.test(password)) {
        showError("password", "Password must be at least 8 characters, include uppercase, lowercase, digit, and special character.");
        return false;
    }
    clearError("password");
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("password1").value.trim();
    if (confirmPassword === "") {
        showError("password1", "Please confirm your password.");
        return false;
    }
    if (password !== confirmPassword) {
        showError("password1", "Passwords do not match!");
        return false;
    }
    clearError("password1");
    return true;
}

// Helper functions to show and clear error messages
function showError(id, msg) {
    document.getElementById(`${id}-error`).innerHTML = msg;
}

function clearError(id) {
    document.getElementById(`${id}-error`).innerHTML = '';
}
