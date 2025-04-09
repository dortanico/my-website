// Contact Form Validation and Email Sending Logic

function sendEmail(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Email validation regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const phonePattern = /^[\d\s\(\)\-+]{7,15}$/;

  // Check if email and phone are valid
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (phone && !phonePattern.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  // Create the email body content
  const emailContent = `
    Name: ${document.getElementById('name').value}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
  `;

  // Send an email (This would normally be a backend email API)
  window.location.href = `mailto:dorta.nico2@gmail.com?subject=Message from ${document.getElementById('
