<?php
$sendto = 'chokocheeks@gmail.com';
$subject = $_POST["subject"]; //тоже значение, которое использовали в input name
$msg = 'Message: ' .$_POST["message"]. '\r\n' ;
$msg .= 'Phone: ' .$_POST["phone"]. '\r\n';
$msg .= 'Name: ' .$_POST["name"]. '\r\n';

//поменять все кавычки на двойные! используем только одинаковые
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
$headers .= "From: <info@tut.by>\r\n"; // от кого письмо

 @mail($sendto, $subject, $msg, $headers);

 echo 'Message send';
?>