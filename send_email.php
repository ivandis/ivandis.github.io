<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $to = "info@ivandis.com";
    $subject = "New Email Submission";
    $message = "Email ID: " . $email;
    $headers = "From: no-reply@ivandis.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your email has been sent.";
    } else {
        echo "Unable to send your email. Please try again.";
    }
}
?>