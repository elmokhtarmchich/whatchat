<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Set your email address where you want to receive the message
  $to = "elmokhtar.mchich@gmail.com";
  
  // Set email subject
  $subject = "Contact Form Submission";
  
  // Construct email body
  $body = "Email: $email\n\nMessage:\n$message";
  
  // Send email
  if (mail($to, $subject, $body)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message. Please try again later.";
  }
}
?>
