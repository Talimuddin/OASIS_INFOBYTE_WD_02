document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a response message
    const responseMessage = document.getElementById('response-message');
    
    if (name && email && message) {
        responseMessage.textContent = Thank you, ${name}! Your message has been sent.;
        responseMessage.style.color = 'green';
        
        // Clear the form fields
        document.getElementById('contact-form').reset();
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
        responseMessage.style.color = 'red';
    }
});
