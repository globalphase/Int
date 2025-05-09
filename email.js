// Initialize EmailJS with your User ID
emailjs.init("pQuGCQxdK9Vg6HacP");

// Function to send the email with OTP
function sendEmail(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  
  const form = document.getElementById('your-form-id'); // The ID of your form

  // Generate a random OTP (6 digits)
  const otp = Math.floor(100000 + Math.random() * 900000); 

  // Prepare the parameters for the email template
  const templateParams = {
    name: form.name.value, 
    email: form.email.value, 
    message: form.message.value, 
    otp: otp,  // Add OTP here
  };

  // Send data to EmailJS using your Service ID and Template ID
  emailjs.send("global_001", "template_tko8t29", templateParams)
    .then(function(response) {
       console.log("Success:", response);
       alert("OTP sent successfully!");
    }, function(error) {
       console.log("Error:", error);
       alert("Failed to send OTP.");
    });
}

// Bind the sendEmail function to form submission
document.getElementById('your-form-id').addEventListener('submit', sendEmail);
