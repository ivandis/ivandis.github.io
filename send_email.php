<!-- filepath: /Users/smeda/Documents/Guptha/Business/Ivandis/Website/ivandis.github.io/ivandis.github.io/send_email.php -->
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    if ($email) {
        $to = "info@ivandis.com";
        $subject = "New Email Submission";
        $message = "Email submitted: " . $email;
        $headers = "From: webmaster@ivandis.com";

        if (mail($to, $subject, $message, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid email address.";
    }
}
?>