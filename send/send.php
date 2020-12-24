<?php
$sendto = 'chokocheeks@gmail.com';
$subject = $_POST["subject"]; //тоже значение, которое использовали в input name
$msg = $_POST["message"];


$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
$headers .= "From: <info@tut.by>\r\n"; // от кого письмо

 //@mail($sendto, $subject, $msg, $headers);

 echo 'Message send';
?>