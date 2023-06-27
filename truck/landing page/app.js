
  // Function to handle sign-in form submission
function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform sign-in logic and validate credentials
    if (validateCredentials(username, password)) {
      // Store the user information in the browser's storage
      localStorage.setItem('username', username);
  
      // Redirect to the next page
      window.onload =function(){
        window.location.replace(user.html)
      } 
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  // Function to validate user credentials
  function validateCredentials(username, password) {
    // Perform your authentication logic here
    // Compare the credentials against your database or authentication system
    // Return true if valid, false otherwise
    // Example validation:
    return username === 'john' && password === 'password';
  }
  
  // Get the sign-in form and attach the submit event listener
  const signInForm = document.getElementById('signin-form');
  signInForm.addEventListener('submit', handleSignIn);
  