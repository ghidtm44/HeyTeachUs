document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var school_district = document.getElementById('school-district').value;
    var role = document.getElementById('role').value;
  
    // Create the request payload
    var requestPayload = {
      name: name,
      email: email,
      phone: phone,
      school_district: school_district,
      role: role
    };
  
    // Make an HTTP POST request to your AWS Lambda function
    fetch('https://yvrz6ibugm5eb7yivyqbufgnzy0fmewo.lambda-url.us-east-1.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestPayload)
    })
    .then(function(response) {
      if (response.ok) {
        // Registration successful
        window.location.href = 'confirmation.html'; // Redirect to the confirmation page
      } else {
        // Registration failed
        alert('Registration failed. Please try again.');
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });