// Validate the email or phone number format before sending
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Validate email or phone format using simple regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const phonePattern = /^\d{10}$/;

  if (email && !email.match(emailPattern)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (phone && !phone.match(phonePattern)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  // If validation passes, submit the form (or you can use AJAX to send it)
  this.submit();  // This will submit the form to the email specified in the action attribute
});
