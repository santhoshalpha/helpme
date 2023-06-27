document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Check the login credentials
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your authentication logic here
    // For demonstration purposes, let's assume the login is successful
    var isLoginSuccessful = true;

    if (isLoginSuccessful) {
      // Redirect to the next page
      window.location.href = 'user-page.html';
    } else {
      // Handle failed login
      alert('Invalid username or password. Please try again.');
    }
  });