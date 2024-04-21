function validateInput(currentInput, nextFieldId) {
    const errorMessageId = currentInput.id + '-error'; // Corresponding error message span ID
    const errorMessageSpan = document.getElementById(errorMessageId);

    if (currentInput.checkValidity()) {
        document.getElementById(nextFieldId).disabled = false;
        errorMessageSpan.style.display = 'none'; // Hide error message if valid
    } else {
        document.getElementById(nextFieldId).disabled = true;
        if (currentInput.value.length > 0) {
            errorMessageSpan.textContent = currentInput.title; // Set the error message text
            errorMessageSpan.style.display = 'block'; // Show the error message
        } else {
            errorMessageSpan.style.display = 'none'; // Hide if no input
        }
        currentInput.focus();
    }
}


function validateForm() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var brand = document.getElementById('vaccineBrand');
    var time = document.getElementById('timeSlot');
    var registerButton = document.getElementById('registerButton');

    // Check each input field for validity
    if (!firstName.checkValidity()) {
        firstName.focus();
        alert(firstName.title);
        return;
    }
    if (!lastName.checkValidity()) {
        lastName.focus();
        alert(lastName.title);
        return;
    }
    if (!email.checkValidity()) {
        email.focus();
        alert(email.title);
        return;
    }
    if (!phone.checkValidity()) {
        phone.focus();
        alert(phone.title);
        return;
    }
    if (!address.checkValidity()) {
        address.focus();
        alert(address.title);
        return;
    }
    if (!brand.checkValidity()) {
        brand.focus();
        alert(brand.title);
        return;
    }
    if (!time.checkValidity()) {
        time.focus();
        alert(time.title);
        return;
    }

    registerButton.disabled = false; // Enable the button if all validations pass
    displaySuccessMessage(firstName.value, lastName.value, email.value, phone.value, address.value, brand.value, time.value);
}

function displaySuccessMessage(firstName, lastName, email, phone, address, brand, time) {
    var result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `Registration successful!<br>
                        Name: ${firstName} ${lastName}<br>
                        Email: ${email}<br>
                        Phone: ${phone}<br>
                        Address: ${address}<br>
                        Vaccine Brand: ${brand}<br>
                        Time Slot: ${time}.`;
}

// Utility function for soft validation on input fields
function softValidate(currentInput) {
    var nextFieldId = currentInput.getAttribute('data-next');
    if (nextFieldId) {
        document.getElementById(nextFieldId).disabled = !currentInput.checkValidity();
    }
}
