<?php

include "config.php";

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$fname = $data ['fname'];
$lname = $data ['lname'];
$username = $data ['username'];
$password = $data ['password'];
$address = $data['address'];
$phone_number = $data['phone_number'];

$q = mysqli_query ($con, "INSERT INTO `users` (`fname`, `lname`, `address`, `phone_number`, `username`, `password`,`created`) VALUES ('$fname', '$lname', '$address', $phone_number, '$username', '$password',(now()))");
if ($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con);