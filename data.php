<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "kennethalbadajao@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        $success = true;
    } else {
        $success = false;
    }
}
?>

<?php if (isset($success) && $success) { ?>
  <div class="alert alert-success" role="alert">
    Thank you for your message! We will get back to you as soon as possible.
  </div>
<?php } else { ?>
  <div class="alert alert-danger" role="alert">
    Oops! Something went wrong. Please try again later.
  </div>
<?php } ?>
