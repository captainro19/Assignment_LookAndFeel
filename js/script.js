function validateInput(currentInput, nextFieldId) {
    if (currentInput.checkValidity()) {
        document.getElementById(nextFieldId).disabled = false; 
    } else {
        document.getElementById(nextFieldId).disabled = true; 
        currentInput.focus(); 
    }
}

function validateForm() {
    var name = document.getElementById('patientName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address').value;
    var brand = document.getElementById('vaccineBrand').value;
    var time = document.getElementById('timeSlot').value;

    
    if (!name.checkValidity()) {
        name.focus();
        return;
    }
    if (!email.checkValidity()) {
        email.focus();
        return;
    }
    if (!phone.checkValidity()) {
        phone.focus();
        return;
    }
    if (!address) { 
        document.getElementById('address').focus();
        alert('Please enter an address.');
        return;
    }
    if (!brand) { 
        document.getElementById('vaccineBrand').focus();
        alert('Please select a vaccine brand.');
        return;
    }
    if (!time) { 
        document.getElementById('timeSlot').focus();
        alert('Please select a time slot.');
        return;
    }

    
    var result = document.getElementById('result');
    result.style.display = 'block';
    result.innerHTML = `Registration successful for<br>
                        ${name.value}<br>
                        Vaccine: ${brand} at ${time}.`;
}
