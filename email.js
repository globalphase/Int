// Initialize EmailJS with your User ID
emailjs.init("pQuGCQxdK9Vg6HacP");

// Function to send the email
function sendEmail(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  
  const form = document.getElementById('your-form-id'); // The ID of your form
  
  // Send data to EmailJS using your Service ID and Template ID
  emailjs.sendForm("global_001", "template_tko8t29", form)
    .then(function(response) {
       console.log("Success:", response);
       alert("Email sent successfully!");
    }, function(error) {
       console.log("Error:", error);
       alert("Failed to send email.");
    });
}

// Bind the sendEmail function to form submission
document.getElementById('your-form-id').addEventListener('submit', sendEmail);