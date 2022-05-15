if (isset($_POST['sending_email_btn'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = date() + ": You've got work to do!";
  $emailSendMessage = $_POST['msg'];
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $message = "<html>
  <head>
  	<title>Wake up! Somebody wants something from you!</title>
  </head>
  <body>
  	<h1>" . $subject . "</h1>
  	<p>".$emailSendMessage."</p>
  </body>
  </html>";
  if (mail('gg.polacek@gmail.com', $subject, $message, $headers)) {
     header("Location:index.html");
     exit();
  }else{
     header("Location:index.html");
     exit();
  }
}